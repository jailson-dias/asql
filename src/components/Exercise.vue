<template>
  <v-card class="my-2" width="100%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{
          getExerciseTitle("Questão 1 jkashfgasdjkfhasdf sd fgjksadhfk")
        }}</v-list-item-title>
        <v-row
          class="my-n1"
          v-for="(question, index) in questions"
          :key="index"
        >
          <v-col cols>
            <v-divider class="mb-2"></v-divider>
            <p class="mt-0 mb-2 question-text">
              {{ question.title }}
            </p>
            <div>
              <span v-if="question.complete < 99.999" class="mr-2"
                >{{ question.complete }}%</span
              >
              <v-icon v-if="question.complete > 99.999" color="primary"
                >mdi-check</v-icon
              >
              <v-btn
                v-else
                color="primary"
                text
                :to="`/question/${question.id}`"
              >
                Resolver
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    questions: [
      {
        title:
          "Question 1 asfjkahsdfkjhasdjkfhsajkdhfjhas sd f ads g sa g dsg sdf gdhgfjhasjkfhsjkahgfhsajhfjkashfjsa",
        complete: 55.98657,
        id: 4
      },
      {
        title: "Questão 2",
        complete: 100
      },
      { id: 7 },
      {},
      {},
      {},
      {}
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
