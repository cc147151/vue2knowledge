<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log("app-beforeCreate");
    // console.log(this.$route);
  },
  created() {
    console.log("app-created");
  },
  beforeMount() {
    console.log("app-beforeMount");
  },
  mounted() {
    console.log("app-mounted");
  },
  beforeDestroy() {
    console.log("app-beforeDestroy");
  },
  destroyed() {
    console.log("app-destroyed");
  },
  methods: {
    toAbout() {
      // about页面刷新会丢失params参数
      this.$router.push({ name: "About", params: { id: 1 } });
      // about页面刷新不会丢失query参数
      // this.$router.push({name:'About',query:{'id':1}})
      // params还是丢失
      // this.$router.push({name:'About',query:{'id':1},params:{'par':'a'}})
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
