import { z } from "zod";
import type { Project } from "@/data/projects";
import type { ArtifactReview } from "@/lib/artifact-review";

const RUBRIC_KEYS = [
  "usefulness",
  "execution",
  "creativity",
  "clarity",
  "usability"
] as const;

const PRACTICAL_PROBLEM_KEYWORDS = [
  "business",
  "customer",
  "workflow",
  "team",
  "education",
  "health",
  "meeting",
  "analysis",
  "booking",
  "planning",
  "support",
  "productivity",
  "research",
  "marketplace",
  "conservation"
] as const;

const TARGET_USER_KEYWORDS = [
  "students",
  "teachers",
  "developers",
  "engineers",
  "designers",
  "businesses",
  "customers",
  "teams",
  "creators",
  "players",
  "users"
] as const;

const OUTCOME_KEYWORDS = [
  "book",
  "generate",
  "analyze",
  "simulate",
  "plan",
  "monitor",
  "track",
  "separate",
  "compose",
  "learn",
  "train",
  "debug",
  "review"
] as const;

const FEATURE_KEYWORDS = [
  "dashboard",
  "editor",
  "studio",
  "pipeline",
  "search",
  "chat",
  "agent",
  "export",
  "import",
  "analytics",
  "api",
  "simulation",
  "voice",
  "3d",
  "multiplayer",
  "browser-native",
  "real-time"
] as const;

const EXECUTION_KEYWORDS = [
  "full-stack",
  "production",
  "tested",
  "validated",
  "optimized",
  "deployed",
  "architecture",
  "infrastructure",
  "pipeline",
  "integration",
  "checkpoint",
  "recovery"
] as const;

const NOVELTY_KEYWORDS = [
  "immersive",
  "3d",
  "browser-native",
  "voice",
  "multimodal",
  "reinforcement learning",
  "transformer",
  "procedural",
  "local-first",
  "audio",
  "solar system",
  "horror",
  "arcade"
] as const;

const UI_USABILITY_KEYWORDS = [
  "interface",
  "dashboard",
  "guide",
  "onboarding",
  "navigation",
  "responsive",
  "web app",
  "website",
  "browser",
  "local-first",
  "real-time"
] as const;

const CLARITY_KEYWORDS = [
  "built",
  "created",
  "designed",
  "because",
  "includes",
  "features",
  "using",
  "so that"
] as const;

const evidenceScaleSchema = z.number().int().min(1).max(5);

export const rubricEvidenceSchema = z.object({
  id: z.string(),
  scores: z
    .object({
      usefulness: z.number().min(0).max(100).optional(),
      execution: z.number().min(0).max(100).optional(),
      creativity: z.number().min(0).max(100).optional(),
      clarity: z.number().min(0).max(100).optional(),
      usability: z.number().min(0).max(100).optional()
    })
    .optional(),
  evidence: z
    .object({
      problemClarity: evidenceScaleSchema.optional(),
      targetUserClarity: evidenceScaleSchema.optional(),
      practicalValue: evidenceScaleSchema.optional(),
      featureCompleteness: evidenceScaleSchema.optional(),
      technicalPolish: evidenceScaleSchema.optional(),
      novelty: evidenceScaleSchema.optional(),
      communicationQuality: evidenceScaleSchema.optional(),
      uxQuality: evidenceScaleSchema.optional(),
      demoQuality: evidenceScaleSchema.optional()
    })
    .optional(),
  notes: z.string().optional()
});

export const rubricEvidenceArraySchema = z.array(rubricEvidenceSchema);

export type RubricKey = (typeof RUBRIC_KEYS)[number];
export type ManualRubricEvidence = z.infer<typeof rubricEvidenceSchema>;
export type ScoringSource =
  | "manual_scores"
  | "manual_evidence"
  | "seeded_evidence"
  | "inferred";
export type UncertaintyBand = "low" | "medium" | "high";

export type ProjectArtifactInput = {
  id: string;
  name: string;
  description: string;
  externalUrl?: string | null;
  previewImageUrl?: string | null;
  openGraphImageUrl?: string | null;
  manualEvidence?: ManualRubricEvidence | null;
  seededEvidence?: ManualRubricEvidence | null;
  artifactReview?: ArtifactReview | null;
};

