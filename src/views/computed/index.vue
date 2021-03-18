<template>
  <div class="computedBox">
    <Nav @leftEvent="myBack" />
    <router-view :key="key"></router-view>
    <div class="fix" @click="e => toSecond(e, '哇哈哈')">
        <h3>给router-view添加一个key,</h3>
      <p path="/computed/style" data-hhh="hhhhhhh" @click="toWhere('Style')">
        1.于样式结合
      </p>
      <p path="/computed/subComponents" @click="toWhere('SubComponents')">
        2.于子组件结合
      </p>
      <testComponent />
    </div>
  </div>
</template>
<script>
import testComponent from "./secondaryRouting/testComponent"

export default {
  components: { testComponent },
  data() {
    return {}
  },
computed: {
  key() {
      console.log(this.$route.path)
    // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
    return this.$route.fullPath
  }
 },
  methods: {
    toSecond() {
      //   console.log(arg)
      //   console.log(e.target.dataset.hhh)
      //   console.log(e.target.getAttribute("path"))
      //   const path = e.target.getAttribute("path")
      //   path && this.$router.push(path)
    },
    toWhere(todo) {
      this.$router.push({ name: todo })
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
