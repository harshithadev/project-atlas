# Project Atlas — Website

Harshitha Devineni's interactive thinking-space portfolio.

## Quick start

```bash
cd website
npm install
cp .env.example .env.local   # optional: add OPENAI_API_KEY for enhanced AI
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
cd website
npm run build
```

Deploy to Vercel with root directory set to `website`.

## Structure

- `src/app/` — Next.js routes (homepage is single-screen workspace)
- `src/content/` — All portfolio content (TypeScript data files)
- `src/components/` — UI components (workspace, Ask Harshitha, layout)
- `src/lib/rag.ts` — Minimal retrieval + optional OpenAI
- `public/images/` — Workspace backgrounds from inspo

## Placeholders

See [PLACEHOLDERS.md](../PLACEHOLDERS.md) for everything still needing real assets.
