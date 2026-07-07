"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import {
  Color,
  Mesh,
  MeshStandardMaterial,
  PointLight,
  SRGBColorSpace,
  Texture,
} from "three";

/* ---------------------------------------------------------------- helpers */

// Deterministic PRNG so the procedural books render identically every frame.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const BOOK_COLORS = [
  "#a8b99a",
  "#c67b5c",
  "#5c6b8a",
  "#d9a441",
  "#8a6a4a",
  "#e7d6bc",
  "#6f8065",
  "#b97350",
];

type Book = {
  z: number;
  width: number;
  height: number;
  lean: number;
  color: string;
};

function buildShelfBooks(seed: number, zFrom: number, zTo: number): Book[] {
  const rand = mulberry32(seed);
  const books: Book[] = [];
  let z = zFrom;
  while (z < zTo) {
    const width = 0.028 + rand() * 0.03;
    if (z + width > zTo) break;
    // Occasional gap between clusters of books
    if (rand() < 0.12) {
      z += 0.05 + rand() * 0.08;
      continue;
    }
    books.push({
      z: z + width / 2,
      width,
      height: 0.17 + rand() * 0.1,
      lean: rand() < 0.15 ? (rand() - 0.5) * 0.18 : 0,
      color: BOOK_COLORS[Math.floor(rand() * BOOK_COLORS.length)],
    });
    z += width + 0.004;
  }
  return books;
}

/* ------------------------------------------------------------- materials */

type ThemedMaterials = {
  lampShade: MeshStandardMaterial;
  screen: MeshStandardMaterial;
  sky: MeshStandardMaterial;
  orb: MeshStandardMaterial;
  flame: MeshStandardMaterial;
  stringBulb: MeshStandardMaterial;
};

function useThemedMaterials(): ThemedMaterials {
  return useMemo(
    () => ({
      lampShade: new MeshStandardMaterial({
        color: "#f7ead2",
        roughness: 0.9,
        emissive: new Color("#f6c96d"),
        emissiveIntensity: 0.05,
      }),
      screen: new MeshStandardMaterial({
        color: "#fdf6e8",
        roughness: 0.5,
        emissive: new Color("#fff3d6"),
        emissiveIntensity: 0.35,
      }),
      sky: new MeshStandardMaterial({
        color: "#cfe6f7",
        roughness: 1,
        emissive: new Color("#bcd8f0"),
        emissiveIntensity: 0.7,
      }),
      orb: new MeshStandardMaterial({
        color: "#fff3d0",
        roughness: 0.35,
        emissive: new Color("#f6c96d"),
        emissiveIntensity: 0.55,
      }),
      flame: new MeshStandardMaterial({
        color: "#ffd27a",
        roughness: 0.6,
        emissive: new Color("#ffb347"),
        emissiveIntensity: 0.15,
      }),
      stringBulb: new MeshStandardMaterial({
        color: "#f6e7c6",
        roughness: 0.6,
        emissive: new Color("#f6c96d"),
        emissiveIntensity: 0,
      }),
    }),
    []
  );
}

/* ------------------------------------------------------------- fragments */

function Window() {
  const frame = "#e8dcc6";
  return (
    <group position={[-1.55, 1.85, -1.79]}>
      {/* Sky seen through the glass (theme-blended via material ref in Room) */}
      {/* frame strips */}
      <mesh position={[0, 0.93, 0]}>
        <boxGeometry args={[1.8, 0.07, 0.08]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.93, 0]}>
        <boxGeometry args={[1.8, 0.07, 0.1]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
      <mesh position={[-0.88, 0, 0]}>
        <boxGeometry args={[0.07, 1.92, 0.08]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
      <mesh position={[0.88, 0, 0]}>
        <boxGeometry args={[0.07, 1.92, 0.08]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
      {/* mullions */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.04, 1.86, 0.05]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.76, 0.04, 0.05]} />
        <meshStandardMaterial color={frame} roughness={0.8} />
      </mesh>
    </group>
  );
}

