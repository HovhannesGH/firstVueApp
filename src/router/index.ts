import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomePage,
  // },
  {
    path: "/",
    name: "homepage",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("../pages/Messages.vue"),
    props: true,
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../pages/todoList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
