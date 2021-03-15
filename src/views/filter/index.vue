<template>
  <div class="homeBox">
    <Nav />
    <div v-pre>如果用括号括起来，过滤器就不识别(v-pre指令可以禁止vue编译)<div>{{ info.status == "1" ? "进行中" : (info.modified_time | getFormalTime) }}</div></div>
    <p>过滤器filter,当视图每次更新时候，filter就会执行,所以和普通方法并没有性能上的差别</p>
    <p>解决办法可以直接写成方法来使用或者使用$options.filters.filterName()当作方法来调用</p>
    <div class="home">
      <img alt="Vue logo" src="@/assets/logo.png" />

      <!-- 如果用括号括起来，过滤器就不识别-->
      <div>
        <!-- {{ info.status == "1" ? "进行中" : (info.modified_time | getFormalTime) }} -->
      </div>
      <div>
        <!-- 如果不加括号，会把进行中也进行过滤 status==1时候-->
        {{ info.status == "1" ? "进行中" : $options.filters.getFormalTime(info.modified_time) }}
      </div>
    </div>
    <p @click="test='filter执行了'">点我修改test值，测试filter{{test}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      info: {
        status: "2",
        modified_time: 1610951421,
      },
        test:'test'

    }
  }
}
</script>
