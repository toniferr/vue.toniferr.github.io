import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.js'

import "bootstrap/dist/css/bootstrap.css"

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
