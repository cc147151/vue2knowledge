import Vue from "vue"
import VueRouter from "vue-router"
const Index = () => import("../views")
const Filter = () => import("../views/filter")
const Life = () => import("../views/life")
const Render = () => import("../views/render")
const Computed = () => import("../views/computed")
const Style = () => import("../views/computed/secondaryRouting/style.vue")
const SubComponents = () =>
  import("../views/computed/secondaryRouting/subComponents.vue")
const IfAndShow = () => import("../views/ifAndShow")
const Assembly = () => import("../views/assembly")
const Slot = () => import("../views/slot")
const Boundary = () => import("../views/boundary")
const Watch = () => import("../views/watch")
const RouteAndRouter = () => import("../views/routeAndRouter")
const One = () => import("../views/routeAndRouter/secondRouter/one.vue")
const Two = () => import("../views/routeAndRouter/secondRouter/two.vue")
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter
  },
  {
    path: "/life",
    name: "Life",
    component: Life
  },
  {
    path: "/render",
    name: "Render",
    component: Render
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
    children: [
      { path: "", component: Style },
      { path: "style", name: "Style", component: Style },
      { path: "subComponents", name: "SubComponents", component: SubComponents }
    ]
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch
  },
  {
    path: "/ifAndShow",
    name: "IfAndShow",
    component: IfAndShow
  },
  {
    path: "/assembly",
    name: "Assembly",
    component: Assembly
  },
  {
    path: "/slot",
    name: "Slot",
    component: Slot
  },
  {
    path: "/boundary",
    name: "Boundary",
    component: Boundary
  },
  {
    path: "/routeAndRouter",
    name: "RouteAndRouter",
    component: RouteAndRouter,
    children: [
      {
        path: "one/:id",
        name: "One",
        component: One,
        props: true
      },
      { path: "two", name: "Two", component: Two,props:(route)=>({query:route.query,params:route.params}) }
    ]
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
