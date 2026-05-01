# WinSim AI

A predictive judging simulator built for the Codex × Handshake hackathon. It runs every submission through a calibrated GPT-4o judge anchored to live-site evidence, then re-runs a 3-judge panel through 500 Monte Carlo simulations to predict the actual finishing order.

The build journal lives at [`/docs`](/docs) once running.

## Quick start

```bash
npm install
cp .env.example .env.local        # then add your real OPENAI_API_KEY
npm run dev
```

Open `http://localhost:3000`.

## Re-running the simulation pipeline

The shipped data was generated once. To regenerate from a fresh `projects.json`:

```bash
npm run judge          # AI-judge all 577 projects with GPT-4o (~$2.50, ~25 min)
npm run precompute     # rebuild data/rankings.json from the judged scores
npm run dev            # serve
```

## Deploy (Vercel)

1. Push to GitHub. The `.gitignore` already excludes `.env*`.
2. Import the repo into Vercel.
3. **Set `OPENAI_API_KEY`** in Project → Settings → Environment Variables for *Production* and *Preview*.
4. Deploy.

The `/api/chat` endpoint is the only thing that calls the OpenAI API at runtime; the rest of the app reads precomputed JSON.

## Security notes

- `OPENAI_API_KEY` is server-only; never bundled to the client.
- `/api/chat` enforces an in-memory IP rate limit (8 requests / minute), 32 KB request size cap, 12-message history cap, 2 KB per message, and 600-token max output.
- User-submitted message roles are filtered to `user` / `assistant`; system-role injection is rejected.
- For higher-traffic deploys, swap the in-memory rate limit for Upstash Redis or Vercel KV — the current limiter is per-instance and resets on cold starts.

## Routes

- `/` — landing page with projected winner card
- `/simulate` — full leaderboard, charts, and the AI Judge chat
- `/docs` — build journal
- `/new-competition` — custom-rubric upload demo
- `/results` — alternative inferred-scoring view
- `/api/chat` — server-side streaming chat endpoint

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Recharts · OpenAI / Vercel AI SDK · Zod
