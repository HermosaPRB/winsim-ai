import { Project } from "@/data/projects";

type RubricWeights = {
  usefulness: number;
  execution: number;
  creativity: number;
  clarity: number;
  usability: number;
};

const RUBRIC_WEIGHTS: RubricWeights = {
  usefulness: 0.25,
  execution: 0.25,
  creativity: 0.2,
  clarity: 0.15,
  usability: 0.15
} as const;

export type SimulatedProjectResult = {
  id: string;
  name: string;
  oneLineDescription: string;
  fullDescription: string;
  scores: Project["scores"];
  weightedScore: number;
  averageScore: number;
  averageRank: number;
  winCount: number;
  top3Count: number;
  winProbability: number;
  judgesNote?: string;
};

export type ProjectRanking = SimulatedProjectResult & {
  winRate: number;
  topThreeRate: number;
  momentumLabel: string;
};

export type JudgeProfile = {
  id: string;
  label: string;
  weights: RubricWeights;
  noiseRange: number;
};

type RankedProjectRun = {
  id: string;
  name: string;
  oneLineDescription: string;
  fullDescription: string;
  weightedScore: number;
  finalScore: number;
};

type SimulationResult = {
  simulations: number;
  rankings: ProjectRanking[];
  summary: string[];
};

type RandomSource = () => number;

export const DEFAULT_JUDGE_PANEL: JudgeProfile[] = [
  {
    id: "balanced-product",
    label: "Balanced Product Judge",
    weights: {
      usefulness: 0.27,
      execution: 0.26,
      creativity: 0.17,
      clarity: 0.15,
      usability: 0.15
    },
    noiseRange: 2.2
  },
  {
    id: "technical-judge",
    label: "Technical Judge",
    weights: {
      usefulness: 0.23,
      execution: 0.31,
      creativity: 0.18,
      clarity: 0.13,
      usability: 0.15
    },
    noiseRange: 2
  },
  {
    id: "ux-novelty-judge",
    label: "UX and Novelty Judge",
    weights: {
      usefulness: 0.23,
      execution: 0.22,
      creativity: 0.24,
      clarity: 0.14,
      usability: 0.17
    },
    noiseRange: 2.4
  }
];

export function calculateWeightedScore(project: Project, customWeights?: RubricWeights): number {
  return calculateWeightedScoreWithWeights(project.scores, customWeights ?? RUBRIC_WEIGHTS);
}

export function calculateWeightedScoreWithWeights(
  scores: Project["scores"],
  weights: RubricWeights
): number {
  return (
    scores.usefulness * weights.usefulness +
    scores.execution * weights.execution +
    scores.creativity * weights.creativity +
    scores.clarity * weights.clarity +
    scores.usability * weights.usability
  );
}

function generateJudgeNoise(random: RandomSource, range = 5): number {
  return random() * range * 2 - range;
}

