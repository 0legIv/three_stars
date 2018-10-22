import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import Vuex from 'vuex';
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    active: false
  },
  mutations: {
    change_state (state) {
      state.active = !state.active;
    }
  },
})


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})