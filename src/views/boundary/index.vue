<template>
  <div>
    <Nav />
    <h3>$root可以当作小型vuex</h3>
    <p @click="getRoot">
      测试$root：{{ $root.root }}---可以访问根组件得实例，但是不能访问到根组件得自定义属性，自定义属性需要$options访问
    </p>
    <van-button @click="$root.root = 'canChange'">点我通过$root修改</van-button>
    <p>可以当作小型vuex使用，或者类似小程序的globalData
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    getRoot() {
      console.log(this.$root.root)
    },
  },
}
</script>