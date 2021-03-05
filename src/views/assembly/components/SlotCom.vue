<template>
  <div class="slot">
    小饭桶：
    <!--:a=a 保持一致  -->
    <div class="food" v-for="(item, index) of filterArr" :key="index">
      <slot name="eat" :item="item">
        {{ item.name }}
      </slot>
    </div>
    <slot>
      默认的默认是default
    </slot>
    <slot name="drink">
      默认的饮料是营养快线
    </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ["slotObjArr"],
  computed: {
    filterArr() {
      return this.slotObjArr.filter(item => item.name != "大米")
    }
  }
}
</script>
