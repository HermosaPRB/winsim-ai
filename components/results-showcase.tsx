"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type {
  ChallengeSource,
  CodexChallengeMeta,
  CodexChallengeProjectRecord
} from "@/data/codex-challenge";
import {
  codexChallengeRankings,
  codexChallengeRankingsMeta
} from "@/data/codex-challenge-rankings";
import {
  DEFAULT_JUDGE_PANEL,
  ProjectRanking,
  formatPercentage
} from "@/lib/simulation";

const RUN_COUNT = codexChallengeRankingsMeta.simulations;
const RUBRIC_ORDER = [
  "usefulness",
  "execution",
  "creativity",
  "clarity",
  "usability"
] as const;
const DISPLAY_OPTIONS = [25, 50, 100] as const;
const SOURCE_OPTIONS: ChallengeFilter[] = ["ALL", "CODEX", "LEVEL_UP"];
const SORT_OPTIONS = [
  { id: "winRate", label: "Win %" },
  { id: "topThreeRate", label: "Top 3 %" },
  { id: "averageRank", label: "Avg Rank" },
  { id: "averageScore", label: "Avg Score" },
  { id: "likes", label: "Likes" },
  { id: "views", label: "Views" }
] as const;

type ChallengeFilter = "ALL" | ChallengeSource;
type SortKey = (typeof SORT_OPTIONS)[number]["id"];

type ResultsShowcaseProps = {
  records: CodexChallengeProjectRecord[];
  meta: CodexChallengeMeta;
};

type RankedRecord = ProjectRanking &
  Pick<
    CodexChallengeProjectRecord,
    | "source"
    | "views"
    | "likes"
    | "hasPreview"
    | "hasExternalUrl"
    | "previewImageUrl"
    | "externalUrl"
    | "builderName"
    | "builderInstitution"
    | "builderPhotoUrl"
    | "scoringSource"
    | "scoringNotes"
    | "rubricReasoning"
    | "uncertaintyScore"
    | "uncertaintyBand"
    | "uncertaintyReasons"
    | "artifactReview"
  > & {
    fieldRank: number;
    reviewPriority: number;
  };

