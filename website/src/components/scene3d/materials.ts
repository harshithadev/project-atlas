import {
  CanvasTexture,
  Color,
  DoubleSide,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
} from "three";

/* ------------------------------------------------------------- textures */

// Deterministic PRNG so textures render identically across reloads.
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

type DrawFn = (
  ctx: CanvasRenderingContext2D,
  size: number,
  rand: () => number
) => void;

// All textures start near-white so they multiply against the material color,
// preserving the existing warm palette while adding surface variation.
function makeTexture(draw: DrawFn, seed: number, size = 512): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
  draw(ctx, size, mulberry32(seed));
  const tex = new CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

/** Wandering horizontal grain lines + faint knots. */
function woodGrain(seed: number): CanvasTexture {
  return makeTexture(
    (ctx, size, rand) => {
      for (let i = 0; i < 150; i++) {
        const y = rand() * size;
        ctx.strokeStyle = `rgba(92, 62, 32, ${0.03 + rand() * 0.06})`;
        ctx.lineWidth = 0.8 + rand() * 2.2;
        ctx.beginPath();
        let x = 0;
        let yy = y;
        ctx.moveTo(0, yy);
        while (x < size) {
          x += 24 + rand() * 44;
          yy = y + Math.sin(x * 0.02 + rand() * 4) * 3 + (rand() - 0.5) * 3;
          ctx.lineTo(x, yy);
        }
        ctx.stroke();
      }
      for (let i = 0; i < 5; i++) {
        const x = rand() * size;
        const y = rand() * size;
        const r = 3 + rand() * 6;
        ctx.strokeStyle = "rgba(80, 50, 25, 0.10)";
        ctx.lineWidth = 1;
        for (let k = 1; k < 4; k++) {
          ctx.beginPath();
          ctx.ellipse(x, y, r * k, r * k * 0.6, rand() * Math.PI, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    },
    seed
  );
}

/** Wood planks: per-plank tint, grain, seams, and staggered joints. */
function plankTexture(seed: number): CanvasTexture {
  return makeTexture(
    (ctx, size, rand) => {
      const planks = 5;
      const plankH = size / planks;
      for (let p = 0; p < planks; p++) {
        const y0 = p * plankH;
        ctx.fillStyle = `rgba(120, 80, 40, ${0.02 + rand() * 0.06})`;
        ctx.fillRect(0, y0, size, plankH);
        for (let i = 0; i < 34; i++) {
          const y = y0 + rand() * plankH;
          ctx.strokeStyle = `rgba(92, 62, 32, ${0.02 + rand() * 0.05})`;
          ctx.lineWidth = 0.8 + rand() * 1.6;
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x = 0; x <= size; x += 48) {
            ctx.lineTo(x, y + (rand() - 0.5) * 3);
          }
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(70, 45, 25, 0.30)";
        ctx.fillRect(0, y0, size, 2);
        ctx.fillRect(rand() * size, y0, 2, plankH);
      }
    },
    seed
  );
}

/** Fine plaster noise for walls. */
function plasterTexture(seed: number): CanvasTexture {
  return makeTexture(
    (ctx, size, rand) => {
      const img = ctx.getImageData(0, 0, size, size);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const n = (rand() - 0.5) * 12;
        d[i] += n;
        d[i + 1] += n;
        d[i + 2] += n;
      }
      ctx.putImageData(img, 0, 0);
    },
    seed,
    256
  );
}

/* ----------------------------------------------------- shared materials */

export type SharedMaterials = {
  floor: MeshStandardMaterial;
  wallBack: MeshStandardMaterial;
  wallSide: MeshStandardMaterial;
  wood: MeshStandardMaterial;
  woodDark: MeshStandardMaterial;
  shelfBack: MeshStandardMaterial;
  chairFabric: MeshPhysicalMaterial;
  curtain: MeshStandardMaterial;
};

let cache: SharedMaterials | null = null;

/**
 * Lazily-built singleton of textured materials shared across the room.
 * Client-only (uses canvas); safe because the scene renders inside Canvas.
 */
export function sharedMaterials(): SharedMaterials {
  if (cache) return cache;

  const grain = woodGrain(7);
  const planks = plankTexture(11);
  planks.repeat.set(3, 3);
  const plaster = plasterTexture(3);
  plaster.repeat.set(3, 3);

  cache = {
    floor: new MeshStandardMaterial({
      color: "#d3ac74",
      roughness: 0.8,
      map: planks,
    }),
    wallBack: new MeshStandardMaterial({
      color: "#f3ead9",
      roughness: 0.95,
      map: plaster,
    }),
    wallSide: new MeshStandardMaterial({
      color: "#efe4d0",
      roughness: 0.95,
      map: plaster,
    }),
    wood: new MeshStandardMaterial({
      color: "#c9a06c",
      roughness: 0.5,
      map: grain,
    }),
    woodDark: new MeshStandardMaterial({
      color: "#b08d5f",
      roughness: 0.6,
      map: grain,
    }),
    shelfBack: new MeshStandardMaterial({
      color: "#c19a68",
      roughness: 0.85,
      map: grain,
    }),
    chairFabric: new MeshPhysicalMaterial({
      color: "#f2e7d4",
      roughness: 1,
      sheen: 0.9,
      sheenRoughness: 0.7,
      sheenColor: new Color("#fff2dc"),
    }),
    curtain: new MeshStandardMaterial({
      color: "#fffdf8",
      roughness: 1,
      transparent: true,
      opacity: 0.55,
      side: DoubleSide,
    }),
  };
  return cache;
}
