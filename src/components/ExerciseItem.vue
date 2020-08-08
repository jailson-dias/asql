<template>
  <v-card class="my-3 mx-4" width="100%" link :to="`/exercise/${exercise._id}`">
    <v-list-item>
      <v-list-item-content class="mx-2 mt-2">
        <v-list-item-title class="headline mb-2">{{
          getExerciseTitle(exercise.title)
        }}</v-list-item-title>
        <p class="body-1 text-justify mb-2">
          {{ exercise.description }}
        </p>
        <v-row dense justify="start" align="end">
          <v-col>
            <p class="body-1 text-justify mb-2">
              Data limite: <b>{{ exercise.dateLimit }}</b>
            </p>
            <!-- <span class="mr-2">Data limite: {{exercise.dateLimit}}</span>
              <span class="mr-2">Código da atividade: {{exercise.code}}</span> -->
            <!-- <v-icon color="primary">mdi-check</v-icon> -->
            <p class="body-1 text-justify mb-2">
              Código da atividade: <b>{{ exercise.code }}</b>
            </p>
          </v-col>
          <v-btn v-if="role == 'Teacher'" color="primary" text :to="`/exercise/${exercise._id}/populate`">
            Popular
          </v-btn>
          <v-btn v-if="role == 'Teacher'" color="primary" text :to="`/exercise/${exercise._id}/edit`">
            Editar
          </v-btn>
          <!-- <v-btn v-else color="primary" text :to="`/exercise/{exercise._id}`">
            Resolver
          </v-btn> -->
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    exercise: Object,
    role: String
  },
  data: () => ({
  }),
  methods: {
    getExerciseTitle(title) {
      let titleLength = 70;
      if (!title || !title.length || title.length < titleLength) {
        return title;
      }
      return (title || "").slice(0, titleLength) + "...";
    },
  },
};
</script>

<style>
.question-text {
  line-height: 21px;
}
</style>
