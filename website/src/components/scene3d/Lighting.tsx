"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AmbientLight, Color, DirectionalLight, Fog, HemisphereLight } from "three";

const DAY = {
  bg: new Color("#f2ead9"),
  hemiSky: new Color("#fff6e4"),
  hemiGround: new Color("#d8b98c"),
  sun: new Color("#fff1d6"),
  ambient: new Color("#fffaf0"),
  hemiIntensity: 0.75,
  sunIntensity: 2.0,
  ambientIntensity: 0.5,
};

const NIGHT = {
  bg: new Color("#171310"),
  hemiSky: new Color("#3d4560"),
  hemiGround: new Color("#2a211a"),
  sun: new Color("#8fa3c8"),
  ambient: new Color("#ffd9a0"),
  hemiIntensity: 0.14,
  sunIntensity: 0.12,
  ambientIntensity: 0.22,
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Global lighting rig. All intensities/colors are continuously mixed between
 * the day and night presets using the shared blend ref (0 = day, 1 = night),
 * which the ThemeDriver eases toward the active theme.
 */
export function Lighting({ blendRef }: { blendRef: MutableRefObject<number> }) {
  const hemiRef = useRef<HemisphereLight>(null!);
  const sunRef = useRef<DirectionalLight>(null!);
  const ambientRef = useRef<AmbientLight>(null!);
  const scene = useThree((s) => s.scene);

  const scratch = useMemo(
    () => ({ bg: new Color(), fog: new Fog("#f2ead9", 7, 16) }),
    []
  );

  useFrame(() => {
    const t = blendRef.current;
    scratch.bg.lerpColors(DAY.bg, NIGHT.bg, t);
    scene.background = scratch.bg;
    scratch.fog.color.copy(scratch.bg);
    scene.fog = scratch.fog;

    hemiRef.current.intensity = lerp(DAY.hemiIntensity, NIGHT.hemiIntensity, t);
    hemiRef.current.color.lerpColors(DAY.hemiSky, NIGHT.hemiSky, t);
    hemiRef.current.groundColor.lerpColors(DAY.hemiGround, NIGHT.hemiGround, t);

    sunRef.current.intensity = lerp(DAY.sunIntensity, NIGHT.sunIntensity, t);
    sunRef.current.color.lerpColors(DAY.sun, NIGHT.sun, t);

    ambientRef.current.intensity = lerp(
      DAY.ambientIntensity,
      NIGHT.ambientIntensity,
      t
    );
    ambientRef.current.color.copy(DAY.ambient).lerp(NIGHT.ambient, t);

    // Environment (light-former reflections) fades with the daylight
    scene.environmentIntensity = lerp(0.55, 0.18, t);
  });

  return (
    <>
      <hemisphereLight ref={hemiRef} />
      {/* Sun angled in through the window (now near back-wall center); the
          single shadow-casting light in the scene */}
      <directionalLight
        ref={sunRef}
        position={[-2.4, 4.2, 1.6]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
        shadow-normalBias={0.03}
        shadow-radius={5}
        shadow-blurSamples={12}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={4.5}
        shadow-camera-bottom={-1.5}
        shadow-camera-near={0.5}
        shadow-camera-far={14}
      />
      <ambientLight ref={ambientRef} />
    </>
  );
}
