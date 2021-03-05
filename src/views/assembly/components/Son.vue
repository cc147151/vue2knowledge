<template>
  <div class="son">
    <h3>son组件：</h3>
    <van-button type="primary" @click="seeFun">点我打印查看更清晰</van-button>
    <div style="margin-top:20px">
      <van-button type="primary" @click="changeFun"
        >点我修改父组件的值并修改sunData的值</van-button
      >
    </div>
    <p>$attrs:{{ $attrs }}</p>
    <p>sonObjData未展示，因为我在props注册了</p>
    <h2>用inject不会更新视图,非响应式：{{ sonAge + "---" + sunAge }}</h2>
    <!-- 注入v-bind or v-on，是为了让孙组件拿到爷爷的，孙子默认通过$attrs可以拿到父亲的 -->
    <Sun
      v-bind="$attrs"
      v-on="$listeners"
      :sunData="sunData"
      @giveSunFun="giveSunFun"
    />
  </div>
</template>
<script>
import Sun from "./Sun"
// import Vue from "vue"

export default {
  data() {
    return {
      obj: {
        name: ""
      },
      sunData: 1111
    }
  },
  components: {
    Sun
  },
  provide: function() {
    return {
      name: this.obj.name
    }
  },
  inject: ["sonAge", "sunAge"],
  props: {
    sonObj: {
      type: Object,
      default: function() {
        console.log(this.obj) // undefined
        return {
          // 传的是个空值也视为传递了，props里定义接受数据类型时，默认值无法读取到data定义的属性
          name: ""
        }
      }
    }
  },
  methods: {
    seeFun() {
      console.log(this._events, "_events")
      console.log(this.$attrs, "Son未在props注册的属性，可以接收到")
      console.log(this.$listeners, "Sonlisteners")
      console.log(this.sonAge)
    },
    giveSunFun(type, data) {
      this[type] = data
    },
    changeFun() {
        // this.$listeners.changeData('all')
      this.$emit("changeData", "all")
      this.sunData++
    }
  }
}
</script>

<style lang="scss" scoped></style>
