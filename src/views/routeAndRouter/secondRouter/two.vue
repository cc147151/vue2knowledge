<template>
  <div class="tow">
    two路由
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ["query","params"],
  created() {
    console.log(this.query)
    console.log(this.params)
  },
//   不执行，只发生在/a/1,/a/2路由不变，参数变化
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    console.log(from)
    next()
  },
  methods: {}
}
</script>
