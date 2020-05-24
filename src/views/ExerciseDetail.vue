<template>
  <v-container fluid>
    <div class="mx-5 my-3">
      <v-row align="start" justify="center">
        <v-col cols>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            ab est. Expedita, incidunt sed molestiae repudiandae facere eum
            explicabo necessitatibus ullam a quaerat quidem aliquid, eaque sit
            ipsam quisquam aperiam!
          </p>
        </v-col>
      </v-row>
      <v-row align="start" justify="center">
        <question-item
          v-for="(exercise, index) in exercises"
          :key="index"
        ></question-item>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import QuestionItem from "@/components/QuestionItem";
export default {
  components: {
    QuestionItem
  },
  data: () => ({
    dialog: false,
    exercises: [{}, {}, {}]
  })
};
</script>
