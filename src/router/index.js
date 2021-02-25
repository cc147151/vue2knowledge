import Vue from "vue";
import VueRouter from "vue-router";
const Index = () => import("../views/index.vue");
const Filter = () => import("../views/filter/index.vue");
const Life = () => import("../views/life/index.vue");
const Render = () => import("../views/render/index.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter,
  },
  {
    path: "/life",
    name: "Life",
    component: Life,
  },
  {
    path: "/render",
    name: "Render",
    component: Render,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
