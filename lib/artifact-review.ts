import { z } from "zod";

export const artifactReviewSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  reviewedAt: z.string(),
  fetchStatus: z.enum(["ok", "timeout", "error", "invalid"]),
  finalUrl: z.string().url().nullable().optional(),
  statusCode: z.number().nullable().optional(),
  title: z.string().nullable().optional(),
  metaDescription: z.string().nullable().optional(),
  ogTitle: z.string().nullable().optional(),
  ogDescription: z.string().nullable().optional(),
  ogImageUrl: z.string().nullable().optional(),
  contentLength: z.number().nullable().optional(),
  textSampleLength: z.number().nullable().optional(),
  appKeywordCount: z.number().int().nonnegative().optional(),
  titleMatchesProject: z.boolean().optional(),
  loginWallLikely: z.boolean().optional(),
  errorPageLikely: z.boolean().optional(),
  hasStructuredMetadata: z.boolean().optional(),
  notes: z.string().optional()
});

export const artifactReviewArraySchema = z.array(artifactReviewSchema);

export type ArtifactReview = z.infer<typeof artifactReviewSchema>;
