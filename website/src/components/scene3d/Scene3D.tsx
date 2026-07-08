"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
} from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
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

/** Cinematic post stack; AO is skipped on low-power devices. */
function Effects({ highQuality }: { highQuality: boolean }) {
  if (!highQuality) {
    return (
      <EffectComposer multisampling={2}>
        <Bloom
          mipmapBlur
          intensity={0.6}
          luminanceThreshold={0.85}
          luminanceSmoothing={0.2}
        />
        <Vignette offset={0.22} darkness={0.32} />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
    );
  }
  return (
    <EffectComposer multisampling={4}>
      <N8AO aoRadius={0.45} intensity={2.2} distanceFalloff={0.8} />
      <Bloom
        mipmapBlur
        intensity={0.6}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.2}
      />
      <Vignette offset={0.22} darkness={0.32} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
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

  // Touch devices and low-memory machines skip AO/MSAA and use smaller DPR.
  const highQuality = useMemo(() => {
    if (typeof window === "undefined") return true;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const memory =
      (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8;
    return !coarse && memory > 4;
  }, []);

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
      {/* Variance shadow maps give soft, blurred sun shadows; drei's PCSS
          (SoftShadows) breaks shader compilation on three r185+ */}
      <Canvas
        shadows="variance"
        dpr={[1, highQuality ? 1.75 : 1.5]}
        camera={{ fov: 43, position: [-0.5, 1.58, 3.6], near: 0.1, far: 30 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ThemeDriver blendRef={blendRef} night={theme === "night"} />
        <Lighting blendRef={blendRef} />
        {/* Procedural environment for soft reflections — no HDRI download.
            Intensity is lerped day/night in Lighting. */}
        <Environment resolution={64} frames={1}>
          <Lightformer
            intensity={1.1}
            position={[-1, 2.2, -4]}
            scale={[3.5, 2.2, 1]}
            color="#fff4dd"
          />
          <Lightformer
            intensity={0.5}
            position={[2, 1.6, 3]}
            rotation-y={Math.PI}
            scale={[4, 3, 1]}
            color="#ffe6c0"
          />
          <Lightformer
            intensity={0.4}
            position={[0, 4, 0]}
            rotation-x={Math.PI / 2}
            scale={[6, 6, 1]}
            color="#fdf3e0"
          />
        </Environment>
        <Suspense fallback={null}>
          <Room blendRef={blendRef} />
        </Suspense>
        <CameraRig flyRef={flyRef} />
        <Effects highQuality={highQuality} />
        <Hotspots3D hotspots={hotspots} onSelect={handleSelect} />
      </Canvas>
      {/* Readability gradient behind the hero copy (above canvas, below the
          hotspot dots which use z-index 20 within this stacking context) */}
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
