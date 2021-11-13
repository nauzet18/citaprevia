import Vue from 'vue'
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

export default new Vuetify(opts)
