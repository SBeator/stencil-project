import {
  get,
  post,
  END_POINTS
} from '@/api'

import { sleep } from '@/utils'

const state = {
  username: '',
  isLoggedin: false
}

const getters = {
  isLoggedin: (state) => {
    return localStorage.getItem('token') || state.isLoggedin
  }
}

const actions = {
  async login({
    commit,
    state
  }, postData) {
    const responseData = await post(END_POINTS.LOGIN, postData)
    responseData.success = true
    if (responseData.success) {
      commit('setLoginUser', {
        ...responseData.data
      })
    }

    return responseData
  },
  async init({commit}) {
    const token = localStorage.getItem('token')
    const responseData = await get(END_POINTS.TOKEN_EXPIRE, token)

    let isLoggedin

    if (responseData.success) {
      commit('initUser')
      isLoggedin = true
    } else {
      commit('logout')

      isLoggedin = false
    }

    return isLoggedin
  },
  async checkLoginStatus({
    commit
  }) {
    let responseData
    const token = localStorage.getItem('token')
    do {
      await sleep(1000 * 60)
      responseData = await get(END_POINTS.TOKEN_EXPIRE, token)
    } while (responseData.success)

    commit('logout')
  }
}

const mutations = {
  initUser(state) {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    if (token && username) {
      state.username = username
      state.isLoggedin = true
    } else {
      state.username = ''
      state.isLoggedin = false
    }
  },

  setLoginUser(state, {
    username,
    token
  }) {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)

    state.username = username
    state.isLoggedin = true
  },

  logout(state) {
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    state.username = ''
    state.isLoggedin = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
