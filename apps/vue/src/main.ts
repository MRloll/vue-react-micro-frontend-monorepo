import { createApp } from "vue";
import ui from "@nuxt/ui/vue-plugin";
import router from "./router";
import {
  ActionLink,
  AppButton,
  BrandLogo,
  FeatureCard,
  PageContainer,
  SectionHeading,
} from "@repo/ui";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);

app.use(router);
app.use(ui);

app.component("ActionLink", ActionLink);
app.component("AppButton", AppButton);
app.component("BrandLogo", BrandLogo);
app.component("FeatureCard", FeatureCard);
app.component("PageContainer", PageContainer);
app.component("SectionHeading", SectionHeading);

app.mount("#app");
