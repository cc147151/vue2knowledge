<template>
  <div class="assembly">
    <!-- <div class="ass">{{ comName }}{{ cc }}</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    person: {
      type: Object
    }
  },
  computed: {
    //   如果template里没用到，自然不会执行
    comName() {
      console.log("aa")
      return this.person && this.person.name
    },
    cc() {
      console.log("ccccc")
      return ""
    }
  },
  created(){
      console.log('声明test')
  }
}
</script>
<style lang="scss" scoped>
.assembly {
  background-color: aqua;
}
</style>
