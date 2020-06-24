import Vue from "vue";
import Vuex from "vuex";
import { robotStatus } from "./default/robotStatus";
import { robotParameter } from "./default/robotParameter";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    robotStatus,
    robotParameter,
  },
  mutations: {
    SETJOINT(state) {
      state.robotStatus.pos[2]++
      console.log(robotStatus);
    },
  },
  actions: {
    SETJ({ commit }) {
      commit('SETJOINT');
    },
  },
  modules: {},
});