export function ResultsShowcase({ records, meta }: ResultsShowcaseProps) {
  const [sourceFilter, setSourceFilter] = useState<ChallengeFilter>("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState<number>(50);
  const [sortKey, setSortKey] = useState<SortKey>("winRate");

  const filteredRecords = useMemo(() => {
    if (sourceFilter === "ALL") {
      return records;
    }

    return records.filter((record) => record.source === sourceFilter);
  }, [records, sourceFilter]);

  const precomputedRankings = useMemo(
    () => codexChallengeRankings[sourceFilter] ?? [],
    [sourceFilter]
  );

  const rankedRecords = useMemo<RankedRecord[]>(() => {
    const recordById = new Map(filteredRecords.map((record) => [record.id, record]));

    return precomputedRankings.map((ranking, index) => {
      const record = recordById.get(ranking.id);

      return {
        ...ranking,
        fieldRank: index + 1,
        source: record?.source ?? "UNKNOWN",
        views: record?.views ?? 0,
        likes: record?.likes ?? 0,
        hasPreview: record?.hasPreview ?? false,
        hasExternalUrl: record?.hasExternalUrl ?? false,
        previewImageUrl: record?.previewImageUrl ?? null,
        externalUrl: record?.externalUrl ?? null,
        builderName: record?.builderName ?? "Unknown Builder",
        builderInstitution: record?.builderInstitution ?? null,
        builderPhotoUrl: record?.builderPhotoUrl ?? null,
        scoringSource: record?.scoringSource ?? "inferred",
        scoringNotes: record?.scoringNotes ?? null,
        rubricReasoning: record?.rubricReasoning ?? emptyReasoning(),
        uncertaintyScore: record?.uncertaintyScore ?? 100,
        uncertaintyBand: record?.uncertaintyBand ?? "high",
        uncertaintyReasons: record?.uncertaintyReasons ?? [],
        artifactReview: record?.artifactReview ?? null,
        reviewPriority: 0
      };
    }).map((record) => ({
      ...record,
      reviewPriority: getReviewPriority(record)
    }));
  }, [filteredRecords, precomputedRankings]);

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const searchedRankings = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return rankedRecords;
    }

    return rankedRecords.filter((record) => {
      const haystack = `${record.name} ${record.oneLineDescription} ${record.fullDescription}`.toLowerCase();
      return haystack.includes(normalizedSearch);
    });
  }, [rankedRecords, searchTerm]);

  const sortedRankings = useMemo(() => {
    const next = [...searchedRankings];

    next.sort((left, right) => compareRankings(left, right, sortKey));

    return next;
  }, [searchedRankings, sortKey]);

  const visibleRankings = useMemo(
    () => sortedRankings.slice(0, displayCount),
    [displayCount, sortedRankings]
  );

  useEffect(() => {
    if (!visibleRankings.length) {
      setSelectedProjectId(null);
      return;
    }

    const hasSelected = visibleRankings.some((record) => record.id === selectedProjectId);
    if (!hasSelected) {
      setSelectedProjectId(visibleRankings[0].id);
    }
  }, [selectedProjectId, visibleRankings]);

  const selectedProject =
    visibleRankings.find((record) => record.id === selectedProjectId) ?? visibleRankings[0] ?? null;
  const leader = rankedRecords[0] ?? null;
  const runnerUp = rankedRecords[1] ?? null;
  const topChartData = rankedRecords.slice(0, 10).map((record) => ({
    name: truncateLabel(record.name, 22),
    winRate: Number(record.winRate.toFixed(1)),
    topThreeRate: Number(record.topThreeRate.toFixed(1))
  }));
  const scatterGroups = useMemo(() => {
    const groups: Record<ChallengeSource, RankedRecord[]> = {
      CODEX: [],
      LEVEL_UP: [],
      UNKNOWN: []
    };

    rankedRecords.forEach((record) => {
      groups[record.source].push(record);
    });

    return groups;
  }, [rankedRecords]);

  const averageWeightedScore = average(rankedRecords.map((record) => record.weightedScore));
  const averageWinRate = average(rankedRecords.map((record) => record.winRate));
  const winSpread = leader && runnerUp ? leader.winRate - runnerUp.winRate : 0;
  const reviewQueue = useMemo(
    () =>
      [...rankedRecords]
        .sort((left, right) => right.reviewPriority - left.reviewPriority)
        .slice(0, 8),
    [rankedRecords]
  );

  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-10 lg:px-10">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-accent2">
            Interactive Results Workspace
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Explore the field. Stress test the ranking. Inspect the winner.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            This route simulates the full <span className="text-white">{meta.submissionCount}</span>
            {" "}projects from <span className="text-white">projects.json</span>. Rankings are deterministic —
            the same {RUN_COUNT}-run panel simulation runs against a fixed seed, so judges see the same
            numbers every visit. Filter, search, and inspect to your heart&apos;s content; the leaderboard
            below won&apos;t shift under you.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setSourceFilter("ALL");
              setSearchTerm("");
              setDisplayCount(50);
              setSortKey("winRate");
            }}
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08]"
          >
            Reset view
          </button>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <OverviewCard
          label="Projects Simulated"
          value={String(filteredRecords.length)}
          hint={`${meta.sourceCounts.CODEX} CODEX · ${meta.sourceCounts.LEVEL_UP} LEVEL_UP`}
        />
        <OverviewCard
          label="Simulation Runs"
          value={String(RUN_COUNT)}
          hint={`${DEFAULT_JUDGE_PANEL.length}-judge panel with narrow rubric drift`}
        />
        <OverviewCard
          label="Projected Winner"
          value={leader?.name ?? "No results"}
          hint={leader ? `${formatPercentage(leader.winRate)} win probability` : "No projects match the filter"}
        />
        <OverviewCard
          label="High-Uncertainty Projects"
          value={String(meta.uncertaintyCoverage.high)}
          hint="Need human review first"
        />
        <OverviewCard
          label="Win Spread"
          value={leader && runnerUp ? formatPercentage(winSpread) : "0.0%"}
          hint="Gap between first and second on win probability"
        />
        <OverviewCard
          label="Field Average"
          value={averageWeightedScore ? averageWeightedScore.toFixed(1) : "0.0"}
          hint={`${averageWinRate.toFixed(1)}% average win rate across the field`}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
          <div className="panel rounded-[30px] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-accent2">Field Controls</p>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Source Filter</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOURCE_OPTIONS.map((option) => (
                  <TogglePill
                    key={option}
                    active={sourceFilter === option}
                    onClick={() => setSourceFilter(option)}
                    label={
                      option === "ALL"
                        ? `All (${meta.submissionCount})`
                        : `${option} (${meta.sourceCounts[option]})`
                    }
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.2em] text-slate-500" htmlFor="project-search">
                Search Projects
              </label>
              <input
                id="project-search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Name, description, or keyword"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Sort Table By</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSortKey(option.id)}
                    className={`rounded-2xl border px-3 py-2 text-sm transition ${
                      sortKey === option.id
                        ? "border-accent/30 bg-accent/12 text-white"
                        : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Rows Visible</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {DISPLAY_OPTIONS.map((count) => (
                  <TogglePill
                    key={count}
                    active={displayCount === count}
                    onClick={() => setDisplayCount(count)}
                    label={String(count)}
                  />
                ))}
                <TogglePill
                  active={displayCount >= sortedRankings.length && sortedRankings.length > 0}
                  onClick={() => setDisplayCount(sortedRankings.length)}
                  label="All"
                />
              </div>
            </div>
          </div>

          <div className="panel rounded-[30px] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-accent2">Live Source Signals</p>
            <div className="mt-5 space-y-4">
              <EvidenceCoverage meta={meta} />
              <ReviewQueue
                items={reviewQueue}
                onSelect={(projectId) => setSelectedProjectId(projectId)}
              />
              <SourceList title="Most Viewed" items={meta.topViewed} valueKey="views" valueLabel="views" />
              <SourceList title="Most Liked" items={meta.topLiked} valueKey="likes" valueLabel="likes" />
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="grid gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
            <div className="panel rounded-[32px] p-6">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent2">Top Win Probability</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Who actually converts runs into wins</h2>
                </div>
                <p className="text-sm text-slate-400">Top 10 in the current simulated field</p>
              </div>

              <div className="h-[340px]">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <BarChart data={topChartData} layout="vertical" margin={{ left: 10, right: 10 }}>
                    <CartesianGrid stroke="rgba(148,163,184,0.08)" horizontal={false} />
                    <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={150}
                      tick={{ fill: "#cbd5e1", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.04)" }}
                      contentStyle={{
                        background: "#0c1124",
                        border: "1px solid rgba(148,163,184,0.14)",
                        borderRadius: 16
                      }}
                    />
                    <Bar dataKey="winRate" radius={[0, 10, 10, 0]} fill="#8b9cff" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="panel rounded-[32px] p-6">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent2">Field Map</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Score versus consistency</h2>
                </div>
                <p className="text-sm text-slate-400">Higher and further right is stronger</p>
              </div>

              <div className="h-[340px]">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <ScatterChart margin={{ top: 10, right: 20, bottom: 16, left: 0 }}>
                    <CartesianGrid stroke="rgba(148,163,184,0.08)" />
                    <XAxis
                      type="number"
                      dataKey="averageScore"
                      name="Average Score"
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                      domain={["dataMin - 1", "dataMax + 1"]}
                    />
                    <YAxis
                      type="number"
                      dataKey="winRate"
                      name="Win Probability"
                      tick={{ fill: "#94a3b8", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ strokeDasharray: "4 4" }}
                      content={<ScatterTooltip />}
                    />
                    <Scatter name="CODEX" data={scatterGroups.CODEX} fill="#8b9cff" />
                    <Scatter name="LEVEL_UP" data={scatterGroups.LEVEL_UP} fill="#4fd1c5" />
                    <Scatter name="UNKNOWN" data={scatterGroups.UNKNOWN} fill="#f59e0b" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid gap-6 2xl:grid-cols-[minmax(0,1.2fr)_380px]">
            <div className="panel overflow-hidden rounded-[32px]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent2">Leaderboard</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {searchedRankings.length} matching projects
                  </h2>
                </div>
                <p className="text-sm text-slate-400">
                  Showing {visibleRankings.length} rows sorted by {getSortLabel(sortKey).toLowerCase()}
                </p>
              </div>

              <div className="max-h-[760px] overflow-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="sticky top-0 z-10 bg-[#0c1124]/95 backdrop-blur">
                    <tr className="border-b border-white/10 text-xs uppercase tracking-[0.18em] text-slate-500">
                      <th className="px-6 py-4">Rank</th>
                      <th className="px-6 py-4">Project</th>
                      <th className="px-6 py-4">Source</th>
                      <th className="px-6 py-4">Win %</th>
                      <th className="px-6 py-4">Top 3 %</th>
                      <th className="px-6 py-4">Avg Rank</th>
                      <th className="px-6 py-4">Avg Score</th>
                      <th className="px-6 py-4">Views</th>
                      <th className="px-6 py-4">Likes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRankings.map((record) => {
                      const selected = record.id === selectedProject?.id;

                      return (
                        <tr
                          key={record.id}
                          className={`cursor-pointer border-b border-white/[0.06] transition ${
                            selected
                              ? "bg-accent/10"
                              : record.fieldRank === 1
                                ? "bg-white/[0.03] hover:bg-white/[0.06]"
                                : "hover:bg-white/[0.04]"
                          }`}
                          onClick={() => setSelectedProjectId(record.id)}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="metric-value text-white">#{record.fieldRank}</span>
                              {record.fieldRank === 1 ? (
                                <span className="rounded-full bg-accent/14 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-accent2">
                                  Lead
                                </span>
                              ) : null}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium text-white">{record.name}</p>
                              <p className="mt-1 max-w-[420px] truncate text-slate-400">
                                {record.oneLineDescription}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <SourceBadge source={record.source} />
                          </td>
                          <td className="metric-value px-6 py-4 text-white">
                            {formatPercentage(record.winRate)}
                          </td>
                          <td className="metric-value px-6 py-4 text-slate-300">
                            {formatPercentage(record.topThreeRate)}
                          </td>
                          <td className="metric-value px-6 py-4 text-slate-300">
                            {record.averageRank.toFixed(2)}
                          </td>
                          <td className="metric-value px-6 py-4 text-slate-300">
                            {record.averageScore.toFixed(2)}
                          </td>
                          <td className="metric-value px-6 py-4 text-slate-400">{record.views}</td>
                          <td className="metric-value px-6 py-4 text-slate-400">{record.likes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {!visibleRankings.length ? (
                  <div className="px-6 py-16 text-center text-sm text-slate-400">
                    No projects match the current filters.
                  </div>
                ) : null}
              </div>
            </div>

            <div className="space-y-6">
              {selectedProject ? (
                <ProjectInspector record={selectedProject} />
              ) : (
                <div className="panel rounded-[32px] p-6 text-sm text-slate-400">
                  Select a project to inspect its score profile and risk factors.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectInspector({ record }: { record: RankedRecord }) {
  const strengths = buildStrengths(record);
  const weaknesses = buildWeaknesses(record);
  const bestCategory = getBestCategory(record);
  const worstCategory = getWorstCategory(record);

  return (
    <div className="panel rounded-[32px] p-6">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
        {record.previewImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={record.previewImageUrl}
            alt={`${record.name} preview`}
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="flex h-56 w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(139,156,255,0.22),transparent_45%),linear-gradient(160deg,rgba(12,17,36,0.95),rgba(8,11,24,0.92))]">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-accent2">No preview image</p>
              <p className="mt-2 text-sm text-slate-400">This project did not provide a visual asset.</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <SourceBadge source={record.source} />
            <ScoringSourceBadge source={record.scoringSource} />
            <UncertaintyBadge band={record.uncertaintyBand} score={record.uncertaintyScore} />
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              Rank #{record.fieldRank}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">{record.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{record.fullDescription}</p>
        </div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            {record.builderPhotoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={record.builderPhotoUrl}
                alt={record.builderName}
                className="h-12 w-12 rounded-full border border-white/10 object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-white">
                {initials(record.builderName)}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Built By</p>
              <p className="truncate text-base font-medium text-white">{record.builderName}</p>
              {record.builderInstitution ? (
                <p className="truncate text-sm text-slate-400">{record.builderInstitution}</p>
              ) : null}
            </div>
          </div>

          {record.externalUrl ? (
            <a
              href={record.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-accent/30 bg-accent/12 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/20"
            >
              Visit Site
            </a>
          ) : (
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
              No live link
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <MetricTile label="Win Probability" value={formatPercentage(record.winRate)} />
        <MetricTile label="Top 3 Probability" value={formatPercentage(record.topThreeRate)} />
        <MetricTile label="Average Rank" value={record.averageRank.toFixed(2)} />
        <MetricTile label="Weighted Score" value={record.weightedScore.toFixed(2)} />
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent2">Judge Confidence</p>
          <p className="metric-value text-sm text-white">{record.uncertaintyScore}/100 uncertainty</p>
        </div>
        <div className="space-y-3">
          {record.uncertaintyReasons.map((reason) => (
            <div
              key={reason}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-7 text-slate-300"
            >
              {reason}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent2">Live Site Review</p>
          <p className="text-xs text-slate-500">
            {record.artifactReview
              ? `${record.artifactReview.fetchStatus}${record.artifactReview.statusCode ? ` (${record.artifactReview.statusCode})` : ""}`
              : "No automated review"}
          </p>
        </div>
        {record.artifactReview ? (
          <div className="space-y-3">
            <ArtifactReviewRow label="Final URL" value={record.artifactReview.finalUrl ?? record.externalUrl ?? "Unavailable"} />
            <ArtifactReviewRow label="Page Title" value={record.artifactReview.title ?? "Unavailable"} />
            <ArtifactReviewRow label="Meta Description" value={record.artifactReview.metaDescription ?? "Unavailable"} />
            <ArtifactReviewRow
              label="Signals"
              value={[
                record.artifactReview.titleMatchesProject ? "title matches project" : "title mismatch",
                record.artifactReview.hasStructuredMetadata ? "metadata present" : "metadata thin",
                record.artifactReview.loginWallLikely ? "login wall likely" : "no login wall",
                record.artifactReview.errorPageLikely ? "error page likely" : "no obvious error page"
              ].join(" · ")}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-7 text-slate-300">
            No automated live-site review is available for this project yet.
          </div>
        )}
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent2">Rubric Breakdown</p>
          <p className="text-xs text-slate-500">
            Best: <span className="capitalize text-white">{bestCategory}</span> · Weakest:{" "}
            <span className="capitalize text-white">{worstCategory}</span>
          </p>
        </div>
        <div className="space-y-4">
          {RUBRIC_ORDER.map((key) => (
            <ScoreBar key={key} label={key} score={record.scores[key]} />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.2em] text-accent2">Rubric Evidence</p>
          <p className="text-xs text-slate-500">
            {record.scoringSource === "inferred"
              ? "Description and artifact signals"
              : record.scoringSource === "seeded_evidence"
                ? "Structured autonomous evidence"
              : record.scoringSource === "manual_evidence"
                ? "Structured evidence override"
                : "Manual rubric score override"}
          </p>
        </div>
        {record.scoringNotes ? (
          <div className="mb-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-7 text-slate-300">
            {record.scoringNotes}
          </div>
        ) : null}
        <div className="space-y-4">
          {RUBRIC_ORDER.map((key) => (
            <ReasonBlock
              key={key}
              label={key}
              reasons={record.rubricReasoning[key]}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <InsightPanel title="Strengths" items={strengths} />
        <InsightPanel title="Weaknesses" items={weaknesses} />
        <InsightPanel
          title="Why It Could Win"
          items={[
            `${record.name} converts strong ${bestCategory} into repeatable first-place finishes.`,
            `Its weighted score sits at ${record.weightedScore.toFixed(2)}, which keeps it in the top band even when judge noise shifts.`,
            record.hasExternalUrl
              ? "It presents as a shippable product, which supports execution and usability."
              : "Its underlying score profile is strong enough to stay competitive even without extra polish signals."
          ]}
        />
        <InsightPanel
          title="Why It Could Lose"
          items={[
            `The weakest axis is ${worstCategory}, which can drag it down when the field is tight.`,
            record.winRate < 10
              ? "It does not create enough first-place finishes to control the outcome consistently."
              : "The top of the field is compressed enough that a small noise swing can still reorder the finalists.",
            record.likes < 5
              ? "Lower community traction leaves less evidence of pull outside the writeup itself."
              : "A stronger engagement profile helps, but it does not fully protect against a more balanced competitor."
          ]}
        />
      </div>
    </div>
  );
}

function OverviewCard({
  label,
  value,
  hint
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="panel rounded-[28px] p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="metric-value mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </div>
  );
}

function MetricTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="metric-value mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function TogglePill({
  active,
  onClick,
  label
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-accent/30 bg-accent/12 text-white"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]"
      }`}
    >
      {label}
    </button>
  );
}

