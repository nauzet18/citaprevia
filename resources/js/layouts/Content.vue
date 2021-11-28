<template>
  <v-app>
    <left-menu :visible=>
    </left-menu>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>
          GetMeeting
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/login"
        text
      >
        Login
      </v-btn>
      <v-btn
        to="/register"
        text
      >
        Register
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation >

    </v-bottom-navigation>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="40"
      class="px-0"
    >
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
             Nauzet Melián Batista
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import LeftMenu from '@/components/LeftMenu';

export default {
  name: 'App',

  components: {
    HelloWorld,
    LeftMenu,
  },

  data: () => ({

      drawer: false,
      group: null,


  }),
  computed: {

  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },

};
/*
v-app-bar: Is always placed at the top of an application with a lower priority than v-system-bar.

v-bottom-navigation: Is always placed at the bottom of an application with a higher priority than v-footer.
v-footer: Is always placed at the bottom of an application with a lower priority than v-bottom-navigation.
v-navigation-drawer: Can be placed on the left or right side of an application and can be configured to sit next to or below v-app-bar.
v-system-bar: Is always placed at the top of an application with higher priority than v-app-bar.

*/
</script>
