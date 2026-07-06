"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAsk } from "@/components/providers/AskProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import type { WorkspaceHotspot } from "@/content/types";

function HotspotPill({
  hotspot,
  onAction,
}: {
  hotspot: WorkspaceHotspot;
  onAction: (action: string) => void;
}) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="glass-panel inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-[var(--hotspot-text)] shadow-[0_4px_20px_var(--shadow-soft)] transition hover:shadow-[0_6px_24px_var(--shadow-medium)] md:px-4 md:py-2 md:text-sm"
    >
      {hotspot.label}
      <span className="text-[var(--accent-dot)]">+</span>
    </motion.span>
  );

  const pillClass =
    "rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)] focus-visible:ring-offset-2";

  if (hotspot.action) {
    return (
      <button
        type="button"
        aria-label={hotspot.description}
        onClick={() => onAction(hotspot.action!)}
        className={pillClass}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={hotspot.href!} aria-label={hotspot.description} className={pillClass}>
      {content}
    </Link>
  );
}

/**
 * Anchor dot on the scene object + thin connector stem + label pill,
 * mirroring the callout style of the inspo scenes.
 */
function Hotspot({
  hotspot,
  onAction,
}: {
  hotspot: WorkspaceHotspot;
  onAction: (action: string) => void;
}) {
  const below = hotspot.labelBelow ?? false;

  return (
    <div
      className="absolute z-20 hidden md:block"
      style={{
        left: `${hotspot.position.x}%`,
        top: `${hotspot.position.y}%`,
      }}
    >
      {/* Anchor dot on the object */}
      <span
        aria-hidden
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--hotspot-bg)] shadow-[0_0_6px_var(--shadow-medium)] ring-1 ring-[var(--hotspot-stem)]"
      />
      {/* Connector stem */}
      <span
        aria-hidden
        className="absolute w-px -translate-x-1/2 bg-[var(--hotspot-stem)]"
        style={
          below
            ? { top: 4, height: hotspot.stem }
            : { bottom: 4, height: hotspot.stem }
        }
      />
      {/* Label pill */}
      <div
        className="absolute -translate-x-1/2"
        style={
          below
            ? { top: hotspot.stem + 6 }
            : { bottom: hotspot.stem + 6 }
        }
      >
        <HotspotPill hotspot={hotspot} onAction={onAction} />
      </div>
    </div>
  );
}

export function WorkspaceScene({
  hotspots,
}: {
  hotspots: WorkspaceHotspot[];
}) {
  const { theme, toggleTheme } = useTheme();
  const { open } = useAsk();

  const handleAction = (action: string) => {
    if (action === "open-ask") open();
    if (action === "toggle-theme") toggleTheme();
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Both scenes stay mounted; crossfade on theme change */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: "url(/images/workspace-day.png)",
          opacity: theme === "day" ? 1 : 0,
        }}
        role="img"
        aria-label="Sunlit workspace with desk, window, and bookshelf"
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: "url(/images/workspace-night.png)",
          opacity: theme === "night" ? 1 : 0,
        }}
        aria-hidden={theme === "day"}
      />

      {/* Readability gradient behind hero copy */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full transition-opacity duration-700 md:w-3/5"
        style={{
          background:
            theme === "day"
              ? "linear-gradient(to right, rgba(250,247,240,0.88) 0%, rgba(250,247,240,0.55) 35%, transparent 70%)"
              : "linear-gradient(to right, rgba(23,19,15,0.85) 0%, rgba(23,19,15,0.5) 35%, transparent 70%)",
        }}
      />

      {hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} hotspot={hotspot} onAction={handleAction} />
      ))}

      {/* Orb glow aligned to the spherical lamp on the shelf */}
      <motion.button
        type="button"
        aria-label="Open Ask Harshitha AI"
        onClick={open}
        className="absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-glow)]"
        style={{ left: "92.5%", top: "56%", width: 56, height: 56 }}
        animate={{
          boxShadow: [
            "0 0 24px 6px var(--orb-glow)",
            "0 0 44px 14px var(--orb-glow)",
            "0 0 24px 6px var(--orb-glow)",
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="sr-only">Open Ask Harshitha AI</span>
      </motion.button>
    </div>
  );
}
