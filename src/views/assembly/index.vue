<template>
  <div class="assembly">
    <Nav />
    1.在子组件的_events里，可以看到父组件传递给子组件监听的函数名
    <p>
      2.v-bind="$attrs"和v-on="$listeners"建立爷孙组件传值和引用：在son组件里，给sun组件注入，然后在孙组件里可以使用this.$attrs访问到爷爷（或者父亲,前提是未用props接受）组件的属性,$listeners访问到事件
    </p>
    <p>
      3.使用provide注入，使用inject接受，也达到建立爷孙组件传值和引用,但是是非响应式的
      !!!
    </p>
    <p>
      4.基础组件的自动化全局注册：main.js配置以后，无需再import引入和components注册，直接使用
    </p>
       <h3>爷爷组件</h3>
    <van-button @click="changeData('all')"
      >点我修改值来测试子孙组件拿到最新值</van-button
    >
    <Son
      :sonAge="sonAge"
      :sunAge="sunAge"
      :sonObj="sonObj"
      @changeData="changeData"
    />
  </div>
</template>
<script>
import Son from "./components/Son"
export default {
  data() {
    return {
      sonAge: 1,
      sunAge: 111,
      sonObj: {
        name: "sonObj用props接受了，所以孙组件在$attrs上看不到"
      }
    }
  },
  provide: function() {
    return {
      sonAge: this.sonAge,
      sunAge: this.sunAge,
      sonObj: this.sonObj
    }
  },
  components: {
    Son
  },
  mounted() {
    this.$once("hook:beforeDestroy", function() {
      console.log("testOk")
    })
  },
  methods: {
    changeData(type, data) {
      if (type === "all") {
        this.sonAge++
        this.sunAge++
        return
      }
      console.log(type, data)
      this[type] = data
    }
  }
}
</script>
<style lang="scss" scoped></style>
