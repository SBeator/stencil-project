import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

const MainPage = () => import('@/pages/MainPage')
const Login = () => import('@/pages/Login')
const NotFound = () => import('@/pages/NotFound')
const PlaceholderPage = () => import('@/pages/PlaceholderPage')
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: MainPage,
    beforeEnter(to, from, next) {
      if (!store.getters['login/isLoggedin']) {
        next('/login')
      } else {
        next()
      }
    },
    children: [{
      path: '/',
      name: '首页',
      component: PlaceholderPage
    }]
  }, {
    path: '/login',
    name: '登录',
    component: Login
  }, {
    path: '*',
    component: NotFound }
  ]
})
