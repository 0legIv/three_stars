import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users.vue'
import Hello from '@/components/Hello.vue'

const routes = [
    {path: '/users', component: Users},
    {path: '/hello', component: Hello}
  ]

Vue.use(Router)


export default new Router({
mode: 'history',
routes: routes
})