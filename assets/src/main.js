import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';


Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})