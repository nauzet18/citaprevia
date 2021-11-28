import Vue from 'vue'
import Vuex from 'vuex'

import userDataModule from './vuexmodules/userData.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  },
  modules: {
    userModule: userDataModule,
  },
})
