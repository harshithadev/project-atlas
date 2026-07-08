"use client";

import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import {
  Color,
  Group,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  SRGBColorSpace,
  Texture,
} from "three";
import { sharedMaterials } from "./materials";

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

// Day/night endpoints for theme-lerped materials (hoisted; no per-frame allocs)
const THEME_COLORS = {
  skyDay: new Color("#cfe6f7"),
  skyNight: new Color("#232c4a"),
  skyEmDay: new Color("#bcd8f0"),
  skyEmNight: new Color("#151b33"),
  buildDay: new Color("#b4c3d4"),
  buildNight: new Color("#252e44"),
  buildAltDay: new Color("#a5b5c8"),
  buildAltNight: new Color("#1e2637"),
  celDay: new Color("#ffdf9e"),
  celNight: new Color("#eef1f8"),
  celEmDay: new Color("#ffd27a"),
  celEmNight: new Color("#dfe7f5"),
};

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
  building: MeshStandardMaterial;
  buildingAlt: MeshStandardMaterial;
  cityWindow: MeshStandardMaterial;
  celestial: MeshStandardMaterial;
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
      building: new MeshStandardMaterial({
        color: "#b4c3d4",
        roughness: 1,
      }),
      buildingAlt: new MeshStandardMaterial({
        color: "#a5b5c8",
        roughness: 1,
      }),
      cityWindow: new MeshStandardMaterial({
        color: "#ffd98a",
        roughness: 0.8,
        emissive: new Color("#ffd98a"),
        emissiveIntensity: 0,
        transparent: true,
        opacity: 0.25,
      }),
      celestial: new MeshStandardMaterial({
        color: "#ffdf9e",
        roughness: 0.6,
        emissive: new Color("#ffd27a"),
        emissiveIntensity: 1.3,
      }),
    }),
    []
  );
}

/** Low-poly NYC-ish skyline outside the window; lit windows fade in at night. */
function Skyline({
  building,
  buildingAlt,
  cityWindow,
  celestial,
}: {
  building: MeshStandardMaterial;
  buildingAlt: MeshStandardMaterial;
  cityWindow: MeshStandardMaterial;
  celestial: MeshStandardMaterial;
}) {
  const buildings = useMemo(() => {
    const rand = mulberry32(41);
    const list: {
      x: number;
      z: number;
      w: number;
      h: number;
      alt: boolean;
      spire: boolean;
      lights: { dx: number; dy: number }[];
    }[] = [];
    let x = -3.4;
    while (x < 2.2) {
      const w = 0.35 + rand() * 0.4;
      const h = 0.9 + rand() * 1.9;
      const z = -2.6 - rand() * 1.1;
      const lights: { dx: number; dy: number }[] = [];
      const cols = Math.max(2, Math.round(w / 0.16));
      const rows = Math.max(3, Math.round(h / 0.28));
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (rand() < 0.45) continue; // not every office is lit
          lights.push({
            dx: -w / 2 + (w / (cols + 1)) * (c + 1),
            dy: -h / 2 + (h / (rows + 1)) * (r + 1),
          });
        }
      }
      list.push({
        x: x + w / 2,
        z,
        w,
        h,
        alt: rand() < 0.5,
        spire: h > 2.2 && rand() < 0.5,
        lights,
      });
      x += w + 0.08 + rand() * 0.12;
    }
    return list;
  }, []);

  return (
    <group>
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, b.h / 2 - 0.1, b.z]}>
          <mesh material={b.alt ? buildingAlt : building}>
            <boxGeometry args={[b.w, b.h, 0.3]} />
          </mesh>
          {b.spire && (
            <mesh
              position={[0, b.h / 2 + 0.14, 0]}
              material={b.alt ? buildingAlt : building}
            >
              <cylinderGeometry args={[0.012, 0.03, 0.3, 6]} />
            </mesh>
          )}
          {b.lights.map((l, j) => (
            <mesh
              key={j}
              position={[l.dx, l.dy, 0.152]}
              material={cityWindow}
            >
              <planeGeometry args={[0.05, 0.07]} />
            </mesh>
          ))}
        </group>
      ))}
      {/* sun by day, moon by night (material lerped in Room); kept low enough
          to be visible through the window opening (now centered at x=-0.1) */}
      <mesh position={[-0.65, 2.45, -4.0]} material={celestial}>
        <sphereGeometry args={[0.16, 20, 20]} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------- fragments */