export type RubricReasoning = Record<RubricKey, string[]>;

export type ScoredProjectArtifact = {
  scores: Project["scores"];
  evidenceSource: ScoringSource;
  evidenceNotes: string | null;
  reasoning: RubricReasoning;
  uncertaintyScore: number;
  uncertaintyBand: UncertaintyBand;
  uncertaintyReasons: string[];
};

type ScoringContext = {
  description: string;
  lower: string;
  wordCount: number;
  sentenceCount: number;
  averageSentenceLength: number;
  firstSentenceLength: number;
  featureSignalCount: number;
  targetUserCount: number;
  practicalityCount: number;
  outcomeCount: number;
  noveltyCount: number;
  executionKeywordCount: number;
  usabilityKeywordCount: number;
  clarityKeywordCount: number;
  numberSignalCount: number;
  hasPreview: boolean;
  hasExternalUrl: boolean;
  hasOpenGraph: boolean;
  hasLineBreaks: boolean;
  artifactReview: ArtifactReview | null;
};

export function scoreProjectArtifact(input: ProjectArtifactInput): ScoredProjectArtifact {
  const manualScores = applyManualScores(input.manualEvidence);
  if (manualScores) {
    return {
      scores: manualScores,
      evidenceSource: "manual_scores",
      evidenceNotes: input.manualEvidence?.notes ?? null,
      reasoning: buildManualScoreReasoning(manualScores),
      uncertaintyScore: 4,
      uncertaintyBand: "low",
      uncertaintyReasons: ["Manual rubric scores supplied for all five categories."]
    };
  }

  const manualEvidenceScores = applyManualEvidence(input.manualEvidence);
  if (manualEvidenceScores) {
    const uncertaintyScore = getManualEvidenceUncertainty(input.manualEvidence);
    return {
      scores: manualEvidenceScores.scores,
      evidenceSource: "manual_evidence",
      evidenceNotes: input.manualEvidence?.notes ?? null,
      reasoning: manualEvidenceScores.reasoning,
      uncertaintyScore,
      uncertaintyBand: getUncertaintyBand(uncertaintyScore),
      uncertaintyReasons: getManualEvidenceUncertaintyReasons(input.manualEvidence)
    };
  }

  const seededEvidenceScores = applyManualEvidence(input.seededEvidence);
  if (seededEvidenceScores) {
    const uncertaintyScore = getSeededEvidenceUncertainty(input.seededEvidence);
    return {
      scores: seededEvidenceScores.scores,
      evidenceSource: "seeded_evidence",
      evidenceNotes: input.seededEvidence?.notes ?? null,
      reasoning: seededEvidenceScores.reasoning,
      uncertaintyScore,
      uncertaintyBand: getUncertaintyBand(uncertaintyScore),
      uncertaintyReasons: [
        "Structured seeded evidence was generated from the live-site review and project writeup.",
        "This is stronger than raw inference, but it is still not human-scored."
      ]
    };
  }

  const context = createScoringContext(input);

  const uncertainty = getInferenceUncertainty(context);

  return {
    scores: {
      usefulness: scoreUsefulness(context),
      execution: scoreExecution(context),
      creativity: scoreCreativity(context),
      clarity: scoreClarity(context),
      usability: scoreUsability(context)
    },
    evidenceSource: "inferred",
    evidenceNotes: null,
    reasoning: buildInferredReasoning(context),
    uncertaintyScore: uncertainty.score,
    uncertaintyBand: getUncertaintyBand(uncertainty.score),
    uncertaintyReasons: uncertainty.reasons
  };
}

function applyManualScores(manualEvidence?: ManualRubricEvidence | null) {
  const scores = manualEvidence?.scores;
  if (!scores) {
    return null;
  }

  if (!RUBRIC_KEYS.every((key) => typeof scores[key] === "number")) {
    return null;
  }

  return {
    usefulness: clampScore(scores.usefulness ?? 0),
    execution: clampScore(scores.execution ?? 0),
    creativity: clampScore(scores.creativity ?? 0),
    clarity: clampScore(scores.clarity ?? 0),
    usability: clampScore(scores.usability ?? 0)
  };
}

