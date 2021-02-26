import router from "@/router/index"
const dataArr = [
  { title: "filter的测试" },
  { title: "父子mixins生命周期" },
  { title: "render渲染" },
  { title: "computed" },
]
// console.log(router.options.routes)
router.options.routes
  .filter(item => item.path !== "/")
  .map((item, index) => (dataArr[index].path = item.path))
export default dataArr
