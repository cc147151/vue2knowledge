<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- 如果用括号括起来，过滤器就不识别-->
    <div>
      {{ info.status == "1" ? "进行中" : (info.modified_time | getFormalTime) }}
    </div>
    <div>
      <!-- 如果不加括号，会把进行中也进行过滤 status==1时候-->
      {{ info.status == "1" ? "进行中" : info.modified_time | getFormalTime }}
    </div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import test from '@/mixins/test'
export default {
  name: "Home",
  data() {
    return {
      info: {
        status: "1",
        modified_time: 1610951421,
      },
    };
  },
  mixins:[test],
  beforeCreate() {
    console.log("father-beforeCreate");
  },
  created() {
    console.log("father-created");
  },
  beforeMount() {
    console.log("father-beforeMount");
  },
  mounted() {
    console.log("father-mounted");
  },
  beforeDestroy() {
    console.log("father-beforeDestroy")
  },
  destroyed() {
    console.log("father-destroyed");
  },
  components: {
    HelloWorld,
  },
};
</script>
