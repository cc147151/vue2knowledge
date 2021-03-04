<template>
  <div class="assembly">
    <Nav />
    <p>
      1.在子组件的_events里，可以看到父组件传递给子组件监听的函数名
      <Son @son-fun2="toSon2" attr="attr" :son-arr="sonData" />
    </p>
  </div>
</template>
<script>
import Son from "./components/Son"
export default {
  data() {
    return {
      sonData: []
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