function WallFrames() {
  const frames: { x: number; y: number; w: number; h: number; tint: string }[] =
    [
      { x: 1.22, y: 2.22, w: 0.26, h: 0.34, tint: "#a8b99a" },
      { x: 1.7, y: 2.18, w: 0.34, h: 0.26, tint: "#8a9bb0" },
      { x: 1.28, y: 1.76, w: 0.3, h: 0.24, tint: "#d8b98c" },
      { x: 1.82, y: 1.74, w: 0.24, h: 0.32, tint: "#c67b5c" },
      { x: 1.55, y: 2.56, w: 0.28, h: 0.2, tint: "#6f8065" },
    ];
  return (
    <group>
      {frames.map((f, i) => (
        <group key={i} position={[f.x, f.y, -1.77]}>
          <mesh>
            <boxGeometry args={[f.w, f.h, 0.03]} />
            <meshStandardMaterial color="#8a6a4a" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0, 0.017]}>
            <planeGeometry args={[f.w - 0.05, f.h - 0.05]} />
            <meshStandardMaterial color={f.tint} roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Desk() {
  return (
    <group>
      {/* top */}
      <mesh position={[-0.35, 0.96, -1.35]}>
        <boxGeometry args={[3.1, 0.06, 0.78]} />
        <meshStandardMaterial color="#c9a06c" roughness={0.55} />
      </mesh>
      {/* side panels */}
      <mesh position={[-1.85, 0.48, -1.35]}>
        <boxGeometry args={[0.06, 0.9, 0.7]} />
        <meshStandardMaterial color="#b08d5f" roughness={0.65} />
      </mesh>
      <mesh position={[1.15, 0.48, -1.35]}>
        <boxGeometry args={[0.06, 0.9, 0.7]} />
        <meshStandardMaterial color="#b08d5f" roughness={0.65} />
      </mesh>
    </group>
  );
}

function Lamp({ shade }: { shade: MeshStandardMaterial }) {
  return (
    <group position={[-1.55, 0.99, -1.42]}>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.04, 20]} />
        <meshStandardMaterial color="#8a6a4a" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.6, 10]} />
        <meshStandardMaterial color="#8a6a4a" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0.72, 0]} material={shade}>
        <coneGeometry args={[0.21, 0.26, 24]} />
      </mesh>
    </group>
  );
}

function Portrait({ texture }: { texture: Texture }) {
  return (
    <group position={[-0.55, 1.16, -1.48]} rotation={[-0.06, 0.28, 0]}>
      <mesh>
        <boxGeometry args={[0.3, 0.37, 0.018]} />
        <meshStandardMaterial color="#a97f52" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0, 0.011]}>
        <planeGeometry args={[0.25, 0.31]} />
        <meshStandardMaterial map={texture} roughness={0.85} />
      </mesh>
      {/* kickstand */}
      <mesh position={[0, -0.06, -0.06]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.05, 0.02, 0.14]} />
        <meshStandardMaterial color="#a97f52" roughness={0.55} />
      </mesh>
    </group>
  );
}

