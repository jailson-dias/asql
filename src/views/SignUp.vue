<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height background-image-asql py-0" fluid>
        <v-row
          align="center"
          justify="center"
          class="fill-height background-color-asql"
        >
          <v-col cols="12" sm="10" md="9">
            <v-row
              align="center"
              justify="center"
              class="fill-height background-color-asql"
            >
              <v-col cols="12" sm="6" class="pa-0"> </v-col>
              <v-col cols="12" sm="6" class="pa-0">
                <v-card class="py-12 px-12 text-center" max-width="550">
                  <h1 class="headline mt-4">Cadastrar</h1>
                  <p class="font-regular mx-8 mt-4">
                    Crie o seu usuário para acessar a plataforma do ASQL
                  </p>
                  <v-form ref="form" class="mt-12" v-model="formValid">
                    <v-text-field
                      v-model="form.name"
                      label="Nome Completo"
                      :rules="name"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="form.email"
                      label="E-mail"
                      :rules="email"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="form.username"
                      label="Nome de usuário"
                      :rules="username"
                      required
                      outlined
                    ></v-text-field>

                    <v-select
                      v-model="form.role"
                      :items="role"
                      label="Tipo de usuário"
                      required
                      outlined
                    ></v-select>

                    <v-text-field
                      v-model="form.password"
                      label="Senha"
                      :rules="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      required
                      outlined
                    ></v-text-field>

                    <v-text-field
                      v-model="form.confirmPassword"
                      label="Confirmar Senha"
                      :rules="confirmPassword"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      required
                      outlined
                    ></v-text-field>

                    <v-btn
                      class="mt-4 mb-3"
                      block
                      color="primary"
                      large
                      :disabled="!formValid"
                      @click="createAccount"
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
import { mapActions } from "vuex";

export default {
  data: () => ({
    formValid: false,
    form: {
      name: "name de teste",
      email: "eas@asd.asd",
      username: "asdasd",
      role: "student",
      password: "senh@BenfOrte",
      confirmPassword: "senh@BenfOrte",
    },
    role: [
      { text: "Professor", value: "teacher" },
      { text: "Aluno", value: "student" },
    ],
    showPassword: false,
  }),
  computed: {
    name() {
      return [
        (v) => !!v || "Insira um nome completo",
        (v) =>
          v.length <= 60 || "O nome completo deve ter no máximo 60 caracteres",
        (v) =>
          v.length >= 6 || "O nome completo deve ter pelo menos 6 caracteres",
        (v) => v.split(" ").length >= 2 || "Digite o nome e sobrenome",
      ];
    },
    email() {
      return [
        (v) => !!v || "Insira um email",
        (v) => /.+@.+\..+/.test(v) || "este email é inválido",
      ];
    },
    username() {
      return [
        (v) => !!v || "Insira um nome de usuário",
        (v) =>
          v.length <= 60 || "O nome completo deve ter no máximo 60 caracteres",
      ];
    },
    password() {
      return [(v) => !!v || "Insira uma senha"];
    },
    confirmPassword() {
      return [
        (v) => !!v || "Insira a confirmação de senha",
        (v) =>
          v == this.form.password ||
          "A confirmação de senha tem que ser igual a senha",
      ];
    },
  },
  methods: {
    ...mapActions("user", ["createTeacher", "createStudent"]),
    createAccount() {
      this.createTeacher({
        email: this.form.email,
        username: this.form.username,
        fullname: this.form.name,
        password: this.form.password,
      }).then(response => {
        console.log("suc", response)
      })
      .catch(error => {
        console.log(Object.keys(error))
        console.log(error.isAxiosError)
        if (error.isAxiosError) {
          console.log(error.response)
        }
      })
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
