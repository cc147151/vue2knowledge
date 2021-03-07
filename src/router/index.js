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
      { path: "/", component: Style },
      { path: "subComponents", component: SubComponents }
    ]
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
    path: '/slot',
    name: 'Slot',
    component: Slot
  },{
    path:'/boundary',
    name:'Boundary',
    component:Boundary
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
