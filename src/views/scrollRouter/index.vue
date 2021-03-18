<template>
  <div class="scBox">
    <div class="tab">
      <van-button @click="toWhere(1)">锚点1</van-button>
      <van-button @click="toWhere(2)">锚点2</van-button>
      <van-button @click="toWhere(3)">锚点3</van-button>
    </div>
      <router-view class=""></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    toWhere(id) {
      this.$router.push(`/scrollRouter/anchor#i${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
