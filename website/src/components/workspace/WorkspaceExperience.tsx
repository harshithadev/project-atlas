"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WorkspaceScene } from "@/components/workspace/WorkspaceScene";
import type { WorkspaceHotspot } from "@/content/types";

const Scene3D = dynamic(() => import("@/components/scene3d/Scene3D"), {
  ssr: false,
});

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

/**
 * Chooses the interactive 3D workspace when the device can handle it, and
 * falls back to the 2D image scene for reduced-motion users and devices
 * without WebGL. The 2D fallback keeps a mobile chip nav because its
 * hotspots are desktop-only.
 */
export function WorkspaceExperience({
  hotspots,
}: {
  hotspots: WorkspaceHotspot[];
}) {
  const [mode, setMode] = useState<"pending" | "3d" | "2d">("pending");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setMode(!reducedMotion && supportsWebGL() ? "3d" : "2d");
  }, []);

  if (mode === "2d") {
    return (
      <>
        <WorkspaceScene hotspots={hotspots} />
        <nav
          aria-label="Explore the workspace"
          className="absolute bottom-24 left-0 right-0 z-30 flex flex-wrap justify-center gap-2 px-4 md:hidden"
        >
          {hotspots
            .filter((h) => h.href)
            .map((h) => (
              <Link
                key={h.id}
                href={h.href!}
                className="glass-panel flex min-h-[44px] items-center rounded-full px-4 py-2 text-xs text-[var(--text-primary)]"
              >
                {h.label}
              </Link>
            ))}
        </nav>
      </>
    );
  }

  return (
    <div className="absolute inset-0 z-10">
      {/* Poster shown while the 3D scene loads (and behind its fade-in) */}
      <div
        aria-hidden
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 30%, var(--surface-soft) 0%, var(--background) 55%, var(--surface-muted) 100%)",
        }}
      />
      {mode === "3d" && <Scene3D hotspots={hotspots} />}
    </div>
  );
}
