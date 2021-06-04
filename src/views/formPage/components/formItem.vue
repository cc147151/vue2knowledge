<template>
  <view class="formItem">
    <slot></slot>
  </view>
</template>

<script>
/*
		@inputValue：输入框的值
		@rules: 校验的规则
	*/
export default {
  props: {
    inputValue: {
      type: [String, Number],
      default: ""
    },
    rules: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object
    }
  },
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      this.$parent.$emit("getFormItems", this.validation)
    }, 3000)
    // console.log(this.parent.formItems)
    // this.$u.$parent.formItems.push(this.validation)
    console.log(this.rules)
  },
  methods: {
    validation(callback = () => {}) {
      this.rules.map(item => {
        if (item.required) {
          if (!this.inputValue) {
            return callback(item.message)
          }
        }
        // 正则
        // if (item.pattern) {
        // }
        callback("")
      })
    }
  }
}
</script>

<style></style>
