import {
  codexChallengeProjectRecords,
  type ChallengeSource
} from "@/data/codex-challenge";
import {
  createSeededRandom,
  runPanelCompetitionSimulation,
  type ProjectRanking
} from "@/lib/simulation";

export type ChallengeFilter = "ALL" | ChallengeSource;

const PRECOMPUTE_SEED = 2048;
const PRECOMPUTE_RUNS = 500;

function rankFor(filter: ChallengeFilter): ProjectRanking[] {
  const filtered =
    filter === "ALL"
      ? codexChallengeProjectRecords
      : codexChallengeProjectRecords.filter((record) => record.source === filter);

  return runPanelCompetitionSimulation(
    filtered.map((record) => record.project),
    PRECOMPUTE_RUNS,
    createSeededRandom(PRECOMPUTE_SEED)
  ).rankings;
}

export const codexChallengeRankings: Record<ChallengeFilter, ProjectRanking[]> = {
  ALL: rankFor("ALL"),
  CODEX: rankFor("CODEX"),
  LEVEL_UP: rankFor("LEVEL_UP"),
  UNKNOWN: rankFor("UNKNOWN")
};

export const codexChallengeRankingsMeta = {
  simulations: PRECOMPUTE_RUNS,
  seed: PRECOMPUTE_SEED
};
