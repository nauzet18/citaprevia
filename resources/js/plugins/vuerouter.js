import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Cosas de ejemplo para "arrancarlo"
// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default  new VueRouter({
  routes // short for `routes: routes`
})