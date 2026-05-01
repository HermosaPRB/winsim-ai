import Link from "next/link";
import dynamic from "next/dynamic";
import {
  codexChallengeMeta,
  codexChallengeProjectRecords
} from "@/data/codex-challenge";

const ResultsShowcase = dynamic(
  () => import("@/components/results-showcase").then((module) => module.ResultsShowcase),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto w-full max-w-[1600px] px-6 py-10 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-32 animate-pulse rounded-[28px] border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
        <div className="mt-6 h-[36rem] animate-pulse rounded-[32px] border border-white/10 bg-white/[0.03]" />
      </div>
    )
  }
);

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent2">
            Codex Handshake Results
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Interactive simulation analysis across the imported project field.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
        >
          Back Home
        </Link>
      </div>

      <ResultsShowcase records={codexChallengeProjectRecords} meta={codexChallengeMeta} />
    </main>
  );
}
