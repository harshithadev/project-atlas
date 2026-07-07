"use client";

import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import type { WorkspaceHotspot } from "@/content/types";
import {
  hideOnNarrow,
  hotspotAnchors,
  tooltipBelow,
  tooltipShift,
} from "@/content/workspace3d";

/**
 * Glowing anchor dots projected from 3D points on the scene objects. The
 * label appears as a tooltip on hover/focus instead of a permanent pill, so
 * the room stays uncluttered. The dot itself is the click target, wrapped in
 * a 44px invisible hit area for touch.
 */
export function Hotspots3D({
  hotspots,
  onSelect,
}: {
  hotspots: WorkspaceHotspot[];
  onSelect: (hotspot: WorkspaceHotspot) => void;
}) {
  // Below these sizes the lamp sits under the hero copy, so its hotspot is
  // dropped — the fixed corner toggle still provides day/night.
  const width = useThree((s) => s.size.width);
  const height = useThree((s) => s.size.height);
  const narrow = width < 640 || height < 700;

  return (
    <>
      {hotspots.map((hotspot) => {
        const anchor = hotspotAnchors[hotspot.id];
        if (!anchor) return null;
        if (narrow && hideOnNarrow.has(hotspot.id)) return null;
        const below = tooltipBelow.has(hotspot.id);
        const shift = tooltipShift[hotspot.id] ?? 0;

        return (
          <Html
            key={hotspot.id}
            position={anchor}
            zIndexRange={[20, 0]}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="group relative flex items-center justify-center">
              <button
                type="button"
                aria-label={hotspot.label}
                onClick={() => onSelect(hotspot)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)]"
              >
                <span
                  aria-hidden
                  className="hotspot-dot h-3 w-3 rounded-full bg-[var(--hotspot-bg)] ring-1 ring-[var(--hotspot-stem)] transition-transform duration-200 group-hover:scale-150 group-focus-within:scale-150"
                />
              </button>
              <span
                role="tooltip"
                style={{ transform: `translateX(${-50 + shift}%)` }}
                className={`pointer-events-none absolute left-1/2 whitespace-nowrap rounded-full glass-panel px-3.5 py-1.5 text-xs font-medium text-[var(--hotspot-text)] opacity-0 shadow-[0_4px_20px_var(--shadow-soft)] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 md:text-sm ${
                  below ? "top-full mt-1" : "bottom-full mb-1"
                }`}
              >
                {hotspot.label}
                <span aria-hidden className="text-[var(--accent-dot)]">
                  {" "}
                  +
                </span>
              </span>
            </div>
          </Html>
        );
      })}
    </>
  );
}
