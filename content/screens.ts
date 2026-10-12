// Real app captures only. Files in public/screens are discovered at build time; a slot whose
// capture is missing renders nothing (never a placeholder or a drawn mock). See docs/screens.md.
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./site";

export type ScreenFile = { src: string; width: number; height: number };
export type ResolvedScreen = { light: ScreenFile; dark?: ScreenFile; alt: string; subject: SubjectId };

type Subject = {
  /** Accepted base filenames, first match wins. */
  names: string[];
  /** Must describe what the capture really shows. */
  alt: Record<Locale, string>;
};

export const SUBJECTS = {
  /** The pitch alone, cropped from a board capture: no interface text, used on both languages. */
  pitch: {
    names: ["hero-pitch", "pitch"],
    alt: {
      en: "A section of the board seen from above: three player tokens with volume, light and shadow, two runs drawn as arrows, and the centre circle.",
      es: "Una parte de la pizarra vista desde arriba: tres fichas de jugador con volumen, luz y sombra, dos carreras dibujadas con flechas y el círculo central.",
    },
  },
  /** A tighter band of the same pitch for the hero below 900 px (art direction, same <img> alt). */
  pitchBand: {
    names: ["hero-pitch-band"],
    alt: {
      en: "A section of the board seen from above: six player tokens with volume, light and shadow, two runs drawn as arrows and the centre circle.",
      es: "Una parte de la pizarra vista desde arriba: seis fichas de jugador con volumen, luz y sombra, dos carreras dibujadas con flechas y el círculo central.",
    },
  },
  duoOpenDesk: {
    names: ["duo-open-coach-desk", "duo-open-desk"],
    alt: {
      en: "The inner display of iPhone Duo, open flat: the board with a lineup applied, and the coach panel beside it showing that result.",
      es: "La pantalla interior del iPhone Duo, abierto por completo: la pizarra con una alineación aplicada y, al lado, el panel del entrenador con ese resultado.",
    },
  },
  duoClosedBoard: {
    names: ["duo-closed-board"],
    alt: {
      en: "The outer display of iPhone Duo: a compact board with both teams, drawing tools on the left and the app’s tabs on the right.",
      es: "La pantalla exterior del iPhone Duo: una pizarra compacta con ambos equipos, las herramientas de dibujo a la izquierda y las pestañas de la app a la derecha.",
    },
  },
  duoHalfDesk: {
    names: ["duo-half-open", "duo-half-desk"],
    alt: {
      en: "iPhone Duo half open: the board and the coach panel side by side.",
      es: "iPhone Duo medio abierto: la pizarra y el panel del entrenador lado a lado.",
    },
  },
  coachBuild: {
    names: ["iphone-ai-lineup", "iphone-coach-build"],
    alt: {
      en: "The coach’s suggested lineup: a 5-3-2 with a mini board of the formation, 3 players on the bench, and the explanation written by the on-device AI.",
      es: "La alineación sugerida por el entrenador: un 5-3-2 con una minipizarra de la formación, 3 jugadores en la banca y la explicación que escribe la IA en el dispositivo.",
    },
  },
  coachAnalyze: {
    names: ["iphone-analysis", "iphone-coach-analyze"],
    alt: {
      en: "Setup analysis on iPhone: up to three numbered adjustment cards, each with an Apply button.",
      es: "Análisis del parado en iPhone: hasta tres ajustes numerados, cada uno con un botón para aplicarlo.",
    },
  },
  coachInsight: {
    names: ["iphone-insight", "iphone-coach-insight"],
    alt: {
      en: "Coach insights about the shape on the board, listed in the coach panel.",
      es: "Observaciones del entrenador sobre el acomodo en la pizarra, en el panel del entrenador.",
    },
  },
  board3d: {
    names: ["iphone-3d-board", "iphone-board-3d"],
    alt: {
      en: "The 3D-style board on iPhone: player tokens with volume, light and shadow on a pitch with depth.",
      es: "La pizarra con efecto 3D en iPhone: fichas de jugador con volumen, luz y sombra sobre una cancha con profundidad.",
    },
  },
  /** Crop of an outer-display board capture: one team's goal end. */
  boardCloseup: {
    names: ["board-closeup"],
    alt: {
      en: "Close-up of the board: eight player tokens of one team with volume, light and shadow, and the start of a run drawn as a curved arrow.",
      es: "Acercamiento a la pizarra: ocho fichas de un mismo equipo con volumen, luz y sombra, y el inicio de una carrera dibujada con una flecha curva.",
    },
  },
  format11: {
    names: ["iphone-format-11"],
    alt: { en: "An 11-a-side team on the board.", es: "Un equipo de fútbol 11 en la pizarra." },
  },
  format7: {
    names: ["iphone-format-7"],
    alt: { en: "A 7-a-side team on the board.", es: "Un equipo de fútbol 7 en la pizarra." },
  },
  formatFutsal: {
    names: ["iphone-format-futsal"],
    alt: { en: "A futsal team on the court.", es: "Un equipo de futsal en la cancha." },
  },
} satisfies Record<string, Subject>;

