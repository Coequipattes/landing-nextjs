import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { displayUrl } from "@/lib/env";
import { loadBrandFonts } from "@/lib/og-fonts";

// Variante C — accroche en question, bandeau récompense, conditions en pastilles.
const size = { width: 1080, height: 1350 };

const CHIPS = ["Nouveau client", "Sur une prestation", "Non cumulable"];

export const Route = createFileRoute("/post-parrainage-c")({
  server: {
    handlers: {
      GET: async () => {
        const fonts = await loadBrandFonts();
        const logoData = readFileSync(
          join(process.cwd(), "public/logo_rose.png"),
        );
        const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

        return new ImageResponse(
          <div
            style={{
              background: "#0a0a0a",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "64px 72px 60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={logoSrc}
              width={440}
              height={440}
              style={{
                position: "absolute",
                right: -80,
                top: 120,
                opacity: 0.05,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -140,
                left: -120,
                width: 520,
                height: 520,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(232,89,139,0.14) 0%, transparent 65%)",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -160,
                right: -120,
                width: 460,
                height: 460,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,165,201,0.10) 0%, transparent 65%)",
                display: "flex",
              }}
            />

            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#ffa5c9",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#888",
                    fontSize: 19,
                    fontFamily: "Quicksand",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Co&apos;équi&apos;pattes
                </span>
              </div>
              <span
                style={{
                  color: "#555",
                  fontSize: 17,
                  fontFamily: "Quicksand",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                Programme de parrainage
              </span>
            </div>

            {/* Accroche question */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 86,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Playfair Display",
                  lineHeight: 1.05,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>Vous adorez</span>
                <span>mes services ?</span>
              </div>
              <div
                style={{
                  fontSize: 70,
                  color: "#ffa5c9",
                  fontFamily: "Caveat",
                  lineHeight: 1.05,
                  marginTop: 14,
                }}
              >
                Partagez-les, gagnez ensemble.
              </div>
            </div>

            {/* Bandeau récompense */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 28,
                padding: "34px 28px",
                borderRadius: 24,
                background: "rgba(255,165,201,0.08)",
                border: "1px solid rgba(255,165,201,0.28)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontFamily: "Quicksand",
                    color: "#cfcfcf",
                    marginBottom: 4,
                  }}
                >
                  Pour votre filleul
                </span>
                <span
                  style={{
                    fontSize: 84,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffa5c9",
                    lineHeight: 1,
                  }}
                >
                  -10%
                </span>
              </div>
              <div
                style={{
                  width: 1,
                  height: 130,
                  background: "rgba(255,255,255,0.14)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontFamily: "Quicksand",
                    color: "#cfcfcf",
                    marginBottom: 4,
                  }}
                >
                  Pour vous
                </span>
                <span
                  style={{
                    fontSize: 84,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  -10%
                </span>
              </div>
            </div>

            {/* Conditions en pastilles */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span
                style={{
                  fontSize: 19,
                  fontFamily: "Quicksand",
                  color: "#777",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Les conditions
              </span>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {CHIPS.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: 25,
                      fontFamily: "Quicksand",
                      fontWeight: 500,
                      color: "#d8d8d8",
                      padding: "14px 26px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 26,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 26,
                  fontFamily: "Quicksand",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Réservez sur {displayUrl}
              </span>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#ffa5c9",
                  display: "flex",
                }}
              />
            </div>
          </div>,
          { ...size, fonts },
        );
      },
    },
  },
});
