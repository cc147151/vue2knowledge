<template>
  <div class="assembly">
    <Nav />
    <p>
      2.一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop
      定义的 attribute。这些 attribute 会被添加到这个组件的根元素上。
    </p>
    <p>
      3.使用provide注入，使用inject接受，也达到建立爷孙组件传值和引用,但是是非响应式的,需要返回一个带有响应式的对象
      !!!
    </p>
    <Son
      :index-data="indexData"
      :to-son-data="toSonData"
      v-bind="testBind"
      @changeTestFun="changeTestFun"
    />
  </div>
</template>
<script>
import Son from "./components/Son"
export default {
  data() {
    return {
      testBind: {
        name: "sss",
        age: "99"
      },
      indexData: {
        name: "index"
      },
      toSonData: {
        name: "toSon"
      },
      proData: {
        proAge: 1
      }
    }
  },
  provide: function() {
    return {
      testProvide: this.proData,
      toSonData: this.toSonData,
      changeProDataFun: this.changeProDataFun
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
    changeProDataFun() {
      this.proData.proAge++
    },
    changeTestFun() {
      this.testBind.name = "testBind的name值改变了"
    }
  }
}
</script>
<style lang="scss" scoped></style>
