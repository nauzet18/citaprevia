<template>
  <div class="layaout-blank-wrapper">
    <v-card
      class="mx-auto mt-15 layaout-blank-container"
      width="30rem"
      elevation="5"
    >
      <v-card-title class="d-flex align-center justify-center py-7">
        <h2 class="text-2xl font-weight-semibold">
          Iniciar sesión
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

          <v-text-field
            v-model="form.password"
            name="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"

            label="Contraseña"
            hint="At least 8 characters"
            counter
            @click:append="showPassword = !showPassword"
          ></v-text-field>


          <div class="d-flex align-center justify-space-between flex-wrap">
            <v-checkbox
              label="Recuerdame"
              hide-details
              class="me-3 mt-1"
            >
            </v-checkbox>

            <router-link
              class="mt-1"
              to="/forgot_password">
              Olvidaste la contraseña?
            </router-link>
          </div>

          <v-btn
            block
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mt-5"
          >
            Inciar sesión
          </v-btn>

        </v-form>

      </v-card-text>


      <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
        <span class="me-2">
          ¿No tienes cuenta?
        </span>
        <router-link to="/register">
          Registrarse
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
    showPassword: false,
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 8 || 'Min 8 characters',
      max: v => v.length < 255 || 'Max 255 characters',
      emailMatch: v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
    },

    form: {
      email: 'fhermann@example.com',
      password: 'password',
    },
  }),
  computed: {

  },
  methods: {
    submit() {
      console.log('nau submit')

// freeman65@example.net
// password

      axios.get('/sanctum/csrf-cookie').then(response => {

        axios.post('/login', this.form)
            .then(function (resp) {
              console.log('nau login ', resp)
              //this.$route.push('/')


              axios.get('/api/user').then(response2 => {
                console.log('nau user ', response2)
              })

        })
        .catch(function (resp) {
          console.log('nau login catch', resp)
        });

      });

    }
  },
};
</script>
<style lang="scss">

</style>
