// Real app captures only. Files in public/screens are discovered at build time; a slot whose
// capture is missing renders nothing (never a placeholder or a drawn mock). See public/screens/README.md.
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
      en: "The coach’s suggested lineup: a 5-3-2 with a mini board, the explanation written by the on-device AI, and facts such as team width and the matchups between lines.",
      es: "La alineación sugerida por el entrenador: un 5-3-2 con una minipizarra, la explicación que escribe la IA en el dispositivo y datos como el ancho del equipo y los duelos entre líneas. Captura con la interfaz en inglés.",
    },
  },
  coachAnalyze: {
    names: ["iphone-analysis", "iphone-coach-analyze"],
    alt: {
      en: "Setup analysis on iPhone: suggested adjustments marked on the board with numbered badges and listed with an Apply button each.",
      es: "Análisis del parado en iPhone: ajustes sugeridos marcados en la pizarra con números y listados con un botón para aplicar cada uno.",
    },
  },
  coachInsight: {
    names: ["iphone-insight", "iphone-coach-insight"],
    alt: {
      en: "An insight about the team’s shape shown over the board on iPhone.",
      es: "Una observación sobre el acomodo del equipo, mostrada sobre la pizarra en iPhone.",
    },
  },
  board3d: {
    names: ["iphone-3d-board", "iphone-board-3d"],
    alt: {
      en: "The 3D-style board on iPhone: player tokens with volume, light and shadow on a pitch with depth.",
      es: "La pizarra con efecto 3D en iPhone: fichas de jugador con volumen, luz y sombra sobre una cancha con profundidad.",
    },
  },
  /** Crop of duo-closed-board-es (one half of the pitch). */
  boardCloseup: {
    names: ["board-closeup"],
    alt: {
      en: "Close-up of the board: one team’s player tokens with volume, light and shadow, and a run drawn as a curved arrow.",
      es: "Acercamiento a la pizarra: las fichas de un equipo con volumen, luz y sombra, y una carrera dibujada con una flecha curva.",
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
  // Until the open-desk capture exists, the hero shows the real outer-display capture.
  hero: ["duoOpenDesk", "duoClosedBoard"],
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

function readSize(file: string): { width: number; height: number } | null {
  const b = fs.readFileSync(file);
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
      const size = readSize(path.join(SCREENS_DIR, file));
      if (size && size.width > 0 && size.height > 0) {
        found.set(base, { src: `/screens/${file}`, ...size });
      }
    }
  }
  cache = found;
  return found;
}

/**
 * Filenames: <name>[-en|-es][-light|-dark].<ext>. No locale suffix = any locale, no theme suffix = light.
 * Spanish pages fall back to English captures; English pages never show Spanish captures.
 * A missing dark capture falls back to the light one. Locales are never mixed within one slot.
 */
function resolveSubject(names: readonly string[], locale: Locale) {
  const index = screenIndex();
  const levels = locale === "es" ? ["-es", "-en", ""] : ["-en", ""];
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
