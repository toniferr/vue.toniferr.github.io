import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/scss/styles.scss'

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
