const pro = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: "200", data: ['跑步'] })
    }, 3000)
  })
}
export default {
  namespaced: true,
  state: {
    name: "sjy",
    age: "99",
    school1: 5,
    school2: 3,
    school3: 3,
    dataArr: []
  },
  getters: {
    allSchool(state) {
      return state.school1 + state.school2 + state.school3
    }
  },
  mutations: {
    changeUserInfoType(state, { type, value }) {
      state[type] = value
    }
  },
  actions: {
    async userActions({ commit },payload) {
        console.log(payload)
      let res = await pro()
      if (res.code === "200") {
        commit("changeUserInfoType", { type: "dataArr", value: res.data })
        return res
      }
    }
  }
}
