import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"
// import testSky from "test-sky"
// Vue.use(testSky)
Vue.config.productionTip = false
import { Button } from "vant"
Vue.use(Button)

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
// console.log(requireComponent.keys())

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
//   console.log(componentName)
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
  data() {
    return {
      root: "root"
    }
  },
  mounted() {
    // console.log(this.$options.testRoot)
  },
  testRoot: { test: "ok" },
  render: h => h(App)
}).$mount("#app")
