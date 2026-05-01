"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Project, mockProjects } from "@/data/projects";
import {
  ProjectRanking,
  createSeededRandom,
  formatPercentage,
  runCompetitionSimulation
} from "@/lib/simulation";
import staticRankings from "@/data/rankings.json";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

type SimulationDashboardProps = {
  id?: string;
  heading: string;
  eyebrow?: string;
  description?: string;
  projects?: Project[];
};

type StaticRanking = (typeof staticRankings)["rankings"][number];
type RichRanking = ProjectRanking & { externalUrl?: string | null };

const SIMULATIONS = staticRankings.simulations;
const PREVIEW_LIMIT = 10;
const EXPANDED_LIMIT = 50;
const DIMENSION_KEYS = ["usefulness", "execution", "creativity", "clarity", "usability"] as const;
type DimensionKey = (typeof DIMENSION_KEYS)[number];

function buildRankingsFromStatic(projects: Project[]): ProjectRanking[] {
  const projectById = new Map(projects.map((p) => [p.id, p]));
  return staticRankings.rankings
    .filter((r: StaticRanking) => projectById.has(r.id))
    .map((r: StaticRanking) => {
      const project = projectById.get(r.id)!;
      return {
        id: project.id,
        name: project.name,
        oneLineDescription: project.oneLineDescription,
        fullDescription: project.fullDescription,
        scores: project.scores,
        judgesNote: project.judgesNote,
        externalUrl: project.externalUrl,
        weightedScore: r.weightedScore,
        averageScore: r.averageScore,
        averageRank: r.averageRank,
        winCount: r.winCount,
        top3Count: r.top3Count,
        winProbability: r.winProbability,
        winRate: r.winProbability,
        topThreeRate: r.topThreeRate,
        momentumLabel: r.momentumLabel
      } as ProjectRanking;
    });
}

function openChatWithProject(projectName: string) {
  const question = `Tell me about ${projectName} — what's its strongest dimension and why? What's its weakest? Use the AI judge's evaluation.`;
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-chat-with-context", { detail: { question } })
    );
  }
}

function buildRankingsRuntime(projects: Project[]): ProjectRanking[] {
  const snapshot = runCompetitionSimulation(
    projects,
    SIMULATIONS,
    createSeededRandom(staticRankings.seed)
  );
  return snapshot.rankings;
}

function isDefaultField(projects: Project[]): boolean {
  if (projects.length !== mockProjects.length) return false;
  const ids = new Set(mockProjects.map((p) => p.id));
  return projects.every((p) => ids.has(p.id));
}

