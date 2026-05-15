import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { preset: "vercel" },
      prerender: {
        enabled: true,
        routes: ["/"],
      },
    }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      manifest: {
        name: "Gulf Oasis Premium",
        short_name: "Gulf Oasis",
        description: "Premium water delivery app",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
