"use client";

import Link from "next/link";
import { mockProjects } from "@/data/projects";
import staticRankings from "@/data/rankings.json";
import { formatPercentage } from "@/lib/simulation";

type LeaderEntry = {
  id: string;
  name: string;
  oneLineDescription: string;
  winProbability: number;
  topThreeRate: number;
  averageRank: number;
  judgesNote?: string;
};

function buildLeaders(limit: number): LeaderEntry[] {
  const byId = new Map(mockProjects.map((p) => [p.id, p]));
  const out: LeaderEntry[] = [];
  for (const r of staticRankings.rankings.slice(0, limit)) {
    const project = byId.get(r.id);
    if (!project) continue;
    out.push({
      id: r.id,
      name: project.name,
      oneLineDescription: project.oneLineDescription || project.name,
      winProbability: r.winProbability,
      topThreeRate: r.topThreeRate,
      averageRank: r.averageRank,
      judgesNote: project.judgesNote
    });
  }
  return out;
}

export function HeroWinner() {
  const leaders = buildLeaders(3);
  const winner = leaders[0];
  if (!winner) return null;

  return (
    <div className="panel relative overflow-hidden rounded-[28px] p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/8 via-transparent to-transparent" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-emerald-400">
            <span className="h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          </span>
          <p className="text-xs uppercase tracking-[0.26em] text-emerald-400">
            Projected Winner · Live
          </p>
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white lg:text-4xl">
          {winner.name}
        </h2>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Win Probability
            </p>
            <p className="metric-value mt-0.5 text-5xl font-semibold text-emerald-400">
              {formatPercentage(winner.winProbability)}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Top 3 Finish Rate
            </p>
            <p className="metric-value mt-0.5 text-2xl font-medium text-white">
              {formatPercentage(winner.topThreeRate)}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
              Average Rank
            </p>
            <p className="metric-value mt-0.5 text-2xl font-medium text-white">
              {winner.averageRank.toFixed(2)}
            </p>
          </div>
        </div>

        {winner.judgesNote ? (
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-300">
            <span className="text-emerald-300">Judge&apos;s note · </span>
            {winner.judgesNote}
          </p>
        ) : null}

        <div className="mt-6 border-t border-white/5 pt-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Podium
          </p>
          <div className="mt-3 space-y-2">
            {leaders.map((entry, idx) => (
              <div
                key={entry.id}
                className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition ${
                  idx === 0
                    ? "border-emerald-400/30 bg-emerald-400/5"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      idx === 0
                        ? "bg-emerald-400 text-slate-950"
                        : idx === 1
                          ? "bg-emerald-400/30 text-emerald-100"
                          : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <p className="truncate text-sm font-medium text-white">{entry.name}</p>
                </div>
                <p className="metric-value shrink-0 text-sm font-medium text-emerald-300">
                  {formatPercentage(entry.winProbability)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/simulate"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
        >
          Open the leaderboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
