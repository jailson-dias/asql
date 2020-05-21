<template>
  <v-container fluid>
    <v-row class="mx-2 my-1" align="start" justify="center">
      <exercise v-for="(exercise, index) in exercises" :key="index"></exercise>
    </v-row>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
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
import Exercise from "@/components/Exercise";
export default {
  components: {
    Exercise
  },
  data: () => ({
    dialog: false,
    exercises: [{}, {}, {}]
  })
};
</script>
