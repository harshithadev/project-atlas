// 3D world-space anchor points for each workspace hotspot, keyed by the
// hotspot ids in workspace.ts. Coordinates are meters in the room scene
// (floor at y=0, back wall at z=-1.8, bookshelf wall at x=2.75). The glowing
// dots sit directly on their objects and project from 3D space, so they stay
// put at every viewport size — unlike the 2D percentage coordinates.
export const hotspotAnchors: Record<string, [number, number, number]> = {
  "day-night": [-0.65, 1.72, -1.42], // lamp shade
  about: [0.35, 1.3, -1.48], // framed portrait on the desk
  projects: [1.08, 1.04, -1.0], // open notebook
  "selected-work": [1.62, 1.26, -1.34], // laptop screen
  certifications: [1.52, 2.15, -1.76], // gallery frames on the wall
  "weekly-notes": [2.32, 2.62, -0.7], // journals on the top shelf
  library: [2.3, 1.9, -0.85], // books on the middle shelf
  ask: [2.4, 1.44, 0.2], // glowing orb on the shelf
};

// Hotspots whose hover tooltip opens below the dot instead of above it,
// staggering the bookshelf labels so neighbors never collide.
export const tooltipBelow = new Set([
  "day-night",
  "projects",
  "weekly-notes",
  "library",
  "ask",
]);

// Horizontal tooltip offset (% of tooltip width) for labels that would
// otherwise clip the viewport edge; the dot stays on its object.
export const tooltipShift: Record<string, number> = {
  ask: -52,
  "weekly-notes": -25,
  library: -20,
  "day-night": 26,
};

// Hotspots hidden on narrow screens where their object leaves the frame;
// the fixed theme toggle covers day/night there.
export const hideOnNarrow = new Set(["day-night"]);
