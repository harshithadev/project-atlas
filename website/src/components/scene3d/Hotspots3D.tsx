"use client";

import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import type { WorkspaceHotspot } from "@/content/types";
import {
  hangBelow,
  hideOnNarrow,
  hotspotAnchors,
  pillShift,
  stemLength,
} from "@/content/workspace3d";

/**
 * Label pills projected from 3D anchor points. The pill hangs above its
 * object with a stem + dot whose tip sits exactly on the anchor, so labels
 * track their objects at every viewport size and camera framing.
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
        const below = hangBelow.has(hotspot.id);
        const shift = pillShift[hotspot.id];

        const pill = (
          <button
            type="button"
            aria-label={hotspot.label}
            title={hotspot.description}
            style={shift ? { transform: `translateX(${shift}%)` } : undefined}
            onClick={() => onSelect(hotspot)}
            className="glass-panel inline-flex min-h-[34px] cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium text-[var(--hotspot-text)] shadow-[0_4px_20px_var(--shadow-soft)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_6px_24px_var(--shadow-medium)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] pointer-coarse:min-h-[44px] pointer-coarse:px-4 md:text-sm"
          >
            {hotspot.label}
            <span aria-hidden className="text-[var(--accent-dot)]">
              +
            </span>
          </button>
        );
        const stem = (
          <span
            aria-hidden
            className="w-px bg-[var(--hotspot-stem)]"
            style={{ height: stemLength[hotspot.id] ?? 20 }}
          />
        );
        const dot = (
          <span
            aria-hidden
            className="h-2 w-2 rounded-full bg-[var(--hotspot-bg)] ring-1 ring-[var(--hotspot-stem)] shadow-[0_0_6px_var(--shadow-medium)]"
          />
        );

        return (
          <Html
            key={hotspot.id}
            position={anchor}
            zIndexRange={[20, 0]}
            style={{
              transform: below
                ? "translate(-50%, 0)"
                : "translate(-50%, -100%)",
            }}
          >
            <div className="flex flex-col items-center">
              {below ? (
                <>
                  {dot}
                  {stem}
                  {pill}
                </>
              ) : (
                <>
                  {pill}
                  {stem}
                  {dot}
                </>
              )}
            </div>
          </Html>
        );
      })}
    </>
  );
}
