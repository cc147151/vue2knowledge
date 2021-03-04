import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"
Vue.config.productionTip = false
function timestampToTime(timestamp) {
  let date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000.传进来之前做处理
  let y = date.getFullYear()
  let mon =
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  let h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":"
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":"
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  return {
    y,
    mon,
    d,
    h,
    m,
    s
  }
}
Vue.filter("getFormalTime", function(time) {
  console.log(time)
  if (!time) return ""
  let { y, mon, d, h, m, s } = timestampToTime(time * 1000)
  console.log(`${y}-${mon}-${d} ${h}${m}${s}`)
  return `${y}-${mon}-${d} ${h}${m}${s}`
})


// 基础组件的自动化全局注册
const requireComponent = require.context(
  // 其组件目录的相对路径
  "./usualComponents",
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  //   /.vue$/
  /[A-Z]\w+\.(vue|js)$/
)
console.log(requireComponent.keys())

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  )

  // 全局注册组件
  console.log(componentName)
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
