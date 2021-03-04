<template>
  <div class="ifAndShowBox">
    <Nav />
    <div class="change">
      <van-button :plain="!changeType" type="primary" @click="oneFun"
        >账号登录</van-button
      >
      <van-button :plain="changeType" type="primary" @click="twoFun"
        >短信登录</van-button
      >
    </div>
    <template v-if="changeType">
      <!-- <input v-model="name" type="text" placeholder="请输入账号" /> -->
      <!-- <div class="ob"> -->
      <div class="b"></div>
      <div class="div"></div>
      <!-- </div> -->
    </template>
    <template v-else>
      <!-- <input v-model="message" type="text" placeholder="请输入短信" /> -->
      <!-- <div class="ob"> -->
      <div class="a"></div>
      <div class="div" id="ddd"></div>
      <!-- </div> -->
    </template>
    <h3>
      v-if文档说：Vue
      会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使
      Vue
      变得非常快之外，还有其它一些好处。，所以当没有内嵌的时候，给id为ddd元素添加自定义属性，切回为true的div时候，也带上了个这个自定义属性。但是有一个共同父元素时候，就不会携带过去了,所以是尽可能高效渲染吧
    </h3>
    <p>给元素加key解决</p>
    <div v-show="true" class="oo">
      show
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import { Button } from "vant"
Vue.use(Button)
export default {
  data() {
    return {
      changeType: true,
      name: "",
      message: ""
    }
  },
  methods: {
    oneFun() {
      this.changeType = true
    },
    twoFun() {
      this.changeType = false
      this.$nextTick(() => {
        document.getElementById("ddd").setAttribute("ko", "kkk")
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
