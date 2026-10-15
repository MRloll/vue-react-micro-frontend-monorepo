import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import ui from "@nuxt/ui/vue-plugin";
import {
  ActionLink,
  AppButton,
  BrandLogo,
  FeatureCard,
  PageContainer,
  SectionHeading,
} from "@repo/ui";
import index from "./views/index.vue";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);

const routes = [
  {
    path: "/",
    component: index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(ui);

app.component("ActionLink", ActionLink);
app.component("AppButton", AppButton);
app.component("BrandLogo", BrandLogo);
app.component("FeatureCard", FeatureCard);
app.component("PageContainer", PageContainer);
app.component("SectionHeading", SectionHeading);

app.mount("#app");
