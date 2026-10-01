import { AppButton } from "@repo/ui";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component("AppButton", AppButton);
});
