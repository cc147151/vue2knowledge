<template>
  <div class="son">
    <h3>son组件的$attrs{{ $attrs }}</h3>
    <h3>son组件的props{{ toSonData }}</h3>
    <h3>son组件的inject{{ toSonData }}</h3>
    <Sun v-bind="$attrs" v-on="$listeners" />
  </div>
</template>
<script>
import Sun from "./Sun"
export default {
  data() {
    return {}
  },
  inheritAttrs: false, // 不希望组件的根元素继承 attribute
  components: {
    Sun
  },
  provide: function() {
    return {}
  },
  inject: ["toSonData"],
  props: {
    toSonData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
