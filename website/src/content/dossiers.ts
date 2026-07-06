import type { ThinkingDossier } from "./types";

export const dossiers: ThinkingDossier[] = [
  {
    id: "dossier-project-atlas",
    type: "dossier",
    slug: "project-atlas-dossier",
    title: "Project Atlas — Thinking Dossier",
    projectId: "project-atlas",
    originalQuestion:
      "What if a portfolio could explain not just what someone did, but how they think?",
    summary:
      "Process notes behind the portfolio-as-thinking-space concept.",
    status: "published",
    visibility: "public",
    themes: ["AI", "Product", "Design"],
    capabilities: ["Product Thinking", "AI", "Systems Thinking"],
    tags: ["dossier"],
    relatedIds: ["project-atlas"],
    problemFraming:
      "Recruiters spend 30 seconds on a portfolio. Hiring managers need 10 minutes of depth. Curious visitors want to feel something. One flat page cannot serve all three.",
    assumptions: [
      "Visitors trust process more than polish alone",
      "An immersive metaphor works only with fallback navigation",
      "AI must be grounded or it destroys trust",
      "The site must be maintainable for years",
    ],
    researchNotes: [
      {
        title: "Portfolio landscape scan",
        note: "Most portfolios use dark themes, project grids, and tech stack badges.",
        implication: "Light, warm, question-first approach will feel distinctly different.",
      },
      {
        title: "Recruiter behavior",
        note: "Recruiters want to understand thinking style and role fit fast, not scroll through feature lists.",
        implication: "Dual navigation: immersive room for explorers, conventional nav and résumé access for recruiters.",
      },
    ],
    decisionLog: [
      {
        option: "Standard portfolio grid",
        decision: "Rejected",
        reason: "Flattens thinking into outputs. Feels like every other site.",
      },
      {
        option: "Desk-as-interface metaphor",
        decision: "Selected",
        reason: "Maps naturally to content areas. Feels personal and invites exploration.",
      },
      {
        option: "Full RAG AI at launch",
        decision: "Deferred",
        reason: "Start with minimal grounded AI. Full RAG in V2 once content is stable.",
      },
    ],
    lessons: [
      "The metaphor must never sacrifice usability.",
      "Content architecture matters more than visual effects.",
      "Build the simplest version that preserves the soul.",
    ],
  },
  {
    id: "dossier-robotics-rover",
    type: "dossier",
    slug: "robotics-rover-dossier",
    title: "Autonomous Robotics System — Thinking Dossier",
    projectId: "robotics-rover",
    originalQuestion:
      "How do you build an autonomous system clients will actually trust in the field?",
    summary: "Process notes from Mechonyx's autonomous system development and commercialization.",
    status: "published",
    visibility: "public",
    themes: ["Robotics", "Operations"],
    capabilities: ["Systems Thinking", "Operations", "Client Value"],
    tags: ["dossier"],
    relatedIds: ["robotics-rover"],
    problemFraming:
      "Client urgency focused on equipment problems. The underlying need was risk reduction and operational continuity — and for an early-stage startup, every deployment had to build trust.",
    assumptions: [
      "Clients care about downtime cost more than technical elegance",
      "Field operators need simple interfaces, not feature depth",
      "Unit economics constrain sensor architecture as much as physics does",
    ],
    researchNotes: [
      {
        title: "Discovery interviews across 3 verticals",
        note: "Different clients described the same underlying fear in different languages — safety, cost, reputation.",
        implication: "Change management and reporting are part of the product, not an afterthought.",
      },
      {
        title: "Competitor benchmarking",
        note: "Competitors sold capability; few sold operational confidence.",
        implication: "Positioning around downtime reduction and structured implementation, not specs.",
      },
    ],
    decisionLog: [
      {
        option: "Maximum sensor coverage",
        decision: "Rejected",
        reason: "Added cost and complexity without proportional client value. Sensor architecture refactor cut unit cost 22%.",
      },
      {
        option: "Structured change management frameworks per client",
        decision: "Selected",
        reason: "Directly addressed adoption risk — reduced downtime 30% across 5+ deployments.",
      },
      {
        option: "Zero-based budgeting",
        decision: "Selected",
        reason: "Cut monthly burn 35% and extended runway during fundraising.",
      },
    ],
    lessons: [
      "Listen for what the client would lose, not just what they ask for.",
      "Field deployment teaches you things lab testing never will.",
      "PMF is a hypothesis-testing discipline, not a feeling.",
    ],
  },
  {
    id: "dossier-vr-therapy",
    type: "dossier",
    slug: "vr-therapy-dossier",
    title: "VR Exposure Therapy — Thinking Dossier",
    projectId: "vr-therapy",
    originalQuestion:
      "How do you turn an ambiguous clinical problem into a tool clinicians can actually use?",
    summary: "Process notes from the clinician-facing PTSD therapy tool.",
    status: "published",
    visibility: "public",
    themes: ["Product", "Human Experience"],
    capabilities: ["Product Thinking", "UX"],
    tags: ["dossier"],
    relatedIds: ["vr-therapy"],
    problemFraming:
      "The technology (VR, biometrics) was the easy part. The real problem was defining what a clinician needs to see, control, and trust during a live therapy session.",
    assumptions: [
      "Clinicians will not adopt tools that reduce their control over sessions",
      "Biometric data is only valuable if it is legible in real time",
      "Trust is the product in healthcare",
    ],
    researchNotes: [
      {
        title: "End-user use case validation",
        note: "Clinician workflows demanded session control and interpretable signals over immersive spectacle.",
        implication: "Dashboard design mattered as much as the VR experience itself.",
      },
    ],
    decisionLog: [
      {
        option: "Patient-facing consumer app",
        decision: "Rejected",
        reason: "Unsupervised exposure therapy carries clinical risk. Clinician-facing framing was safer and more credible.",
      },
      {
        option: "Biometric dashboards with Python analytics",
        decision: "Selected",
        reason: "Turned sessions into measurable clinical signals — the difference between a demo and a partner-ready tool.",
      },
    ],
    lessons: [
      "The hardest design work happens before the first screen is drawn.",
      "In high-stakes domains, constrain the product to what users can safely trust.",
    ],
  },
];

export function getDossier(slug: string) {
  return dossiers.find((d) => d.slug === slug);
}

export function getDossierByProjectId(projectId: string) {
  return dossiers.find((d) => d.projectId === projectId);
}