function applyManualEvidence(manualEvidence?: ManualRubricEvidence | null) {
  const evidence = manualEvidence?.evidence;
  if (!evidence) {
    return null;
  }

  const values = Object.values(evidence).filter((value): value is number => typeof value === "number");
  if (!values.length) {
    return null;
  }

  const scores = {
    usefulness: clampScore(
      mapScaleToScore(averageDefined([evidence.problemClarity, evidence.targetUserClarity, evidence.practicalValue]))
    ),
    execution: clampScore(
      mapScaleToScore(averageDefined([evidence.featureCompleteness, evidence.technicalPolish, evidence.demoQuality]))
    ),
    creativity: clampScore(mapScaleToScore(averageDefined([evidence.novelty]))),
    clarity: clampScore(
      mapScaleToScore(averageDefined([evidence.communicationQuality, evidence.problemClarity]))
    ),
    usability: clampScore(
      mapScaleToScore(averageDefined([evidence.uxQuality, evidence.demoQuality, evidence.targetUserClarity]))
    )
  };

  return {
    scores,
    reasoning: {
      usefulness: [
        scaleReason("problem clarity", evidence.problemClarity),
        scaleReason("target user clarity", evidence.targetUserClarity),
        scaleReason("practical value", evidence.practicalValue)
      ].filter(Boolean) as string[],
      execution: [
        scaleReason("feature completeness", evidence.featureCompleteness),
        scaleReason("technical polish", evidence.technicalPolish),
        scaleReason("demo quality", evidence.demoQuality)
      ].filter(Boolean) as string[],
      creativity: [scaleReason("novelty", evidence.novelty)].filter(Boolean) as string[],
      clarity: [
        scaleReason("communication quality", evidence.communicationQuality),
        scaleReason("problem clarity", evidence.problemClarity)
      ].filter(Boolean) as string[],
      usability: [
        scaleReason("ux quality", evidence.uxQuality),
        scaleReason("demo quality", evidence.demoQuality),
        scaleReason("target user clarity", evidence.targetUserClarity)
      ].filter(Boolean) as string[]
    } satisfies RubricReasoning
  };
}

function createScoringContext(input: ProjectArtifactInput): ScoringContext {
  const description = cleanDescription(input.description);
  const lower = description.toLowerCase();
  const sentenceCount = description
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean).length;
  const wordCount = description.split(/\s+/).filter(Boolean).length;
  const firstSentence = description.split(/(?<=[.!?])\s+/)[0]?.trim() ?? "";

  return {
    description,
    lower,
    wordCount,
    sentenceCount,
    averageSentenceLength: sentenceCount ? wordCount / sentenceCount : wordCount,
    firstSentenceLength: firstSentence.split(/\s+/).filter(Boolean).length,
    featureSignalCount: countKeywordHits(lower, FEATURE_KEYWORDS),
    targetUserCount: countKeywordHits(lower, TARGET_USER_KEYWORDS),
    practicalityCount: countKeywordHits(lower, PRACTICAL_PROBLEM_KEYWORDS),
    outcomeCount: countKeywordHits(lower, OUTCOME_KEYWORDS),
    noveltyCount: countKeywordHits(lower, NOVELTY_KEYWORDS),
    executionKeywordCount: countKeywordHits(lower, EXECUTION_KEYWORDS),
    usabilityKeywordCount: countKeywordHits(lower, UI_USABILITY_KEYWORDS),
    clarityKeywordCount: countKeywordHits(lower, CLARITY_KEYWORDS),
    numberSignalCount: countNumberSignals(description),
    hasPreview: Boolean(input.previewImageUrl ?? input.openGraphImageUrl),
    hasExternalUrl: Boolean(input.externalUrl),
    hasOpenGraph: Boolean(input.openGraphImageUrl),
    hasLineBreaks: description.includes("\n"),
    artifactReview: input.artifactReview ?? null
  };
}