function SourceBadge({ source }: { source: ChallengeSource }) {
  const styles =
    source === "CODEX"
      ? "border-accent/20 bg-accent/12 text-accent2"
      : source === "LEVEL_UP"
        ? "border-accent2/20 bg-accent2/10 text-accent2"
        : "border-amber-400/20 bg-amber-400/10 text-amber-200";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${styles}`}>
      {source}
    </span>
  );
}

function SourceList({
  title,
  items,
  valueKey,
  valueLabel
}: {
  title: string;
  items: { id: string; name: string; views: number; likes: number; source: ChallengeSource }[];
  valueKey: "views" | "likes";
  valueLabel: string;
}) {
  const maxValue = Math.max(...items.map((item) => item[valueKey]), 1);

  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item, index) => (
          <div key={item.id}>
            <div className="mb-2 flex items-start justify-between gap-3 text-sm">
              <div className="min-w-0">
                <p className="truncate text-slate-300">
                  {index + 1}. {item.name}
                </p>
                <div className="mt-1">
                  <SourceBadge source={item.source} />
                </div>
              </div>
              <span className="metric-value shrink-0 text-white">
                {item[valueKey]} {valueLabel}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/5">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2"
                style={{ width: `${(item[valueKey] / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EvidenceCoverage({ meta }: { meta: CodexChallengeMeta }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Rubric Evidence Coverage</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MiniStat label="Manual Scores" value={String(meta.evidenceCoverage.manualScores)} />
        <MiniStat label="Manual Evidence" value={String(meta.evidenceCoverage.manualEvidence)} />
        <MiniStat label="Autonomous Evidence" value={String(meta.evidenceCoverage.seededEvidence)} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <MiniStat label="Fallback Inference" value={String(meta.evidenceCoverage.inferred)} />
        <MiniStat label="Low Uncertainty" value={String(meta.uncertaintyCoverage.low)} />
        <MiniStat label="Medium Uncertainty" value={String(meta.uncertaintyCoverage.medium)} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <MiniStat label="High Uncertainty" value={String(meta.uncertaintyCoverage.high)} />
        <MiniStat label="Artifacts Reviewed" value={String(meta.artifactReviewCoverage.reviewed)} />
        <MiniStat label="Healthy Sites" value={String(meta.artifactReviewCoverage.healthy)} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <MiniStat label="Failed or Timed Out" value={String(meta.artifactReviewCoverage.failed)} />
      </div>
    </div>
  );
}

function ReviewQueue({
  items,
  onSelect
}: {
  items: RankedRecord[];
  onSelect: (projectId: string) => void;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Judge Review Queue</p>
        <p className="text-xs text-slate-500">High rank + high uncertainty</p>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className="w-full rounded-[20px] border border-white/[0.06] bg-white/[0.02] p-4 text-left transition hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium text-white">
                  #{item.fieldRank} {item.name}
                </p>
                <p className="mt-1 truncate text-sm text-slate-400">{item.oneLineDescription}</p>
              </div>
              <UncertaintyBadge band={item.uncertaintyBand} score={item.uncertaintyScore} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
        <span className="capitalize">{label}</span>
        <span className="metric-value text-white">{score}</span>
      </div>
      <div className="h-3 rounded-full bg-white/5">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-accent to-accent2 transition-all duration-500"
          style={{ width: `${Math.min(score, 100)}%` }}
        />
      </div>
    </div>
  );
}

function ArtifactReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm leading-7 text-slate-300">{value}</p>
    </div>
  );
}

