<template>
  <div class="about">
    <h1>父子mixins生命周期</h1>
    <h1 @click="toWhere">filter的坑</h1>
   <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  created() {
    console.log(this.$route);
  },
  methods:{
      toWhere(){
          this.$router.push('/filter')
      }
  }
};
</script>
