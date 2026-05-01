"use client";

import { Project } from "@/data/projects";
import staticRankings from "@/data/rankings.json";
import { formatPercentage } from "@/lib/simulation";

const DISPLAY_LIMIT = 12;

type Enriched = Project & {
  rank?: number;
  winProbability?: number;
};

function buildContenders(projects: Project[]): Enriched[] {
  const rankByid = new Map(
    staticRankings.rankings.map((r) => [r.id, { rank: r.rank, winProbability: r.winProbability }])
  );
  const enriched = projects.map<Enriched>((p) => {
    const meta = rankByid.get(p.id);
    return {
      ...p,
      rank: meta?.rank,
      winProbability: meta?.winProbability
    };
  });
  enriched.sort((a, b) => {
    const ar = a.rank ?? Number.POSITIVE_INFINITY;
    const br = b.rank ?? Number.POSITIVE_INFINITY;
    return ar - br;
  });
  return enriched.slice(0, DISPLAY_LIMIT);
}

function askAboutProject(name: string) {
  if (typeof window === "undefined") return;
  const question = `Tell me about ${name} — what's its strongest dimension and why? What's its weakest? Use the AI judge's evaluation.`;
  window.dispatchEvent(new CustomEvent("open-chat-with-context", { detail: { question } }));
}

export function ProjectPreviewGrid({ projects }: { projects: Project[] }) {
  const contenders = buildContenders(projects);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {contenders.map((project) => (
        <article
          key={project.id}
          className="flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.01] p-6 transition duration-200 hover:border-emerald-400/20 hover:bg-white/[0.02]"
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {project.rank ? (
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      project.rank === 1
                        ? "bg-emerald-400 text-slate-950"
                        : project.rank <= 3
                          ? "bg-emerald-400/30 text-emerald-100"
                          : project.rank <= 10
                            ? "bg-white/10 text-emerald-300"
                            : "bg-white/[0.04] text-slate-400"
                    }`}
                  >
                    {project.rank}
                  </span>
                ) : null}
                <h3 className="truncate text-lg font-medium text-white">{project.name}</h3>
              </div>
              {typeof project.winProbability === "number" ? (
                <div className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs">
                  <span className="metric-value font-semibold text-emerald-300">
                    {formatPercentage(project.winProbability)}
                  </span>
                  <span className="ml-1 text-[10px] uppercase tracking-wider text-emerald-300/70">
                    win
                  </span>
                </div>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {project.oneLineDescription}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {[
              ["U", project.scores.usefulness],
              ["E", project.scores.execution],
              ["Cr", project.scores.creativity],
              ["Cl", project.scores.clarity],
              ["Us", project.scores.usability]
            ].map(([label, score]) => (
              <div
                key={String(label)}
                className="flex items-center gap-1.5 rounded-lg bg-white/[0.03] px-2.5 py-1.5"
              >
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  {label}
                </span>
                <span className="metric-value text-xs font-medium text-slate-200">{score}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => askAboutProject(project.name)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_14px_rgba(52,211,153,0.35)] transition hover:bg-emerald-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Ask a question
            </button>
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
              >
                Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
