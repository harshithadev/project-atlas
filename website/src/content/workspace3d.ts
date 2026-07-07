// 3D world-space anchor points for each workspace hotspot, keyed by the
// hotspot ids in workspace.ts. Coordinates are meters in the room scene
// (floor at y=0, back wall at z=-1.8, bookshelf wall at x=2.75). Labels are
// projected from these points, so they stay on their objects at every
// viewport size — unlike the 2D percentage coordinates.
export const hotspotAnchors: Record<string, [number, number, number]> = {
  "day-night": [-1.55, 1.78, -1.42], // top of the lamp shade
  about: [-0.55, 1.36, -1.48], // framed portrait on the desk
  projects: [0.18, 1.06, -1.0], // open notebook
  "selected-work": [0.78, 1.3, -1.34], // laptop screen
  certifications: [1.55, 2.44, -1.76], // gallery frames on the wall
  "weekly-notes": [2.2, 2.62, -1.0], // journals on the top shelf
  library: [2.2, 1.9, -0.85], // books on the middle shelf
  ask: [2.26, 1.44, 0.2], // glowing orb on the shelf
};

// Hotspots whose pill hangs below the anchor instead of above it, staggering
// the bookshelf labels vertically so they never collide on narrow screens.
export const hangBelow = new Set([
  "day-night",
  "projects",
  "weekly-notes",
  "library",
  "ask",
]);

// Horizontal pill offset (%) for labels that would otherwise clip the
// viewport edge; the anchor dot stays on its object.
export const pillShift: Record<string, number> = {
  ask: -52,
  "weekly-notes": -25,
  library: -20,
  "day-night": 26,
};

// Hotspots hidden on narrow screens where their object leaves the frame;
// the fixed theme toggle covers day/night there.
export const hideOnNarrow = new Set(["day-night"]);

// Per-hotspot connector stem length in px (default 20). The lamp label uses a
// long stem so it hangs below the hero copy instead of over it.
export const stemLength: Record<string, number> = {
  "day-night": 150,
};
