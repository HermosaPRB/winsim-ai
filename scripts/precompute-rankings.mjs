import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SIMULATIONS = 500;
const SEED = 1337;

const JUDGE_PANEL = [
  {
    id: "balanced-product",
    label: "Balanced Product Judge",
    weights: { usefulness: 0.27, execution: 0.26, creativity: 0.17, clarity: 0.15, usability: 0.15 },
    noiseRange: 2.2
  },
  {
    id: "technical-judge",
    label: "Technical Judge",
    weights: { usefulness: 0.23, execution: 0.31, creativity: 0.18, clarity: 0.13, usability: 0.15 },
    noiseRange: 2
  },
  {
    id: "ux-novelty-judge",
    label: "UX and Novelty Judge",
    weights: { usefulness: 0.23, execution: 0.22, creativity: 0.24, clarity: 0.14, usability: 0.17 },
    noiseRange: 2.4
  }
];

const RUBRIC_WEIGHTS = {
  usefulness: 0.25,
  execution: 0.25,
  creativity: 0.2,
  clarity: 0.15,
  usability: 0.15
};

function createSeededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function weightedScore(scores, weights) {
  return (
    scores.usefulness * weights.usefulness +
    scores.execution * weights.execution +
    scores.creativity * weights.creativity +
    scores.clarity * weights.clarity +
    scores.usability * weights.usability
  );
}

function judgeNoise(random, range) {
  return random() * range * 2 - range;
}

function momentumLabel(winProbability) {
  if (winProbability >= 35) return "Front-runner";
  if (winProbability >= 20) return "Contender";
  if (winProbability >= 10) return "Watchlist";
  return "Long shot";
}

async function main() {
  const projectsRaw = await fs.readFile(path.join(root, "data", "projects.json"), "utf8");
  const projects = JSON.parse(projectsRaw);
  if (!Array.isArray(projects) || projects.length === 0) {
    console.error("data/projects.json is missing or empty. Run `npm run judge` first.");
    process.exit(1);
  }

  const random = createSeededRandom(SEED);

  const winCounts = new Map();
  const top3Counts = new Map();
  const totalRanks = new Map();
  const totalScores = new Map();
  const baseWeighted = new Map();

  for (const p of projects) {
    winCounts.set(p.id, 0);
    top3Counts.set(p.id, 0);
    totalRanks.set(p.id, 0);
    totalScores.set(p.id, 0);
    baseWeighted.set(p.id, weightedScore(p.scores, RUBRIC_WEIGHTS));
  }

  for (let run = 0; run < SIMULATIONS; run += 1) {
    const ranked = projects
      .map((p) => {
        const panelScore =
          JUDGE_PANEL.reduce(
            (sum, judge) => sum + weightedScore(p.scores, judge.weights) + judgeNoise(random, judge.noiseRange),
            0
          ) / JUDGE_PANEL.length;
        return { id: p.id, finalScore: panelScore };
      })
      .sort((a, b) => b.finalScore - a.finalScore);

    ranked.forEach((entry, index) => {
      const rank = index + 1;
      totalRanks.set(entry.id, totalRanks.get(entry.id) + rank);
      totalScores.set(entry.id, totalScores.get(entry.id) + entry.finalScore);
      if (rank === 1) winCounts.set(entry.id, winCounts.get(entry.id) + 1);
      if (rank <= 3) top3Counts.set(entry.id, top3Counts.get(entry.id) + 1);
    });
  }

  const rankings = projects
    .map((p) => {
      const winCount = winCounts.get(p.id);
      const top3Count = top3Counts.get(p.id);
      const winProbability = (winCount / SIMULATIONS) * 100;
      return {
        id: p.id,
        winProbability,
        topThreeRate: (top3Count / SIMULATIONS) * 100,
        averageRank: totalRanks.get(p.id) / SIMULATIONS,
        averageScore: totalScores.get(p.id) / SIMULATIONS,
        weightedScore: baseWeighted.get(p.id),
        winCount,
        top3Count,
        momentumLabel: momentumLabel(winProbability)
      };
    })
    .sort((a, b) => {
      if (b.winProbability !== a.winProbability) return b.winProbability - a.winProbability;
      return a.averageRank - b.averageRank;
    })
    .map((entry, index) => ({ rank: index + 1, ...entry }));

  const payload = {
    generatedAt: new Date().toISOString(),
    simulations: SIMULATIONS,
    seed: SEED,
    judgePanel: JUDGE_PANEL.map((j) => ({ id: j.id, label: j.label, weights: j.weights, noiseRange: j.noiseRange })),
    rankings
  };

  await fs.writeFile(
    path.join(root, "data", "rankings.json"),
    JSON.stringify(payload, null, 2),
    "utf8"
  );

  console.log(`Wrote data/rankings.json — ${rankings.length} projects, ${SIMULATIONS} simulations, seed ${SEED}.`);
  console.log(`Leader: ${rankings[0] && projects.find((p) => p.id === rankings[0].id)?.name} (${rankings[0]?.winProbability.toFixed(1)}% win probability)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
