<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1 @click="$router.push('/')">
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
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss">
.theme--light.v-application {
  background: #ebebeb;
}

.layaout-blank-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

.layaout-blank-container{

}
</style>