// https://nuxt.com/docs/api/configuration/nuxt-config
import { sharedUiTheme } from "@repo/ui/theme";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/ui"],
  devtools: { enabled: true },
  css: ["@repo/ui/theme.css"],
  ui: {
    theme: sharedUiTheme,
    experimental: {
      componentDetection: ["Button"],
    },
  },
});
