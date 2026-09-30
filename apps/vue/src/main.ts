import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import "./style.css";
import App from "./App.vue";
const app = createApp(App);

const routes = [
  {
    path: "/",
    component: () => import("./views/index.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);

app.mount("#app");
