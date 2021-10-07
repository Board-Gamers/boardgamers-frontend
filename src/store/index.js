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
      userBase: null,
      rate: null,
      topRank: null,
      topReview: null,
      topUserBase: null,
      topRate: null,
    },
    isAdmin: false,
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
