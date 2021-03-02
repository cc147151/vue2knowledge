<template>
  <div class="assembly">
    <testComponent :name="name" />
    <button @click="name = '偶偶偶'">修改name值</button>
  </div>
</template>
<script>
import testComponent from "./testComponent"
export default {
  data() {
    return {
      name: ""
    }
  },
  components: {
    testComponent
  }
}
</script>
