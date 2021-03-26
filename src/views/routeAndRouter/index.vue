<template>
  <div class="routerBox">
    <div class="left">
      <div @click="toWhere($event)">
        <p>去one的123，只有参数变化，one的生命周期是不执行的</p>
        <p name="one/1">去one路由1</p>
        <p name="one/2">去one路由2</p>
        <p name="one/3">去one路由3</p>
      </div>
      <div>
        <p @click="toTwo">去two路由</p>
      </div>
      <div class="h500" @click="toRender">
        测试滚动
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  // 可以监听到 one/1,one/2
  beforeRouteUpdate(to, from, next) {
    // console.log(to)
    // console.log(from)
    next()
  },
  methods: {
    toWhere(event) {
      const name = event.target.getAttribute("name")
      //   console.log(event.target.getAttribute("name"))
      this.$router.push(`/routeAndRouter/${name}`)
      //   this.$router.push({ name: 'One', params: { id: 1 } })
    },
    toTwo() {
      this.$router.push({ path: "/routeAndRouter/two", query: { que: "qqq" } })
      //   this.$router.push({ name: "Two", params: { ppp: "ppp" } })
    },
    toRender() {
      this.$router.push({path:"/render#t1",query:{id:'ttt'}})
    }
  }
}
</script>
<style lang="scss">
.routerBox {
  display: flex;
  height: 100vh;
  .left {
    width: 200px;
    .h500 {
      height: 900px;
      background-color: blue;
    }
  }
}
</style>
