<template>
  <div class="index">
    <SkyButton>册俄式 </SkyButton>

    <button @click="toWei">去小程序</button>
    <van-cell-group :border="false">
      <van-cell
        is-link
        v-for="(item, index) in routesArr"
        :key="index"
        :to="item.name"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">{{ index + 1 }}.</span>
          <span class="ml">{{ item.title }}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
import Vue from "vue"
import { Cell, CellGroup } from "vant"
import { SkyButton } from "test-sky"
Vue.use(SkyButton)
Vue.use(Cell)
Vue.use(CellGroup)
// console.log(SkyButton)

import { routes } from "@/router/index.js"
export default {
  data() {
    return {}
  },
  computed: {
    routesArr() {
      return routes.filter(item => item.title)
    }
  },

  methods: {
    toWei() {
      window.location.href = "weixin://dl/business/?t=YKzsGWV7XVj"
    }
  }
}
</script>
<style>
.ml {
  margin-left: 15px;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
