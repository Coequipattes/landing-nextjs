import { ImageResponse } from "next/og";
import { displayUrl } from "@/lib/env";
import { loadBrandFonts } from "@/lib/og-fonts";

export const runtime = "nodejs";

// Variante D — minimaliste, le chiffre 10 % en très gros, peu de texte.
const size = { width: 1080, height: 1350 };

export async function GET() {
  const fonts = await loadBrandFonts();

  return new ImageResponse(
    (
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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -360,
            marginTop: -460,
            width: 720,
            height: 720,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,89,139,0.16) 0%, transparent 65%)",
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
            Vannes · Bretagne
          </span>
        </div>

        {/* Coeur — chiffre géant */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 23,
              fontFamily: "Quicksand",
              color: "#ffa5c9",
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Programme de parrainage
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontSize: 380,
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 0.85,
              }}
            >
              10
            </span>
            <span
              style={{
                fontSize: 150,
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "#ffa5c9",
                marginTop: 36,
              }}
            >
              %
            </span>
          </div>
          <span
            style={{
              fontSize: 90,
              fontFamily: "Caveat",
              color: "#ffa5c9",
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            pour vous deux.
          </span>
          <span
            style={{
              fontSize: 30,
              fontFamily: "Quicksand",
              fontWeight: 500,
              color: "#cfcfcf",
              textAlign: "center",
              marginTop: 30,
              lineHeight: 1.4,
            }}
          >
            L&apos;un pour votre filleul, l&apos;autre pour vous.
          </span>
        </div>

        {/* Pied — micro mécanique + url */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <span
            style={{
              fontSize: 25,
              fontFamily: "Quicksand",
              color: "#999",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Recommandez-moi · votre filleul économise · vous aussi
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 26,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#ffa5c9",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#bbb",
                fontSize: 22,
                fontFamily: "Quicksand",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {displayUrl}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
