import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { mockProjects } from "@/data/projects";
import staticRankings from "@/data/rankings.json";

export const maxDuration = 30;

const TOP_N = 50;
const MAX_BODY_BYTES = 32 * 1024;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_CHARS = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const projectById = new Map(mockProjects.map((p) => [p.id, p]));
const rankedTop = staticRankings.rankings
  .slice(0, TOP_N)
  .map((r) => ({ ranking: r, project: projectById.get(r.id) }))
  .filter(
    (entry): entry is { ranking: typeof entry.ranking; project: NonNullable<typeof entry.project> } =>
      Boolean(entry.project)
  );

const leaderboardContext = rankedTop
  .map(({ ranking, project }) => {
    const s = project.scores;
    return `#${ranking.rank} ${project.name} — ${project.oneLineDescription}
  Win probability: ${ranking.winProbability.toFixed(1)}% · Avg rank: ${ranking.averageRank.toFixed(2)} · Top-3 rate: ${ranking.topThreeRate.toFixed(1)}%
  Scores (out of 100): usefulness ${s.usefulness}, execution ${s.execution}, creativity ${s.creativity}, clarity ${s.clarity}, usability ${s.usability}
  Judge's note: ${project.judgesNote || "none"}`;
  })
  .join("\n\n");

const totalProjects = mockProjects.length;
const totalSimulated = staticRankings.rankings.length;

type RateRecord = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateRecord>();

function clientKey(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(key: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const record = rateBuckets.get(key);
  if (!record || record.resetAt < now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterSec: Math.ceil((record.resetAt - now) / 1000) };
  }
  record.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

if (rateBuckets.size > 5000) {
  // Light memory cap; clear old entries opportunistically.
  for (const [key, record] of rateBuckets) {
    if (record.resetAt < Date.now()) rateBuckets.delete(key);
  }
}

function sanitizeMessages(input: unknown): { role: "user" | "assistant"; content: string }[] {
  if (!Array.isArray(input)) return [];
  const cleaned: { role: "user" | "assistant"; content: string }[] = [];
  for (const m of input.slice(-MAX_MESSAGES)) {
    if (!m || typeof m !== "object") continue;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    cleaned.push({ role, content: content.slice(0, MAX_MESSAGE_CHARS) });
  }
  return cleaned;
}

export async function POST(req: Request) {
  const ip = clientKey(req);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded", retryAfter: limit.retryAfterSec }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(limit.retryAfterSec)
        }
      }
    );
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return new Response(JSON.stringify({ error: "Payload too large" }), {
      status: 413,
      headers: { "Content-Type": "application/json" }
    });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const messages = sanitizeMessages((payload as { messages?: unknown })?.messages);
  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: "No valid messages provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const systemPrompt = `You are the AI Showcase Judge for WinSim AI, a simulator for the Codex × Handshake hackathon. You help human judges explore and understand the simulated competition results.

The competition has ${totalProjects} total submissions; ${totalSimulated} were simulated through a 3-judge panel over ${staticRankings.simulations} runs (seed ${staticRankings.seed}). The leaderboard below shows the TOP ${rankedTop.length} projects ranked by win probability. If the user asks about a project not in this list, say so plainly — do not invent details.

Be concise. Use compact markdown (bold names, bullet lists when listing) but no H1/H2 headers. When asked to compare projects, lead with the answer in one sentence, then give the supporting numbers.

=== TOP ${rankedTop.length} BY WIN PROBABILITY ===
${leaderboardContext}`;

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages,
    maxOutputTokens: 600
  });

  return result.toTextStreamResponse();
}
