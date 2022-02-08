<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="maxlength"
    :style="[getStyle]"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "form-input",
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: -1
    },
    // 输入框的自定义样式
    customStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    height: {
      type: [Number, String],
      default: "70"
    }
  },
  data() {
    return {}
  },
  computed: {
    getStyle() {
      return {
        height: this.height,
        ...this.customStyle
      }
    }
  },
  methods: {
    handleInput(e) {
      let value = e.target.value
      this.$emit("input", value)
    }
  }
}
</script>

<style></style>
