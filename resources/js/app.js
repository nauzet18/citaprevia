require('./bootstrap');

import Vue from 'vue'
import router from '@/plugins/vuerouter'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'

Vue.config.productionTip = false; //Establezca esto en falso para evitar la sugerencia de producción en el inicio de Vue.

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
