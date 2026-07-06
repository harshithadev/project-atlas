# Project Atlas — Placeholder Tracker

Updated after wiring in `docs/my-context.md`, résumé, and portrait (Jul 6, 2026).

## Resolved

| Item | Status |
|------|--------|
| Portrait photo | ✅ `website/public/images/portrait.jpeg` (shown in workspace scene) |
| Résumé PDF | ✅ `website/public/Harshitha-Devineni-Resume.pdf` (download works on `/resume`) |
| `my-context.md` | ✅ All content rewritten against it + résumé |
| Email | ✅ `hd2810@nyu.edu` (from résumé) |
| LinkedIn | ✅ `linkedin.com/in/harshitha-devineni` (from résumé) |
| Experience dates/metrics | ✅ Real dates and metrics from my-context + résumé |
| Certifications | ✅ Google Data Analytics, IBM Program Manager, NYU + VIT degrees |

## Still placeholder

| Item | Where | What's needed |
|------|-------|---------------|
| Certificate images | `/certifications` page | Real certificate images → `website/public/images/certs/`; currently generic SVG frames |
| Cert issue dates | `certifications.ts` | Issue dates for Google Data Analytics + IBM Program Manager certs |
| Cert verification links | `certifications.ts` | Credly/Coursera verification URLs if you want them shown |
| GitHub | `profile.ts` | Omitted — add URL if you want it on Contact page |
| `OPENAI_API_KEY` | `website/.env.local` | Optional — without it, Ask Harshitha uses retrieval-only answers (no LLM) |
| Custom domain | Vercel | Using Vercel default for now (as decided) |
| Hotspot positions | `workspace.ts` | Approximate — fine-tune once you view on your screen |

## Workspace scene

- Backgrounds are **AI-generated clean scenes** (no baked-in UI) modeled on the inspo: `inspo/workspace-day-final.png` and `inspo/workspace-night-final.png`, copied into `website/public/images/`. Regenerate or replace with real photos anytime.
- The framed portrait in the scene was regenerated using `assets/Portrait.jpeg` as reference — verify the likeness is acceptable; regenerate if not.

## Content decisions to review

- **Dropped** SMART Alarm and OGS Communications projects — neither appears in `my-context.md` or the résumé. Replaced with the **VR Exposure Therapy App** (from résumé) alongside Project Atlas and the Mechonyx robotics system. Say the word if you want SMART Alarm or OGS back.
- **Dropped** Kaggle 5-year / Adobe Ambassador / DTU Hackathon certs — mentioned in older docs but absent from my-context and résumé. Easy to restore if real.
- Library reflections (Atomic Habits, Thinking Fast and Slow, Design of Everyday Things) and 3 weekly notes are **generated musings** — review voice/accuracy and replace over time.
