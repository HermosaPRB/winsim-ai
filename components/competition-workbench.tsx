"use client";

import { ChangeEvent, useRef, useState } from "react";
import { Project, mockProjects } from "@/data/projects";
import { ProjectPreviewGrid } from "@/components/project-preview-grid";
import { SimulationDashboard } from "@/components/simulation-dashboard";
import { parseProjectUpload } from "@/lib/project-upload";

export function CompetitionWorkbench() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [uploadMessage, setUploadMessage] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isCustomField = projects !== mockProjects;

  async function handleProjectUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const rawText = await file.text();
      const normalizedProjects = parseProjectUpload(file.name, rawText);
      setProjects(normalizedProjects);
      setUploadMessage({
        kind: "success",
        text: `Loaded ${normalizedProjects.length} projects from your file. The simulation re-ran instantly with a fixed seed.`
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Invalid file. Upload a JSON or CSV project dataset.";
      setUploadMessage({ kind: "error", text: message });
    } finally {
      event.target.value = "";
    }
  }

  function resetToDefault() {
    setProjects(mockProjects);
    setUploadMessage(null);
  }

  return (
    <>
      <SimulationDashboard
        id="dashboard"
        eyebrow={isCustomField ? "Custom Competition" : "Predicted Leaderboard"}
        heading={
          isCustomField
            ? "Your custom field, simulated"
            : "Predicted leaderboard"
        }
        description={
          isCustomField
            ? "Your uploaded projects feed the same 3-judge panel and 500-run Monte Carlo simulation as the default field. Identical seed, identical math."
            : `Final standings for the ${mockProjects.length} Codex × Handshake submissions, judged by GPT-4o anchored to live-site evidence and replayed 500 times under judge variance.`
        }
        projects={projects}
      />

      <section
        id="projects"
        className="mx-auto w-full max-w-7xl px-6 pt-8 pb-12 lg:px-10"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">
              Top of the field
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Current contenders
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            The 12 highest-ranked projects from the simulation. Click{" "}
            <span className="text-emerald-300">Ask a question</span> to quiz the AI judge, or{" "}
            <span className="text-emerald-300">Visit</span> to open the live project.
          </p>
        </div>
        <ProjectPreviewGrid projects={projects} />
      </section>

      <section
        id="custom-field"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 pb-12 lg:px-10"
      >
        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.26em] text-emerald-400">
                Custom Field
              </p>
              <h3 className="mt-2 text-xl font-medium text-white">
                Run the simulation against your own dataset
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Upload a CSV or JSON file with project name, description, and 5 rubric scores
                (1-100). The leaderboard, charts, and analysis update instantly with a fixed seed.
                Stays local; no upload leaves your browser.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.csv,application/json,text/csv"
                className="hidden"
                onChange={handleProjectUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                Upload CSV or JSON
              </button>
              {isCustomField ? (
                <button
                  type="button"
                  onClick={resetToDefault}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  Reset to default field
                </button>
              ) : null}
            </div>
          </div>

          {uploadMessage ? (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                uploadMessage.kind === "success"
                  ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                  : "border-rose-500/20 bg-rose-500/10 text-rose-200"
              }`}
            >
              {uploadMessage.text}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
