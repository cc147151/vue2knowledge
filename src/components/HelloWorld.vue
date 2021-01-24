<template>
  <div class="hello">
    <h1>子组件</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
    beforeCreate() {
    console.log("son-beforeCreate");
  },
  created() {
    console.log("son-created");
  },
  beforeMount() {
    console.log("son-beforeMount");
  },
  mounted() {
    console.log("son-mounted");
  },
  beforeDestroy() {
    console.log("son-beforeDestroy")
  },
  destroyed() {
    console.log("son-destroyed");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
