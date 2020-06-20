<template>
  <v-container fluid>
    <v-container>
      <v-row align="start" justify="center">
        <v-col cols>
          <p>Código da atividade: <b>X43DAS</b></p>
        </v-col>
        <v-btn color="primary" text :to="`/exercise/3`">
          Visualizar respostas
        </v-btn>
      </v-row>
    </v-container>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="8" xs="10">
            <v-text-field
              v-model="exercise.title"
              :rules="titleRules"
              :counter="titleCounter"
              label="Titulo da atividade"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols>
            <v-textarea
              v-model="exercise.description"
              :rules="descriptionRules"
              label="Descrição da atividade"
              no-resize
              rows="5"
              outlined
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-menu
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="exercise.limitFormated"
                  label="Data limite da atividade"
                  persistent-hint
                  v-on="on"
                  required
                  @blur="exercise.limit = parseDate(exercise.limitFormated)"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="exercise.limit"
                no-title
                @input="datepicker = false"
              ></v-date-picker>
            </v-menu>
            <p>
              Date in ISO format: <strong>{{ exercise.limit }}</strong>
            </p>
          </v-col>
          <!-- <v-col cols="12" md="4">
            <v-text-field
              v-model="exercise.limit"
              :rules="emailRules"
              label="Data limite da atividade"
              required
            ></v-text-field>
          </v-col> -->
        </v-row>
        <!-- <v-row justify="center">
          <v-date-picker
            v-model="exercise.limit"
            :allowed-dates="allowedDates"
            locale="pt-BR"
          ></v-date-picker>
        </v-row> -->
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
const EXERCISE_TITLE_MAX_LENGTH = 40;

export default {
  data: vm => ({
    valid: false,
    datepicker: false,
    exercise: {
      title: "",
      description: "",
      limit: new Date().toISOString().slice(0, 10),
      limitFormated: vm.formatDate(new Date().toISOString().slice(0, 10))
    },
    titleCounter: EXERCISE_TITLE_MAX_LENGTH,
    titleRules: [
      v => !!v || "O título é obrigatório",
      v =>
        v.length <= EXERCISE_TITLE_MAX_LENGTH ||
        `O título deve ter no máximo ${EXERCISE_TITLE_MAX_LENGTH} caracteres`
    ],
    descriptionRules: [v => !!v || "A descrição é obrigatória"]
  }),
  methods: {
    allowedDates: day => {
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
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  }
};
</script>
