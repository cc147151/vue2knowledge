<template>
  <div class="renderBox">
    <Nav />
    <div class="render">
      <h3>视图是否重新进行渲染，以函数调用方法测试{{ logFun() }}</h3>
      <p>
        1.
        <span
          >如果template没有用到data的值如name,则修改name值不会造成template重新渲染</span
        >
      </p>
      <van-button type="primary" @click="changeName">测试</van-button>
      <p>
        2.
        <span
          >如果template用到了对象user的age，但是我修改的是user的name,同样不会重新渲染</span
        >
      </p>
      <van-button type="primary" @click="user.name = '嘻哈哈'">{{
        user.age
      }}</van-button>
      <p>
        3.
        <span
          >如果template用到了data对象user的age，但是我修改操作的是整个user对象（包括增删改，或者修改的跟原来一样），则重新渲染了</span
        >
      </p>
      <van-button
        type="primary"
        @click="user = { name: '哈哈哈', age: '99' }"
        >{{ user.age }}</van-button
      >
      <p>
        4.如果我修改的是data的某一个属性，这个属性不是对象，修改为原来的一样，则是不会重新渲染的
      </p>
      <p>
        5.可以利用this.$forceUpdate()迫使视图重新渲染
      </p>
      {{ obj.a }}{{ obj.b }}
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import { Button } from "vant"
Vue.use(Button)
// 测试 视图渲染的几种情况 页面组件和子组件
export default {
  data() {
    return {
      name: "0.0",
      user: {
        name: "哇哈哈",
        age: "99"
      },
      obj: {}
    }
  },
  components: {},
  created() {
    console.log(this.$route),
      setTimeout(() => {
        this.obj = { a: 999 }
      }, 1000)
    setTimeout(() => {
      this.obj.a = 888
      //   利用了this.obj.a会更新视图，所以b也显示到页面上了
      this.obj.b = 777
    }, 2000)
  },
  methods: {
    logFun() {
      console.log("渲染了")
    },
    changeName() {
      this.name = "0.01"
      //   this.$forceUpdate()
    },
    leftEve() {
      console.log("l")
    }
  }
}
</script>
<style>
.render {
  padding: 0 20px;
}
</style>