function ReasonBlock({ label, reasons }: { label: string; reasons: string[] }) {
  return (
    <div className="rounded-[22px] border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <div className="mt-3 space-y-2">
        {reasons.map((reason) => (
          <p key={reason} className="text-sm leading-7 text-slate-300">
            {reason}
          </p>
        ))}
      </div>
    </div>
  );
}

function InsightPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm uppercase tracking-[0.2em] text-accent2">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-7 text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScatterTooltip({
  active,
  payload
}: {
  active?: boolean;
  payload?: { payload: RankedRecord }[];
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="rounded-2xl border border-white/10 bg-panel px-4 py-3 shadow-glow">
      <p className="font-medium text-white">{point.name}</p>
      <p className="mt-1 text-sm text-slate-400">{point.oneLineDescription}</p>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <span className="text-slate-500">Win %</span>
        <span className="metric-value text-right text-white">{formatPercentage(point.winRate)}</span>
        <span className="text-slate-500">Avg Score</span>
        <span className="metric-value text-right text-white">{point.averageScore.toFixed(2)}</span>
      </div>
    </div>
  );
}

function ScoringSourceBadge({
  source
}: {
  source: RankedRecord["scoringSource"];
}) {
  const styles =
    source === "manual_scores"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
      : source === "manual_evidence"
        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
        : source === "seeded_evidence"
          ? "border-indigo-400/20 bg-indigo-400/10 text-indigo-200"
        : "border-white/10 bg-white/[0.04] text-slate-300";

  const label =
    source === "manual_scores"
      ? "Manual Scores"
      : source === "manual_evidence"
        ? "Manual Evidence"
        : source === "seeded_evidence"
          ? "Autonomous Evidence"
        : "Inferred";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${styles}`}>
      {label}
    </span>
  );
}

function UncertaintyBadge({
  band,
  score
}: {
  band: RankedRecord["uncertaintyBand"];
  score: number;
}) {
  const styles =
    band === "low"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
      : band === "medium"
        ? "border-amber-400/20 bg-amber-400/10 text-amber-200"
        : "border-rose-400/20 bg-rose-400/10 text-rose-200";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] ${styles}`}>
      {band} {score}
    </span>
  );
}

