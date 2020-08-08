<template>
  <v-container fluid>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12">
            <v-text-field
              v-model="exerciseToEdit.title"
              :rules="titleRules"
              :counter="titleCounter"
              label="Titulo da atividade"
              outlined
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12"  md="4" sm="12" xs="12">
            <v-menu
              close-on-content-click
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="exerciseToEdit.limitFormated"
                  label="Data limite da atividade"
                  persistent-hint
                  v-on="on"
                  required
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="exerciseToEdit.limit"
                no-title
                :min="minDate"
                color="primary"
                reactive
                @input="datepicker = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols>
            <v-textarea
              v-model="exerciseToEdit.description"
              :rules="descriptionRules"
              label="Descrição da atividade"
              no-resize
              rows="5"
              outlined
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn
          class="mt-6 mb-3"
          block
          color="primary"
          large
          @click="create"
          >Criar</v-btn
        >
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
const EXERCISE_TITLE_MAX_LENGTH = 40;
// import SQLCodeMirror from "@/components/SQLCodeMirror";

import { mapActions } from "vuex";

export default {
  props: {
    exercise: Object,
  },

  // components: {
  //   SQLCodeMirror
  // },

  data: (vm) => ({
    valid: false,
    datepicker: false,
    exerciseToEdit: {
      title: "teasfmmsafms saf sd fsda",
      description: "asdf sadf sa d fa sg fs dg as g  sfdg as  gas dg",
      limit: new Date().toISOString().slice(0, 10),
      limitFormated: vm.formatDate(new Date().toISOString().slice(0, 10)),
    },
    titleCounter: EXERCISE_TITLE_MAX_LENGTH,
    titleRules: [
      (v) => !!v || "O título é obrigatório",
      (v) =>
        v.length <= EXERCISE_TITLE_MAX_LENGTH ||
        `O título deve ter no máximo ${EXERCISE_TITLE_MAX_LENGTH} caracteres`,
    ],
    descriptionRules: [(v) => !!v || "A descrição é obrigatória"],

    code: "-- Script de povoamento\nCREATE TABLE x;",
    placeholder: "Escreva seu script de povoamento aqui"
  }),

  created() {
    this.setTitle({ text: "Criar atividade" });
  },

  computed: {
    minDate() {
      return new Date(Date.now()).toISOString();
    },
    limitFormated() {
      return this.formatDate(this.exerciseToEdit.limit);
    },
  },

  methods: {
    ...mapActions("exercise", ["setTitle", "createExercise"]),
    ...mapActions("user", ["getToken"]),

    allowedDates: (day) => {
      let dayUTC = new Date(day).toISOString().slice(0, 10);
      let todayUTC = new Date().toISOString().slice(0, 10);
      return dayUTC >= todayUTC;
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },

    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    create() {
      this.createExercise({
        token: this.getToken(),
        title: this.exerciseToEdit.title,
        description: this.exerciseToEdit.description,
        dateLimit: this.exerciseToEdit.limitFormated
      }).then(() => {
        this.$router.push("/")
      }).catch(() => {
        alert("Erro criando a atividade, tente novamente mais tarde")
      })
    }
  },
  watch: {
    "exerciseToEdit.limit"(value) {
      this.exerciseToEdit.limitFormated = this.formatDate(value);
    },
  },
};
</script>
