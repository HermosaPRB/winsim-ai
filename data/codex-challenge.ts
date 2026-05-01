import rawProjects from "@/projects.json";
import rawProjectEvidence from "@/data/project-evidence.json";
import rawArtifactReviews from "@/data/project-artifact-reviews.json";
import rawSeededEvidence from "@/data/project-evidence-seeded.json";
import { z } from "zod";
import type { Project } from "@/data/projects";
import {
  rubricEvidenceArraySchema,
  scoreProjectArtifact,
  type RubricReasoning,
  type ScoringSource,
  type UncertaintyBand
} from "@/lib/codex-scoring";
import { artifactReviewArraySchema, type ArtifactReview } from "@/lib/artifact-review";

const handshakeReactionSchema = z.object({
  reactionType: z.string(),
  allUsersReactionCount: z.number().optional()
});

const handshakeProjectSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  creationSource: z.string().optional(),
  viewCount: z.number().optional(),
  reactions: z.array(handshakeReactionSchema).optional(),
  description: z.unknown().optional(),
  externalUrl: z.string().nullable().optional(),
  previewImageUrl: z.string().nullable().optional(),
  externalUrlOpenGraphData: z
    .object({
      title: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      imageUrl: z.string().nullable().optional()
    })
    .nullable()
    .optional(),
  user: z
    .object({
      firstName: z.string().nullable().optional(),
      lastName: z.string().nullable().optional(),
      userProfilePhotoUrl: z.string().nullable().optional(),
      institution: z
        .object({
          name: z.string().nullable().optional()
        })
        .nullable()
        .optional()
    })
    .nullable()
    .optional()
});

const handshakeProjectArraySchema = z.array(handshakeProjectSchema);

type HandshakeProject = z.infer<typeof handshakeProjectSchema>;

export type ChallengeSource = "CODEX" | "LEVEL_UP" | "UNKNOWN";

export type CodexChallengeProjectRecord = {
  id: string;
  source: ChallengeSource;
  views: number;
  likes: number;
  hasPreview: boolean;
  hasExternalUrl: boolean;
  previewImageUrl: string | null;
  externalUrl: string | null;
  builderName: string;
  builderInstitution: string | null;
  builderPhotoUrl: string | null;
  scoringSource: ScoringSource;
  scoringNotes: string | null;
  rubricReasoning: RubricReasoning;
  uncertaintyScore: number;
  uncertaintyBand: UncertaintyBand;
  uncertaintyReasons: string[];
  artifactReview: ArtifactReview | null;
  project: Project;
};

export type CodexChallengeMeta = {
  submissionCount: number;
  sourceCounts: Record<ChallengeSource, number>;
  evidenceCoverage: {
    manualScores: number;
    manualEvidence: number;
    seededEvidence: number;
    inferred: number;
  };
  artifactReviewCoverage: {
    reviewed: number;
    healthy: number;
    failed: number;
  };
  uncertaintyCoverage: {
    low: number;
    medium: number;
    high: number;
  };
  topViewed: {
    id: string;
    name: string;
    views: number;
    likes: number;
    source: ChallengeSource;
  }[];
  topLiked: {
    id: string;
    name: string;
    views: number;
    likes: number;
    source: ChallengeSource;
  }[];
};

const parsedProjects = handshakeProjectArraySchema.parse(rawProjects);
const parsedEvidence = rubricEvidenceArraySchema.parse(rawProjectEvidence);
const parsedArtifactReviews = artifactReviewArraySchema.parse(rawArtifactReviews);
const parsedSeededEvidence = rubricEvidenceArraySchema.parse(rawSeededEvidence);
const evidenceById = new Map(parsedEvidence.map((entry) => [entry.id, entry]));
const artifactReviewById = new Map(parsedArtifactReviews.map((entry) => [entry.id, entry]));
const seededEvidenceById = new Map(parsedSeededEvidence.map((entry) => [entry.id, entry]));

