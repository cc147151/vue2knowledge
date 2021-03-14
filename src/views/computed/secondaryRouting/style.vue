<template>
  <div class="style">
    <h1>行内样式</h1>
    <p style="font-size:12px;color:red">
      1.原生写法的行内样式
    </p>
    <!-- 短线用引号括起来,驼峰不需要 -->
    <p :style="{ 'font-size': '20px', color: 'red', fontWeight: 800 }">
      2.动态绑定属性的行内样式
    </p>
    <p :style="hang">
      3.绑定data对象属性
    </p>
    <p :style="[hang, styleArrObj]">
      4.数组写法
    </p>
    <p :style="comStyle">
      5.computed结合
    </p>
    <h1>类样式</h1>
    <p :class="{ a1: classA1, a2: false }">
      1.对象类型的类样式
    </p>
    <p :class="['a2', [] ? 'a1' : '']">
      2.数组的类样式
    </p>
    <p :class="classObj">
      3.computer结合
    </p>
    <h1>写在子组件标签上</h1>
    <p>会在子组件根元素上添加该类名或者id名</p>
    <button @click="changeName">修改testComponent的值</button>
    <testComponent class="component1" :person="person" id="o" />
  </div>
</template>
<script>
import testComponent from "./testComponent"
export default {
  data() {
    return {
      hang: { "font-size": "24px", color: "red", fontWeight: 800 },
      styleArrObj: { color: "green" },
      comSwitchStyle: 1,
      classA1: true,
      person:{name:'sss',age:'11'}
    }
  },
  computed: {
    comStyle() {
      switch (this.comSwitchStyle) {
        case 1:
          return { fontSize: "18px", color: "rgb(222,212,111)" }
        case 2:
          return { fontSize: "18px", color: "blue" }
        default:
          return ""
      }
    },
    classObj() {
      return {
        a1: this.classA1,
        a2: true
      }
    }
  },
  components: {
    testComponent
  },
  methods: {
    changeName(){
      this.person={name:'sss',age:'99'}
    }
  },
}
</script>
<style lang="scss" scoped>
.a1 {
  color: rgb(255, 196, 250);
}
.a2 {
  font-size: 28px;
}
.component1 {
  background-color: #ccc;
}
</style>
