import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      colorMode: false,
    }),
    federation({
      name: "host_app",
      remotes: {
        react_app: "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
    cors: true,
  },
  preview: {
    port: 5173,
  },
});
