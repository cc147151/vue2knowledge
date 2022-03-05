<template>
  <div class="sun">
    <h3>孙组件的$attrs:{{ $attrs }}</h3>
    <h3>孙组件的props:{{ name }}</h3>
    <h3>孙组件的inject:{{ testProvide }}</h3>
    <van-button @click="changeProDataFun">
      点我修改index的proAge的值
    </van-button>
    <van-button @click="changeBind">
      点我修改index的testBind的值
    </van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ["name"],
  inject: ["testProvide", "changeProDataFun"],
  methods: {
    changeBind() {
      console.log(this.$listeners)
      this.$emit("changeTestFun")
    }
  }
}
</script>
