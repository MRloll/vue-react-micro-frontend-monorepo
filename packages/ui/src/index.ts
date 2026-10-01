import type AppButtonComponent from "./components/AppButton.vue";

declare module "vue" {
  export interface GlobalComponents {
    AppButton: typeof AppButtonComponent;
  }
}

export { default as AppButton } from "./components/AppButton.vue";
export { sharedUiConfig } from "./theme.js";
