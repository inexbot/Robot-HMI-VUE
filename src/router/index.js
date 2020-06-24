import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Teach";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Teach",
    component: Home,
  },
  {
    path: "/dhpara",
    name: "DhPara",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/DhPara"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
