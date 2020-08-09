<template>
  <v-container fluid>
    <v-container v-if="exercise">
      <v-row align="start" justify="center">
        <v-col cols>
          <p>
            <b>{{ exercise.title }}</b>
          </p>
          <p>
            {{ exercise.description }}
          </p>
          <p>
            Código: <b>{{ exercise.code }}</b>
          </p>
        </v-col>
        <!-- <v-btn color="primary" text :to="`/exercise/${exercise._id}`">
          Visualizar respostas
        </v-btn> -->
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols>
          <SQLCodeMirror :defaultCode="code" :defaultPlaceholder="placeholder" @updateCode="updateCode">
            <!-- <template v-slot:buttons>
            <v-btn text color="primary" class="mr-2">
              Visualizar consulta
            </v-btn>
          </template> -->
          </SQLCodeMirror>
        </v-col>
      </v-row>
      <v-btn class="mt-6 mb-3" block color="primary" large @click="populate"
        >Criar</v-btn
      >
    </v-container>
  </v-container>
</template>

<script>
import SQLCodeMirror from "@/components/SQLCodeMirror";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    SQLCodeMirror,
  },

  data: () => ({
    code: "-- Script de povoamento\nCREATE TABLE x;",
    placeholder: "Escreva seu script de povoamento aqui",
    exercise: {},
    token: null,
    id: null
  }),

  created() {
    try {
      this.getToken().then(token => {
        if (this.role == "Teacher") {
          this.setTitle({ text: "Popular banco de dados da atividade" });
        } else {
          this.$router.push("/");
        }
        // console.log("token", token)
        let id = this.$route.params.id;
        // console.log(id, token)
        this.getExerciseById({ id, token }).then(exercise => {
          this.exercise = exercise
        })

        this.id = id;
        this.token = token;

      });
    } catch (err) {
      console.log("error getting exercises", err);
    }
    // let token = this.getToken()
  },

  computed: {
    ...mapState("user", {
      role: (state) => state.user.role,
    }),
  },

  methods: {
    ...mapActions("exercise", ["setTitle", "getExerciseById", "populateExercise"]),
    ...mapActions("user", ["getToken"]),

    updateCode(code) {
      this.code = code
    },

    populate() {
      console.log(this.code)
      this.populateExercise({
        token: this.token,
        exerciseId: this.id,
        populationScript: this.code
      }).then(() => {
        this.$router.push(`/exercise/${this.id}`)
      }).catch(() => {
        alert("Erro populando a atividade, verifique seu código e tente novamente")
      })
    },
  },
};
</script>
