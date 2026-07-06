import type { WorkspaceHotspot } from "./types";

// Anchor coordinates are % over the workspace scene image. Each anchor dot
// sits directly on its object; the label pill hangs off a thin connector stem
// (above the dot by default, below when `labelBelow` is set).
export const workspaceHotspots: WorkspaceHotspot[] = [
  {
    id: "day-night",
    label: "Day / Night",
    action: "toggle-theme",
    description: "Toggle between day and night workspace.",
    // Lamp stem base — pill hangs below, clear of hero copy
    position: { x: 14, y: 62 },
    stem: 24,
    labelBelow: true,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    description: "Meet Harshitha beyond the résumé.",
    // Top of the framed portrait on the desk
    position: { x: 36.5, y: 56 },
    stem: 26,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    description: "Explore projects that begin with questions.",
    // Open notebook on the desk
    position: { x: 45, y: 75 },
    stem: 20,
    labelBelow: true,
  },
  {
    id: "selected-work",
    label: "Selected Work",
    href: "/projects",
    description: "See current experiments and featured work.",
    // Laptop base / hinge
    position: { x: 60, y: 66.5 },
    stem: 22,
    labelBelow: true,
  },
  {
    id: "certifications",
    label: "Certifications",
    href: "/certifications",
    description: "View credentials and proud proof points.",
    // Gallery of small frames on the wall between window and shelf
    position: { x: 60, y: 24.5 },
    stem: 28,
  },
  {
    id: "weekly-notes",
    label: "Weekly Notes",
    href: "/weekly-notes",
    description: "Read observations and musings from the week.",
    // Top shelf of the bookcase
    position: { x: 82.5, y: 7 },
    stem: 18,
    labelBelow: true,
  },
  {
    id: "library",
    label: "Library",
    href: "/library",
    description: "See what is shaping her thinking.",
    // Books on the middle shelf
    position: { x: 79.5, y: 31 },
    stem: 24,
  },
  {
    id: "ask",
    label: "Ask Harshitha AI",
    action: "open-ask",
    description: "Ask where to start.",
    // Glowing orb lamp on the shelf
    position: { x: 91, y: 54.5 },
    stem: 26,
  },
];
