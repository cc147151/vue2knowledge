<template>
  <div class="about">
    <Nav />
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
// 测试 视图渲染的几种情况 页面组件和子组件
import HelloWorld from "./component/HelloWorld"
import test from "@/mixins/test"
export default {
  data() {
    return {
      tname: "0.0"
    }
  },
  components: {
    HelloWorld
  },
  methods: {},
  mixins: [test],
  beforeCreate() {
    console.log("father-beforeCreate")
  },
  created() {
    console.log("father-created")
  },
  beforeMount() {
    console.log("father-beforeMount")
  },
  mounted() {
    console.log("father-mounted")
  },
  beforeDestroy() {
    console.log("father-beforeDestroy")
  },
  destroyed() {
    console.log("father-destroyed")
  }
}
</script>
<style>
</style>