function compareRankings(left: RankedRecord, right: RankedRecord, sortKey: SortKey) {
  switch (sortKey) {
    case "averageRank":
      return left.averageRank - right.averageRank || right.winRate - left.winRate;
    case "likes":
      return right.likes - left.likes || right.winRate - left.winRate;
    case "views":
      return right.views - left.views || right.winRate - left.winRate;
    case "averageScore":
      return right.averageScore - left.averageScore || right.winRate - left.winRate;
    case "topThreeRate":
      return right.topThreeRate - left.topThreeRate || right.winRate - left.winRate;
    case "winRate":
    default:
      return right.winRate - left.winRate || left.averageRank - right.averageRank;
  }
}

function getSortLabel(sortKey: SortKey) {
  return SORT_OPTIONS.find((option) => option.id === sortKey)?.label ?? "Win %";
}

function truncateLabel(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1)}...`;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="metric-value mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function getReviewPriority(record: Omit<RankedRecord, "reviewPriority">) {
  const rankPressure =
    record.fieldRank <= 20 ? 34 : record.fieldRank <= 60 ? 22 : record.fieldRank <= 120 ? 10 : 0;
  const cutoffPressure = record.fieldRank >= 18 && record.fieldRank <= 45 ? 12 : 0;
  const inferredPenalty =
    record.scoringSource === "inferred" ? 18 : record.scoringSource === "manual_evidence" ? 7 : 0;

  return rankPressure + cutoffPressure + inferredPenalty + record.uncertaintyScore;
}

function buildStrengths(record: RankedRecord) {
  return RUBRIC_ORDER.flatMap((key) => {
    const score = record.scores[key];
    if (score < 85) {
      return [];
    }

    return [strengthText(key)];
  }).slice(0, 4);
}

function buildWeaknesses(record: RankedRecord) {
  const weaknesses = RUBRIC_ORDER.flatMap((key) => {
    const score = record.scores[key];
    if (score > 74) {
      return [];
    }

    return [weaknessText(key)];
  });

  return weaknesses.length ? weaknesses.slice(0, 4) : ["No obvious weak category, but the field is crowded enough that small gaps still matter."];
}

function getBestCategory(record: RankedRecord) {
  return [...RUBRIC_ORDER].sort((left, right) => record.scores[right] - record.scores[left])[0];
}

function getWorstCategory(record: RankedRecord) {
  return [...RUBRIC_ORDER].sort((left, right) => record.scores[left] - record.scores[right])[0];
}

function strengthText(category: (typeof RUBRIC_ORDER)[number]) {
  switch (category) {
    case "usefulness":
      return "Solves a clear practical problem.";
    case "execution":
      return "Shows strong build quality and follow-through.";
    case "creativity":
      return "Has a distinctive concept instead of feeling interchangeable.";
    case "clarity":
      return "Explains the product cleanly and makes the pitch easy to follow.";
    case "usability":
      return "Looks easier to adopt and use without extra hand-holding.";
  }
}

function weaknessText(category: (typeof RUBRIC_ORDER)[number]) {
  switch (category) {
    case "usefulness":
      return "May not make the practical payoff obvious enough.";
    case "execution":
      return "Could feel less complete than the strongest builds.";
    case "creativity":
      return "May read as solid but not especially novel.";
    case "clarity":
      return "May need a sharper explanation.";
    case "usability":
      return "Could leave judges unsure how smooth the product really is.";
  }
}

function emptyReasoning() {
  return {
    usefulness: [],
    execution: [],
    creativity: [],
    clarity: [],
    usability: []
  };
}
