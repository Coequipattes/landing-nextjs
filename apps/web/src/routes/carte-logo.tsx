import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { loadCardFonts } from "@/lib/og-fonts";
import {
  CARD_FORMAT,
  CARD_THEME,
  markSvgDataUri,
  PrintGuides,
  resolveCardTheme,
} from "@/lib/print-card-format";

// Recto — reproduction fidèle de l'original (commit dbaeb96, Figma "Recto V2 —
// Logo seul") : glow + double anneau + mark + wordmark bas. Seuls palette,
// polices (DM Serif Text/Inter) et logo (mark.svg vectoriel) changent.
export const Route = createFileRoute("/carte-logo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const DEBUG_GUIDES =
          new URL(request.url).searchParams.get("guides") === "1";
        const theme = CARD_THEME[resolveCardTheme(request.url)];

        const fonts = await loadCardFonts();
        const logoSrc = markSvgDataUri(theme.ink, theme.accent);

        return new ImageResponse(
          <div
            style={{
              background: theme.bg,
              width: "100%",
              height: "100%",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: CARD_FORMAT.bleed,
                top: CARD_FORMAT.bleed,
                width: CARD_FORMAT.trim.width,
                height: CARD_FORMAT.trim.height,
                background: theme.bg,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Glow centré */}
              <div
                style={{
                  position: "absolute",
                  width: 1080,
                  height: 1080,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(232,91,121,0.12) 0%, transparent 65%)",
                  display: "flex",
                }}
              />

              {/* Anneaux */}
              <div
                style={{
                  position: "absolute",
                  width: 1180,
                  height: 1180,
                  borderRadius: "50%",
                  border: "9px solid rgba(232,91,121,0.40)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 1280,
                  height: 1280,
                  borderRadius: "50%",
                  border: "9px dashed rgba(232,91,121,0.22)",
                  display: "flex",
                }}
              />

              {/* Logo */}
              <img
                src={logoSrc}
                width={850}
                height={850}
                alt=""
                style={{
                  objectFit: "contain",
                  position: "relative",
                  marginTop: -90,
                }}
              />

              {/* Dégradé bas — estompe le bas du mark/anneau derrière le texte */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 420,
                  background: `linear-gradient(to bottom, rgba(${theme.bgRgb},0) 0%, rgba(${theme.bgRgb},1) 55%)`,
                  display: "flex",
                }}
              />

              {/* Brand + nom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 90,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    color: theme.ink,
                    fontSize: 81,
                    fontFamily: "DM Serif Text",
                    letterSpacing: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  Co&apos;équi&apos;pattes
                </span>
                <span
                  style={{
                    color: theme.accent,
                    fontSize: 65,
                    fontFamily: "Inter",
                    fontWeight: 600,
                    letterSpacing: "3px",
                  }}
                >
                  Manon Millot
                </span>
              </div>
            </div>
            {DEBUG_GUIDES && <PrintGuides />}
          </div>,
          {
            ...CARD_FORMAT.canvas,
            fonts,
          },
        );
      },
    },
  },
});
