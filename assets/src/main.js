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
    active_sidebar: false,
    active_dialog: false,
    currency_data: []
  },
  getters: {
    getSidebarState: state => {
      return state.active_sidebar
    },
    getDialogState: state => {
      return state.active_dialog
    },
    getCurrencyData: state => {
      return state.currency_data
    }
  },
  mutations: {
    change_sidebar_state (state) {
      state.active_sidebar = !state.active_sidebar;
    },
    change_dialog_state (state) {
      state.active_dialog = !state.active_dialog;
    },
    change_currency_data (state, data) {
      state.currency_data = data
    }
  },
  actions: 
  {
    update_currency_data (context)
      {
        Vue.axios.get('http://0.0.0.0:4000/api/currencies').then((response) => {
          context.commit('change_currency_data', response.data.data)       
        }).catch(function (error) {
              console.log(error);
        })
          .then(function () {
        });  
      }
  }
})


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})