function PenBox() {
  const pens = useMemo(() => {
    const rand = mulberry32(7);
    return Array.from({ length: 7 }, (_, i) => ({
      x: -0.07 + i * 0.024,
      tilt: (rand() - 0.5) * 0.4,
      height: 0.13 + rand() * 0.05,
      color: BOOK_COLORS[Math.floor(rand() * BOOK_COLORS.length)],
    }));
  }, []);
  return (
    <group position={[-0.12, 0.99, -1.42]}>
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.22, 0.1, 0.14]} />
        <meshStandardMaterial color="#b08d5f" roughness={0.7} />
      </mesh>
      {pens.map((p, i) => (
        <mesh
          key={i}
          position={[p.x, 0.1 + p.height / 2, 0]}
          rotation={[0, 0, p.tilt]}
        >
          <cylinderGeometry args={[0.006, 0.006, p.height, 6]} />
          <meshStandardMaterial color={p.color} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Candle({ flame }: { flame: MeshStandardMaterial }) {
  return (
    <group position={[-1.15, 0.99, -1.1]}>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#f3ead9" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.13, 0]} material={flame}>
        <coneGeometry args={[0.012, 0.035, 8]} />
      </mesh>
    </group>
  );
}

function Notebook() {
  return (
    <group position={[0.18, 1.0, -1.02]} rotation={[0, -0.18, 0]}>
      <mesh position={[-0.075, 0, 0]} rotation={[0, 0, 0.055]}>
        <boxGeometry args={[0.15, 0.012, 0.21]} />
        <meshStandardMaterial color="#fffdf8" roughness={0.9} />
      </mesh>
      <mesh position={[0.075, 0, 0]} rotation={[0, 0, -0.055]}>
        <boxGeometry args={[0.15, 0.012, 0.21]} />
        <meshStandardMaterial color="#fdf8ee" roughness={0.9} />
      </mesh>
      <mesh position={[0.05, 0.018, 0.04]} rotation={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.13, 6]} />
        <meshStandardMaterial color="#3e3e3a" roughness={0.4} />
      </mesh>
    </group>
  );
}

function Laptop({ screen }: { screen: MeshStandardMaterial }) {
  return (
    <group position={[0.78, 0.99, -1.32]} rotation={[0, -0.3, 0]}>
      {/* base */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[0.36, 0.016, 0.25]} />
        <meshStandardMaterial color="#b9b6ae" roughness={0.4} metalness={0.55} />
      </mesh>
      {/* lid, hinged at the back, tilted back ~20° from vertical */}
      <group position={[0, 0.02, -0.12]} rotation={[-0.35, 0, 0]}>
        <mesh position={[0, 0.12, 0]}>
          <boxGeometry args={[0.36, 0.24, 0.012]} />
          <meshStandardMaterial
            color="#b9b6ae"
            roughness={0.4}
            metalness={0.55}
          />
        </mesh>
        <mesh position={[0, 0.12, 0.008]} material={screen}>
          <planeGeometry args={[0.33, 0.21]} />
        </mesh>
        {/* abstract page blocks so the screen reads as this site */}
        <mesh position={[-0.08, 0.17, 0.01]}>
          <planeGeometry args={[0.12, 0.018]} />
          <meshStandardMaterial color="#3e3e3a" roughness={0.9} />
        </mesh>
        <mesh position={[-0.06, 0.13, 0.01]}>
          <planeGeometry args={[0.16, 0.01]} />
          <meshStandardMaterial color="#a8b99a" roughness={0.9} />
        </mesh>
        <mesh position={[0.08, 0.08, 0.01]}>
          <planeGeometry args={[0.13, 0.07]} />
          <meshStandardMaterial color="#e7d6bc" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

function Bookshelf({
  orb,
  stringBulb,
}: {
  orb: MeshStandardMaterial;
  stringBulb: MeshStandardMaterial;
}) {
  // Shelf boards at these heights; books fill the gaps above each board.
  const boards = [0.12, 0.72, 1.32, 1.92, 2.52];
  const rows = useMemo(
    () => [
      buildShelfBooks(11, -1.3, 0.7), // y 0.12
      buildShelfBooks(23, -1.3, 0.75), // y 0.72
      buildShelfBooks(37, -1.3, 0.2), // y 1.32 (orb lives right of the books)
      buildShelfBooks(53, -1.3, 0.0), // y 1.92 (plant right of the books)
      buildShelfBooks(71, -0.9, 0.3), // y 2.52 journals
    ],
    []
  );
  const bulbs = useMemo(
    () => Array.from({ length: 9 }, (_, i) => -1.25 + i * 0.28),
    []
  );

  return (
    <group position={[2.35, 0, -0.3]}>
      {/* side panels */}
      <mesh position={[0, 1.38, -1.42]}>
        <boxGeometry args={[0.34, 2.72, 0.05]} />
        <meshStandardMaterial color="#b08d5f" roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.38, 1.12]}>
        <boxGeometry args={[0.34, 2.72, 0.05]} />
        <meshStandardMaterial color="#b08d5f" roughness={0.6} />
      </mesh>
      {/* back panel against the wall */}
      <mesh position={[0.16, 1.38, -0.15]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[2.56, 2.72]} />
        <meshStandardMaterial color="#c19a68" roughness={0.85} />
      </mesh>
      {/* boards */}
      {boards.map((y) => (
        <mesh key={y} position={[0, y, -0.15]}>
          <boxGeometry args={[0.32, 0.045, 2.5]} />
          <meshStandardMaterial color="#c9a06c" roughness={0.6} />
        </mesh>
      ))}
      {/* books */}
      {rows.map((row, r) =>
        row.map((b, i) => (
          <mesh
            key={`${r}-${i}`}
            position={[-0.02, boards[r] + 0.025 + b.height / 2, b.z]}
            rotation={[b.lean, 0, 0]}
          >
            <boxGeometry args={[0.19, b.height, b.width]} />
            <meshStandardMaterial color={b.color} roughness={0.8} />
          </mesh>
        ))
      )}
      {/* glowing orb on the middle shelf */}
      <mesh position={[-0.05, 1.44, 0.5]} material={orb} name="orb">
        <sphereGeometry args={[0.095, 24, 24]} />
      </mesh>
      {/* small plant on the 4th shelf */}
      <group position={[-0.03, 1.945, 0.45]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.06, 0.045, 0.12, 12]} />
          <meshStandardMaterial color="#b97350" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.19, 0]}>
          <icosahedronGeometry args={[0.09, 0]} />
          <meshStandardMaterial color="#7d8f6d" roughness={0.9} flatShading />
        </mesh>
      </group>
      {/* trailing plant on top */}
      <group position={[-0.03, 2.65, -1.05]}>
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.14, 12]} />
          <meshStandardMaterial color="#e7d6bc" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <icosahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#6f8065" roughness={0.9} flatShading />
        </mesh>
        <mesh position={[-0.05, 0.02, 0.14]}>
          <icosahedronGeometry args={[0.07, 0]} />
          <meshStandardMaterial color="#7d8f6d" roughness={0.9} flatShading />
        </mesh>
      </group>
      {/* string lights draped along the front edge (visible at night) */}
      {bulbs.map((z, i) => (
        <mesh
          key={i}
          position={[-0.18, 2.56 + Math.sin(i * 1.7) * 0.05, z]}
          material={stringBulb}
        >
          <sphereGeometry args={[0.014, 8, 8]} />
        </mesh>
      ))}
    </group>
  );
}

