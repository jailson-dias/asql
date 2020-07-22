import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import exercise from "./exercise";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    exercise
  },
  state: {},
  mutations: {},
  actions: {},
});
