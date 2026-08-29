import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";

// Palette carte de visite (light/dark), rose signature constant entre les deux.
// bgRgb sert aux dégradés (transparent → fond) : interpoler depuis le mot-clé
// "transparent" (alpha non prémultiplié) crée une bande grise sale chez Satori,
// il faut interpoler depuis rgba(bgRgb,0) vers rgba(bgRgb,1).
export const CARD_THEME = {
  light: {
    bg: "#f8ecea",
    bgRgb: "248,236,234",
    ink: "#3a2e26",
    sub: "#6b5a49",
    accent: "#e85b79",
  },
  dark: {
    bg: "#0e0612",
    bgRgb: "14,6,18",
    ink: "#f8ecea",
    sub: "#c9b8ae",
    accent: "#e85b79",
  },
} as const;

export type CardThemeName = keyof typeof CARD_THEME;

export function resolveCardTheme(requestUrl: string): CardThemeName {
  return new URL(requestUrl).searchParams.get("theme") === "dark"
    ? "dark"
    : "light";
}

// Illustration (cheval/cavalière/chat/chien) bicolore d'origine : le cheval/
// cavalière en rose accent, les silhouettes chat/chien en encre. Sur le thème
// clair les deux couleurs sources (#3A2E26/#E85B79) sont déjà les bonnes, donc
// c'est un passthrough ; sur le thème sombre l'encre est remplacée pour rester
// visible. Source : public/logo/mark.svg.
export function markSvgDataUri(ink: string, accent: string): string {
  const raw = readFileSync(join(process.cwd(), "public/logo/mark.svg"), "utf-8")
    .replace(/#3A2E26/g, ink)
    .replace(/#E85B79/g, accent);
  return `data:image/svg+xml;base64,${Buffer.from(raw).toString("base64")}`;
}

// Format carte de visite EU 85×55 mm avec fond perdu 3 mm.
// 91×61 mm @ ~23.63 px/mm ≈ 600 DPI effectif.
export const CARD_FORMAT = {
  canvas: { width: 2150, height: 1442 },
  bleed: 71,
  trim: { width: 2008, height: 1300 },
  safeMargin: 142,
  safe: { width: 1866, height: 1158 },
} as const;

export function PrintGuides() {
  const { canvas, bleed, trim, safeMargin, safe } = CARD_FORMAT;

  const base: CSSProperties = {
    position: "absolute",
    display: "flex",
  };

  return (
    <>
      <div
        style={{
          ...base,
          left: 0,
          top: 0,
          width: canvas.width,
          height: canvas.height,
          border: "10px dashed #ffaa00",
        }}
      />
      <div
        style={{
          ...base,
          left: bleed,
          top: bleed,
          width: trim.width,
          height: trim.height,
          border: "10px solid #ff00ff",
        }}
      />
      <div
        style={{
          ...base,
          left: safeMargin,
          top: safeMargin,
          width: safe.width,
          height: safe.height,
          border: "6px dashed #00ffff",
        }}
      />
    </>
  );
}
