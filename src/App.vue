<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  beforeCreate() {
    // console.log("app-beforeCreate")
    // var cc = 1
    // console.log(cc)
    // console.log(this.$route);
  },
  created() {
    // console.log("app-created")
  },
  beforeMount() {
    // console.log("app-beforeMount")
  },
  mounted() {
    // console.log("app-mounted")
  },
  beforeDestroy() {
    // console.log("app-beforeDestroy")
  },
  destroyed() {
    // console.log("app-destroyed")
  },
  methods: {
    toAbout() {
      // about页面刷新会丢失params参数
      this.$router.push({ name: "About", params: { id: 1 } })
      // about页面刷新不会丢失query参数
      // this.$router.push({name:'About',query:{'id':1}})
      // params还是丢失
      // this.$router.push({name:'About',query:{'id':1},params:{'par':'a'}})
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  text-align: center;
  font-size: 30px;
}
</style>
