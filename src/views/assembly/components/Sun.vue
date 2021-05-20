<template>
  <div class="sun">
    <h3>孙组件：</h3>
    <p>爷爷和父亲的值(未在props里注册的值)$attrs：{{ $attrs }}</p>
    <van-button type="info" @click="seeDataFun">点我打印查看更清晰</van-button>
    <div style="margin-top:20px">
      <van-button type="primary" @click="changeFun"
        >点我修改父组件和爷组件的值</van-button
      >
      <h2>用inject不会更新视图,非响应式：{{ sunAge }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  inject: ["sunAge"],
  methods: {
    seeDataFun() {
      console.log(this.$attrs, "Sunattrs")
      console.log(this.$listeners, "Sunlisteners")
    },
    changeFun() {
      this.$emit("giveSunFun", "sunData", this.$attrs.sunData + 1)
      this.$emit("changeData", "all")
    }
  }
}
</script>
