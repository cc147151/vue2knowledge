<template>
  <div>
    <InputCom :value.sync="value" />
    采用.sync{{ value }}

    <InputCom v-model="value" />
    采用v-model---{{ value }}
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
