<template>
  <v-container fluid>
    <v-row class="mx-2 my-1" align="start" justify="center">
      <exercise-item
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
        :role="role"
      ></exercise-item>
    </v-row>
    <v-btn bottom color="pink" dark fab fixed right @click="openAddOrCreateExercise">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn icon large target="_blank" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Adicionar atividade</span>
      </v-tooltip>
    </v-btn>
    <v-dialog v-model="dialog" width="400px">
      <v-card>
        <v-card-title>
          Adicionar atividade
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col cols>
              <v-text-field placeholder="Código da atividade" maxlength="10" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">Cancelar</v-btn>
          <v-btn text color="primary" @click="dialog = false">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ExerciseItem from "@/components/ExerciseItem";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ExerciseItem,
  },

  data: () => ({
    dialog: false,
  }),

  created() {
    try {
      const token = this.getToken();
      this.getExercises({ token });
      if (this.role == "Teacher") {
        this.setTitle({ text: "Atividades em andamento" });
      } else {
        this.setTitle({ text: "Minhas atividades" });
      }
    } catch (err) {
      console.log("error getting exercises", err);
    }
  },

  computed: {
    ...mapState("exercise", {
      exercises: (state) => state.exercises,
    }),
    ...mapState("user", {
      role: (state) => state.user.role,
    }),
  },

  methods: {
    ...mapActions("exercise", ["getExercises", "setTitle"]),
    ...mapActions("user", ["getToken", "logOut"]),
    openAddOrCreateExercise() {
      if (this.role == "Teacher") {
        this.$router.push("/create-exercise");
      } else {
        this.dialog = !this.dialog
      }
    }
  },
};
</script>
