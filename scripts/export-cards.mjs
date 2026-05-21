#!/usr/bin/env node
// Exporte les cartes de visite en PNG (600 DPI) et optionnellement PDF (RGB ou CMJN).
//
// Prérequis : le serveur Next doit tourner (npm run dev ou npm start).
//
// Usage :
//   node scripts/export-cards.mjs              # PNG 600 DPI uniquement
//   node scripts/export-cards.mjs --pdf        # + PDF RGB
//   node scripts/export-cards.mjs --cmyk       # + PDF CMJN (sans profil ICC)
//   node scripts/export-cards.mjs --cmyk --icc /chemin/vers/FOGRA39.icc
//   node scripts/export-cards.mjs --only carte-verso-v1,carte-logo
//   node scripts/export-cards.mjs --clean             # vide print/ avant export
//
// Variables d'env :
//   PRINT_BASE_URL=https://coequipattes.fr  (défaut: http://localhost:3000)
//   PRINT_OUT_DIR=print                     (défaut: print)

import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const runFile = promisify(execFile);

const BASE_URL = process.env.PRINT_BASE_URL ?? "http://localhost:3000";
const OUT_DIR = process.env.PRINT_OUT_DIR ?? "print";
const DPI = 600;
const ALL_ROUTES = ["carte-recto", "carte-verso-v1", "carte-verso-v2", "carte-logo"];

const args = process.argv.slice(2);
const wantPdf = args.includes("--pdf") || args.includes("--cmyk");
const wantCmyk = args.includes("--cmyk");
const iccIdx = args.indexOf("--icc");
const iccPath = iccIdx >= 0 ? args[iccIdx + 1] : null;
const onlyIdx = args.indexOf("--only");
const onlyList = onlyIdx >= 0 ? args[onlyIdx + 1]?.split(",").map((s) => s.trim()) : null;
const wantClean = args.includes("--clean");

const ROUTES = onlyList ?? ALL_ROUTES;
const unknown = onlyList?.filter((r) => !ALL_ROUTES.includes(r)) ?? [];
if (unknown.length) {
  console.error(`× Routes inconnues : ${unknown.join(", ")}`);
  console.error(`  Routes valides : ${ALL_ROUTES.join(", ")}`);
  process.exit(1);
}

async function checkServer() {
  try {
    const res = await fetch(BASE_URL, { method: "HEAD" });
    if (res.status >= 500) throw new Error(`status ${res.status}`);
  } catch (err) {
    console.error(`× Impossible de joindre ${BASE_URL} (${err.message ?? err})`);
    console.error("  Lance le dev server (npm run dev) ou définis PRINT_BASE_URL.");
    process.exit(1);
  }
}

async function checkMagick() {
  try {
    await runFile("magick", ["--version"]);
  } catch {
    console.error("× ImageMagick 'magick' introuvable.");
    console.error("  Installe avec : sudo apt install imagemagick");
    process.exit(1);
  }
}

async function processRoute(route) {
  const url = `${BASE_URL}/${route}`;
  const pngPath = `${OUT_DIR}/${route}.png`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(pngPath, buf);

  // Embarque la métadonnée DPI (600) sans rééchantillonner.
  await runFile("magick", [
    pngPath,
    "-units", "PixelsPerInch",
    "-density", String(DPI),
    pngPath,
  ]);
  console.log(`  ✓ ${pngPath}  (600 DPI)`);

  if (wantPdf) {
    const pdfPath = `${OUT_DIR}/${route}.pdf`;
    const magickArgs = [
      pngPath,
      "-units", "PixelsPerInch",
      "-density", String(DPI),
    ];
    if (wantCmyk) {
      if (iccPath) {
        // Pour qu'IM convertisse réellement vers CMJN, il faut d'abord assigner
        // le profil source (sRGB) puis appliquer le profil cible.
        magickArgs.push("-profile", "/usr/share/color/icc/sRGB.icc");
        magickArgs.push("-profile", iccPath);
      } else {
        magickArgs.push("-colorspace", "CMYK");
      }
    }
    magickArgs.push(pdfPath);
    await runFile("magick", magickArgs);
    const label = wantCmyk ? (iccPath ? `CMJN, profil ${iccPath}` : "CMJN naïf") : "RGB";
    console.log(`  ✓ ${pdfPath}  (${label})`);
  }
}

async function main() {
  await checkServer();
  await checkMagick();
  await mkdir(OUT_DIR, { recursive: true });

  if (wantClean) {
    const entries = await readdir(OUT_DIR);
    const removable = entries.filter((f) => /\.(png|pdf)$/i.test(f));
    await Promise.all(removable.map((f) => unlink(`${OUT_DIR}/${f}`)));
    console.log(`→ ${OUT_DIR}/ nettoyé (${removable.length} fichier(s) supprimé(s))`);
  }

  console.log(`→ ${BASE_URL} ⇒ ${OUT_DIR}/`);
  if (wantCmyk && !iccPath) {
    console.warn(
      "⚠ CMJN sans profil ICC : conversion approximative. Pour du print premium, passe --icc /chemin/vers/FOGRA39.icc",
    );
  }

  for (const route of ROUTES) {
    console.log(`\n${route}`);
    await processRoute(route);
  }

  console.log(`\nFait. ${ROUTES.length} cartes exportées.`);
}

main().catch((err) => {
  console.error("\n× Échec :", err.message ?? err);
  process.exit(1);
});
