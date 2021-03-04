<template>
  <div class="son">
    <van-button type="primary" @click="seeFun"
      >点我查看父组件给我传递的函数名</van-button
    >
  </div>
</template>
<script>
import Vue from "vue"
import { Button } from "vant"
Vue.use(Button)
export default {
  data() {
    return {}
  },
  methods: {
    seeFun() {
      console.log(this._events)
      console.log(this.$listeners,'listeners')
      console.log(this.$attrs,'attrs')
      this.$emit('son-fun','啊哈哈')
      this.$emit('son-fun2',{name:"sss"})
    }
  }
}
</script>

<style lang="scss" scoped></style>
