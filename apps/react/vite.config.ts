import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "react_app",
      filename: "remoteEntry.js",
      exposes: {
        "./ReactApp": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: 5174,
    cors: true,
  },
  preview: {
    port: 5174,
  },
});
