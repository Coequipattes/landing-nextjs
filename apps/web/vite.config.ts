import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Nitro produit un serveur Node autonome (.output/server/index.mjs), équivalent
// de l'ancien `output: "standalone"` + `next start` de Next.js. Cf. skill
// @tanstack/start-client-core#start-core/deployment.
const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart(),
    nitroV2Plugin(),
    viteReact(),
  ],
});

export default config;
