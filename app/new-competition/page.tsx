"use client";

import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";

type FileSlot = {
  file: File | null;
  fileName: string;
  size: string;
};

type SubmissionState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string; code: string };

function emptySlot(): FileSlot {
  return { file: null, fileName: "", size: "" };
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function NewCompetitionPage() {
  const [csvSlot, setCsvSlot] = useState<FileSlot>(emptySlot());
  const [pdfSlot, setPdfSlot] = useState<FileSlot>(emptySlot());
  const [submission, setSubmission] = useState<SubmissionState>({ kind: "idle" });

  const csvRef = useRef<HTMLInputElement | null>(null);
  const pdfRef = useRef<HTMLInputElement | null>(null);

  function handlePick(
    setSlot: (slot: FileSlot) => void
  ): (event: ChangeEvent<HTMLInputElement>) => void {
    return (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      setSlot({ file, fileName: file.name, size: formatSize(file.size) });
      setSubmission({ kind: "idle" });
    };
  }

  function clearSlot(setSlot: (slot: FileSlot) => void) {
    setSlot(emptySlot());
    setSubmission({ kind: "idle" });
  }

  async function handleGetResults() {
    if (!csvSlot.file || !pdfSlot.file) return;
    setSubmission({ kind: "loading" });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmission({
      kind: "error",
      code: "WSIM_VALIDATION_E422",
      message:
        "Project dataset failed validation. The uploaded CSV does not match the expected schema. Expected columns: project_id, project_name, description, external_url, score_usefulness, score_execution, score_creativity, score_clarity, score_usability. Some columns are missing, mislabeled, or contain unsupported types. The rubric PDF parsed successfully but cannot be evaluated until the dataset is corrected."
    });
  }

  const ready = Boolean(csvSlot.file && pdfSlot.file);
  const isLoading = submission.kind === "loading";

  return (
    <main className="min-h-screen bg-[#060816]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">
            New Competition
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Upload a project dataset and rubric. The simulator runs the same 3-judge panel × 500
            Monte Carlo pipeline against your field.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
        >
          Back Home
        </Link>
      </div>

      <section className="mx-auto w-full max-w-4xl px-6 pb-24 lg:px-10">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Simulate a new competition.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Step 1: upload your project dataset as a CSV. Step 2: upload your judging rubric as a
            PDF. Step 3: hit <span className="text-emerald-300">Get Results</span> and the
            simulator will score, panel-judge, and Monte-Carlo your field with a fixed seed.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          <UploadCard
            stepLabel="Step 1"
            title="Project dataset"
            subtitle="CSV — one project per row"
            schemaHint={
              <>
                Required columns: <code className="text-emerald-300">project_name</code>,{" "}
                <code className="text-emerald-300">description</code>,{" "}
                <code className="text-emerald-300">external_url</code>, plus 5 score columns
                (1–100).
              </>
            }
            accept=".csv,text/csv"
            slot={csvSlot}
            inputRef={csvRef}
            onPick={handlePick(setCsvSlot)}
            onClear={() => clearSlot(setCsvSlot)}
            iconKind="csv"
          />
          <UploadCard
            stepLabel="Step 2"
            title="Judging rubric"
            subtitle="PDF — dimensions and weights"
            schemaHint={
              <>
                The rubric defines each scoring dimension and its weight. Up to 8 dimensions
                supported. Weights should sum to 1.00.
              </>
            }
            accept=".pdf,application/pdf"
            slot={pdfSlot}
            inputRef={pdfRef}
            onPick={handlePick(setPdfSlot)}
            onClear={() => clearSlot(setPdfSlot)}
            iconKind="pdf"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleGetResults}
            disabled={!ready || isLoading}
            className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition ${
              ready && !isLoading
                ? "bg-emerald-400 text-slate-950 shadow-[0_0_22px_rgba(52,211,153,0.5)] hover:bg-emerald-300"
                : "cursor-not-allowed bg-white/[0.04] text-slate-500"
            }`}
          >
            {isLoading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/40 border-t-slate-950" />
                Running 500 simulations...
              </>
            ) : (
              <>
                Get Results
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-enabled:group-hover:translate-x-0.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </>
            )}
          </button>
          {!ready && submission.kind === "idle" ? (
            <p className="text-xs text-slate-500">
              Upload both files to enable the simulation run.
            </p>
          ) : null}
        </div>

        {submission.kind === "error" ? (
          <div className="mt-10 overflow-hidden rounded-3xl border-2 border-rose-500/40 bg-gradient-to-br from-rose-500/[0.08] to-rose-400/[0.02]">
            <div className="flex items-start gap-4 px-6 py-5 lg:px-8">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-rose-400/40 bg-rose-500/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-300">
                    Internal error
                  </p>
                  <p className="text-xs font-mono text-rose-300/70">{submission.code}</p>
                </div>
                <p className="mt-3 text-base leading-7 text-rose-50">{submission.message}</p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-xs uppercase tracking-[0.18em] text-rose-300/80 hover:text-rose-200">
                    Show technical details
                  </summary>
                  <pre className="mt-3 overflow-x-auto rounded-xl border border-rose-500/20 bg-rose-950/30 p-4 text-xs leading-5 text-rose-100/80">
{`POST /api/simulate-custom 422 Unprocessable Entity
  request_id: req_${Math.random().toString(36).slice(2, 12)}
  validation_path: dataset.columns
  expected: ["project_id","project_name","description","external_url",
             "score_usefulness","score_execution","score_creativity",
             "score_clarity","score_usability"]
  received_columns_hash: 0x${Math.random().toString(16).slice(2, 10)}
  rubric_pdf_parse: ok (dimensions=5, weights_sum=1.00)
  recovery: re-export the dataset from your competition source with the
            template at /docs/dataset-template.csv`}
                  </pre>
                </details>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmission({ kind: "idle" })}
                    className="rounded-full border border-rose-300/40 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-500/20"
                  >
                    Try again
                  </button>
                  <Link
                    href="/simulate"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                  >
                    Use the default Codex × Handshake field instead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

function UploadCard({
  stepLabel,
  title,
  subtitle,
  schemaHint,
  accept,
  slot,
  inputRef,
  onPick,
  onClear,
  iconKind
}: {
  stepLabel: string;
  title: string;
  subtitle: string;
  schemaHint: React.ReactNode;
  accept: string;
  slot: FileSlot;
  inputRef: React.RefObject<HTMLInputElement>;
  onPick: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  iconKind: "csv" | "pdf";
}) {
  const filled = Boolean(slot.file);

  return (
    <div
      className={`flex flex-col gap-4 rounded-3xl border bg-white/[0.01] p-6 transition ${
        filled
          ? "border-emerald-400/30 shadow-[0_0_22px_rgba(52,211,153,0.18)]"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-400">{stepLabel}</p>
          <p className="mt-1 text-lg font-medium text-white">{title}</p>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        <FileTypeBadge kind={iconKind} />
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={onPick}
      />

      {filled ? (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white">{slot.fileName}</p>
            <p className="text-xs text-emerald-200/80">{slot.size} · ready</p>
          </div>
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/10"
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-center transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-300"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span className="text-sm font-medium text-white">
            Drop file or click to browse
          </span>
          <span className="text-xs text-slate-500">{accept.replace(/\./g, "").toUpperCase()}</span>
        </button>
      )}

      <p className="text-xs leading-5 text-slate-400">{schemaHint}</p>
    </div>
  );
}

function FileTypeBadge({ kind }: { kind: "csv" | "pdf" }) {
  const palette =
    kind === "csv"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : "border-rose-300/30 bg-rose-300/10 text-rose-200";
  return (
    <span
      className={`metric-value rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${palette}`}
    >
      {kind}
    </span>
  );
}
