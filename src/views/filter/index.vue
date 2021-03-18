<template>
  <div class="homeBox">
    <Nav />
    <button @click="testTime">点我</button>
    <button @click="test">测试</button>
    <div class="home" @click="toOther">
      <img alt="Vue logo" src="@/assets/logo.png" />
      {{ info.status }}
      <!-- 如果用括号括起来，过滤器就不识别-->
      <div>
        {{ info.status == "1" ? "进行中" : info.modified_time | getFormalTime }}
      </div>
      <div>
        <!-- 如果不加括号，会把进行中也进行过滤 status==1时候-->
        {{ info.status == "1" ? "进行中" : info.modified_time | getFormalTime }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      info: {
        status: "1",
        modified_time: 1610951421,
      },
    }
  },
  async created() {},
  methods: {
    pro() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("4s")
          resolve("成功")
        }, 4000)
      })
    },
    toOther() {
      this.$router.push({path:'/render',query:{ttt:this}})
    },
    async testTime() {
      let res = await this.pro()
      console.log("之后")
      console.log(res)
      this.info = { status: "2" }
      console.log(this.info)
    },
    test(){
      console.log('ttttt')
      console.log(this.info.status)
    }
  },
}
</script>
