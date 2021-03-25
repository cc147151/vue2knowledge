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
const ScrollRouter = () => import("../views/scrollRouter")
const Anchor = () => import("../views/scrollRouter/anchor")
const VuexPage = () => import("../views/vuex/index.vue")
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
      {
        path: "two",
        name: "Two",
        component: Two,
        props: route => ({ query: route.query, params: route.params })
      }
    ]
  },
  {
    path: "/scrollRouter",
    name: "ScrollRouter",
    component: ScrollRouter,
    children: [
      {
        path: "anchor",
        component: Anchor
      }
    ]
  },
  {
    path: "/vuexPage",
    name: "VuexPage",
    component: VuexPage
  }
]
const fun = function(savedPosition, to) {
  if (savedPosition) {
    console.log(savedPosition)
    return savedPosition
  } else {
    console.log(to.hash)
    if (/#[0-9a-zA-Z]+/.test(to.hash)) {
      console.log("锚点")
      return {
        selector: to.hash
      }
    } else {
      console.log("else")
      return { y: 0 }
    }
  }
}
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    //   one:id 也能监听到变化
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(fun(savedPosition, to))
      }, 0)
    })
  }
})

export default router
