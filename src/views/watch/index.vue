<template>
  <div>
    <p>
      默认watch无法深度监听对象深度改变,需要开启deep，开启deep之后，无法取到旧值，需要配合computed使用
    </p>
    <van-button @click="changeObj">测试对象</van-button>
    <div>
      <van-button @click="changeArrObj"> 测试数组对象{{ arrObj }}</van-button>
    </div>
    <div>
      <van-button @click="changeArr"> 测试数组{{ arr }}</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: "000",
      obj: {
        a: 0
      },
      arrObj: [
        { a: 1, b: { c: "1" } },
        { a: 2, b: { c: "2" } }
      ],
      arr: [1, 2, 3]
    }
  },
  computed: {
    jsonObj() {
      return JSON.stringify(this.obj)
    },
    jsonArrObj(){
        return JSON.stringify(this.arrObj)
    },
    jsonArr(){
        return {...this.arr}        //也可以
    }
  },
  watch: {
    jsonObj: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      deep: true,
      immediate:true
    },
    jsonArrObj: {
      handler(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      },
      deep: true
    },
    jsonArr: {
      handler(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      }
    }
  },
  methods: {
    changeObj() {
        // this.obj={a:'111'} // 直接修改对象 可以监听到久值
    //   this.obj.a = 111       // 需要开启deep,但是无法监听到久值,需要结合computed
    },
    changeArrObj() {
        this.arrObj.push({ a: 3, b: { c: "3" } }) // 直接操控数组,可以监听到watch，但是无法监听到旧值，需要,computed
    //   this.arrObj[0].a = 3                          // 修改数组对象的某一个值，视图更新，watch不触发 需要开启deep,无法监听久值，结合computed
    },
    changeArr() {
      // this.arr[0]='a'
      // this.$forceUpdate()
      this.$set(this.arr, 0, "aaa")  // 无法取到久值，需要结合computed
    }
  }
}
</script>
