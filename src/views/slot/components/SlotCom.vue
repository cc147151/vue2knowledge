<template>
  <div class="slot">
    <!-- default得时候可以省略 -->
    <slot name="default">
      
    </slot>
   <!-- <div v-for="(item,index) of filterArr" :key="index"> -->
      <slot name="eat" :filterArr="filterArr">
      
    </slot>
   <!-- </div> -->
   <slot name="drink">
     营养快线
   </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props:{
    arr:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  computed: {
    filterArr(){
      return this.arr.filter(item=>item.name!='方便面')
    }
  },
}
</script>
