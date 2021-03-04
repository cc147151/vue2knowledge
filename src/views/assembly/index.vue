<template>
  <div class="assembly">
    <Nav />
    <p>
      1.在子组件的_events里，可以看到父组件传递给子组件监听的函数名
      <Son @son-fun2="toSon2"  attr="attr" :one="one"/>
      <button @click="one=3">点我修改子组件值</button>
    </p>
    <p>
      2.基础组件的自动化全局注册：main.js配置以后，无需再import引入，components注册
    </p>
  </div>
</template>
<script>
import Son from "./components/Son"
export default {
  data() {
    return {
      one:1
    }
  },
  components: {
    Son
  },
  methods: {
    toSon(arg) {
      console.log(arg)
    },
    toSon2(arg) {
      console.log(arg)
    }
  }
}
</script>
<style lang="scss" scoped></style>
