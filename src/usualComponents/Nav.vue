<template>
  <div class="nav">
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      v-bind="$attrs"
    />
  </div>
</template>
<script>
import Vue from "vue"
import { NavBar } from "vant"

Vue.use(NavBar)

export default {
  data() {
    return {}
  },
  props: {
    title: {
      //   type: String,
      //   default: ""
    }
  },
  methods: {
    onClickLeft() {
      //   this.$emit('')
      //   父组件给子组件传递的事件 监听的函数 绑定在子组件的_events里
      console.log(this.$listeners)
      if (this._events.leftEvent) {
        console.log(this._events)
        this.$emit("leftEvent")
        return
      }
      console.log("back")
      this.$router.back()
    }
  }
}
</script>
<style></style>
