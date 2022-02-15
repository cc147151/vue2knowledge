import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import user from "./user/userInfo.js"
import like from "./user/like.js"
import createPersistedState from "vuex-persistedstate"
const dataState = createPersistedState({
  paths: ["name", "user"],
  storage: {
    getItem: key => localStorage.getItem(key),
    setItem: (key, value) => {
    //   console.log(key + "//" + value, "--------------")
      return localStorage.setItem(key, value)
    },
    removeItem: key => localStorage.removeItem(key)
  }
})
// setTimeout(() => {
//   localStorage.removeItem("vuex")
// }, 3000)
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
  },
  plugins: [dataState]
})
