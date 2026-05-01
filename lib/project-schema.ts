import { z } from "zod";
import type { Project } from "@/data/projects";

export const incomingProjectSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  scores: z.object({
    usefulness: z.number().min(0).max(100),
    execution: z.number().min(0).max(100),
    creativity: z.number().min(0).max(100),
    clarity: z.number().min(0).max(100),
    usability: z.number().min(0).max(100)
  })
});

export const incomingProjectArraySchema = z.array(incomingProjectSchema).min(1);

export type IncomingProject = z.infer<typeof incomingProjectSchema>;

export function normalizeIncomingProjects(input: unknown): Project[] {
  const parsed = incomingProjectArraySchema.parse(input);

  return parsed.map((project, index) => ({
    id: slugify(project.name, index),
    name: project.name.trim(),
    oneLineDescription: project.description.trim(),
    fullDescription: project.description.trim(),
    scores: project.scores
  }));
}

export function parseIncomingProjectsSafe(input: unknown) {
  return incomingProjectArraySchema.safeParse(input);
}

function slugify(name: string, index: number) {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return base || `project-${index + 1}`;
}
