import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import user from "./user/userInfo.js"
import like from "./user/like.js"
export default new Vuex.Store({
  state: {
    name: "ooo"
  },
  mutations: {
    globalChangeType() {}
  },
  actions: {},
  modules: {
    like,
    user
  }
})
