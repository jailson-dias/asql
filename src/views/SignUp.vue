<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height background-image-asql py-0" fluid>
        <v-row
          align="center fill-height background-color-asql"
          justify="center"
        >
          <v-col cols="12" sm="10" md="9">
            <v-row
              align="center fill-height background-color-asql"
              justify="center"
            >
              <v-col cols="12" sm="6" class="pa-0"> </v-col>
              <v-col cols="12" sm="6" class="pa-0">
                <v-card class="py-12 px-12 text-center" max-width="550">
                  <h1 class="headline mt-4">Cadastrar</h1>
                  <p class="font-regular mx-8 mt-4">
                    CrieCad o seu usuário para acessar a plataforma do ASQL
                  </p>
                  <v-form ref="form" class="mt-12">
                    <v-text-field
                      v-model="name"
                      label="Nome Completo"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      class="mt-n4"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="student"
                      label="Estudante"
                      class="mt-n4"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      label="Senha"
                      class="mt-n4"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="confirmPassword"
                      label="Confirmar Senha"
                      class="mt-n4"
                      required
                      outlined
                    ></v-text-field>

                    <v-btn
                      to="/login"
                      class="mt-4 mb-3"
                      block
                      color="primary"
                      large
                      >Cadastrar</v-btn
                    >
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      student: "",
      password: "",
      confirmPassword: ""
    }
  })
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