function Chair() {
  return (
    <group position={[2.1, 0, 1.15]} rotation={[0, -0.9, 0]} scale={0.75}>
      <mesh position={[0, 0.44, 0]}>
        <cylinderGeometry args={[0.3, 0.27, 0.15, 24]} />
        <meshStandardMaterial color="#e9dcc3" roughness={0.95} />
      </mesh>
      {/* wraparound backrest, opening faces the desk */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry
          args={[0.32, 0.32, 0.44, 24, 1, true, Math.PI * 0.85, Math.PI * 1.3]}
        />
        <meshStandardMaterial
          color="#e4d5ba"
          roughness={0.95}
          side={2 /* DoubleSide */}
        />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.4, 10]} />
        <meshStandardMaterial color="#8a6a4a" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.24, 0.28, 0.035, 20]} />
        <meshStandardMaterial color="#8a6a4a" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Vase() {
  const stems = useMemo(() => {
    const rand = mulberry32(5);
    return Array.from({ length: 5 }, () => ({
      dx: (rand() - 0.5) * 0.12,
      dz: (rand() - 0.5) * 0.08,
      h: 0.28 + rand() * 0.12,
      lean: (rand() - 0.5) * 0.3,
    }));
  }, []);
  return (
    <group position={[-1.05, 0.99, -1.25]}>
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.055, 0.075, 0.22, 16]} />
        <meshStandardMaterial
          color="#dfe8dd"
          roughness={0.2}
          transparent
          opacity={0.75}
        />
      </mesh>
      {stems.map((s, i) => (
        <group key={i} position={[s.dx, 0.2, s.dz]} rotation={[s.dz, 0, s.lean]}>
          <mesh position={[0, s.h / 2, 0]}>
            <cylinderGeometry args={[0.004, 0.004, s.h, 5]} />
            <meshStandardMaterial color="#7d8f6d" roughness={0.9} />
          </mesh>
          <mesh position={[0, s.h, 0]}>
            <icosahedronGeometry args={[0.028, 0]} />
            <meshStandardMaterial color="#fffdf8" roughness={0.9} flatShading />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function FloorPlant() {
  return (
    <group position={[-2.45, 0, -1.1]}>
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.17, 0.13, 0.32, 16]} />
        <meshStandardMaterial color="#b97350" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.52, 0]}>
        <icosahedronGeometry args={[0.24, 0]} />
        <meshStandardMaterial color="#6f8065" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[0.14, 0.72, 0.06]}>
        <icosahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial color="#7d8f6d" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[-0.16, 0.68, -0.05]}>
        <icosahedronGeometry args={[0.13, 0]} />
        <meshStandardMaterial color="#a8b99a" roughness={0.9} flatShading />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ room */

