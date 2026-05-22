import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "spa-404",
      closeBundle() {
        const dist = resolve(__dirname, "dist");
        const index = resolve(dist, "index.html");
        if (existsSync(index)) {
          copyFileSync(index, resolve(dist, "404.html"));
        }
      },
    },
  ],
  /** Project site preview on github.io; override with VITE_BASE=/ after custom domain is live */
  base:
    process.env.VITE_BASE ??
    (process.env.GITHUB_PAGES === "true" ? "/techxtreme-portfolio/" : "/"),
});