export type SubjectId = keyof typeof SUBJECTS;

/** Which subjects each page slot tries, in order. */
export const SLOTS = {
  // The pitch owns the hero. Full interface captures belong to their own sections.
  hero: ["pitch"],
  heroNarrow: ["pitchBand"],
  coachBuild: ["coachBuild"],
  coachAnalyze: ["coachAnalyze"],
  coachInsight: ["coachInsight"],
  board: ["board3d", "boardCloseup"],
  duoClosed: ["duoClosedBoard"],
  duoOpen: ["duoOpenDesk"],
  duoHalf: ["duoHalfDesk"],
  format11: ["format11"],
  format7: ["format7"],
  formatFutsal: ["formatFutsal"],
} satisfies Record<string, SubjectId[]>;

export type SlotId = keyof typeof SLOTS;

const SCREENS_DIR = path.join(process.cwd(), "public", "screens");
const EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg", ".avif"];

function readSize(b: Buffer): { width: number; height: number } | null {
  // PNG: IHDR width/height at bytes 16..24
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  // WebP: RIFF....WEBP + VP8 / VP8L / VP8X chunk
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    }
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8 ") {
      return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    }
  }
  // JPEG: walk the markers to the first SOFn
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
  }
  return null;
}

let cache: Map<string, ScreenFile> | null = null;

function screenIndex(): Map<string, ScreenFile> {
  if (cache) return cache;
  const found = new Map<string, ScreenFile>();
  const files = fs.existsSync(SCREENS_DIR) ? fs.readdirSync(SCREENS_DIR) : [];
  // Preferred extension first, so a .webp wins over a .png with the same name.
  for (const ext of EXTENSIONS) {
    for (const file of files) {
      if (path.extname(file).toLowerCase() !== ext) continue;
      const base = file.slice(0, -ext.length);
      if (found.has(base)) continue;
      const bytes = fs.readFileSync(path.join(SCREENS_DIR, file));
      const size = readSize(bytes);
      if (size && size.width > 0 && size.height > 0) {
        // The content hash in the URL lets the image optimizer cache for a long time: a new capture
        // under the same file name gets a new URL.
        const version = createHash("sha256").update(bytes).digest("hex").slice(0, 10);
        found.set(base, { src: `/screens/${file}?v=${version}`, ...size });
      }
    }
  }
  cache = found;
  return found;
}

/**
 * Filenames: <name>[-en|-es][-light|-dark].<ext>. No locale suffix = any locale (captures without
 * interface text only), no theme suffix = light. Each language shows only its own captures: a Spanish
 * page never falls back to an English capture, so a slot without a Spanish file renders nothing there.
 * A missing dark capture falls back to the light one.
 */
function resolveSubject(names: readonly string[], locale: Locale) {
  const index = screenIndex();
  const levels = locale === "es" ? ["-es", ""] : ["-en", ""];
  for (const name of names) {
    for (const level of levels) {
      const base = `${name}${level}`;
      const light = index.get(`${base}-light`) ?? index.get(base);
      if (light) return { light, dark: index.get(`${base}-dark`) };
    }
  }
  return null;
}

export function resolveSlot(slot: SlotId, locale: Locale): ResolvedScreen | null {
  for (const subject of SLOTS[slot] as SubjectId[]) {
    const found = resolveSubject(SUBJECTS[subject].names, locale);
    if (found) return { ...found, alt: SUBJECTS[subject].alt[locale], subject };
  }
  return null;
}
