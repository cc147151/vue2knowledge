<template>
  <div class="index">
    <SkyButton>册俄式 </SkyButton>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <van-cell-group :border="false">
      <van-cell
        is-link
        v-for="(item, index) in dataArr"
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
console.log(SkyButton)
import swiperTest from "/public/swiper.js"
import dataArr from "@/utils/data"
export default {
  data() {
    return {
      dataArr
    }
  },
  mounted() {
    const swiperTest1 = new swiperTest(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    })
    console.dir(swiperTest1)
  },
  methods: {}
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
