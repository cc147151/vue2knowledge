<template>
  <div class="son">
    <van-button type="primary" @click="seeFun"
      >点我查看父组件给我传递的函数名{{$attrs.one}}</van-button
    >
    <p>{{sonObj.name}}</p>
  </div>
</template>
<script>
import Vue from "vue"
import { Button } from "vant"
Vue.use(Button)
export default {
  data() {
    return {
      obj:{
        name:'props无法读取到'
      }
    }
  },
  props: {
    sonObj: {
      type:Object,
      default:function(){
        console.log(this.obj)   // undefined
       return {name:'未给子组件传值的时候显示的默认值(未传，既未在子组件上传递该属性,空值也视为传递了)，props里定义接受数据类型时，默认值无法读取到data定义的属性'}  
      }
    },
  },
  methods: {
    seeFun() {
      console.log(this._events)
      console.log(this.$listeners, "listeners")
      console.log(this.$attrs, "未在props注册的属性，可以接收到")
      this.$emit("son-fun", "啊哈哈")
      this.$emit("son-fun2", { name: "sss" })
    },
  },
}
</script>

<style lang="scss" scoped></style>