function Window() {
  const frame = "#e8dcc6";
  return (
    <group position={[-0.1, 1.85, -1.79]}>
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
  // Pushed right so its end sits flush against the bookshelf, opening up the
  // left of the frame for the hero copy, quote, and floor plant.
  const M = sharedMaterials();
  return (
    <group>
      {/* top */}
      <RoundedBox
        args={[3.1, 0.06, 0.78]}
        radius={0.015}
        smoothness={3}
        position={[0.55, 0.96, -1.35]}
        material={M.wood}
      />
      {/* side panels */}
      <RoundedBox
        args={[0.06, 0.9, 0.7]}
        radius={0.012}
        smoothness={3}
        position={[-0.95, 0.48, -1.35]}
        material={M.woodDark}
      />
      <RoundedBox
        args={[0.06, 0.9, 0.7]}
        radius={0.012}
        smoothness={3}
        position={[2.05, 0.48, -1.35]}
        material={M.woodDark}
      />
    </group>
  );
}

function Lamp({ shade }: { shade: MeshStandardMaterial }) {
  return (
    <group position={[-0.65, 0.99, -1.42]}>
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
    <group position={[0.35, 1.16, -1.48]} rotation={[-0.06, 0.28, 0]}>
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
    <group position={[0.78, 0.99, -1.42]}>
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
    <group position={[-0.25, 0.99, -1.1]}>
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
    <group position={[1.08, 1.0, -1.02]} rotation={[0, -0.18, 0]}>
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
    <group position={[1.62, 0.99, -1.32]} rotation={[0, -0.3, 0]}>
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
      <RoundedBox
        args={[0.34, 2.72, 0.05]}
        radius={0.01}
        smoothness={3}
        position={[0, 1.38, -1.42]}
        material={sharedMaterials().woodDark}
      />
      <RoundedBox
        args={[0.34, 2.72, 0.05]}
        radius={0.01}
        smoothness={3}
        position={[0, 1.38, 1.12]}
        material={sharedMaterials().woodDark}
      />
      {/* back panel against the wall */}
      <mesh
        position={[0.16, 1.38, -0.15]}
        rotation={[0, -Math.PI / 2, 0]}
        material={sharedMaterials().shelfBack}
      >
        <planeGeometry args={[2.56, 2.72]} />
      </mesh>
      {/* boards */}
      {boards.map((y) => (
        <RoundedBox
          key={y}
          args={[0.32, 0.045, 2.5]}
          radius={0.008}
          smoothness={3}
          position={[0, y, -0.15]}
          material={sharedMaterials().wood}
        />
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
      <group userData={{ noShadow: true }}>
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
    </group>
  );
}

function Chair() {
  return (
    <group position={[2.1, 0, 1.15]} rotation={[0, -0.9, 0]} scale={0.75}>
      <mesh position={[0, 0.44, 0]} material={sharedMaterials().chairFabric}>
        <cylinderGeometry args={[0.3, 0.27, 0.15, 24]} />
      </mesh>
      {/* wraparound backrest, opening faces the desk */}
      <mesh position={[0, 0.7, 0]} material={sharedMaterials().chairFabric}>
        <cylinderGeometry
          args={[0.32, 0.32, 0.44, 24, 1, true, Math.PI * 0.85, Math.PI * 1.3]}
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
    <group position={[-0.15, 0.99, -1.25]}>
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
    <group position={[-2.15, 0, -0.7]} scale={1.15}>
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
  const rootRef = useRef<Group>(null);

  const portrait = useTexture("/images/portrait.jpeg", (t) => {
    t.colorSpace = SRGBColorSpace;
  });

  // Enable shadow casting/receiving on every mesh except those under a
  // `noShadow` ancestor (skyline, sky, curtains, string bulbs).
  useEffect(() => {
    rootRef.current?.traverse((obj) => {
      if (!(obj as Mesh).isMesh) return;
      let p: typeof obj.parent | typeof obj = obj;
      while (p) {
        if (p.userData.noShadow) return;
        p = p.parent;
      }
      const mesh = obj as Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });
  }, []);

  useFrame(({ clock, scene }) => {
    const t = blendRef.current;
    mats.lampShade.emissiveIntensity = lerp(0.05, 2.0, t);
    mats.screen.emissiveIntensity = lerp(0.35, 0.8, t);
    mats.flame.emissiveIntensity =
      lerp(0.15, 1.5, t) * (1 + Math.sin(clock.elapsedTime * 9) * 0.12 * t);
    mats.stringBulb.emissiveIntensity = lerp(0, 1.8, t);
    const c = THEME_COLORS;
    mats.sky.color.lerpColors(c.skyDay, c.skyNight, t);
    mats.sky.emissive.lerpColors(c.skyEmDay, c.skyEmNight, t);
    mats.sky.emissiveIntensity = lerp(0.7, 0.55, t);

    // City outside the window: buildings darken, offices light up, sun→moon
    mats.building.color.lerpColors(c.buildDay, c.buildNight, t);
    mats.buildingAlt.color.lerpColors(c.buildAltDay, c.buildAltNight, t);
    mats.cityWindow.emissiveIntensity = lerp(0, 1.6, t);
    mats.cityWindow.opacity = lerp(0.25, 1, t);
    mats.celestial.color.lerpColors(c.celDay, c.celNight, t);
    mats.celestial.emissive.lerpColors(c.celEmDay, c.celEmNight, t);
    mats.celestial.emissiveIntensity = lerp(1.3, 1.0, t);

    // Orb glow + soft pulse (stronger at night)
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.8) * 0.035;
    mats.orb.emissiveIntensity = lerp(0.55, 2.1, t) * pulse;
    if (!orbRef.current)
      orbRef.current = scene.getObjectByName("orb") as Mesh;
    orbRef.current?.scale.setScalar(pulse);

    lampLightRef.current.intensity = lerp(0.25, 2.4, t);
    orbLightRef.current.intensity = lerp(0.15, 1.3, t) * pulse;
  });

  const M = sharedMaterials();

  // Waved curtain profile (recomputed once); soft folds catch the light.
  const curtainGeo = useMemo(() => {
    const g = new PlaneGeometry(0.42, 2.1, 32, 1);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, Math.sin((x + 0.21) * 24) * 0.035);
    }
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <group ref={rootRef}>
      {/* shell */}
      <mesh
        position={[0, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={M.floor}
      >
        <planeGeometry args={[14, 14]} />
      </mesh>
      <mesh position={[0.8, 0.004, 0.45]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 40]} />
        <meshStandardMaterial color="#ddc59c" roughness={1} />
      </mesh>
      {/* back wall built from four strips so the window is a real opening
          with the skyline visible through it (window centered at x=-0.1) */}
      <mesh position={[-2.83, 2.8, -1.8]} material={M.wallBack}>
        <planeGeometry args={[3.74, 5.8]} />
      </mesh>
      <mesh position={[2.53, 2.8, -1.8]} material={M.wallBack}>
        <planeGeometry args={[3.54, 5.8]} />
      </mesh>
      <mesh position={[-0.1, 0.415, -1.8]} material={M.wallBack}>
        <planeGeometry args={[1.72, 1.03]} />
      </mesh>
      <mesh position={[-0.1, 4.235, -1.8]} material={M.wallBack}>
        <planeGeometry args={[1.72, 2.93]} />
      </mesh>
      <mesh
        position={[2.53, 2.8, 1.2]}
        rotation={[0, -Math.PI / 2, 0]}
        material={M.wallSide}
      >
        <planeGeometry args={[7, 5.8]} />
      </mesh>

      {/* window, skyline outside, and far sky backdrop — the outside world
          neither casts nor receives room shadows */}
      <Window />
      <group userData={{ noShadow: true }}>
        <Skyline
          building={mats.building}
          buildingAlt={mats.buildingAlt}
          cityWindow={mats.cityWindow}
          celestial={mats.celestial}
        />
        <mesh position={[-0.6, 2.1, -4.5]}>
          <planeGeometry args={[12, 6]} />
          <primitive object={mats.sky} attach="material" />
        </mesh>
      </group>
      {/* sheer curtains — excluded from shadows so sunlight passes through */}
      <group userData={{ noShadow: true }}>
        <mesh
          geometry={curtainGeo}
          position={[-1.05, 1.75, -1.72]}
          rotation={[0, 0.08, 0]}
          material={M.curtain}
        />
        <mesh
          geometry={curtainGeo}
          position={[0.83, 1.75, -1.72]}
          rotation={[0, -0.08, 0]}
          material={M.curtain}
        />
      </group>

      <WallFrames />
      <Desk />
      <Lamp shade={mats.lampShade} />
      <Portrait texture={portrait} />
      <PenBox />
      <Candle flame={mats.flame} />
      <Notebook />
      {/* small stack of books between notebook and laptop */}
      <group position={[1.32, 0.99, -1.5]} rotation={[0, 0.15, 0]}>
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
        position={[-0.65, 1.6, -1.35]}
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
