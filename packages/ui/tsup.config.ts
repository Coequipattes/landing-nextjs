import { defineConfig } from "tsup";

// Builds a distributable bundle (ESM + types) for external consumers and the
// design-sync converter. The app itself consumes the raw sources via Next's
// transpilePackages (exports map points at ./src), so this build is not on the
// app's dev path. React/react-dom and package deps are auto-externalized.
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  treeshake: true,
});
