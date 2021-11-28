<template>
  <div class="layaout-blank-wrapper">
    <v-card
      class="mx-auto mt-15 layaout-blank-container"
      width="30rem"
      elevation="5"
    >
      <v-card-title class="d-flex align-center justify-center py-7">
        <h2 class="text-2xl font-weight-semibold">
          Registro de usuario
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
            v-model="form.fullName"
            name="fullName"
            :counter="255"
            :rules="[rules.required, rules.min, rules.max]"
            label="Nombre completo"
            required
          ></v-text-field>

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

          <v-text-field
            v-model="form.confirmPassword"
            name="confirmPassword"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            label="Confirmar contraseña"
            hint="At least 8 characters"
            counter
            @click:append="showPassword = !showPassword"
          ></v-text-field>



          <v-checkbox
            class="mt-1"
            v-model="checkbox"
            :rules="[v => !!v || '¡Debes aceptar para continuar!']"
            required
          >
            <template #label>
              <div class="d-flex align-center flex-wrap">
                <span class="me-2">Acepto las</span><a href="javascript:void(0)">politicas de privacidad y terminis de uso</a>
              </div>
            </template>
          </v-checkbox>

          <v-btn
            block
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mt-5"
          >
            Registrar
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
    showPassword: false,
    showConfirmPassword: false,
    checkbox: false,
    rules: {
      required: value => !!value || 'Requerido.',
      min: v => v.length >= 8 || 'Min 8 characters',
      max: v => v.length < 255 || 'Max 255 characters',
      emailMatch: v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
    },

    form: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
