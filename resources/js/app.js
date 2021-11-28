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

  created() {
    //Cargamos antes que nada los permisos
    this.$store.dispatch('userModule/loadUser')
      .then(resp => {
        console.log("app created then loadUser STORE(vuex)");
        console.log(resp);
      })
      .catch(resp => {
        console.log("app created then loadUser STORE(vuex) Could not load ");
      })
  },

}).$mount('#app')
