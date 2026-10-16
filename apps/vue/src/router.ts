import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import index from "./views/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/courses",
    component: () => import("./views/Courses.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
