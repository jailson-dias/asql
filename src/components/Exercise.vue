<template>
  <v-card class="my-2" width="100%" outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{
          getExerciseTitle("Questão 1 jkashfgasdjkk")
        }}</v-list-item-title>
        <div>
          <v-row
            dense
            justify="start"
            v-for="(question, index) in questions"
            :key="index"
          >
            <v-col>
              <v-divider class="mb-2"></v-divider>
              <p class="mt-0 mb-2 question-text">
                Title
              </p>
              <div>
                <span class="mr-2">69%</span>
                <v-icon color="primary">mdi-check</v-icon>
                <v-btn color="primary" text :to="`/question/${question.id}`">
                  Resolver
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    questions: [
      {
        title: "Question 1 asfjkahsdfkjhasdjkf",
        complete: 55.98657,
        id: 4
      },
      {
        title: "Questão 2",
        complete: 100
      },
      { id: 7 }
    ]
  }),
  methods: {
    getExerciseTitle(title) {
      let titleLength = 50;
      if (!title || !title.length || title.length < titleLength) {
        return title;
      }
      return (title || "").slice(0, titleLength) + "...";
    }
  }
};
</script>

<style>
.question-text {
  line-height: 21px;
}
</style>