function scoreUsefulness(context: ScoringContext) {
  return clampScore(
    40 +
      cap(context.practicalityCount * 4, 20) +
      cap(context.targetUserCount * 3, 12) +
      cap(context.outcomeCount * 3, 15) +
      rangeScore(context.wordCount, 35, 180, 6) +
      (/(because|problem|need|pain|losing customers|workable)/.test(context.lower) ? 7 : 0)
  );
}

function scoreExecution(context: ScoringContext) {
  const artifactBonus = getArtifactExecutionBonus(context.artifactReview);

  return clampScore(
    38 +
      (context.hasExternalUrl ? 16 : 0) +
      (context.hasPreview ? 10 : 0) +
      (context.hasOpenGraph ? 4 : 0) +
      cap(context.executionKeywordCount * 4, 20) +
      cap(context.featureSignalCount * 3, 15) +
      cap(context.numberSignalCount * 3, 9) +
      rangeScore(context.wordCount, 45, 260, 6) +
      artifactBonus
  );
}

function scoreCreativity(context: ScoringContext) {
  const modalityBonus =
    ["voice", "3d", "audio", "game", "simulation", "browser-native", "multimodal"].filter(
      (keyword) => context.lower.includes(keyword)
    ).length >= 2
      ? 6
      : 0;

  return clampScore(
    42 +
      cap(context.noveltyCount * 5, 25) +
      cap(context.featureSignalCount * 2, 10) +
      modalityBonus +
      (/(immersive|local-first|procedural|reinforcement learning)/.test(context.lower) ? 8 : 0)
  );
}

function scoreClarity(context: ScoringContext) {
  return clampScore(
    36 +
      rangeScore(context.wordCount, 40, 220, 16) +
      rangeScore(context.averageSentenceLength, 10, 28, 10) +
      rangeScore(context.firstSentenceLength, 8, 28, 8) +
      cap(context.clarityKeywordCount * 2, 8) +
      (context.sentenceCount >= 2 ? 6 : 0) +
      (context.hasLineBreaks ? 4 : 0)
  );
}

function scoreUsability(context: ScoringContext) {
  const artifactBonus = getArtifactUsabilityBonus(context.artifactReview);

  return clampScore(
    36 +
      (context.hasExternalUrl ? 18 : 0) +
      (context.hasPreview ? 12 : 0) +
      cap(context.usabilityKeywordCount * 3, 18) +
      cap(context.featureSignalCount * 2, 10) +
      (/(easy|guide|workflow|browser-native|local-first|responsive)/.test(context.lower) ? 8 : 0) +
      artifactBonus
  );
}

function buildManualScoreReasoning(scores: Project["scores"]): RubricReasoning {
  return {
    usefulness: [`Manual rubric override applied: ${scores.usefulness}/100.`],
    execution: [`Manual rubric override applied: ${scores.execution}/100.`],
    creativity: [`Manual rubric override applied: ${scores.creativity}/100.`],
    clarity: [`Manual rubric override applied: ${scores.clarity}/100.`],
    usability: [`Manual rubric override applied: ${scores.usability}/100.`]
  };
}

