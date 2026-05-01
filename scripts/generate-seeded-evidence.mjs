import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const LIMIT = Number(process.env.SEEDED_EVIDENCE_LIMIT ?? Number.MAX_SAFE_INTEGER);

const projects = JSON.parse(await readFile(path.join(root, "projects.json"), "utf8"));
const reviews = JSON.parse(await readFile(path.join(root, "data", "project-artifact-reviews.json"), "utf8"));
const manualEvidence = JSON.parse(await readFile(path.join(root, "data", "project-evidence.json"), "utf8"));

const manualIds = new Set(manualEvidence.map((entry) => entry.id));
const reviewById = new Map(reviews.map((entry) => [entry.id, entry]));

const PRACTICAL = ["business", "customer", "workflow", "education", "health", "meeting", "analysis", "booking", "support", "marketplace"];
const TARGET = ["students", "teachers", "developers", "engineers", "teams", "customers", "businesses", "creators", "users"];
const NOVELTY = ["immersive", "3d", "voice", "multimodal", "browser-native", "local-first", "reinforcement learning", "audio", "simulation", "game"];
const FEATURES = ["dashboard", "editor", "studio", "pipeline", "search", "chat", "agent", "export", "import", "analytics", "api", "simulation"];
const CLARITY = ["built", "created", "designed", "because", "includes", "features", "using", "so that"];

const candidates = projects.map((project, index) => {
  const id = String(project.id);
  const review = reviewById.get(id);
  const description = typeof project.description === "string" ? project.description.trim() : "";
  const lower = description.toLowerCase();
  const wordCount = description ? description.split(/\s+/).length : 0;
  const rankPressure = index < 20 ? 34 : index < 60 ? 22 : index < 120 ? 10 : 0;
  const reviewPenalty = !review ? 24 : review.fetchStatus !== "ok" ? 20 : review.loginWallLikely ? 12 : 0;
  const descPenalty = wordCount < 45 ? 14 : wordCount < 85 ? 7 : 0;

  return {
    id,
    project,
    review,
    description,
    lower,
    priority: rankPressure + reviewPenalty + descPenalty + (manualIds.has(id) ? -1000 : 0)
  };
});

const output = candidates
  .filter((candidate) => !manualIds.has(candidate.id))
  .sort((left, right) => right.priority - left.priority)
  .slice(0, LIMIT)
  .map((candidate) => {
    const problemClarity = scale(
      countHits(candidate.lower, PRACTICAL) + countHits(candidate.lower, TARGET) + (candidate.description.includes("because") ? 1 : 0),
      0,
      6
    );
    const targetUserClarity = scale(countHits(candidate.lower, TARGET), 0, 3);
    const practicalValue = scale(countHits(candidate.lower, PRACTICAL) + countHits(candidate.lower, ["save", "reduce", "improve", "book", "plan"]), 0, 6);
    const featureCompleteness = scale(
      countHits(candidate.lower, FEATURES) +
        (candidate.review?.fetchStatus === "ok" ? 2 : 0) +
        ((candidate.review?.contentLength ?? 0) > 5000 ? 1 : 0),
      0,
      8
    );
    const technicalPolish = scale(
      (candidate.review?.fetchStatus === "ok" ? 2 : 0) +
        (candidate.review?.hasStructuredMetadata ? 1 : 0) +
        (candidate.review?.titleMatchesProject ? 1 : 0) +
        (candidate.review?.errorPageLikely ? -2 : 0),
      -2,
      4
    );
    const novelty = scale(countHits(candidate.lower, NOVELTY), 0, 4);
    const communicationQuality = scale(
      countHits(candidate.lower, CLARITY) + (wordCountScore(candidate.description) ? 2 : 0),
      0,
      6
    );
    const uxQuality = scale(
      (candidate.project.previewImageUrl ? 1 : 0) +
        (candidate.review?.fetchStatus === "ok" ? 2 : 0) +
        ((candidate.review?.appKeywordCount ?? 0) > 0 ? 1 : 0) +
        (candidate.review?.loginWallLikely ? -1 : 0),
      -1,
      4
    );
    const demoQuality = scale(
      (candidate.review?.fetchStatus === "ok" ? 2 : 0) +
        (candidate.project.previewImageUrl ? 1 : 0) +
        (candidate.review?.titleMatchesProject ? 1 : 0),
      0,
      4
    );

    return {
      id: candidate.id,
      evidence: {
        problemClarity,
        targetUserClarity,
        practicalValue,
        featureCompleteness,
        technicalPolish,
        novelty,
        communicationQuality,
        uxQuality,
        demoQuality
      },
      notes: `Seeded evidence generated from description and live-site review for ${candidate.project.name}. Human verification recommended.`
    };
  });

await writeFile(
  path.join(root, "data", "project-evidence-seeded.json"),
  `${JSON.stringify(output, null, 2)}\n`,
  "utf8"
);

console.log(JSON.stringify({ generated: output.length }, null, 2));

function countHits(text, keywords) {
  return keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0);
}

function scale(value, min, max) {
  const normalized = (value - min) / Math.max(max - min, 1);
  return Math.max(1, Math.min(5, Math.round(normalized * 4 + 1)));
}

function wordCountScore(description) {
  const words = description ? description.split(/\s+/).length : 0;
  return words >= 45 && words <= 220;
}
