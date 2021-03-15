<template>
  <div class="slot">
    <Nav />
    <p>1.默认插槽</p>
    <SlotCom :arr="slotArr">
      <template v-slot:default="{filterArr}">
        <div>
          默认值也可以tmplate，使用v-slot:default,会直接替换掉没有用template包裹的，如果用template包裹，没有指明v-slot,则一起保留
          <p>默认值用值得时候，必须要用template包裹{{filterArr}}</p>
        </div>
      </template>
      <template #eat="{filterArr}">
        <!-- 只生命template不传任何内容也会显示slot得默认值 -->
        <p>2.具名插槽需要使用template模板，并且使用v-slot:name得值，v-slot: 可以替换为#</p>
        <p>3.在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：可以直接使用解构:{{filterArr}}</p>
      </template>
      <template v-slot:[drink]>
        
      </template>
    </SlotCom>
    <van-button @click="slotArr.push({name:'鸡肉'})">点我添加数组</van-button>
  </div>
</template>
<script>
import SlotCom from "./components/SlotCom"
export default {
  data() {
    return {
      slotArr:[{name:'饺子'},{name:'方便面'},{name:'锅巴'}],
      drink:'drink'
    }
  },
  components: {
    SlotCom,
  },
}
</script>