export function SimulationDashboard({
  id,
  heading,
  eyebrow = "Simulation Dashboard",
  description,
  projects = mockProjects
}: SimulationDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showExpanded, setShowExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectRanking | null>(null);

  const rankings = useMemo<ProjectRanking[]>(() => {
    return isDefaultField(projects)
      ? buildRankingsFromStatic(projects)
      : buildRankingsRuntime(projects);
  }, [projects]);

  const topProject = rankings[0];
  const isSearching = searchQuery.trim().length > 0;

  const filteredRankings = useMemo(() => {
    if (!isSearching) return rankings;
    const lowerQuery = searchQuery.toLowerCase();
    return rankings.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.oneLineDescription?.toLowerCase().includes(lowerQuery)
    );
  }, [rankings, searchQuery, isSearching]);

  const limit = isSearching ? EXPANDED_LIMIT : showExpanded ? EXPANDED_LIMIT : PREVIEW_LIMIT;
  const visibleRows = useMemo(() => filteredRankings.slice(0, limit), [filteredRankings, limit]);

  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">{eyebrow}</p>
          <h2 className="mt-2 text-4xl font-medium tracking-tight text-white">{heading}</h2>
        </div>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-slate-400">{description}</p>
        ) : null}
      </div>

      <div className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.01] p-7 lg:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
            Simulation Snapshot
          </p>
          <h3 className="mt-3 text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {SIMULATIONS.toLocaleString()} runs · seed {staticRankings.seed}
          </h3>
          {topProject ? (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              {topProject.name} leads the field with a {formatPercentage(topProject.winRate)}{" "}
              chance to win and an average finish of {topProject.averageRank.toFixed(2)}.
            </p>
          ) : null}
          <p className="mt-2 text-xs text-slate-500">
            Rankings are precomputed from a fixed seed so judges see the same results every visit.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 py-2">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder={`Search ${rankings.length} projects...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm text-white outline-none focus:border-emerald-400/50 focus:bg-white/[0.04] transition"
            />
          </div>
        </div>

        <LeaderboardTable
          rankings={visibleRows}
          totalCount={filteredRankings.length}
          isSearching={isSearching}
          onSelectProject={setSelectedProject}
        />

        {!isSearching && filteredRankings.length > PREVIEW_LIMIT ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowExpanded((prev) => !prev)}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
            >
              {showExpanded
                ? `Collapse to top ${PREVIEW_LIMIT}`
                : `View top ${EXPANDED_LIMIT} →`}
            </button>
          </div>
        ) : null}

        <FieldAnalysis rankings={rankings} />
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function LeaderboardTable({
  rankings,
  totalCount,
  isSearching,
  onSelectProject
}: {
  rankings: ProjectRanking[];
  totalCount: number;
  isSearching: boolean;
  onSelectProject: (project: ProjectRanking) => void;
}) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.01]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-emerald-400">Leaderboard</p>
          <h3 className="mt-1 text-2xl font-medium text-white">
            {isSearching
              ? `${totalCount} match${totalCount === 1 ? "" : "es"}`
              : `Top ${rankings.length} projected finishes`}
          </h3>
        </div>
        <p className="text-sm text-slate-400">Sorted by win probability</p>
      </div>

      {rankings.length === 0 ? (
        <div className="px-6 py-12 text-center text-sm text-slate-500">
          No projects match your search.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-white/[0.02] text-left">
                {[
                  "Rank",
                  "Project",
                  "Win Probability",
                  "Top 3 Probability",
                  "Average Rank",
                  "Average Score"
                ].map((column) => (
                  <th
                    key={column}
                    className="border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.22em] text-slate-500"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rankings.map((project, index) => {
                const isLeader = index === 0;
                return (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className={`transition-colors duration-300 cursor-pointer hover:bg-white/[0.03] ${
                      isLeader ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="border-b border-white/5 px-6 py-5">
                      <div className="text-sm font-medium text-slate-400">#{index + 1}</div>
                    </td>
                    <td className="border-b border-white/5 px-6 py-5">
                      <div className="min-w-[240px]">
                        <p className="text-base font-medium text-white">{project.name}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {project.oneLineDescription}
                        </p>
                      </div>
                    </td>
                    <td className="metric-value border-b border-white/5 px-6 py-5 text-sm text-emerald-400">
                      {formatPercentage(project.winRate)}
                    </td>
                    <td className="metric-value border-b border-white/5 px-6 py-5 text-sm text-white">
                      {formatPercentage(project.topThreeRate)}
                    </td>
                    <td className="metric-value border-b border-white/5 px-6 py-5 text-sm text-white">
                      {project.averageRank.toFixed(2)}
                    </td>
                    <td className="metric-value border-b border-white/5 px-6 py-5 text-sm text-white">
                      {project.averageScore.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FieldAnalysis({ rankings }: { rankings: ProjectRanking[] }) {
  const analytics = useMemo(() => computeAnalytics(rankings), [rankings]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.26em] text-emerald-400">Field Analysis</p>
        <h3 className="mt-2 text-3xl font-medium tracking-tight text-white">
          What the {rankings.length}-project field looks like
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
          Aggregates and distributions computed from the same simulation snapshot the leaderboard
          uses. None of these recompute on interaction.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryStat
          label="Leader Gap"
          value={`${analytics.leaderGap.toFixed(1)} pts`}
          hint={`#1 leads #2 by this much in win %.`}
        />
        <SummaryStat
          label="Field Average Score"
          value={analytics.averageWeightedScore.toFixed(1)}
          hint="Weighted score across all projects."
        />
        <SummaryStat
          label="Front-runners"
          value={String(analytics.tierCounts.frontRunner)}
          hint="Projects with ≥35% win probability."
          accent
        />
        <SummaryStat
          label="Long shots"
          value={String(analytics.tierCounts.longShot)}
          hint="Projects with <10% win probability."
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 lg:p-7">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-400">
                Top 10 Win Probability
              </p>
              <h4 className="mt-1 text-xl font-medium text-white">Where the race is</h4>
            </div>
            <p className="text-xs text-slate-500">% of {SIMULATIONS} runs won</p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analytics.topTenChart}
                layout="vertical"
                margin={{ top: 4, right: 24, bottom: 4, left: 8 }}
              >
                <XAxis
                  type="number"
                  domain={[0, "dataMax"]}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                  tickFormatter={(value) => `${value.toFixed(0)}%`}
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={140}
                />
                <Tooltip
                  cursor={{ fill: "rgba(52,211,153,0.08)" }}
                  contentStyle={{
                    background: "#0b1024",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    fontSize: 12,
                    color: "#e2e8f0"
                  }}
                  formatter={(value) => [`${Number(value).toFixed(1)}%`, "Win probability"]}
                />
                <Bar dataKey="winProbability" radius={[0, 6, 6, 0]}>
                  {analytics.topTenChart.map((entry, idx) => (
                    <Cell
                      key={entry.id}
                      fill={idx === 0 ? "#34d399" : idx < 3 ? "#6ee7b7" : "rgba(110,231,183,0.5)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 lg:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-400">
            Field Score Profile
          </p>
          <h4 className="mt-1 text-xl font-medium text-white">Average across the field</h4>
          <p className="mt-2 text-xs text-slate-500">
            Mean score per dimension, all {rankings.length} projects.
          </p>
          <div className="mt-2 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="72%"
                data={analytics.dimensionAverages}
              >
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                />
                <Radar
                  name="Field Average"
                  dataKey="A"
                  stroke="#8b9cff"
                  fill="#8b9cff"
                  fillOpacity={0.28}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2 text-center">
            {analytics.dimensionAverages.map((d) => (
              <div key={d.subject}>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {d.subject.slice(0, 4)}
                </p>
                <p className="mt-1 text-sm font-medium text-white">{d.A.toFixed(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 lg:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-400">
            Weighted Score Distribution
          </p>
          <h4 className="mt-1 text-xl font-medium text-white">How the field stacks up</h4>
          <p className="mt-2 text-xs text-slate-500">
            Projects bucketed by their weighted score (out of 100).
          </p>
          <div className="mt-4 h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analytics.distribution}
                margin={{ top: 4, right: 16, bottom: 4, left: 0 }}
              >
                <XAxis
                  dataKey="bucket"
                  tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "rgba(139,156,255,0.08)" }}
                  contentStyle={{
                    background: "#0b1024",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    fontSize: 12,
                    color: "#e2e8f0"
                  }}
                  formatter={(value) => [`${value} projects`, "Count"]}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} fill="#8b9cff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 lg:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-400">
            Momentum Tiers
          </p>
          <h4 className="mt-1 text-xl font-medium text-white">Who&apos;s in contention</h4>
          <p className="mt-2 text-xs text-slate-500">
            Tier assignment from the simulation&apos;s win-probability bands.
          </p>
          <div className="mt-5 space-y-3">
            <TierBar
              label="Front-runner"
              hint="≥35% win probability"
              count={analytics.tierCounts.frontRunner}
              total={rankings.length}
              colorClass="bg-emerald-400"
            />
            <TierBar
              label="Contender"
              hint="20-34%"
              count={analytics.tierCounts.contender}
              total={rankings.length}
              colorClass="bg-emerald-300"
            />
            <TierBar
              label="Watchlist"
              hint="10-19%"
              count={analytics.tierCounts.watchlist}
              total={rankings.length}
              colorClass="bg-blue-400"
            />
            <TierBar
              label="Long shot"
              hint="<10%"
              count={analytics.tierCounts.longShot}
              total={rankings.length}
              colorClass="bg-slate-500"
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 lg:p-7">
        <p className="text-xs uppercase tracking-[0.24em] text-emerald-400">
          Top 3 by Dimension
        </p>
        <h4 className="mt-1 text-xl font-medium text-white">
          Who specializes where
        </h4>
        <p className="mt-2 text-xs text-slate-500">
          Highest scorer in each rubric dimension. Ties broken by overall win probability.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {DIMENSION_KEYS.map((dimension) => (
            <div
              key={dimension}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                {dimension}
              </p>
              <div className="mt-3 space-y-3">
                {analytics.topByDimension[dimension].map((entry, idx) => (
                  <div key={entry.id} className="flex items-start gap-3">
                    <span className="mt-1 text-xs font-medium text-slate-500">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">{entry.name}</p>
                      <p className="text-xs text-emerald-300">{entry.score}/100</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailModal({
  project,
  onClose
}: {
  project: RichRanking | null;
  onClose: () => void;
}) {
  const stableOnClose = useCallback(onClose, [onClose]);

  useEffect(() => {
    if (!project) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") stableOnClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, stableOnClose]);

  if (!project) return null;

  const radarData = [
    { subject: "Usefulness", A: project.scores.usefulness, fullMark: 100 },
    { subject: "Execution", A: project.scores.execution, fullMark: 100 },
    { subject: "Creativity", A: project.scores.creativity, fullMark: 100 },
    { subject: "Clarity", A: project.scores.clarity, fullMark: 100 },
    { subject: "Usability", A: project.scores.usability, fullMark: 100 }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#060816]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-emerald-400">Project Detail</p>
            <h3 className="mt-2 text-3xl font-medium text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.fullDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  openChatWithProject(project.name);
                  onClose();
                }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_16px_rgba(52,211,153,0.45)] transition hover:bg-emerald-300"
              >
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Ask a question about this project
              </button>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08]"
                >
                  Visit project
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
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Stat label="Weighted Score" value={project.weightedScore.toFixed(2)} />
            <Stat label="Win Probability" value={formatPercentage(project.winRate)} accent />
            <Stat label="Average Rank" value={project.averageRank.toFixed(2)} />
            <Stat label="Average Score" value={project.averageScore.toFixed(2)} />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-4">
                Score Profile
              </p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                    />
                    <Radar
                      name="Project"
                      dataKey="A"
                      stroke="#34d399"
                      fill="#34d399"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-400 mb-4">
                AI Judge&apos;s Evaluation
              </p>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm leading-7 text-slate-300">
                {project.judgesNote ? (
                  <p>{project.judgesNote}</p>
                ) : (
                  <p className="text-slate-500 italic">
                    No AI evaluation has been generated for this project yet. Run{" "}
                    <code className="text-slate-300">npm run judge</code> to populate.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p
        className={`metric-value mt-1 text-2xl font-medium ${
          accent ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SummaryStat({
  label,
  value,
  hint,
  accent
}: {
  label: string;
  value: string;
  hint: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p
        className={`metric-value mt-2 text-3xl font-medium ${
          accent ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-500">{hint}</p>
    </div>
  );
}

function TierBar({
  label,
  hint,
  count,
  total,
  colorClass
}: {
  label: string;
  hint: string;
  count: number;
  total: number;
  colorClass: string;
}) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between text-sm">
        <span className="text-white">{label}</span>
        <span className="text-slate-400">
          <span className="font-medium text-white">{count}</span>{" "}
          <span className="text-xs text-slate-500">· {hint}</span>
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
        <div
          className={`h-full ${colorClass} transition-all`}
          style={{ width: `${Math.max(2, pct)}%` }}
        />
      </div>
    </div>
  );
}

type Analytics = {
  leaderGap: number;
  averageWeightedScore: number;
  tierCounts: { frontRunner: number; contender: number; watchlist: number; longShot: number };
  topTenChart: Array<{ id: string; label: string; winProbability: number }>;
  dimensionAverages: Array<{ subject: string; A: number; fullMark: 100 }>;
  distribution: Array<{ bucket: string; count: number }>;
  topByDimension: Record<DimensionKey, Array<{ id: string; name: string; score: number }>>;
};

function computeAnalytics(rankings: ProjectRanking[]): Analytics {
  const leaderGap =
    rankings.length >= 2 ? rankings[0].winProbability - rankings[1].winProbability : 0;

  const averageWeightedScore =
    rankings.length === 0
      ? 0
      : rankings.reduce((sum, p) => sum + p.weightedScore, 0) / rankings.length;

  const tierCounts = rankings.reduce(
    (acc, p) => {
      if (p.winProbability >= 35) acc.frontRunner += 1;
      else if (p.winProbability >= 20) acc.contender += 1;
      else if (p.winProbability >= 10) acc.watchlist += 1;
      else acc.longShot += 1;
      return acc;
    },
    { frontRunner: 0, contender: 0, watchlist: 0, longShot: 0 }
  );

  const topTenChart = rankings.slice(0, 10).map((p) => ({
    id: p.id,
    label: p.name.length > 22 ? p.name.slice(0, 21) + "…" : p.name,
    winProbability: p.winProbability
  }));

  const dimensionAverages = DIMENSION_KEYS.map((key) => {
    const total = rankings.reduce((sum, p) => sum + p.scores[key], 0);
    const avg = rankings.length > 0 ? total / rankings.length : 0;
    return {
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      A: Number(avg.toFixed(1)),
      fullMark: 100 as const
    };
  });

  const buckets = [
    { bucket: "<55", min: 0, max: 55 },
    { bucket: "55-64", min: 55, max: 65 },
    { bucket: "65-74", min: 65, max: 75 },
    { bucket: "75-84", min: 75, max: 85 },
    { bucket: "85-94", min: 85, max: 95 },
    { bucket: "95+", min: 95, max: 1000 }
  ];
  const distribution = buckets.map((b) => ({
    bucket: b.bucket,
    count: rankings.filter((p) => p.weightedScore >= b.min && p.weightedScore < b.max).length
  }));

  const topByDimension = DIMENSION_KEYS.reduce(
    (acc, key) => {
      const sorted = [...rankings]
        .sort((a, b) => {
          const diff = b.scores[key] - a.scores[key];
          if (diff !== 0) return diff;
          return b.winProbability - a.winProbability;
        })
        .slice(0, 3)
        .map((p) => ({ id: p.id, name: p.name, score: p.scores[key] }));
      acc[key] = sorted;
      return acc;
    },
    {} as Record<DimensionKey, Array<{ id: string; name: string; score: number }>>
  );

  return {
    leaderGap,
    averageWeightedScore,
    tierCounts,
    topTenChart,
    dimensionAverages,
    distribution,
    topByDimension
  };
}
