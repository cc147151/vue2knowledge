<template>
  <div class="index">
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
import dataArr from "@/utils/data"
import Vue from "vue"
import { Cell, CellGroup } from "vant"
Vue.use(Cell)
Vue.use(CellGroup)
export default {
  data() {
    return {
      dataArr
    }
  },
  created() {},
  methods: {}
}
</script>
<style>
.ml {
  margin-left: 15px;
}
</style>
