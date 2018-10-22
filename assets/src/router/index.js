import Vue from 'vue'
import Router from 'vue-router'
import Currency from '@/components/Currency.vue'
import Layout from '@/components/Layout.vue'

const routes = [
    {path: '/currencies', component: Currency},
    {path: '/layout', component: Layout}
  ]

Vue.use(Router)


export default new Router({
mode: 'history',
routes: routes
})