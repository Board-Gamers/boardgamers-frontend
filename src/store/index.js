import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boardgameinfo: {},
    headers: {
      Authorization: null,
    },
    recommend: {
      rank: null,
      review: null,
    },
  },
  mutations: {
    GET_BOARDGAME_INFO(state, data) {
      state.boardgameinfo = data;
    },
  },
  getters: {
    getBoardgameinfo: (state) => {
      return state.boardgameinfo;
    },
  },
  actions: {},
  modules: {},
});
