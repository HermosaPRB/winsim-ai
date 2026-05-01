import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(root, ".env.local") });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const MODEL = "gpt-4o";
const BATCH_SIZE = 8;
const INTER_BATCH_DELAY_MS = 800;
const TEMPERATURE = 0.2;

const RUBRIC_SYSTEM_PROMPT = `You are an experienced AI Showcase Judge for a real hackathon, modeled on a strict but fair human reviewer. You evaluate every project on the same 5-dimensional rubric using all available evidence: the writeup, the live-site signals, and metadata.

Your job is calibrated, defensible scoring — not generosity. The field is large (~577 projects). Most submissions are average; the top 10% are clearly differentiated; the bottom 10% are clearly weak. Your distribution should reflect that. Avoid clustering scores in the 80s. Use the full range when warranted.

=== SCORE BANDS (apply to every dimension) ===
- 95-100: Exceptional. Among the strongest 1-2% in the field. Reserved for projects where this dimension is a clear, evidenced standout.
- 88-94: Strong. Top ~10%. Multiple positive signals, no obvious gaps.
- 78-87: Solid. Above average. Most signals present with one or two soft spots.
- 68-77: Adequate. Average submission. Mixed signals; competent but not differentiated.
- 55-67: Weak. Below average. Missing core signals, vague framing, or unverified claims.
- 40-54: Poor. Significant deficiencies. Sparse description, no live artifact, or contradictory evidence.
- Below 40: Reserve for clearly broken, empty, or non-functional submissions.

=== DIMENSION DEFINITIONS ===
- usefulness (weight 25%): Does it solve a real problem for a real, named user? Reward concrete target users (students, teachers, businesses, developers, etc.), practical domain framing, and outcome verbs ("book", "analyze", "track", "diagnose"). Penalize vague hobby projects, abstract claims, or fan-art-style submissions where no user is identified.
- execution (weight 25%): How shippable is this NOW, based on observable evidence? A live URL that returns 200 with a matching page title and meta description is the strongest possible signal — score in the 85+ range. A submission with no live URL, or a live URL that errors / hits a login wall, should generally not exceed the mid-70s on this dimension regardless of how good the writeup is. Reward production/full-stack/deployed/tested language and concrete metrics. The artifact review is your most direct evidence.
- creativity (weight 20%): Does the project bring genuine novelty or just rehash a common pattern? Reward novel modalities (3D, voice, multimodal, immersive, local-first, procedural, real-time, browser-native), unusual problem framings, or distinctive product surfaces. Penalize "yet another GPT wrapper" or "yet another todo app" without a unique angle. Two or more distinct modalities is a strong signal.
- clarity (weight 15%): Could a busy judge understand what was built and why in 30 seconds? Reward 100-180 word descriptions with clear first sentences, structured paragraphs, and explanatory framing. Penalize one-liners, jargon walls, missing one-line summaries, or descriptions where you cannot determine what the project does.
- usability (weight 15%): Could a real user actually USE this? A working live URL with visible UI keywords on the page (counted in the artifact review) is strong evidence. Login walls, error pages, or missing live products are major penalties — usability cannot exceed ~65 if there is no usable artifact. Reward responsive/onboarding/dashboard/interface language and signs of a real interface.

=== HOW TO USE THE ARTIFACT REVIEW ===
You will be given an "Artifact Review" block summarizing a real fetch of the live URL (if any). Use it as your primary source of truth for execution and usability:
- fetchStatus=ok + statusCode 200 + titleMatchesProject=true → strong execution signal
- errorPageLikely=true → cap execution at 60 and usability at 55
- loginWallLikely=true → cap usability at 65; execution can still be strong if other signals are present
- hasStructuredMetadata=true (real og: tags, meta description) → polish signal
- appKeywordCount > 3 → real interface present
- contentLength > 2000 → not a stub page
- No live URL at all → execution cannot exceed 75; usability cannot exceed 65

=== OUTPUT REQUIREMENTS ===
Return a JSON object with:
- "scores": { usefulness, execution, creativity, clarity, usability } — each an integer in [1, 100]
- "judgesNote": 2-3 sentences. Lead with the strongest dimension and why. Then call out the weakest dimension with the specific evidence (or lack of evidence). Be specific about the artifact review when it bears on the score.

Be honest. A weak project should get weak scores. The leaderboard depends on you NOT clustering everyone at 85.`;

