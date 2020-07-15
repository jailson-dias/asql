<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height background-image-asql py-0" fluid>
        <v-row
          class="fill-height background-color-asql"
          align="center"
          justify="center"
        >
          <v-col cols="12" sm="9" md="5">
            <v-card class="py-12 px-12 text-center" max-width="550">
              <img src="@/assets/logo.png" alt="Logo" width="150" />
              <h1 class="display-2 mt-4">Login</h1>
              <p class="headline font-regular mx-8 mt-4">
                Digite o email e senha para fazer login
              </p>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>

                <v-text-field
                  class="mt-n3"
                  v-model="password"
                  label="Senha"
                  type="password"
                  required
                  outlined
                ></v-text-field>
                <v-row class="mx-0 mt-n6" justify="space-between">
                  <v-btn to="/signup" text color="primary" class="pl-0"
                    >Cadastrar</v-btn
                  >
                  <v-btn to="/recovery" text color="primary" class="pr-0"
                    >Recuperar senha</v-btn
                  >
                </v-row>

                <v-btn
                  class="mt-6 mb-3"
                  block
                  color="primary"
                  large
                  @click="login"
                  >Login</v-btn
                >
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: true,
    email: "emaadffi@afdg.chc",
    password: "!@#$%ˆ&*()",
  }),

  created() {
    try {
      this.getToken()
      this.$router.push("/");
    } catch (err) {
      console.log()
    }
  },

  methods: {
    ...mapActions("user", ["signIn", "getToken"]),
    login() {
      this.signIn({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(Object.keys(error));
          console.log(error.isAxiosError);
          if (error.isAxiosError) {
            console.log(error.response);
            return alert(error.response.data.message[0].message)
          }
          alert("Service unavailable")
        });
    },
  },
};
</script>

<style scoped>
.background-image-asql {
  background-image: url("../assets/background.jpg");
  background-size: cover;
}

.background-color-asql {
  background-color: #00000099;
}
</style>
