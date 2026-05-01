import Link from "next/link";

export const metadata = {
  title: "How WinSim AI got built · Docs",
  description:
    "A build journal: how staring at the rubric became the entire product idea, and how I shipped a 577-project AI judge for $2.50."
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#060816]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-400">
            Build Journal
          </p>
          <p className="mt-2 text-sm text-slate-400">
            How WinSim AI got built · why the idea, what the pipeline does, what I cut on purpose.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            Back Home
          </Link>
          <Link
            href="/simulate"
            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            See the leaderboard
          </Link>
        </div>
      </div>

      <article className="mx-auto w-full max-w-3xl px-6 pb-24 pt-6 lg:px-10">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-emerald-400">
            Build journal · Codex × Handshake 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            How WinSim AI actually got built.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The most useful thing I could build wasn&apos;t another product for users. It was a
            product for the judges. Here&apos;s how I got there.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-400 sm:grid-cols-4">
            <Meta label="Author" value="Debi Aggers" />
            <Meta label="Read time" value="6 min" />
            <Meta label="Total cost" value="$2.50" />
            <Meta label="Failures" value="0 / 577" />
          </div>
        </header>

        <Section heading="I didn&apos;t have an idea.">
          <p>
            The hackathon dropped on me with the same panic anyone gets staring at a blank canvas.
            I had a stack of ideas that all felt mid — a todo app with vibes, another GPT wrapper,
            a clever-but-niche tool nobody actually asked for. None of it felt like it would cut
            through hundreds of other submissions, and I knew it.
          </p>
          <p>
            So I stopped. I went and read the rubric.
          </p>
        </Section>

        <Section heading="The rubric is the brief.">
          <p>
            Five dimensions: usefulness, execution, creativity, clarity, usability. Each one a
            1–100 score that gets averaged into a weighted total. Usefulness pulls the biggest
            single weight (25%). Execution ties it (also 25%). Together they&apos;re more than
            half the score.
          </p>
          <p>
            I sat with that for a minute and asked the obvious question:{" "}
            <em>useful to whom?</em>
          </p>
        </Section>

        <Pullquote>
          If usefulness is what wins, the most useful thing I could possibly build is a tool for
          the judges themselves.
        </Pullquote>

        <Section heading="To the judges.">
          <p>
            A real human is about to read 577 project descriptions and assign 5 scores to every
            one of them. That&apos;s nearly three thousand individual judgments, plus rationale,
            plus comparison, plus a final ranking. They will get tired. They will get
            inconsistent. They will under-attend the 400th submission relative to the 5th. And
            yet — they have to.
          </p>
          <p>
            If <em>usefulness</em> is the lever that wins this hackathon, the most useful thing I
            could possibly build isn&apos;t another product for users. It&apos;s a product for the
            people who actually have to grade 577 of these. Something that does the work nobody
            wants to do but everyone needs done.
          </p>
          <p>That was the whole insight. Everything else was just wiring.</p>
        </Section>

        <Section heading="So I built the judge.">
          <p>
            WinSim AI is an AI judge that reads every Codex × Handshake submission, fetches the
            live site, scores it on the same five-dimension rubric, then re-runs a three-judge
            panel through 500 Monte Carlo iterations to predict the actual finishing order. The
            output is a deterministic leaderboard — same seed every visit, no rerun theater — and
            a chatbot that lets a real judge ask questions in natural language about any of the
            top 50 entries.
          </p>
          <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Projects judged" value="577" />
            <Stat label="Compute cost" value="$2.50" />
            <Stat label="Wall-clock runtime" value="27 min" />
            <Stat label="Retry failures" value="0" />
          </div>
        </Section>

        <Section heading="How it actually works.">
          <p>Three pipelines, one direction.</p>
          <h3 className="mt-8 text-xl font-medium text-white">1. Live-site review</h3>
          <p>
            A scripted artifact fetcher hits every project&apos;s external URL and captures the
            HTTP status, page title, meta description, OG image, content length, and flags for
            login walls or error pages. The AI judge sees this <em>before</em> it scores — so a
            project with a working URL whose page title actually matches the project name gets
            credit for shipping. A project whose URL 404s, sits behind a login wall, or returns a
            stub gets capped on execution and usability regardless of how polished the writeup
            reads. This one signal does more for fairness than any prompt-engineering tweak.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">2. The judge</h3>
          <p>
            GPT-4o, anchored to a calibrated rubric prompt with explicit score bands. 95+ is
            reserved for the top 1–2% of the field. Sub-65 is for clearly weak entries. Explicit
            caps fire when artifacts are missing — execution can&apos;t exceed 75 with no live
            URL; usability can&apos;t exceed 65 if there&apos;s no usable artifact at all. The
            model returns five integer scores and a 2–3 sentence judge&apos;s note in strict JSON
            schema. Temperature 0.2 for stability without total rigidity.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">3. The panel</h3>
          <p>
            Three judge profiles — <strong>Balanced Product</strong>,{" "}
            <strong>Technical</strong>, <strong>UX & Novelty</strong> — each with slightly
            different rubric weights and ±2-point noise. The Monte Carlo runs the panel against
            the field 500 times under a fixed seed (1337). Win probability is the share of runs
            where a project finishes first. Top-3 rate is the share where it finishes in the top
            three. Average rank is the average of its rank across all 500 simulated rounds.
          </p>
        </Section>

        <Section heading="Methodology choices that matter.">
          <h3 className="text-xl font-medium text-white">Why no rerun button?</h3>
          <p>
            Because the noise budget is small enough that rerunning is theater — it just lets a
            user hunt for a result they like. Determinism is honesty. The leaderboard you see is
            the same leaderboard the next person sees. That&apos;s the entire point.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">Why GPT-4o and not mini?</h3>
          <p>
            Calibration. gpt-4o-mini drifts toward the 80s for almost everything; the field flat-
            lines at the median and the simulator stops differentiating. GPT-4o uses the full
            range when the prompt tells it to. The actual distribution: 1% below 50, 27% in the
            mid-band (50–69), 32% solid (70–79), 28% strong (80–89), 4% exceptional (90+). That
            shape is what makes the win-probability math meaningful.
          </p>

          <h3 className="mt-8 text-xl font-medium text-white">
            Why is my own project not on the leaderboard?
          </h3>
          <p>
            Because it would be a conflict of interest. The whole purpose of WinSim AI is to
            simulate the judging of <em>other</em> entries; if I included myself in my own
            simulator, the result would be tainted on its face. So I deliberately excluded it
            from the field. That&apos;s called out in the homepage notice in big letters because
            it should be the first thing a judge sees.
          </p>
        </Section>

        <Pullquote>
          Determinism is honesty. The leaderboard you see is the same leaderboard the next
          person sees.
        </Pullquote>

        <Section heading="What I&apos;d do with another week.">
          <ul className="space-y-3 list-disc pl-5 marker:text-emerald-400/60">
            <li>
              Push the panel up from the Monte Carlo step into the score step. Run each project
              through three differently-prompted GPT-4o calls and average their scores. Right
              now &quot;3 judges&quot; lives in the variance layer; running it at the scoring
              layer would tighten calibration further.
            </li>
            <li>
              Calibrate against a hand-scored sample. Have a real human score 30 projects, then
              compute correlation against the AI scores. Publish the inter-rater agreement
              number. Without that, &quot;98th percentile&quot; is a precise-sounding claim with
              no error bar — and that bothers me more than it should.
            </li>
            <li>
              A live-update path. Right now the simulation only re-runs when{" "}
              <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[0.85em] text-emerald-200">
                projects.json
              </code>{" "}
              changes. Hooking that to a cron and Codex&apos;s own submission feed would make
              the leaderboard truly live.
            </li>
            <li>
              A per-project chat that includes the full live-site fetch — not just the metadata
              summary. The judge model could then quote the actual page when explaining a
              ranking.
            </li>
          </ul>
        </Section>

        <Section heading="What this is not.">
          <p>
            This is <em>not</em> a substitute for human judging. It&apos;s a tool to help the
            people who are doing the judging — by surfacing front-runners, flagging weak
            submissions, and answering questions in natural language about why a project ranks
            where it does. The model is wrong sometimes. The amber notice on the homepage isn&apos;t
            false modesty; it&apos;s the honest framing of what this thing actually is.
          </p>
        </Section>

        <Section heading="The bet.">
          <p>
            If usefulness is 25% of the score, and the judges have to score 577 projects, then
            the maximum-usefulness submission isn&apos;t another product for users. It&apos;s a
            product for the judges themselves.
          </p>
          <p className="mt-4 text-emerald-300">
            That was the whole insight. The rest was just wiring.
          </p>
        </Section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            WinSim AI · Build Journal
          </p>
          <Link
            href="/simulate"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_18px_rgba(52,211,153,0.45)] transition hover:bg-emerald-300"
          >
            Open the leaderboard
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
        </footer>
      </article>
    </main>
  );
}

function Section({
  heading,
  children
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {heading}
      </h2>
      <div className="space-y-4 text-base leading-8 text-slate-300">{children}</div>
    </section>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-emerald-400/60 pl-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">
      {children}
    </blockquote>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="metric-value mt-1.5 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
