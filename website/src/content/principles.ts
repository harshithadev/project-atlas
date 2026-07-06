import type { Principle } from "./types";

export const principles: Principle[] = [
  {
    id: "principle-outcome",
    type: "principle",
    slug: "start-with-the-outcome",
    title: "Start with the outcome",
    statement: "Start with the outcome.",
    summary: "Define what success looks like before debating solutions.",
    status: "published",
    visibility: "public",
    themes: ["Strategy", "Consulting"],
    capabilities: ["Strategy", "Client Value"],
    tags: ["framing"],
    relatedIds: ["project-robotics-rover"],
    explanation:
      "Before building, shipping, or recommending — ask what changes for the person on the other side. Outcomes create shared language across technical and business stakeholders.",
    example:
      "On the robotics rover project, the team stopped optimizing for features and started asking what the client would lose if inspection failed. That reframing changed every subsequent decision.",
  },
  {
    id: "principle-customer-shoes",
    type: "principle",
    slug: "wear-the-customers-shoes",
    title: "Wear the customer's shoes",
    statement: "Wear the customer's shoes.",
    summary: "Design for the person living inside the problem.",
    status: "published",
    visibility: "public",
    themes: ["Human Experience", "Psychology"],
    capabilities: ["UX", "Stakeholder Alignment"],
    tags: ["empathy"],
    relatedIds: ["vr-therapy", "robotics-rover"],
    explanation:
      "You are not designing for the problem you personally perceive. You are designing for the person experiencing it — with their incentives, fears, and constraints.",
    example:
      "The VR exposure therapy app succeeded only after redesigning it around what a clinician needs to see and control mid-session — not around what the technology could do. In healthcare, trust is the product.",
  },
  {
    id: "principle-ask-why",
    type: "principle",
    slug: "ask-why-until-the-shape-changes",
    title: "Ask why until the shape changes",
    statement: "Ask why until the shape changes.",
    summary: "Keep questioning until the problem itself transforms.",
    status: "published",
    visibility: "public",
    themes: ["Strategy", "Systems"],
    capabilities: ["Consulting", "Systems Thinking"],
    tags: ["decomposition"],
    relatedIds: ["project-atlas"],
    explanation:
      "The first problem statement is rarely the real one. Repeated 'why' questions reveal underlying structures, stakeholder tensions, and better frames.",
    example:
      "Project Atlas began as 'build a portfolio.' Asking why enough times revealed the real question: how do you make thinking visible and trustworthy?",
  },
  {
    id: "principle-break-complexity",
    type: "principle",
    slug: "break-complexity-into-obvious-pieces",
    title: "Break complexity into obvious pieces",
    statement: "Break complexity into obvious pieces.",
    summary: "Make each smaller answer feel obvious before building back up.",
    status: "published",
    visibility: "public",
    themes: ["Systems", "Operations"],
    capabilities: ["Systems Thinking", "Operations"],
    tags: ["decomposition"],
    relatedIds: ["project-robotics-rover"],
    explanation:
      "Empathetic decomposition means breaking messy wholes into simpler questions — each answer clear enough that the path forward feels inevitable.",
    example:
      "Industrial inspection was not one problem. It was safety, downtime, reporting, operator trust, and hardware constraints — each needing its own clear answer.",
  },
  {
    id: "principle-clarity",
    type: "principle",
    slug: "trust-is-built-through-clarity",
    title: "Trust is built through clarity",
    statement: "Trust is built through clarity.",
    summary: "Beautiful systems are understandable systems.",
    status: "published",
    visibility: "public",
    themes: ["Communication", "Design"],
    capabilities: ["Communication", "Storytelling"],
    tags: ["trust"],
    relatedIds: ["project-ogs-communications"],
    explanation:
      "Confidence without clarity is performance. Trust comes when people can see your reasoning, understand your tradeoffs, and believe you will say when you do not know.",
    example:
      "Ask Harshitha AI admits uncertainty rather than inventing answers — because a guide that exaggerates destroys more trust than one that says 'I am not sure.'",
  },
  {
    id: "principle-ai-judgment",
    type: "principle",
    slug: "ai-should-create-space-for-human-judgment",
    title: "AI should create space for human judgment",
    statement: "AI should create space for human judgment.",
    summary: "Automate friction, not thinking.",
    status: "published",
    visibility: "public",
    themes: ["AI", "Strategy"],
    capabilities: ["AI", "Product Thinking"],
    tags: ["ai", "ethics"],
    relatedIds: ["project-atlas"],
    explanation:
      "The goal is not to automate everything, but to amplify what is uniquely human. AI should reduce administrative burden so people can focus on relationships, strategy, and judgment.",
    example:
      "Project Atlas uses AI to help visitors navigate complexity — not to replace the evidence, stories, and thinking that make Harshitha worth knowing.",
  },
];

export function getPrinciple(slug: string) {
  return principles.find((p) => p.slug === slug);
}
