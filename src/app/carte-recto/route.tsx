import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { displayUrl } from "@/lib/env";
import { CARD_FORMAT, PrintGuides } from "@/lib/print-card-format";

export const runtime = "nodejs";

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

export async function GET(request: Request) {
  const DEBUG_GUIDES = new URL(request.url).searchParams.get("guides") === "1";

  const [playfairBold, quicksandSemibold, caveatBold] = await Promise.all([
    loadFont("Playfair Display", 700),
    loadFont("Quicksand", 600),
    loadFont("Caveat", 700),
  ]);

  const logoData = readFileSync(join(process.cwd(), "public/logo_rose.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0612",
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
            background: "#0e0612",
            display: "flex",
            alignItems: "center",
            paddingLeft: 160,
            paddingRight: 100,
            gap: 80,
            overflow: "hidden",
          }}
        >
        {/* Halos */}
        <div
          style={{
            position: "absolute",
            left: -80,
            top: "50%",
            marginTop: -400,
            width: 800,
            height: 800,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,89,139,0.10) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: "50%",
            marginTop: -320,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,165,201,0.06) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Médaillon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 760,
              height: 760,
              borderRadius: "50%",
              border: "4px solid rgba(255,165,201,0.18)",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 820,
              height: 820,
              borderRadius: "50%",
              border: "4px dashed rgba(255,165,201,0.08)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 700,
              height: 700,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoSrc}
              width={660}
              height={660}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Séparateur vertical */}
        <div
          style={{
            width: 4,
            height: 600,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,165,201,0.22) 30%, rgba(255,165,201,0.22) 70%, transparent 100%)",
            flexShrink: 0,
            display: "flex",
          }}
        />

        {/* Texte */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 44,
            }}
          >
            <div
              style={{
                width: 80,
                height: 4,
                background: "rgba(255,165,201,0.5)",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#ffa5c9",
                fontSize: 48,
                fontFamily: "Quicksand",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Vannes · Bretagne
            </span>
          </div>

          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "Playfair Display",
              lineHeight: 1.1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Équitation &amp; garde</span>
            <span>d&apos;animaux</span>
          </div>

          <div
            style={{
              fontSize: 100,
              color: "#ffa5c9",
              fontFamily: "Caveat",
              lineHeight: 1.1,
              marginTop: 16,
            }}
          >
            avec passion.
          </div>

          <div
            style={{
              color: "#999",
              fontSize: 46,
              fontFamily: "Quicksand",
              letterSpacing: "0.5px",
              marginTop: 44,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span>Monitrice diplômée</span>
            <span>Pet-sitter professionnelle</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 28,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#ffa5c9",
                display: "flex",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#bbb",
                fontSize: 46,
                fontFamily: "Quicksand",
                letterSpacing: "2px",
              }}
            >
              {displayUrl}
            </span>
          </div>
        </div>
        </div>
        {DEBUG_GUIDES && <PrintGuides />}
      </div>
    ),
    {
      ...CARD_FORMAT.canvas,
      fonts: [
        { name: "Playfair Display", data: playfairBold, weight: 700 },
        { name: "Quicksand", data: quicksandSemibold, weight: 600 },
        { name: "Caveat", data: caveatBold, weight: 700 },
      ],
    },
  );
}
