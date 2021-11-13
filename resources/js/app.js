require('./bootstrap');

import Vue from 'vue'
import App from '@/App.vue'
Vue.config.productionTip = false; //Establezca esto en falso para evitar la sugerencia de producción en el inicio de Vue.

//---------------- VueRouter
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

const router = new VueRouter({
  routes // short for `routes: routes`
})

//--------------- Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

//--------------- Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import colors from 'vuetify/lib/util/colors'
const opts = {
  theme: {
    themes: {
      light: {
        /*
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        */

        //jugando con el configurador de temas // https://theme-generator.vuetifyjs.com/
        primary: '#2196f3',
        secondary: '#4caf50',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ff5722',
        info: '#00bcd4',
        success: '#8bc34a'
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
}

let vuetify = new Vuetify(opts)

//--------- Instancia App vue
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
