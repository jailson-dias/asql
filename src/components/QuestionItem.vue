<template>
  <v-card class="my-3 mx-4" width="100%">
    <v-list-item>
      <v-list-item-content class="mx-4 mt-2">
        <v-list-item-title class="headline mb-2">{{
          getExerciseTitle("Questão 1 jkashfgasdjkk")
        }}</v-list-item-title>
        <p class="body-1 text-justify mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
          tempore quas est atque eos commodi! Sapiente quis eaque error nam
          officiis! Quam tenetur labore obcaecati odit ducimus? Neque, alias!
        </p>
        <SQLCodeMirror>
          <template v-slot:buttons>
            <v-btn text color="primary" class="mr-2">
              Visualizar consulta
            </v-btn>
          </template>
        </SQLCodeMirror>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import SQLCodeMirror from "@/components/SQLCodeMirror";

export default {
  components: {
    SQLCodeMirror
  },
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
    ],
    code: "-- Código SQL\nselect x from y;",
    cmOptions: {
      mode: "text/x-sql",
      lineNumbers: true,
      tabSize: 4,
      autofocus: true,
      styleActiveLine: true,
      matchBrackets: true,
      lineWrapping: true,
      extraKeys: {
        Ctrl: "autocomplete"
      },
      foldGutter: true,
      placeholder: "Escreva sua solução aqui"
    },
    selectedCode: ""
  }),
  methods: {
    getExerciseTitle(title) {
      let titleLength = 50;
      if (!title || !title.length || title.length < titleLength) {
        return title;
      }
      return (title || "").slice(0, titleLength) + "...";
    },
    cursorActivity(codemirror) {
      this.selectedCode = codemirror.getSelection();
    }
  }
};
</script>

<style scoped>
.codemirror-question {
  width: 100%;
  border: 1px solid black;
}
</style>

<style>
.question-text {
  line-height: 21px;
}
</style>
