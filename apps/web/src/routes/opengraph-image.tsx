import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { displayUrl } from "@/lib/env";
import { loadClairFonts } from "@/lib/og-fonts";

export const Route = createFileRoute("/opengraph-image")({
  server: {
    handlers: {
      GET: async () => {
        const fonts = await loadClairFonts();

        const logoData = readFileSync(
          join(process.cwd(), "public/logo_noir.png"),
        );
        const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

        return new ImageResponse(
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              position: "relative",
              overflow: "hidden",
              background: "#fbf6f1",
            }}
          >
            {/* Panneau gauche — texte */}
            <div
              style={{
                width: 650,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "52px 56px 52px 64px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -80,
                  left: -60,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(224,91,138,0.10) 0%, transparent 65%)",
                  display: "flex",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#e05b8a",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#6b5a49",
                    fontSize: 14,
                    fontFamily: "Hanken Grotesk",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Co&apos;équi&apos;pattes
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 700,
                    color: "#3a2e26",
                    fontFamily: "Fraunces",
                    lineHeight: 1.15,
                    display: "flex",
                    flexDirection: "column",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Pet-sitting</span>
                  <span>&amp; cours d&apos;équitation</span>
                </div>
                <div style={{ display: "flex", marginTop: 6 }}>
                  <span
                    style={{
                      fontSize: 54,
                      fontFamily: "Caveat",
                      color: "#c9426f",
                      lineHeight: 1.05,
                      background: "rgba(224,91,138,0.10)",
                      padding: "0 10px",
                      borderRadius: 6,
                    }}
                  >
                    à Vannes.
                  </span>
                </div>
                <div
                  style={{
                    color: "#6b5a49",
                    fontSize: 16,
                    fontFamily: "Hanken Grotesk",
                    marginTop: 16,
                    letterSpacing: "0.3px",
                  }}
                >
                  Monitrice diplômée · Pet-sitter professionnelle
                </div>
              </div>

              <span
                style={{
                  color: "#3a2e26",
                  fontSize: 15,
                  fontFamily: "Hanken Grotesk",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                }}
              >
                {displayUrl}
              </span>
            </div>

            {/* Séparateur rose */}
            <div
              style={{
                width: 3,
                height: "100%",
                background:
                  "linear-gradient(180deg, transparent 0%, #e05b8a 20%, #c9426f 80%, transparent 100%)",
                flexShrink: 0,
                display: "flex",
              }}
            />

            {/* Panneau droit — dégradé rose chaleureux avec logo noir */}
            <div
              style={{
                flex: 1,
                background:
                  "radial-gradient(circle at 50% 42%, #fff1f6 0%, #ffd2e2 60%, #ffbcd4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={logoSrc}
                width={430}
                height={496}
                alt=""
                style={{ objectFit: "contain", position: "relative" }}
              />
            </div>
          </div>,
          {
            width: 1200,
            height: 630,
            fonts,
          },
        );
      },
    },
  },
});
