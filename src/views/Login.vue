<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="pa-5 text-center" max-width="450">
              <img src="@/assets/logo.png" alt="Logo" width="150" />
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>
                <v-row class="ma-0" justify="space-between">
                  <a>Sou professor</a>
                  <a>Cadastrar</a>
                </v-row>

                <!-- <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox> -->

                <v-btn class="mt-6 mb-3" color="primary">Login</v-btn>

                <!-- <v-btn color="warning" @click="resetValidation"
                  >Reset Validation</v-btn
                > -->
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",
    checkbox: true
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
