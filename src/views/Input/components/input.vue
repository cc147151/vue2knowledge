<template>
  <div>
    <input type="text" :value="newName" @input="changeInput($event, 'hhh')" />
    <van-button @click="changePro">
      修改父组件对象的值
    </van-button>
  </div>
</template>
<script>
export default {
  props: ["newName"],
  model: {
    prop: "newName", // v-model默认的是value,修改名字
    event: "newEvent" // 修改v-model默认对应的事件名字
  },
  methods: {
    changeInput($event, cc) {
      console.log($event, cc)
      this.$emit("update:value", $event.target.value)
      //   针对v-model 默认是input
      this.$emit("newEvent", $event.target.value)
    },
    changePro() {
      this.$emit("update:name", "哇哈哈")
    }
  }
}
</script>
