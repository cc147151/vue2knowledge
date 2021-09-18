<template>
  <div class="vuex">
    <button>测试</button>
    <p @click="test">
      全局是{{ defaultName }},我的名字是{{ name }},我的年龄是{{
        age
      }},我喜欢喝{{ drink }},上了{{ allSchool }}年学,小学上了{{ school1 }}年,
    </p>
    <p>我喜欢喝{{ drinkTotal }}种</p>
    <p>我喜欢的运动：{{ dataArr }}</p>
    <van-button @click="commitLike">点我触发mutation</van-button>
    {{ food }}
    <van-button @click="changeUser"
      >点我触发user的mutation修改我的年龄</van-button
    >
    <van-button @click="changeActions">点我触发user的actions</van-button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
const pro = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("3")
      resolve()
    }, 4000)
  })
}
export default {
  name: "vuex",
  components: {},
  data() {
    return {
      getSchool: ""
    }
  },
  computed: {
    // A .没有开启namespaced

    //  ...mapState(['name']) //没有namespaced，拿到的是全局
    // it is ok    开启namespaced同样生效
    ...mapState({
      name: state => state.user.name,
      drink: state => state.like.drink,
      defaultName: state => state.name
    }),
    // B 开启name spaced
    // ...mapState('user',['school1'])
    ...mapState("user", {
      school1: state => state.school1,
      age: state => state.age,
      dataArr: state => state.dataArr
    }),
    ...mapState("like", ["food"]),
    // ...mapState({            // 也不行
    //     food:'like/food'
    // }),
    // ...mapState(["like/food"]),      // 也不行
    ...mapGetters("like", {
      drinkTotal: "drinkTotal"
    }),
    ...mapGetters({
      drinkTotal: "like/drinkTotal",
      allSchool: "user/allSchool"
    })
    //it is no 不存在得，除了naoState
    // ...mapGetters({
    //     drinkTotal:getters=>console.log(getters)
    // })
  },
  mounted() {
    //   如果两个module有了相同得allSchook，会提示[vuex] duplicate getter key: allSchool，会使用在modules对象里靠前得第一个module
    // if userInfo有namespaced属性，则下面获取不到
    // this.getSchool = this.$store.getters.allSchool
  },
  methods: {
    // it is 全局 得
    ...mapMutations(["globalChangeType"]),
    // ...mapMutations("user", ["changeUserInfoType"]),
    ...mapMutations({
      changeUserInfoType: "user/changeUserInfoType"
    }),
    ...mapActions({
      userActions: "user/userActions"
    }),
    commitLike() {
      // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
      this.$store.commit("like/changeLikeType", {
        type: "drink",
        value: ["哇哈哈"]
      })
      console.log(222)
    },
    async test() {
      console.log("111")
      let res = await pro()
      for (let i = 0; i < 10; i++) {
        console.log(i)
      }
      console.log(res)
      console.log("end")
    },
    changeUser() {
      let value = this.age - 0 + 1
      this.changeUserInfoType({ type: "age", value })
    },
    async changeActions() {
      let res = await this.userActions()
      console.log(res)
      console.log("actionEnd")
    }
  }
}
</script>
<style>
button {
  color: red;
}
</style>
