import {
  AppButton,
  ActionLink,
  BrandLogo,
  FeatureCard,
  PageContainer,
  SectionHeading,
} from "@repo/ui";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("AppButton", AppButton);
  vueApp.component("ActionLink", ActionLink);
  vueApp.component("BrandLogo", BrandLogo);
  vueApp.component("FeatureCard", FeatureCard);
  vueApp.component("PageContainer", PageContainer);
  vueApp.component("SectionHeading", SectionHeading);
});
