export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-accent2">
            How the Simulation Works
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Three steps.
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-400">
          Score the field, add variability, replay the contest.
        </p>
      </div>

      <div className="panel rounded-[30px] p-5 lg:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                  step: "1",
                  title: "AI judge scores each project",
                  body: "GPT-4o reads the writeup plus a live-site review (HTTP status, page title, meta description, error/login flags) and produces calibrated 1–100 scores across the 5 rubric dimensions."
                },
                {
                  step: "2",
                  title: "Three-judge panel adds variability",
                  body: "A balanced, technical, and UX/novelty judge each apply slightly different rubric weights and ±2-point noise, mirroring how real judges disagree at the margins."
                },
                {
                  step: "3",
                  title: "500 deterministic runs",
                  body: "The panel re-judges the field 500 times under fixed seed. Win probability is the share of runs where each project finishes first."
                }
              ].map((item) => (
                <div
                  key={item.step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.22em] text-accent2">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-accent2">Formula</p>
            <div className="mt-6 flex flex-col gap-3 text-center lg:mt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-lg font-medium text-white">
                Base Score
              </div>
              <div className="text-xl font-semibold text-slate-500">+</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-lg font-medium text-white">
                Judge Variability
              </div>
              <div className="text-xl font-semibold text-slate-500">=</div>
              <div className="rounded-2xl bg-gradient-to-r from-accent/20 to-accent2/20 px-4 py-4 text-lg font-medium text-white">
                Simulated Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
