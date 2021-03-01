<template>
  <div class="computedBox">
    <Nav @leftEvent="myBack"/>
      哇哈哈
    <router-view></router-view>
    <div class="fix" @click="e => toSecond(e)">
      <p path="/computed" data-hhh="hhhhhhh">1.于样式结合</p>
      <p path="/computed/assembly">2.于子组件结合</p>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/nav"
export default {
  data() {
    return {}
  },
  components: {
    Nav
  },
  methods: {
    toSecond(e) {
      console.log(e.target.dataset.hhh)
      console.log(e.target.getAttribute("path"))
      this.$router.push(e.target.getAttribute("path"))
    },
    myBack(){
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
