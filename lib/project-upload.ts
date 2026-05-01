import { normalizeIncomingProjects } from "@/lib/project-schema";

export function parseProjectUpload(fileName: string, rawText: string) {
  const parsed = parseUploadedFile(fileName, rawText);
  return normalizeIncomingProjects(parsed);
}

function parseUploadedFile(fileName: string, rawText: string): unknown {
  const normalizedName = fileName.toLowerCase();

  if (normalizedName.endsWith(".json")) {
    return JSON.parse(rawText) as unknown;
  }

  if (normalizedName.endsWith(".csv")) {
    return parseCsvProjects(rawText);
  }

  try {
    return JSON.parse(rawText) as unknown;
  } catch {
    return parseCsvProjects(rawText);
  }
}

function parseCsvProjects(rawText: string) {
  const rows = rawText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (rows.length < 2) {
    throw new Error("Invalid CSV. Include a header row and at least one project row.");
  }

  const headers = parseCsvLine(rows[0]).map((header) => header.trim().toLowerCase());
  const requiredHeaders = [
    "name",
    "description",
    "usefulness",
    "execution",
    "creativity",
    "clarity",
    "usability"
  ];

  for (const header of requiredHeaders) {
    if (!headers.includes(header)) {
      throw new Error(`Invalid CSV. Missing required column "${header}".`);
    }
  }

  return rows.slice(1).map((row) => {
    const values = parseCsvLine(row);
    const record = Object.fromEntries(
      headers.map((header, index) => [header, values[index] ?? ""])
    );

    return {
      name: record.name ?? "",
      description: record.description ?? "",
      scores: {
        usefulness: Number(record.usefulness),
        execution: Number(record.execution),
        creativity: Number(record.creativity),
        clarity: Number(record.clarity),
        usability: Number(record.usability)
      }
    };
  });
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}
