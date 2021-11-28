<template>
  <div class="layaout-blank-wrapper">
    <v-card
      class="mx-auto mt-15 layaout-blank-container text-center"
      width="30rem"
      elevation="5"
    >
      <v-card-title class="d-flex align-center justify-center py-7">
        <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
          Page Not Found
        </h2>
      </v-card-title>

      <v-card-text>
        <p class="text-sm">
          Ups! no encontramos la pagina.
        </p>
      </v-card-text>

      <v-btn
        color="primary"
        to="/"
        class="mb-4"
      >
        Volver
      </v-btn>

    </v-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
