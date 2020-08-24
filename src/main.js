import Vue from 'vue'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import 'bootstrap'
import 'jquery/dist/jquery.min.js'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.js'

import "bootstrap/dist/css/bootstrap.css"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'gal'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
