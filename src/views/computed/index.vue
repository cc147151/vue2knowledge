<template>
  <div class="computedBox">
    <Nav @leftEvent="myBack" />
    <router-view></router-view>
    <div class="fix" @click="e => toSecond(e, '哇哈哈')">
      <p path="/computed" data-hhh="hhhhhhh">1.于样式结合</p>
      <p path="/computed/subComponents">2.于子组件结合</p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {

  },
  methods: {
    toSecond(e, ...arg) {
      console.log(arg)
      console.log(e.target.dataset.hhh)
      console.log(e.target.getAttribute("path"))
      const path = e.target.getAttribute("path")
      path && this.$router.push(path)
    },
    myBack() {
      history.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.computedBox {
  font-size: 16px;
  .fix {
    position: fixed;
    top: 50%;
    right: 0;
    height: 200px;
    width: 100px;
    padding-left: 10px;
    background-color: rgba(17, 16, 16, 0.2);
    transform: translateY(-50%);
  }
}
</style>
