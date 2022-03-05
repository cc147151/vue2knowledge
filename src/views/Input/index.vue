<template>
  <div>
    <InputCom :value.sync="value" v-bind.sync="doc" />
    <h3>多个值:v-bind.sync="doc" {{ doc }}</h3>
    采用.sync{{ value }}

    <InputCom v-model="value" />
    采用v-model---{{ value }}
  </div>
</template>
<script>
import InputCom from "./components/input.vue"
export default {
  name: "Input",
  components: {
    InputCom
  },
  data() {
    return {
      value: "",
      doc: {
        name: "sss",
        age: "99"
      }
    }
  }
}
</script>
