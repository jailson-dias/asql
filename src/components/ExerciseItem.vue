<template>
  <v-card class="my-3 mx-4" width="100%">
    <v-list-item>
      <v-list-item-content class="mx-2 mt-2">
        <v-list-item-title class="headline mb-2">{{
          getExerciseTitle("Questão 1 jkashfgasdjkk")
        }}</v-list-item-title>
        <p class="body-1 text-justify mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
          tempore quas est atque eos commodi! Sapiente quis eaque error nam
          officiis! Quam tenetur labore obcaecati odit ducimus? Neque, alias!
        </p>
        <v-row dense justify="start">
          <v-col>
            <div>
              <span class="mr-2">69%</span>
              <v-icon color="primary">mdi-check</v-icon>
              <v-btn color="primary" text :to="`/exercise/3`">
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
