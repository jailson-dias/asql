<template>
  <v-container fluid>
    <v-row class="mx-2 my-1" align="start" justify="center">
      <exercise v-for="exercise in exercises" :key="exercise"></exercise>
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
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mdi-mail" placeholder="Email" />
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mdi-text" placeholder="Notes" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
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
    drawer: null,
    exercises: [{}, {}, {}, {}, {}],
    items: [
      { icon: "mdi-contacts", text: "Atividades" },
      { icon: "mdi-history", text: "Finalizadas" },
      { icon: "mdi-content-copy", text: "Sair" }
    ]
  })
};
</script>
