import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((r) => r.text());

  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

import { displayUrl } from "@/lib/env";

export default async function Image() {
  const [playfairBold, quicksandSemibold, caveatBold] = await Promise.all([
    loadFont("Playfair Display", 700),
    loadFont("Quicksand", 600),
    loadFont("Caveat", 700),
  ]);

  // Logo noir sur fond clair (panneau droit crème)
  const logoData = readFileSync(join(process.cwd(), "public/logo_noir.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Panneau gauche — sombre avec texte */}
        <div
          style={{
            width: 660,
            height: "100%",
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 56px 52px 64px",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Glow rose */}
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -60,
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,165,201,0.10) 0%, transparent 65%)",
              display: "flex",
            }}
          />

          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#ffa5c9",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#555",
                fontSize: 11,
                fontFamily: "Quicksand",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              Co&apos;équi&apos;pattes
            </span>
          </div>

          {/* Headline */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative" }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "Playfair Display",
                lineHeight: 1.1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Cours d&apos;équitation</span>
              <span>&amp; pet-sitting</span>
            </div>
            <div style={{ display: "flex", marginTop: 6 }}>
              <span
                style={{
                  fontSize: 54,
                  fontFamily: "Caveat",
                  color: "#ffa5c9",
                  lineHeight: 1.05,
                  background: "rgba(255,165,201,0.08)",
                  padding: "0 10px",
                  borderRadius: 6,
                }}
              >
                à Vannes.
              </span>
            </div>
            <div
              style={{
                color: "#3a3a3a",
                fontSize: 13,
                fontFamily: "Quicksand",
                marginTop: 16,
                letterSpacing: "0.3px",
              }}
            >
              Monitrice diplômée · Pet-sitter professionnelle
            </div>
          </div>

          {/* URL */}
          <span
            style={{
              color: "#2e2e2e",
              fontSize: 11,
              fontFamily: "Quicksand",
              letterSpacing: "1.5px",
            }}
          >
            {displayUrl}
          </span>
        </div>

        {/* Séparateur — barre pink */}
        <div
          style={{
            width: 3,
            height: "100%",
            background:
              "linear-gradient(180deg, transparent 0%, #ffa5c9 20%, #e8598b 80%, transparent 100%)",
            flexShrink: 0,
            display: "flex",
          }}
        />

        {/* Panneau droit — crème avec logo noir */}
        <div
          style={{
            flex: 1,
            background: "#fdf8f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow déco sur fond clair */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,165,201,0.15) 0%, transparent 65%)",
              display: "flex",
            }}
          />
          <img
            src={logoSrc}
            width={380}
            height={435}
            style={{ objectFit: "contain", position: "relative" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfairBold, weight: 700 },
        { name: "Quicksand", data: quicksandSemibold, weight: 600 },
        { name: "Caveat", data: caveatBold, weight: 700 },
      ],
    },
  );
}