function summarizeArtifactReview(review) {
  if (!review) return "No live-site review available.";
  if (review.fetchStatus !== "ok") {
    return `Live URL: ${review.url || "(unknown)"}; fetch FAILED (status: ${review.fetchStatus}${review.statusCode ? `, HTTP ${review.statusCode}` : ""}). Treat as no working artifact.`;
  }
  const parts = [
    `Live URL: ${review.url}`,
    `HTTP ${review.statusCode}`,
    `Page title: "${review.title || "(none)"}"`,
    `Title matches project: ${review.titleMatchesProject ? "yes" : "no"}`,
    `Meta description: ${review.metaDescription ? `"${review.metaDescription.slice(0, 200)}"` : "none"}`,
    `OG image present: ${review.ogImageUrl ? "yes" : "no"}`,
    `Structured metadata: ${review.hasStructuredMetadata ? "yes" : "no"}`,
    `Page content length: ${review.contentLength || 0} chars`,
    `App/UI keyword count on page: ${review.appKeywordCount || 0}`,
    `Login wall likely: ${review.loginWallLikely ? "YES" : "no"}`,
    `Error page likely: ${review.errorPageLikely ? "YES" : "no"}`
  ];
  return parts.join("\n");
}

async function callJudgeWithRetry(payload, projectName, maxAttempts = 5) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await openai.chat.completions.create(payload);
    } catch (err) {
      lastError = err;
      const status = err?.status ?? err?.response?.status;
      const retriable = status === 429 || (typeof status === "number" && status >= 500);
      if (!retriable || attempt === maxAttempts) throw err;
      const backoffMs = 800 * 2 ** (attempt - 1) + Math.floor(Math.random() * 400);
      console.warn(`Retry ${attempt}/${maxAttempts - 1} for ${projectName} after ${status}: waiting ${backoffMs}ms`);
      await new Promise((r) => setTimeout(r, backoffMs));
    }
  }
  throw lastError;
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in .env.local");
    process.exit(1);
  }

  const projectsRaw = await fs.readFile(path.join(root, "projects.json"), "utf8");
  const rawProjects = JSON.parse(projectsRaw);

  let artifactReviews = [];
  try {
    const artifactRaw = await fs.readFile(path.join(root, "data", "project-artifact-reviews.json"), "utf8");
    artifactReviews = JSON.parse(artifactRaw);
  } catch {
    console.warn("No artifact reviews found; judge will have no live-site context.");
  }
  const artifactById = new Map(artifactReviews.map((r) => [r.id, r]));

  const totalProjects = rawProjects.length;
  console.log(`Judging ${totalProjects} projects with ${MODEL}; batch size ${BATCH_SIZE}.`);
  const startTs = Date.now();
  const scoredProjects = [];
  let inputTokens = 0;
  let outputTokens = 0;
  let failures = 0;

  for (let i = 0; i < totalProjects; i += BATCH_SIZE) {
    const batch = rawProjects.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(totalProjects / BATCH_SIZE);
    const elapsed = Math.round((Date.now() - startTs) / 1000);
    console.log(`Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, totalProjects)} of ${totalProjects}, ${elapsed}s elapsed)...`);

    const promises = batch.map(async (rawProject) => {
      const desc = rawProject.description || "No description provided.";
      const externalUrl = rawProject.external_url || null;
      const previewImageUrl = rawProject.images && rawProject.images.length > 0 ? rawProject.images[0].url : null;
      const review = artifactById.get(String(rawProject.id)) || null;

      const userMessage = `Project Name: ${rawProject.name}
One Line: ${rawProject.one_line_description || "(none)"}
Description: ${desc}
External URL claimed: ${externalUrl || "(none)"}
Preview image: ${previewImageUrl ? "present" : "absent"}

=== Artifact Review ===
${summarizeArtifactReview(review)}`;

      try {
        const response = await callJudgeWithRetry(
          {
            model: MODEL,
            temperature: TEMPERATURE,
            messages: [
              { role: "system", content: RUBRIC_SYSTEM_PROMPT },
              { role: "user", content: userMessage }
            ],
            response_format: {
              type: "json_schema",
              json_schema: {
                name: "project_evaluation",
                schema: {
                  type: "object",
                  properties: {
                    scores: {
                      type: "object",
                      properties: {
                        usefulness: { type: "integer", minimum: 1, maximum: 100 },
                        execution: { type: "integer", minimum: 1, maximum: 100 },
                        creativity: { type: "integer", minimum: 1, maximum: 100 },
                        clarity: { type: "integer", minimum: 1, maximum: 100 },
                        usability: { type: "integer", minimum: 1, maximum: 100 }
                      },
                      required: ["usefulness", "execution", "creativity", "clarity", "usability"],
                      additionalProperties: false
                    },
                    judgesNote: { type: "string" }
                  },
                  required: ["scores", "judgesNote"],
                  additionalProperties: false
                },
                strict: true
              }
            }
          },
          rawProject.name
        );

        if (response.usage) {
          inputTokens += response.usage.prompt_tokens || 0;
          outputTokens += response.usage.completion_tokens || 0;
        }

        const result = JSON.parse(response.choices[0].message.content);
        return {
          id: String(rawProject.id),
          name: rawProject.name,
          oneLineDescription: rawProject.one_line_description || rawProject.name,
          fullDescription: typeof desc === "string" ? desc.trim().replace(/\s+/g, " ") : "",
          externalUrl,
          previewImageUrl,
          scores: result.scores,
          judgesNote: result.judgesNote
        };
      } catch (err) {
        failures += 1;
        console.error(`FAILED ${rawProject.name}: ${err.message}`);
        return {
          id: String(rawProject.id),
          name: rawProject.name,
          oneLineDescription: rawProject.one_line_description || rawProject.name,
          fullDescription: typeof desc === "string" ? desc.trim().replace(/\s+/g, " ") : "",
          externalUrl,
          previewImageUrl,
          scores: { usefulness: 50, execution: 50, creativity: 50, clarity: 50, usability: 50 },
          judgesNote: "AI evaluation failed after retries; scores set to neutral 50/100. Re-run the judge to replace."
        };
      }
    });

    const results = await Promise.all(promises);
    scoredProjects.push(...results);

    if (i + BATCH_SIZE < totalProjects && INTER_BATCH_DELAY_MS > 0) {
      await new Promise((r) => setTimeout(r, INTER_BATCH_DELAY_MS));
    }
  }

  const totalSeconds = Math.round((Date.now() - startTs) / 1000);
  const inCost = (inputTokens / 1_000_000) * 2.5;
  const outCost = (outputTokens / 1_000_000) * 10.0;
  console.log("");
  console.log(`Completed ${scoredProjects.length} projects in ${totalSeconds}s.`);
  console.log(`Failures: ${failures}.`);
  console.log(`Tokens: ${inputTokens.toLocaleString()} input, ${outputTokens.toLocaleString()} output.`);
  console.log(`Estimated cost: $${(inCost + outCost).toFixed(2)} (input $${inCost.toFixed(2)} + output $${outCost.toFixed(2)}).`);

  const fileContent = `export type Project = {
  id: string;
  name: string;
  oneLineDescription: string;
  fullDescription: string;
  externalUrl?: string | null;
  previewImageUrl?: string | null;
  scores: {
    usefulness: number;
    execution: number;
    creativity: number;
    clarity: number;
    usability: number;
  };
  judgesNote?: string;
};

export const mockProjects: Project[] = ${JSON.stringify(scoredProjects, null, 2)};
`;

  await fs.writeFile(path.join(root, "data", "projects.ts"), fileContent, "utf8");
  await fs.writeFile(
    path.join(root, "data", "projects.json"),
    JSON.stringify(scoredProjects, null, 2),
    "utf8"
  );
  console.log(`Wrote data/projects.ts and data/projects.json.`);
}

main().catch(console.error);
