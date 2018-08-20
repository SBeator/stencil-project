import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import login from './modules/login'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// TODO: Add this plugin back when we to save the status when refresh page
// const plugins = [createPersistedState()]
const plugins = []

if (debug) {
  plugins.push(createLogger())
}

export default new Vuex.Store({
  modules: {
    login
  },
  strict: debug,
  plugins
})