function buildInferredReasoning(context: ScoringContext): RubricReasoning {
  return {
    usefulness: [
      context.practicalityCount
        ? `Description contains ${context.practicalityCount} practical problem signals.`
        : "Description provides limited explicit practical problem framing.",
      context.targetUserCount
        ? `Target users are signaled ${context.targetUserCount} time(s).`
        : "Target user is not strongly named in the writeup.",
      context.outcomeCount
        ? `Outcome language appears ${context.outcomeCount} time(s).`
        : "Outcome language is sparse."
    ],
    execution: [
      context.hasExternalUrl ? "Live product link present." : "No live product link present.",
      context.hasPreview ? "Preview asset present." : "No preview asset present.",
      context.artifactReview
        ? artifactReviewReason(context.artifactReview)
        : "No automated artifact review has been run for the live site yet.",
      context.executionKeywordCount
        ? `Implementation detail signals detected ${context.executionKeywordCount} time(s).`
        : "Implementation detail language is limited."
    ],
    creativity: [
      context.noveltyCount
        ? `Novelty signals detected ${context.noveltyCount} time(s).`
        : "Few explicit novelty markers found.",
      context.featureSignalCount
        ? `Feature surface suggests product breadth (${context.featureSignalCount} feature signals).`
        : "Feature breadth is not heavily detailed."
    ],
    clarity: [
      `${context.wordCount} words across ${context.sentenceCount} sentence(s).`,
      `Average sentence length: ${context.averageSentenceLength.toFixed(1)} words.`,
      context.clarityKeywordCount
        ? `Explanation framing appears ${context.clarityKeywordCount} time(s).`
        : "Explicit explanatory framing is limited."
    ],
    usability: [
      context.hasExternalUrl ? "Usability signal from live product access." : "No live product access signal.",
      context.hasPreview ? "Visual preview helps infer product surface." : "No visual preview supplied.",
      context.artifactReview
        ? artifactUsabilityReason(context.artifactReview)
        : "No automated live-site review is available for interface verification.",
      context.usabilityKeywordCount
        ? `Usability language appears ${context.usabilityKeywordCount} time(s).`
        : "Usability-specific language is limited."
    ]
  };
}

function getManualEvidenceUncertainty(manualEvidence?: ManualRubricEvidence | null) {
  const provided = Object.values(manualEvidence?.evidence ?? {}).filter(
    (value): value is number => typeof value === "number"
  ).length;

  return clampUncertainty(18 - provided * 1.2);
}

function getSeededEvidenceUncertainty(manualEvidence?: ManualRubricEvidence | null) {
  const provided = Object.values(manualEvidence?.evidence ?? {}).filter(
    (value): value is number => typeof value === "number"
  ).length;

  return clampUncertainty(28 - provided);
}

function getManualEvidenceUncertaintyReasons(manualEvidence?: ManualRubricEvidence | null) {
  const provided = Object.values(manualEvidence?.evidence ?? {}).filter(
    (value): value is number => typeof value === "number"
  ).length;

  if (provided >= 7) {
    return ["Structured manual evidence covers most judge-observable dimensions."];
  }

  if (provided >= 4) {
    return ["Structured manual evidence exists, but some judging dimensions are still inferred from partial coverage."];
  }

  return ["Only a small amount of structured manual evidence is present, so some confidence is still limited."];
}

function getInferenceUncertainty(context: ScoringContext) {
  let score = 22;
  const reasons: string[] = [];

  if (!context.hasExternalUrl) {
    score += 18;
    reasons.push("No live product link, so execution and usability are harder to verify directly.");
  }

  if (context.artifactReview) {
    if (context.artifactReview.fetchStatus !== "ok") {
      score += 16;
      reasons.push("Automated site review could not verify a healthy live artifact.");
    } else {
      score -= 10;

      if (context.artifactReview.loginWallLikely) {
        score += 8;
        reasons.push("The live site appears gated behind sign-in, which limits direct UX verification.");
      }

      if (context.artifactReview.errorPageLikely) {
        score += 14;
        reasons.push("The live site appears to expose an error state or broken landing page.");
      }

      if (!context.artifactReview.titleMatchesProject) {
        score += 6;
        reasons.push("The live page title does not clearly match the submitted project name.");
      }
    }
  } else if (context.hasExternalUrl) {
    score += 10;
    reasons.push("A live URL exists, but it has not been automatically inspected yet.");
  }

  if (!context.hasPreview) {
    score += 12;
    reasons.push("No preview asset, so interface and polish are less observable.");
  }

  if (context.wordCount < 45) {
    score += 18;
    reasons.push("Description is very short, which weakens usefulness and clarity confidence.");
  } else if (context.wordCount < 85) {
    score += 10;
    reasons.push("Description is somewhat brief, leaving less evidence than a fuller writeup.");
  }

  if (context.sentenceCount < 2) {
    score += 10;
    reasons.push("Writeup structure is shallow, so the explanation quality is harder to judge.");
  }

  if (context.targetUserCount === 0) {
    score += 8;
    reasons.push("Target user is not strongly named in the writeup.");
  }

  if (context.practicalityCount === 0 && context.outcomeCount === 0) {
    score += 8;
    reasons.push("Practical outcome signals are sparse.");
  }

  if (context.featureSignalCount < 2) {
    score += 8;
    reasons.push("Feature surface is only lightly described.");
  }

  if (context.executionKeywordCount === 0 && !context.hasOpenGraph) {
    score += 6;
    reasons.push("There are few explicit implementation or polish signals.");
  }

  return {
    score: clampUncertainty(score),
    reasons:
      reasons.length > 0
        ? reasons
        : ["Artifact coverage is strong enough that the inferred rubric score is relatively stable."]
  };
}

