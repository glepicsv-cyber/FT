import { defineConfig } from "vite";

export default defineConfig({
  // Relative base so the built dist/ works from any sub-path (CDN, GitHub Pages, WebView).
  base: "./",
  server: { port: 5173 },
  build: { target: "es2018" },
});
