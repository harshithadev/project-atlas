"use client";

import { Suspense, useEffect, useRef, type MutableRefObject } from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { Vector3 } from "three";
import { damp } from "maath/easing";
import { useAsk } from "@/components/providers/AskProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import type { WorkspaceHotspot } from "@/content/types";
import { hotspotAnchors } from "@/content/workspace3d";
import { CameraRig, type FlyState } from "./CameraRig";
import { Hotspots3D } from "./Hotspots3D";
import { Lighting } from "./Lighting";
import { Room } from "./Room";

/** Eases the shared day/night blend toward the active theme each frame. */
function ThemeDriver({
  blendRef,
  night,
}: {
  blendRef: MutableRefObject<number>;
  night: boolean;
}) {
  const holder = useRef({ t: blendRef.current });
  useFrame((_, delta) => {
    damp(holder.current, "t", night ? 1 : 0, 0.35, Math.min(delta, 0.1));
    blendRef.current = holder.current.t;
  });
  return null;
}

export default function Scene3D({
  hotspots,
}: {
  hotspots: WorkspaceHotspot[];
}) {
  const { theme, toggleTheme } = useTheme();
  const { open } = useAsk();
  const router = useRouter();

  const flyRef = useRef<FlyState>({ target: null });
  const blendRef = useRef(0);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Match the pre-hydration theme immediately so night visitors don't see
    // a day-lit first frame.
    blendRef.current =
      document.documentElement.dataset.theme === "night" ? 1 : 0;
    return () => {
      if (navTimeout.current) clearTimeout(navTimeout.current);
    };
  }, []);

  const handleSelect = (hotspot: WorkspaceHotspot) => {
    if (hotspot.action === "toggle-theme") {
      toggleTheme();
      return;
    }
    if (hotspot.action === "open-ask") {
      open();
      return;
    }
    if (hotspot.href && !navTimeout.current) {
      const anchor = hotspotAnchors[hotspot.id];
      flyRef.current.target = anchor ? new Vector3(...anchor) : null;
      navTimeout.current = setTimeout(() => router.push(hotspot.href!), 420);
    }
  };

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ fov: 43, position: [-0.5, 1.58, 3.6], near: 0.1, far: 30 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ThemeDriver blendRef={blendRef} night={theme === "night"} />
        <Lighting blendRef={blendRef} />
        <Suspense fallback={null}>
          <Room blendRef={blendRef} />
        </Suspense>
        <ContactShadows
          position={[0, 0.002, 0]}
          opacity={0.32}
          scale={9}
          blur={2.6}
          far={3}
          resolution={512}
          frames={1}
        />
        <CameraRig flyRef={flyRef} />
        <Hotspots3D hotspots={hotspots} onSelect={handleSelect} />
      </Canvas>
      {/* Readability gradient behind the hero copy (above canvas, below the
          hotspot pills which use z-index 20 within this stacking context) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full md:w-3/5"
        style={{
          background:
            "linear-gradient(to right, var(--scene-fade-strong) 0%, var(--scene-fade-soft) 40%, transparent 72%)",
        }}
      />
    </div>
  );
}
