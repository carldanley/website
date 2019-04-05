// external dependencies
import Vue from 'vue';
import Vuex from 'vuex';

// requirements
Vue.use(Vuex);

// variables
const stateObject = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
};

// exports
export default new Vuex.Store(stateObject);
