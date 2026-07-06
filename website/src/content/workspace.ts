import type { WorkspaceHotspot } from "./types";

// Positions are % coordinates over the workspace scene images
// (generated clean backgrounds: lamp left, portrait+notebook center desk,
// laptop center-right, wall frames between window and shelf, bookshelf right, orb lamp on shelf).
export const workspaceHotspots: WorkspaceHotspot[] = [
  {
    id: "day-night",
    label: "Day / Night",
    action: "toggle-theme",
    description: "Toggle between day and night workspace.",
    position: { x: 15, y: 48 },
    mobilePosition: { x: 15, y: 45 },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    description: "Meet Harshitha beyond the résumé.",
    position: { x: 36.5, y: 53 },
    mobilePosition: { x: 34, y: 52 },
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    description: "Explore projects that begin with questions.",
    position: { x: 46, y: 80 },
    mobilePosition: { x: 44, y: 76 },
  },
  {
    id: "selected-work",
    label: "Selected Work",
    href: "/projects",
    description: "See current experiments and featured work.",
    position: { x: 60, y: 50 },
    mobilePosition: { x: 58, y: 48 },
  },
  {
    id: "certifications",
    label: "Certifications",
    href: "/certifications",
    description: "View credentials and proud proof points.",
    position: { x: 62, y: 22 },
    mobilePosition: { x: 60, y: 24 },
  },
  {
    id: "weekly-notes",
    label: "Weekly Notes",
    href: "/weekly-notes",
    description: "Read observations and musings from the week.",
    position: { x: 83, y: 13 },
    mobilePosition: { x: 79, y: 15 },
  },
  {
    id: "library",
    label: "Library",
    href: "/library",
    description: "See what is shaping her thinking.",
    position: { x: 81, y: 36 },
    mobilePosition: { x: 77, y: 35 },
  },
  {
    id: "ask",
    label: "Ask Harshitha AI",
    action: "open-ask",
    description: "Ask where to start.",
    position: { x: 88, y: 49 },
    mobilePosition: { x: 82, y: 48 },
  },
];