export const codexChallengeProjectRecords: CodexChallengeProjectRecord[] = parsedProjects.map(
  (entry) => {
    const projectId = String(entry.id);
    const scored = scoreProjectArtifact({
      id: projectId,
      name: entry.name,
      description: cleanDescription(entry.description),
      externalUrl: entry.externalUrl ?? null,
      previewImageUrl: entry.previewImageUrl ?? null,
      openGraphImageUrl: entry.externalUrlOpenGraphData?.imageUrl ?? null,
      manualEvidence: evidenceById.get(projectId) ?? null,
      seededEvidence: seededEvidenceById.get(projectId) ?? null,
      artifactReview: artifactReviewById.get(projectId) ?? null
    });

    return {
      id: projectId,
      source: getChallengeSource(entry.creationSource),
      views: entry.viewCount ?? 0,
      likes: getLikeCount(entry),
      hasPreview: Boolean(entry.previewImageUrl ?? entry.externalUrlOpenGraphData?.imageUrl),
      hasExternalUrl: Boolean(entry.externalUrl),
      previewImageUrl: entry.previewImageUrl ?? entry.externalUrlOpenGraphData?.imageUrl ?? null,
      externalUrl: entry.externalUrl ?? null,
      builderName: getBuilderName(entry),
      builderInstitution: entry.user?.institution?.name ?? null,
      builderPhotoUrl: entry.user?.userProfilePhotoUrl ?? null,
      scoringSource: scored.evidenceSource,
      scoringNotes: scored.evidenceNotes,
      rubricReasoning: scored.reasoning,
      uncertaintyScore: scored.uncertaintyScore,
      uncertaintyBand: scored.uncertaintyBand,
      uncertaintyReasons: scored.uncertaintyReasons,
      artifactReview: artifactReviewById.get(projectId) ?? null,
      project: {
        id: projectId,
        name: entry.name.trim(),
        oneLineDescription: extractOneLineDescription(cleanDescription(entry.description), entry.name),
        fullDescription:
          cleanDescription(entry.description) || `${entry.name} Codex challenge submission.`,
        scores: scored.scores
      }
    };
  }
);

export const codexChallengeProjects: Project[] = codexChallengeProjectRecords.map(
  (record) => record.project
);

export const codexChallengeMeta: CodexChallengeMeta = {
  submissionCount: codexChallengeProjectRecords.length,
  sourceCounts: codexChallengeProjectRecords.reduce(
    (counts, record) => {
      counts[record.source] += 1;
      return counts;
    },
    {
      CODEX: 0,
      LEVEL_UP: 0,
      UNKNOWN: 0
    } satisfies Record<ChallengeSource, number>
  ),
  evidenceCoverage: codexChallengeProjectRecords.reduce(
    (coverage, record) => {
      if (record.scoringSource === "manual_scores") {
        coverage.manualScores += 1;
      } else if (record.scoringSource === "manual_evidence") {
        coverage.manualEvidence += 1;
      } else if (record.scoringSource === "seeded_evidence") {
        coverage.seededEvidence += 1;
      } else {
        coverage.inferred += 1;
      }

      return coverage;
    },
    {
      manualScores: 0,
      manualEvidence: 0,
      seededEvidence: 0,
      inferred: 0
    }
  ),
  artifactReviewCoverage: codexChallengeProjectRecords.reduce(
    (coverage, record) => {
      if (!record.artifactReview) {
        return coverage;
      }

      coverage.reviewed += 1;
      if (record.artifactReview.fetchStatus === "ok") {
        coverage.healthy += 1;
      } else {
        coverage.failed += 1;
      }

      return coverage;
    },
    {
      reviewed: 0,
      healthy: 0,
      failed: 0
    }
  ),
  uncertaintyCoverage: codexChallengeProjectRecords.reduce(
    (coverage, record) => {
      coverage[record.uncertaintyBand] += 1;
      return coverage;
    },
    {
      low: 0,
      medium: 0,
      high: 0
    }
  ),
  topViewed: [...codexChallengeProjectRecords]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
    .map((record) => ({
      id: record.id,
      name: record.project.name,
      views: record.views,
      likes: record.likes,
      source: record.source
    })),
  topLiked: [...codexChallengeProjectRecords]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 5)
    .map((record) => ({
      id: record.id,
      name: record.project.name,
      views: record.views,
      likes: record.likes,
      source: record.source
    }))
};

function getLikeCount(project: HandshakeProject) {
  return (
    project.reactions?.reduce(
      (max, reaction) => Math.max(max, reaction.allUsersReactionCount ?? 0),
      0
    ) ?? 0
  );
}

function getChallengeSource(source?: string): ChallengeSource {
  if (source === "CODEX" || source === "LEVEL_UP") {
    return source;
  }

  return "UNKNOWN";
}

function getBuilderName(project: HandshakeProject) {
  const first = project.user?.firstName?.trim() ?? "";
  const last = project.user?.lastName?.trim() ?? "";
  const fullName = `${first} ${last}`.trim();

  return fullName || "Unknown Builder";
}

function cleanDescription(description?: unknown) {
  if (typeof description !== "string") {
    return "";
  }

  return description.replace(/\s+/g, " ").trim();
}

function extractOneLineDescription(description: string, fallbackName: string) {
  if (!description) {
    return `${fallbackName} Codex challenge submission.`;
  }

  const firstSentence = description.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (firstSentence && firstSentence.length <= 150) {
    return firstSentence;
  }

  return `${description.slice(0, 147).trimEnd()}...`;
}
