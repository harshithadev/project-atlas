"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Vector3 } from "three";
import { damp, damp3 } from "maath/easing";

export type FlyState = { target: Vector3 | null };

// Camera presets per aspect ratio; framings in between are interpolated so
// resizing never snaps. Portrait pulls back, widens, and pans toward the
// desk/shelf corner so the interactive objects stay in frame — this replaces
// the blind background-cover crop of the 2D scene.
const FRAMINGS: {
  aspect: number;
  pos: [number, number, number];
  target: [number, number, number];
  fov: number;
}[] = [
  { aspect: 0.5, pos: [0.55, 1.8, 6.8], target: [0.85, 1.4, -0.6], fov: 60 },
  { aspect: 0.75, pos: [0.3, 1.75, 5.9], target: [0.7, 1.38, -0.6], fov: 55 },
  { aspect: 1.1, pos: [-0.15, 1.7, 4.6], target: [0.55, 1.35, -0.6], fov: 48 },
  { aspect: 1.5, pos: [-0.4, 1.66, 3.85], target: [0.4, 1.32, -0.6], fov: 43 },
  { aspect: 2.1, pos: [-0.45, 1.62, 3.5], target: [0.4, 1.32, -0.6], fov: 40 },
];

function framingFor(
  aspect: number,
  out: { pos: Vector3; target: Vector3; fov: number }
) {
  const a = Math.min(Math.max(aspect, FRAMINGS[0].aspect), FRAMINGS[FRAMINGS.length - 1].aspect);
  let i = 0;
  while (i < FRAMINGS.length - 2 && FRAMINGS[i + 1].aspect < a) i++;
  const lo = FRAMINGS[i];
  const hi = FRAMINGS[i + 1];
  const t = (a - lo.aspect) / (hi.aspect - lo.aspect);
  out.pos.set(
    lo.pos[0] + (hi.pos[0] - lo.pos[0]) * t,
    lo.pos[1] + (hi.pos[1] - lo.pos[1]) * t,
    lo.pos[2] + (hi.pos[2] - lo.pos[2]) * t
  );
  out.target.set(
    lo.target[0] + (hi.target[0] - lo.target[0]) * t,
    lo.target[1] + (hi.target[1] - lo.target[1]) * t,
    lo.target[2] + (hi.target[2] - lo.target[2]) * t
  );
  out.fov = lo.fov + (hi.fov - lo.fov) * t;
}

export function CameraRig({
  flyRef,
  parallax = true,
}: {
  flyRef: MutableRefObject<FlyState>;
  parallax?: boolean;
}) {
  const camera = useThree((s) => s.camera) as PerspectiveCamera;
  const size = useThree((s) => s.size);
  const pointer = useThree((s) => s.pointer);

  const scratch = useMemo(
    () => ({
      framing: { pos: new Vector3(), target: new Vector3(0.4, 1.32, -0.6), fov: 43 },
      desired: new Vector3(),
      look: new Vector3(0.4, 1.32, -0.6),
      lookGoal: new Vector3(),
    }),
    []
  );
  const fovRef = useRef({ fov: camera.fov });

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.1);
    const { framing, desired, look, lookGoal } = scratch;
    framingFor(size.width / size.height, framing);

    const fly = flyRef.current.target;
    if (fly) {
      // Dolly ~45% of the way toward the clicked object before navigating.
      desired.lerpVectors(framing.pos, fly, 0.45);
      desired.y = Math.max(desired.y, 1.15);
      lookGoal.copy(fly);
    } else {
      desired.copy(framing.pos);
      if (parallax) {
        desired.x += pointer.x * 0.22;
        desired.y += pointer.y * 0.12;
      }
      lookGoal.copy(framing.target);
    }

    damp3(camera.position, desired, fly ? 0.18 : 0.5, delta);
    damp3(look, lookGoal, fly ? 0.18 : 0.5, delta);
    camera.lookAt(look);

    if (damp(fovRef.current, "fov", framing.fov, 0.3, delta)) {
      camera.fov = fovRef.current.fov;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
