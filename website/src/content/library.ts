import type { LibraryEntry } from "./types";

export const libraryEntries: LibraryEntry[] = [
  {
    id: "library-atomic-habits",
    type: "library-entry",
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    resourceType: "book",
    readingStatus: "read",
    summary:
      "Small changes compound. Identity shapes behavior more than motivation speeches.",
    status: "published",
    visibility: "public",
    themes: ["Psychology", "Human Behavior", "Systems"],
    capabilities: ["Behavioral Design", "Product Thinking"],
    tags: ["habits", "behavior"],
    relatedIds: ["vr-therapy"],
    keyIdea:
      "Habits are not just actions — they are votes for the kind of person you are becoming.",
    reflection:
      "This book changed how I think about product design. Users do not wake up wanting to 'engage with features.' They wake up trying to become someone. That framing shapes how I approach behavior-adjacent products — from therapy tools to onboarding flows.",
    changedThinking:
      "I stopped asking 'what should the app do?' and started asking 'what identity is the user trying to reinforce?'",
  },
  {
    id: "library-thinking-fast-slow",
    type: "library-entry",
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    resourceType: "book",
    readingStatus: "reading",
    summary:
      "We are not as rational as we think — and understanding cognitive bias is a strategic skill.",
    status: "published",
    visibility: "public",
    themes: ["Psychology", "Strategy"],
    capabilities: ["Consulting", "Human Behavior"],
    tags: ["bias", "decision-making"],
    relatedIds: ["principle-ask-why"],
    keyIdea:
      "System 1 thinking is fast and intuitive. System 2 is slow and deliberate. Most failures happen when we confuse the two.",
    reflection:
      "Kahneman gave me language for something I felt in client conversations: people often decide emotionally and justify rationally afterward. Good strategy work makes space for both.",
    changedThinking:
      "I now build decision frameworks that account for how people actually decide — not how they say they decide.",
  },
  {
    id: "library-design-everyday-things",
    type: "library-entry",
    slug: "design-of-everyday-things",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    resourceType: "book",
    readingStatus: "read",
    summary:
      "Good design is invisible. Bad design blames the user.",
    status: "published",
    visibility: "public",
    themes: ["Design", "Human Experience"],
    capabilities: ["UX", "Systems Thinking"],
    tags: ["design", "affordances"],
    relatedIds: ["project-ogs-communications"],
    keyIdea:
      "Affordances and signifiers guide behavior without instructions.",
    reflection:
      "Norman explains why a café with no signage can still work — the space guides you. I think about this constantly: in physical spaces, in interfaces, in institutional emails.",
    changedThinking:
      "I look for where systems are asking users to do cognitive work the designer should have done.",
  },
];

export function getLibraryEntry(slug: string) {
  return libraryEntries.find((e) => e.slug === slug);
}
