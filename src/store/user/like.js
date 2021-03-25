export default {
  namespaced: true,
  state: {
    drink: ["营养快线"],
    food: ["饺子"]
  },
  getters: {
      drinkTotal(state){
        return state.drink.length
      }
  },
  mutations: {
    changeLikeType(state, { type, value }) {
      state[type] = value
    }
  },
  actions: {}
}