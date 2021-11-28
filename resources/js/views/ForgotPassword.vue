<template>
  <div class="layaout-blank-wrapper">
    <v-card
      class="mx-auto mt-15 layaout-blank-container"
      width="30rem"
      elevation="5"
    >
      <v-card-title class="d-flex align-center justify-center py-7">
        <h2 class="text-2xl font-weight-semibold">
          Recuperar contraseña
        </h2>
      </v-card-title>

      <v-card-text>

        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="submit"
          lazy-validation
        >
          <v-text-field
            v-model="form.email"
            name="email"
            :rules="[rules.required, rules.min, rules.max, rules.emailMatch]"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn
            block
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mt-5"
          >
            Recuperar
          </v-btn>

        </v-form>

      </v-card-text>

      <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
        <span class="me-2">
          ¿Ya tienes cuenta?
        </span>
        <router-link to="/login">
          Iniciar sesión
        </router-link>
      </v-card-text>

    </v-card>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data: () => ({
    valid: false,
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 8 || 'Min 8 characters',
      max: v => v.length < 255 || 'Max 255 characters',
      emailMatch: v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
    },

    form: {
      email: '',
    },
  }),
  computed: {

  },
  methods: {
    submit() {
      console.log('nau submit')
    }
  },
};
</script>
<style lang="scss">

</style>
