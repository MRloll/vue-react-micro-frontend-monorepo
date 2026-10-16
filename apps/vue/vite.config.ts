import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";
import { sharedUiConfig, sharedUiTheme, colorMode } from "@repo/ui/theme";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: sharedUiConfig,
      theme: sharedUiTheme,
      colorMode: colorMode,
    }),
    federation({
      name: "host_app",
      remotes: {
        react_app: "http://localhost:5175/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
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
