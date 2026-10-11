import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
    rolldownOptions: {
      // The app runs alone; the second entry is the public host integration API.
      input: {
        app: fileURLToPath(new URL("./index.html", import.meta.url)),
        remote: fileURLToPath(new URL("./src/mount.tsx", import.meta.url)),
      },
      preserveEntrySignatures: "strict",
      output: {
        entryFileNames: (chunk: { name: string }) =>
          chunk.name === "remote" ? "remote.js" : "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 5174,
    cors: true,
  },
  preview: {
    port: 5174,
  },
});