function getUncertaintyBand(score: number): UncertaintyBand {
  if (score >= 55) {
    return "high";
  }

  if (score >= 28) {
    return "medium";
  }

  return "low";
}

function getArtifactExecutionBonus(review: ArtifactReview | null) {
  if (!review || review.fetchStatus !== "ok") {
    return review && review.fetchStatus !== "ok" ? -10 : 0;
  }

  return (
    (review.statusCode && review.statusCode >= 200 && review.statusCode < 400 ? 8 : 0) +
    (review.titleMatchesProject ? 4 : 0) +
    (review.hasStructuredMetadata ? 3 : 0) +
    (review.contentLength && review.contentLength > 2000 ? 4 : 0) +
    (review.errorPageLikely ? -10 : 0)
  );
}

function getArtifactUsabilityBonus(review: ArtifactReview | null) {
  if (!review || review.fetchStatus !== "ok") {
    return review && review.fetchStatus !== "ok" ? -8 : 0;
  }

  return (
    (review.appKeywordCount ? Math.min(review.appKeywordCount, 4) * 2 : 0) +
    (review.metaDescription ? 3 : 0) +
    (review.ogImageUrl ? 2 : 0) +
    (review.loginWallLikely ? -6 : 0) +
    (review.errorPageLikely ? -10 : 0)
  );
}

function artifactReviewReason(review: ArtifactReview) {
  if (review.fetchStatus !== "ok") {
    return `Automated site review returned ${review.fetchStatus}${review.statusCode ? ` (${review.statusCode})` : ""}.`;
  }

  return `Automated site review succeeded${review.statusCode ? ` (${review.statusCode})` : ""}${review.titleMatchesProject ? " and the page title matches the project." : "."}`;
}

function artifactUsabilityReason(review: ArtifactReview) {
  if (review.fetchStatus !== "ok") {
    return "The live site could not be verified automatically, which limits usability confidence.";
  }

  if (review.loginWallLikely) {
    return "The live site appears gated behind sign-in, so usability could not be fully inspected.";
  }

  return `Automated review found ${review.appKeywordCount ?? 0} interface signal(s) on the live page.`;
}

function cleanDescription(description?: string) {
  return (description ?? "").replace(/\s+/g, " ").trim();
}

function averageDefined(values: Array<number | undefined>) {
  const defined = values.filter((value): value is number => typeof value === "number");
  if (!defined.length) {
    return 3;
  }

  return defined.reduce((sum, value) => sum + value, 0) / defined.length;
}

function mapScaleToScore(value: number) {
  return 40 + ((value - 1) / 4) * 55;
}

function scaleReason(label: string, value?: number) {
  if (typeof value !== "number") {
    return null;
  }

  return `${label} rated ${value}/5 in manual evidence.`;
}

function clampScore(value: number) {
  return Math.max(35, Math.min(98, Math.round(value)));
}

function clampUncertainty(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function countKeywordHits(text: string, keywords: readonly string[]) {
  return keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0);
}

function countNumberSignals(text: string) {
  const matches = text.match(/\b\d+(?:\.\d+)?\b/g);
  return matches ? matches.length : 0;
}

function rangeScore(value: number, min: number, max: number, maxPoints: number) {
  if (value < min) {
    return (value / Math.max(min, 1)) * maxPoints;
  }

  if (value > max) {
    return Math.max(maxPoints - ((value - max) / Math.max(max, 1)) * maxPoints, 0);
  }

  return maxPoints;
}

function cap(value: number, max: number) {
  return Math.min(value, max);
}
