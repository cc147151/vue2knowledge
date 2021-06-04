<template>
  <view class="form">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: "s-form",
  props: {},
  data() {
    return {
      formItems: [1, 2]
    }
  },
  mounted() {
    console.log("mm")
    this.$on("getFormItems", item => {
      console.log("iii")
      this.formItems.push(item)
    })
  }
}
</script>

<style></style>
