import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "project-atlas",
    type: "project",
    slug: "project-atlas",
    title: "Project Atlas",
    question:
      "What if a portfolio could explain not just what someone did, but how they think?",
    summary:
      "A living, AI-enabled thinking space built around a desk, library, and orb — designed to make collaboration feel tangible before the first conversation.",
    status: "published",
    visibility: "public",
    themes: ["AI", "Product", "Strategy", "Design"],
    capabilities: [
      "Product Thinking",
      "AI",
      "Systems Thinking",
      "Storytelling",
    ],
    tags: ["portfolio", "RAG", "UX"],
    relatedIds: ["principle-ai-judgment", "principle-clarity"],
    context:
      "Most portfolios answer what someone built. Recruiters and collaborators actually need to understand how someone thinks when the answer is unclear.",
    problem:
      "Traditional portfolios flatten judgment into bullet points. They show outputs but hide framing, tradeoffs, empathy, and the questions that shaped the work.",
    whyItMattered:
      "Harshitha is moving toward strategy consulting, product management, and startup advisory — roles where trust comes from thinking style, not just credentials.",
    stakeholders: [
      "Recruiters evaluating fit quickly",
      "Hiring managers assessing judgment",
      "Curious visitors who want depth",
      "Future collaborators",
    ],
    approach:
      "Turn the workspace into the interface. Map desk objects to meaningful content areas. Ground an AI guide in real portfolio evidence. Structure projects as stories that begin with questions.",
    tradeoffs: [
      "Immersive metaphor vs. conventional skim speed — solved with dual navigation",
      "Rich AI vs. hallucination risk — solved with retrieval-only grounding and uncertainty behavior",
      "Visual ambition vs. maintainability — solved with structured content files and phased rollout",
    ],
    outcome:
      "A portfolio that invites exploration, demonstrates structured problem framing, and can grow for years without becoming a template.",
    lessons: [
      "The interface should feel like a room, not a grid.",
      "AI should guide curiosity, not replace it.",
      "Every object on the desk must earn its place.",
    ],
    dossierId: "dossier-project-atlas",
  },
  {
    id: "robotics-rover",
    type: "project",
    slug: "robotics-rover",
    title: "Autonomous Industrial Robotics System",
    question:
      "How do you build an autonomous system clients will actually trust in the field?",
    summary:
      "Mechonyx's fully in-house autonomous robotic system — hardware and software, from concept through customer validation to commercial launch.",
    status: "published",
    visibility: "public",
    themes: ["Robotics", "Systems", "Operations"],
    capabilities: [
      "Systems Thinking",
      "Operations",
      "Client Value",
      "Robotics",
    ],
    tags: ["robotics", "startup", "hardware", "ros2"],
    relatedIds: ["experience-mechonyx-coo", "experience-mechonyx-swe"],
    context:
      "At Mechonyx Automation, the team built a fully in-house autonomous robotic system — ROS2, SLAM, sensor fusion, computer vision — for B2B industrial clients across three target verticals.",
    problem:
      "Clients described equipment problems in urgent language, but the underlying need was risk reduction and operational continuity — not just a robot on a factory floor. And an early-stage startup has to earn trust with every deployment.",
    whyItMattered:
      "Industrial downtime is expensive. Safety incidents are worse. The real product was confidence that someone understood both the technical constraints and the business stakes.",
    stakeholders: [
      "Plant operators",
      "Client operations managers",
      "Engineering team",
      "Investors",
    ],
    approach:
      "Ran structured discovery interviews and competitor benchmarking across 3 verticals. Translated ambiguous pain points into PRDs and feature roadmaps. As lead engineer, refactored sensor architecture to cut cost; as COO, built the financial models and change management frameworks that turned pilots into paid deployments.",
    tradeoffs: [
      "Feature depth vs. deployment speed",
      "Custom client requests vs. maintainable platform",
      "Technical elegance vs. field ruggedness",
      "Maximum sensor coverage vs. unit economics",
    ],
    outcome:
      "Reduced unit hardware cost by 22%, cut client system downtime by 30% across 5+ B2B deployments, increased product-market fit by 40% through hypothesis-driven iteration, and secured seed funding.",
    lessons: [
      "The stated problem is often a symptom. Ask what breaks if you solve the wrong thing.",
      "Operators need clarity, not complexity.",
      "COO work is translation work — between client fear and engineering action.",
    ],
    failures: [
      "Early iterations over-indexed on technical capability before validating what clients would actually trust in the field.",
    ],
    dossierId: "dossier-robotics-rover",
  },
  {
    id: "vr-therapy",
    type: "project",
    slug: "vr-exposure-therapy",
    title: "VR Exposure Therapy App",
    question:
      "How do you turn an ambiguous clinical problem into a tool clinicians can actually use?",
    summary:
      "A clinician-facing PTSD therapy tool — full product lifecycle from Figma to Unity/VR to biometric analytics dashboards.",
    status: "published",
    visibility: "public",
    themes: ["Product", "Human Experience", "Design"],
    capabilities: ["Product Thinking", "UX", "Systems Thinking"],
    tags: ["vr", "unity", "healthcare", "figma"],
    relatedIds: ["principle-customer-shoes"],
    context:
      "PTSD exposure therapy is effective but hard to control and measure in traditional settings. VR offers a controlled, measurable environment — if the tool is designed around how clinicians actually work.",
    problem:
      "The problem space was ambiguous: what does a clinician need to see, control, and trust during a session? The technology was the easy part; the use case definition was the real work.",
    whyItMattered:
      "Healthcare tools fail when they are built for the technology instead of the practitioner. A therapy tool that clinicians do not trust never reaches patients.",
    stakeholders: [
      "Clinicians running exposure therapy sessions",
      "Patients with PTSD",
      "Research and clinical partners",
    ],
    approach:
      "Owned the full product lifecycle: validated end-user use cases with clinician input, designed flows in Figma, built the VR experience in Unity with Firebase backend, and added Python-driven biometric dashboards so sessions produce measurable clinical signals.",
    tradeoffs: [
      "Immersion fidelity vs. clinician control during sessions",
      "Rich biometric data vs. dashboard simplicity",
      "Research flexibility vs. partner-ready polish",
    ],
    outcome:
      "Translated an ambiguous problem space into a structured, partner-ready solution with biometric dashboards — demonstrating end-to-end product ownership from discovery to delivery.",
    lessons: [
      "In healthcare, trust is the product. Everything else is implementation.",
      "The hardest design work happens before the first screen is drawn.",
    ],
    dossierId: "dossier-vr-therapy",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
