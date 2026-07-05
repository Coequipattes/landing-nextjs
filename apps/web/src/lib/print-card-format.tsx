import type { CSSProperties } from "react";

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
