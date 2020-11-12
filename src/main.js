import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import './assets/styles/global.css'
import router from './js/router/router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
