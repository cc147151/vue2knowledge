<template>
  <div>
    <input type="text" :value="value" @input="changeInput($event, 'hhh')" />
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    changeInput($event, cc) {
      console.log($event, cc)
      this.$emit("input", $event.target.value)
    }
  }
}
</script>
