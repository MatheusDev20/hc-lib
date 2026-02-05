import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  globalName: "AktieHC",
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
});
