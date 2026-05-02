import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import dynamic from "next/dynamic";
import { codexChallengeMeta } from "@/data/codex-challenge";
import { mockProjects } from "@/data/projects";
import staticRankings from "@/data/rankings.json";

const HeroWinner = dynamic(
  () => import("@/components/hero-winner").then((module) => module.HeroWinner),
  {
    ssr: false,
    loading: () => (
      <div className="panel min-h-[28rem] animate-pulse rounded-[28px]" />
    )
  }
);

const PIPELINE_STATS = [
  { label: "Projects judged", value: String(mockProjects.length) },
  { label: "Model", value: "GPT-4o" },
  { label: "Judge panel", value: "3 weighted" },
  { label: "Monte Carlo runs", value: staticRankings.simulations.toLocaleString() },
  { label: "Compute cost", value: "$2.50" },
  { label: "Failures", value: "0" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060816]">
      <section className="relative">
        <div className="relative mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-10">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="WinSim AI logo"
                width={240}
                height={120}
                priority
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={"/docs" as Route}
                className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
              >
                Docs
              </Link>
              <Link
                href="/simulate"
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-slate-200 transition hover:bg-white/5"
              >
                Open Simulator
              </Link>
            </div>
          </header>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div className="max-w-3xl">
              <p className="text-reveal mb-5 text-sm uppercase tracking-[0.28em] text-emerald-400">
                Predictive Judging
              </p>
              <h1 className="text-reveal text-reveal-delay-1 max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                I replayed the judging 500 times to see who actually wins.
              </h1>
              <p className="text-reveal text-reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                WinSim AI simulates the projected winner from all of the active
                &ldquo;Showcased projects&rdquo; on Handshake. GPT-4o judges every entry on a
                5-dimension rubric anchored to live-site evidence, then a 3-judge panel re-runs
                the field 500 times under judge variance.
              </p>

              <div className="text-reveal text-reveal-delay-3 mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                {PIPELINE_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                    <p className="metric-value mt-1 text-base font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-reveal text-reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Link
                  href="/simulate"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_18px_rgba(52,211,153,0.45)] transition hover:bg-emerald-300"
                >
                  View Results
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
                <Link
                  href={"/new-competition" as Route}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
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
                  Simulate a New Competition
                </Link>
              </div>
            </div>

            <HeroWinner />
          </div>

          <div className="text-reveal text-reveal-delay-3 mt-2 mb-12">
            <div className="relative overflow-hidden rounded-[28px] border-2 border-amber-300/40 bg-gradient-to-br from-amber-300/[0.08] via-amber-200/[0.04] to-transparent px-6 py-7 lg:px-10 lg:py-9">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />
              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fcd34d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                    A note from the builder
                  </p>
                  <p className="mt-3 text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-[2rem] lg:leading-snug">
                    I didn&apos;t grade my own project — judging myself in my own
                    simulation would defeat the entire point.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-amber-100/80">
                    WinSim AI is a Codex × Handshake submission too, but the whole idea is to
                    fairly simulate the judging of the other{" "}
                    {codexChallengeMeta.submissionCount} entries — not to put myself on a
                    leaderboard I built. So I deliberately excluded it from the field. The
                    rankings you see are about everyone else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