export function rankProjects(
  scoredProjects: RankedProjectRun[]
): RankedProjectRun[] {
  return [...scoredProjects].sort((a, b) => b.finalScore - a.finalScore);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

function momentumLabel(winProbability: number) {
  if (winProbability >= 35) return "Front-runner";
  if (winProbability >= 20) return "Contender";
  if (winProbability >= 10) return "Watchlist";
  return "Long shot";
}

export function runSimulation(
  projects: Project[],
  runs = 500,
  random: RandomSource = Math.random,
  customWeights?: RubricWeights
): SimulatedProjectResult[] {
  const winCounts = new Map<string, number>();
  const top3Counts = new Map<string, number>();
  const totalRanks = new Map<string, number>();
  const totalScores = new Map<string, number>();
  const weightedScores = new Map<string, number>();

  for (const project of projects) {
    winCounts.set(project.id, 0);
    top3Counts.set(project.id, 0);
    totalRanks.set(project.id, 0);
    totalScores.set(project.id, 0);
    weightedScores.set(project.id, calculateWeightedScore(project, customWeights));
  }

  for (let run = 0; run < runs; run += 1) {
    const rankedProjects = rankProjects(
      projects.map((project) => {
        const weightedScore = weightedScores.get(project.id) ?? 0;
        return {
          id: project.id,
          name: project.name,
          oneLineDescription: project.oneLineDescription,
          fullDescription: project.fullDescription,
          weightedScore,
          finalScore: weightedScore + generateJudgeNoise(random)
        };
      })
    );

    rankedProjects.forEach((project, index) => {
      const rank = index + 1;
      totalRanks.set(project.id, (totalRanks.get(project.id) ?? 0) + rank);
      totalScores.set(project.id, (totalScores.get(project.id) ?? 0) + project.finalScore);

      if (rank === 1) {
        winCounts.set(project.id, (winCounts.get(project.id) ?? 0) + 1);
      }

      if (rank <= 3) {
        top3Counts.set(project.id, (top3Counts.get(project.id) ?? 0) + 1);
      }
    });
  }

  return projects
    .map((project) => {
      const winCount = winCounts.get(project.id) ?? 0;
      const top3Count = top3Counts.get(project.id) ?? 0;
      const averageRank = (totalRanks.get(project.id) ?? 0) / runs;
      const averageScore = (totalScores.get(project.id) ?? 0) / runs;
      const winProbability = (winCount / runs) * 100;

      return {
        id: project.id,
        name: project.name,
        oneLineDescription: project.oneLineDescription,
        fullDescription: project.fullDescription,
        scores: project.scores,
        weightedScore: weightedScores.get(project.id) ?? 0,
        averageScore,
        averageRank,
        winCount,
        top3Count,
        winProbability,
        judgesNote: project.judgesNote
      };
    })
    .sort((a, b) => {
      if (b.winProbability !== a.winProbability) {
        return b.winProbability - a.winProbability;
      }
      return a.averageRank - b.averageRank;
    });
}

export function runCompetitionSimulation(
  projects: Project[],
  simulations = 500,
  random: RandomSource = Math.random,
  customWeights?: RubricWeights
): SimulationResult {
  const rankings = runSimulation(projects, simulations, random, customWeights).map((project) => ({
    ...project,
    winRate: project.winProbability,
    topThreeRate: (project.top3Count / simulations) * 100,
    momentumLabel: momentumLabel(project.winProbability)
  }));

  const [first, second, third] = rankings;

  const summary: string[] = [];

  if (first) {
    summary.push(
      `${first.name} leads on win probability at ${formatPercentage(first.winProbability)} with an average rank of ${first.averageRank.toFixed(2)}.`
    );
  }

  if (second) {
    summary.push(
      `${second.name} remains the closest challenger, which keeps the top of the field competitive across repeated runs.`
    );
  }

  if (third) {
    summary.push(
      `${third.name} converts enough top-three finishes to stay in upset range when judge noise breaks its way.`
    );
  }

  return {
    simulations,
    rankings,
    summary
  };
}

export function runPanelCompetitionSimulation(
  projects: Project[],
  simulations = 500,
  random: RandomSource = Math.random,
  judgePanel: JudgeProfile[] = DEFAULT_JUDGE_PANEL
): SimulationResult {
  const winCounts = new Map<string, number>();
  const top3Counts = new Map<string, number>();
  const totalRanks = new Map<string, number>();
  const totalScores = new Map<string, number>();
  const weightedScores = new Map<string, number>();

  for (const project of projects) {
    winCounts.set(project.id, 0);
    top3Counts.set(project.id, 0);
    totalRanks.set(project.id, 0);
    totalScores.set(project.id, 0);
    weightedScores.set(project.id, calculateWeightedScore(project));
  }

  for (let run = 0; run < simulations; run += 1) {
    const rankedProjects = rankProjects(
      projects.map((project) => {
        const panelScore =
          judgePanel.reduce((sum, judge) => {
            const weighted = calculateWeightedScoreWithWeights(project.scores, judge.weights);
            return sum + weighted + generateJudgeNoise(random, judge.noiseRange);
          }, 0) / judgePanel.length;

        return {
          id: project.id,
          name: project.name,
          oneLineDescription: project.oneLineDescription,
          fullDescription: project.fullDescription,
          weightedScore: weightedScores.get(project.id) ?? 0,
          finalScore: panelScore
        };
      })
    );

    rankedProjects.forEach((project, index) => {
      const rank = index + 1;
      totalRanks.set(project.id, (totalRanks.get(project.id) ?? 0) + rank);
      totalScores.set(project.id, (totalScores.get(project.id) ?? 0) + project.finalScore);

      if (rank === 1) {
        winCounts.set(project.id, (winCounts.get(project.id) ?? 0) + 1);
      }

      if (rank <= 3) {
        top3Counts.set(project.id, (top3Counts.get(project.id) ?? 0) + 1);
      }
    });
  }

  const rankings = projects
    .map((project) => {
      const winCount = winCounts.get(project.id) ?? 0;
      const top3Count = top3Counts.get(project.id) ?? 0;
      const averageRank = (totalRanks.get(project.id) ?? 0) / simulations;
      const averageScore = (totalScores.get(project.id) ?? 0) / simulations;
      const winProbability = (winCount / simulations) * 100;

      return {
        id: project.id,
        name: project.name,
        oneLineDescription: project.oneLineDescription,
        fullDescription: project.fullDescription,
        scores: project.scores,
        weightedScore: weightedScores.get(project.id) ?? 0,
        averageScore,
        averageRank,
        winCount,
        top3Count,
        winProbability
      };
    })
    .sort((a, b) => {
      if (b.winProbability !== a.winProbability) {
        return b.winProbability - a.winProbability;
      }
      return a.averageRank - b.averageRank;
    })
    .map((project) => ({
      ...project,
      winRate: project.winProbability,
      topThreeRate: (project.top3Count / simulations) * 100,
      momentumLabel: momentumLabel(project.winProbability)
    }));

  const [first, second, third] = rankings;
  const summary: string[] = [];

  if (first) {
    summary.push(
      `${first.name} leads a ${judgePanel.length}-judge panel simulation at ${formatPercentage(first.winProbability)} win probability.`
    );
  }

  if (second) {
    summary.push(
      `${second.name} remains the closest challenger once the judge panel is averaged together.`
    );
  }

  if (third) {
    summary.push(
      `${third.name} stays in contention by converting enough top-three panel finishes to threaten an upset.`
    );
  }

  return {
    simulations,
    rankings,
    summary
  };
}

export function createSeededRandom(seed: number): RandomSource {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}
