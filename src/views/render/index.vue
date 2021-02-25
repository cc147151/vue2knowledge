<template>
  <div class="about">
    <h1>This is an about page{{logFun()}}</h1>
  </div>
</template>
<script>
// 测试 视图渲染的几种情况 页面组件和子组件
export default {
  data() {
    return {
        tname:'0.0'
    };
  },
  created() {
    console.log(this.$route);
  },
  methods:{
      logFun(){
          console.log('渲染了');
      }
  }
};
</script>
