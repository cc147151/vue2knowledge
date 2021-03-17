<template>
  <div class="one">
    one路由
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ["id"],
  created() {
    console.log(this.id)

  },
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    console.log(from)
    console.log(to.params.id) // 最新的id
    next()
  },
  methods: {}
}
</script>
