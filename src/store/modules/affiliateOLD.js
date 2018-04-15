import motoLinks from './motorycleTools.js';
import generalLinks from './generalLinks.js';
// import {APIkey, gObj_hasRoot} from '../../config.js';

const state = {
  motoLinks: [],
  generalLinks: []
};
const getters = {};

const mutations = {
  SET_MOTO_LINKS (state, {motoLinks}){
    console.log('moto links');
    state.motoLinks = motoLinks;
  },
  SET_GENERAL_LINKS (state, {generalLinks}){
    console.log('general links');
    state.generalLinks = generalLinks;
  }
};

const actions = {

  initLinks ({commit}) {
    console.log('init links'  );
    // commit('SET_MOTO_LINKS');
    // commit('SET_GENERAL_LINKS');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

