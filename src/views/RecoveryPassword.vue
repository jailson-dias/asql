<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height background-image-asql py-0" fluid>
        <v-row
          align="center fill-height background-color-asql"
          justify="center"
        >
          <v-col cols="12" sm="9" md="5">
            <v-card class="py-12 px-12 text-center" max-width="550">
              <img class="" src="@/assets/logo.png" alt="Logo" width="150" />
              <h1 class="display-2 mt-4">Recuperar senha</h1>
              <v-form ref="form" class="mt-12">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>

                <v-btn to="/" class="mt-4 mb-3" block color="primary" large
                  >Recuperar</v-btn
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
export default {
  data: () => ({
    email: ""
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
