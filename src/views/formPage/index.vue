<template>
  <div>
    sss
    <s-form>
      <formItem :rules="rules">
        <formInput></formInput>
      </formItem>
    </s-form>
  </div>
</template>
<script>
import sForm from "./components/form.vue"
import formItem from "./components/formItem.vue"
import formInput from "./components/formInput.vue"
export default {
  name: "formPage",
  components: {
    sForm,
    formItem,
    formInput
  },
  data() {
    return {
      rules: [
        {
          aa: function() {
            return 222
          }
        }
      ]
    }
  },
  mounted() {}
}
</script>
