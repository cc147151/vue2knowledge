<template>
  <div>
    <InputCom v-model="value" />
    {{ value }}
  </div>
</template>
<script>
import InputCom from "@/components/input.vue"
export default {
  name: "Input",
  components: {
    InputCom
  },
  data() {
    return {
      value: ""
    }
  }
}
</script>
