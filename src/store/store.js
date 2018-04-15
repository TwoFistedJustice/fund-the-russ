import Vue from 'vue';
import Vuex from 'vuex';

import affiliate from './modules/affiliate.js';


Vue.use(Vuex);



export default new Vuex.Store({
  // syntax: import store ...

  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules: {
    affiliate
  }

}); // END STORE



