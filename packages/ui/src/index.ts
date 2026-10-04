import type AppButtonComponent from "./components/AppButton.vue";

declare module "vue" {
  export interface GlobalComponents {
    AppButton: typeof AppButtonComponent;
  }
}

export { default as AppButton } from "./components/AppButton.vue";
export { default as ActionLink } from "./components/ActionLink.vue";
export { default as BrandLogo } from "./components/BrandLogo.vue";
export { default as FeatureCard } from "./components/FeatureCard.vue";
export { default as PageContainer } from "./components/PageContainer.vue";
export { default as SectionHeading } from "./components/SectionHeading.vue";
export { sharedUiConfig } from "./theme.js";
