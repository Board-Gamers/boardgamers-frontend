import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        boardgameinfo: {},
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
