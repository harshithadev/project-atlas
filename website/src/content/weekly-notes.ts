import type { WeeklyNote } from "./types";

export const weeklyNotes: WeeklyNote[] = [
  {
    id: "weekly-note-first-desk",
    type: "weekly-note",
    slug: "the-first-note-on-the-desk",
    title: "The first note on the desk",
    date: "2026-07-06",
    summary:
      "Why this portfolio begins with a workspace instead of a résumé.",
    status: "published",
    visibility: "public",
    themes: ["Design", "Identity", "Systems"],
    capabilities: ["Reflection", "Storytelling"],
    tags: ["portfolio", "workspace"],
    relatedIds: ["project-atlas"],
    observation:
      "I kept thinking about why most portfolios feel like they are trying to prove something.",
    insight:
      "I do not want this one to feel like proof first. I want it to feel like an invitation — a desk where unfinished questions live.",
    question: "What would change if every portfolio started with a question instead of a title?",
    body: `I kept thinking about why most portfolios feel like they are trying to prove something.

I do not want this one to feel like proof first. I want it to feel like an invitation.

A desk felt right because that is where unfinished questions live. A library felt right because ideas rarely arrive alone. The orb felt right because AI should help people find meaning, not replace the work of understanding.

This website begins with a room because I want people to feel like they are entering the place where thinking happens.`,
  },
  {
    id: "weekly-note-cafe-ux",
    type: "weekly-note",
    slug: "what-a-quiet-cafe-taught-me",
    title: "What a quiet café taught me about UX",
    date: "2026-07-01",
    summary:
      "A space with no signage still guided everyone perfectly. That is not accident — it is design.",
    status: "published",
    visibility: "public",
    themes: ["Design", "Human Experience", "NYC"],
    capabilities: ["UX", "Observation"],
    tags: ["cafes", "behavior"],
    relatedIds: ["library-design-everyday-things", "principle-customer-shoes"],
    observation:
      "A quiet café in the West Village had no signs telling people where to order or wait. Everyone still knew.",
    insight:
      "The counter height, the line formation, the menu placement — the space was doing the UX work. Nobody needed instructions because the environment was speaking.",
    question: "How many digital products are failing because they ask users to read instructions the interface should have made unnecessary?",
    body: `A quiet café in the West Village had no signs telling people where to order or wait. Everyone still knew.

The counter height created a natural queue. The menu faced the line, not the seating area. The barista's position signaled where to start. The space was doing the UX work.

I thought about every institutional email I have written, every interface I have critiqued, every product that blames users for 'not reading the instructions.'

Maybe the instructions are the failure.`,
  },
  {
    id: "weekly-note-ai-space",
    type: "weekly-note",
    slug: "ai-should-create-space",
    title: "AI should create space, not fill it",
    date: "2026-06-24",
    summary:
      "The best AI tools I have used do not make me feel replaced. They make me feel like I have more room to think.",
    status: "published",
    visibility: "public",
    themes: ["AI", "Strategy"],
    capabilities: ["AI", "Reflection"],
    tags: ["ai", "judgment"],
    relatedIds: ["project-atlas", "principle-ai-judgment"],
    observation:
      "I notice a difference between AI tools that rush to answer and AI tools that help me see what I am missing.",
    insight:
      "The goal is not to automate everything, but to amplify what is uniquely human. Friction is not always the enemy — sometimes it is where judgment lives.",
    question: "What would responsible AI look like if we optimized for trust instead of speed?",
    body: `I notice a difference between AI tools that rush to answer and AI tools that help me see what I am missing.

The rush-to-answer tools feel impressive for thirty seconds and hollow after that. The space-creating tools feel quieter — and more useful.

That is why Ask Harshitha on this site is a guide, not a impersonator. It should help you find evidence, not invent it.

The goal is not to automate everything, but to amplify what is uniquely human.`,
  },
];

export function getWeeklyNote(slug: string) {
  return weeklyNotes.find((n) => n.slug === slug);
}
