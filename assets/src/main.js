import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import router from './router'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})