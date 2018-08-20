import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enIView from 'iview/dist/locale/en-US'
import zhIView from 'iview/dist/locale/zh-CN'

import en from './en'
import zh from './zh'

// 设置语言
const locale = 'zh'

Vue.use(VueI18n)

Vue.config.lang = locale
Vue.locale('en', {...enIView, ...en})
Vue.locale('zh', {...zhIView, ...zh})
