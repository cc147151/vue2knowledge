<template>
  <div>
    <Nav />
    <h3>$root可以当作小型vuex</h3>
    <p @click="getRoot">
      测试$root(响应式的修改)：{{ $root.root }}---可以访问根组件得实例
    </p>
   <span>$root.$options根组件的自定义属性值（非响应式）</span> <p>{{$root.$options.testRoot.test}}</p>
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
      this.$root.$options.testRoot.test=111111
      console.log(this.$root.$options.testRoot)
    }
  },
}
</script>