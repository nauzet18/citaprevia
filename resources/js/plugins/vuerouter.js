import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '@/routes/mainroutes'

export default  new VueRouter({
  routes // short for `routes: routes`
})
