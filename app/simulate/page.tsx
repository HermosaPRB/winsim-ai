import Link from "next/link";
import dynamic from "next/dynamic";
import { HowItWorksSection } from "@/components/how-it-works-section";

const CompetitionWorkbench = dynamic(
  () => import("@/components/competition-workbench").then((module) => module.CompetitionWorkbench),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="h-[40rem] animate-pulse rounded-[32px] border border-white/10 bg-white/[0.03]" />
      </div>
    )
  }
);

export default function SimulatePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">
            Live Leaderboard
          </p>
          <p className="mt-2 text-sm text-slate-400">
            577 Codex × Handshake projects · GPT-4o judge · 500 Monte Carlo runs · seed 1337
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={"/docs" as import("next").Route}
            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            Docs
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            Back Home
          </Link>
        </div>
      </div>

      <CompetitionWorkbench />
      <HowItWorksSection />
    </main>
  );
}
