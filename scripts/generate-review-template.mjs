import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const OUTPUT_LIMIT = Number(process.env.REVIEW_TEMPLATE_LIMIT ?? 50);

const projects = JSON.parse(await readFile(path.join(root, "projects.json"), "utf8"));
const evidence = JSON.parse(await readFile(path.join(root, "data", "project-evidence.json"), "utf8"));
const reviews = JSON.parse(await readFile(path.join(root, "data", "project-artifact-reviews.json"), "utf8"));

const evidenceIds = new Set(evidence.map((entry) => entry.id));
const reviewById = new Map(reviews.map((review) => [review.id, review]));

const candidates = projects.map((project, index) => {
  const id = String(project.id);
  const review = reviewById.get(id);
  const rankPressure = index < 20 ? 34 : index < 60 ? 22 : index < 120 ? 10 : 0;
  const reviewPenalty =
    !review ? 24 : review.fetchStatus !== "ok" ? 20 : review.loginWallLikely ? 12 : 0;
  const metadataPenalty =
    !review?.hasStructuredMetadata ? 8 : 0;
  const descriptionLength = typeof project.description === "string" ? project.description.trim().split(/\s+/).length : 0;
  const descriptionPenalty = descriptionLength < 45 ? 14 : descriptionLength < 85 ? 7 : 0;

  return {
    id,
    name: project.name,
    priority:
      rankPressure +
      reviewPenalty +
      metadataPenalty +
      descriptionPenalty +
      (evidenceIds.has(id) ? -1000 : 0),
    project,
    review
  };
});

const template = candidates
  .filter((candidate) => !evidenceIds.has(candidate.id))
  .sort((left, right) => right.priority - left.priority)
  .slice(0, OUTPUT_LIMIT)
  .map((candidate) => ({
    id: candidate.id,
    scores: {
      usefulness: null,
      execution: null,
      creativity: null,
      clarity: null,
      usability: null
    },
    notes: `Review priority ${candidate.priority}. ${
      candidate.review
        ? `Artifact status: ${candidate.review.fetchStatus}${candidate.review.statusCode ? ` (${candidate.review.statusCode})` : ""}.`
        : "No artifact review present."
    } ${candidate.project.name}`
  }));

const outputPath = path.join(root, "data", "project-evidence-template.json");
await writeFile(outputPath, `${JSON.stringify(template, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ generated: template.length, outputPath }, null, 2));
