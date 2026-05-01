const fs = require('fs');
const crypto = require('crypto');

const raw = JSON.parse(fs.readFileSync('projects.json', 'utf8'));

// Simple seeded random function
function seededRandom(seedStr) {
  const hash = crypto.createHash('sha256').update(seedStr).digest('hex');
  const num = parseInt(hash.slice(0, 8), 16);
  return num / 0xffffffff;
}

function getScore(seed, base = 75, variance = 20) {
  return Math.floor(base + seededRandom(seed) * variance);
}

const projects = raw.map(p => {
  const seed = p.id;
  
  // Use real data to influence scores a bit
  const usefulnessScore = Math.min(100, 70 + (p.viewCount || 0) / 10);
  const executionScore = Math.min(100, 75 + (p.reactions?.length || 0) * 2);

  return {
    id: p.id,
    name: p.name || "Untitled",
    oneLineDescription: p.description ? (p.description.length > 120 ? p.description.slice(0, 117) + '...' : p.description) : "No description",
    fullDescription: p.description || "No description provided.",
    externalUrl: p.externalUrl,
    previewImageUrl: p.previewImageUrl,
    scores: {
      usefulness: Math.floor(usefulnessScore),
      execution: Math.floor(executionScore),
      creativity: getScore(seed + "creativity"),
      clarity: getScore(seed + "clarity"),
      usability: getScore(seed + "usability")
    }
  };
});

const tsContent = `export type Project = {
  id: string;
  name: string;
  oneLineDescription: string;
  fullDescription: string;
  externalUrl?: string;
  previewImageUrl?: string;
  scores: {
    usefulness: number;
    execution: number;
    creativity: number;
    clarity: number;
    usability: number;
  };
};

export const mockProjects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync('data/projects.ts', tsContent);
console.log('Converted ' + projects.length + ' projects!');
