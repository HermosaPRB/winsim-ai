import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const projectsPath = path.join(root, "projects.json");
const outputPath = path.join(root, "data", "project-artifact-reviews.json");

const CONCURRENCY = Number(process.env.ARTIFACT_REVIEW_CONCURRENCY ?? 8);
const TIMEOUT_MS = Number(process.env.ARTIFACT_REVIEW_TIMEOUT_MS ?? 6000);

const APP_KEYWORDS = [
  "dashboard",
  "editor",
  "studio",
  "chat",
  "simulator",
  "app",
  "workspace",
  "tool",
  "play",
  "game",
  "launch",
  "get started"
];

const LOGIN_PATTERNS = [
  "sign in",
  "log in",
  "login",
  "create account",
  "join waitlist",
  "access code"
];

const ERROR_PATTERNS = [
  "404",
  "not found",
  "error",
  "application error",
  "site unavailable",
  "forbidden"
];

const projects = JSON.parse(await readFile(projectsPath, "utf8"));

const items = projects
  .filter((project) => typeof project.externalUrl === "string" && project.externalUrl.startsWith("http"))
  .map((project) => ({
    id: String(project.id),
    name: String(project.name ?? ""),
    url: project.externalUrl
  }));

const results = await runWithConcurrency(items, CONCURRENCY, reviewArtifact);

await writeFile(outputPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");

const summary = results.reduce(
  (acc, item) => {
    acc.total += 1;
    acc[item.fetchStatus] += 1;
    return acc;
  },
  { total: 0, ok: 0, timeout: 0, error: 0, invalid: 0 }
);

console.log(JSON.stringify(summary, null, 2));

async function reviewArtifact(item) {
  let url;
  try {
    url = new URL(item.url);
  } catch {
    return baseResult(item, "invalid");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "CodexRankArtifactReviewer/1.0"
      }
    });

    const html = await response.text();
    const title = extractTagText(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const metaDescription = extractMetaContent(html, "description");
    const ogTitle = extractMetaProperty(html, "og:title");
    const ogDescription = extractMetaProperty(html, "og:description");
    const ogImageUrl = extractMetaProperty(html, "og:image");
    const textSample = collapseWhitespace(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
    );
    const lower = `${title ?? ""} ${metaDescription ?? ""} ${textSample.slice(0, 4000)}`.toLowerCase();

    return {
      id: item.id,
      url: item.url,
      reviewedAt: new Date().toISOString(),
      fetchStatus: response.ok ? "ok" : "error",
      finalUrl: response.url || item.url,
      statusCode: response.status,
      title,
      metaDescription,
      ogTitle,
      ogDescription,
      ogImageUrl,
      contentLength: html.length,
      textSampleLength: textSample.length,
      appKeywordCount: countKeywordHits(lower, APP_KEYWORDS),
      titleMatchesProject: title
        ? normalizeText(title).includes(normalizeText(item.name)) ||
          normalizeText(item.name).includes(normalizeText(title))
        : false,
      loginWallLikely: matchesAny(lower, LOGIN_PATTERNS),
      errorPageLikely: !response.ok || matchesAny(lower, ERROR_PATTERNS),
      hasStructuredMetadata: Boolean(metaDescription || ogTitle || ogDescription || ogImageUrl),
      notes: response.ok ? undefined : `HTTP ${response.status}`
    };
  } catch (error) {
    if (error?.name === "AbortError") {
      return baseResult(item, "timeout");
    }

    return {
      ...baseResult(item, "error"),
      notes: error instanceof Error ? error.message : "Unknown fetch error"
    };
  } finally {
    clearTimeout(timeout);
  }
}

function baseResult(item, fetchStatus) {
  return {
    id: item.id,
    url: item.url,
    reviewedAt: new Date().toISOString(),
    fetchStatus,
    finalUrl: null,
    statusCode: null,
    title: null,
    metaDescription: null,
    ogTitle: null,
    ogDescription: null,
    ogImageUrl: null,
    contentLength: null,
    textSampleLength: null,
    appKeywordCount: 0,
    titleMatchesProject: false,
    loginWallLikely: false,
    errorPageLikely: fetchStatus !== "ok",
    hasStructuredMetadata: false
  };
}

async function runWithConcurrency(items, concurrency, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (nextIndex < items.length) {
        const index = nextIndex;
        nextIndex += 1;
        results[index] = await worker(items[index]);
      }
    })
  );

  return results;
}

function extractTagText(html, regex) {
  const match = html.match(regex);
  return match?.[1] ? collapseWhitespace(match[1]) : null;
}

function extractMetaContent(html, name) {
  const regex = new RegExp(
    `<meta[^>]+name=["']${escapeRegExp(name)}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  return extractTagText(html, regex);
}

function extractMetaProperty(html, property) {
  const regex = new RegExp(
    `<meta[^>]+property=["']${escapeRegExp(property)}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  return extractTagText(html, regex);
}

function collapseWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function countKeywordHits(text, keywords) {
  return keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0);
}

function matchesAny(text, patterns) {
  return patterns.some((pattern) => text.includes(pattern));
}

function normalizeText(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