export function Room({ blendRef }: { blendRef: MutableRefObject<number> }) {
  const mats = useThemedMaterials();
  const lampLightRef = useRef<PointLight>(null!);
  const orbLightRef = useRef<PointLight>(null!);
  const orbRef = useRef<Mesh>(null!);

  const portrait = useTexture("/images/portrait.jpeg", (t) => {
    t.colorSpace = SRGBColorSpace;
  });

  useFrame(({ clock, scene }) => {
    const t = blendRef.current;
    mats.lampShade.emissiveIntensity = lerp(0.05, 2.0, t);
    mats.screen.emissiveIntensity = lerp(0.35, 0.8, t);
    mats.flame.emissiveIntensity =
      lerp(0.15, 1.5, t) * (1 + Math.sin(clock.elapsedTime * 9) * 0.12 * t);
    mats.stringBulb.emissiveIntensity = lerp(0, 1.8, t);
    mats.sky.color.set("#cfe6f7").lerp(new Color("#232c4a"), t);
    mats.sky.emissive.set("#bcd8f0").lerp(new Color("#151b33"), t);
    mats.sky.emissiveIntensity = lerp(0.7, 0.55, t);

    // Orb glow + soft pulse (stronger at night)
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.8) * 0.035;
    mats.orb.emissiveIntensity = lerp(0.55, 2.1, t) * pulse;
    if (!orbRef.current)
      orbRef.current = scene.getObjectByName("orb") as Mesh;
    orbRef.current?.scale.setScalar(pulse);

    lampLightRef.current.intensity = lerp(0.25, 2.4, t);
    orbLightRef.current.intensity = lerp(0.15, 1.3, t) * pulse;
  });

  return (
    <group>
      {/* shell */}
      <mesh position={[0, 0, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#d3ac74" roughness={0.85} />
      </mesh>
      <mesh position={[0.1, 0.004, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 40]} />
        <meshStandardMaterial color="#ddc59c" roughness={1} />
      </mesh>
      <mesh position={[-0.2, 2.8, -1.8]}>
        <planeGeometry args={[9, 5.8]} />
        <meshStandardMaterial color="#f3ead9" roughness={0.95} />
      </mesh>
      <mesh position={[2.53, 2.8, 1.2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[7, 5.8]} />
        <meshStandardMaterial color="#efe4d0" roughness={0.95} />
      </mesh>

      {/* window + sky */}
      <Window />
      <mesh position={[-1.55, 1.85, -1.815]}>
        <planeGeometry args={[1.72, 1.84]} />
        <primitive object={mats.sky} attach="material" />
      </mesh>
      {/* sheer curtains */}
      <mesh position={[-2.5, 1.75, -1.72]} rotation={[0, 0.08, 0]}>
        <planeGeometry args={[0.42, 2.1]} />
        <meshStandardMaterial
          color="#fffdf8"
          roughness={1}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh position={[-0.62, 1.75, -1.72]} rotation={[0, -0.08, 0]}>
        <planeGeometry args={[0.42, 2.1]} />
        <meshStandardMaterial
          color="#fffdf8"
          roughness={1}
          transparent
          opacity={0.55}
        />
      </mesh>

      <WallFrames />
      <Desk />
      <Lamp shade={mats.lampShade} />
      <Portrait texture={portrait} />
      <PenBox />
      <Candle flame={mats.flame} />
      <Notebook />
      {/* small stack of books between notebook and laptop */}
      <group position={[0.42, 0.99, -1.5]} rotation={[0, 0.15, 0]}>
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[0.24, 0.04, 0.17]} />
          <meshStandardMaterial color="#5c6b8a" roughness={0.8} />
        </mesh>
        <mesh position={[0.01, 0.06, 0.01]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[0.22, 0.035, 0.16]} />
          <meshStandardMaterial color="#c67b5c" roughness={0.8} />
        </mesh>
        <mesh position={[-0.01, 0.095, 0]} rotation={[0, 0.1, 0]}>
          <boxGeometry args={[0.2, 0.03, 0.15]} />
          <meshStandardMaterial color="#a8b99a" roughness={0.8} />
        </mesh>
      </group>
      <Laptop screen={mats.screen} />
      <Bookshelf orb={mats.orb} stringBulb={mats.stringBulb} />
      <Chair />
      <Vase />
      <FloorPlant />

      {/* warm practical lights (ramp up at night) */}
      <pointLight
        ref={lampLightRef}
        position={[-1.55, 1.6, -1.35]}
        color="#f6c96d"
        distance={4}
        decay={1.8}
      />
      <pointLight
        ref={orbLightRef}
        position={[2.22, 1.5, 0.2]}
        color="#f2b24e"
        distance={3.2}
        decay={1.8}
      />
    </group>
  );
}
