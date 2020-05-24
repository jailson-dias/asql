<template>
  <v-container fluid>
    <div class="mx-4">
      <v-row align="start" justify="center" class="mt-2">
        <v-col cols>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            ab est. Expedita, incidunt sed molestiae repudiandae facere eum
            explicabo necessitatibus ullam a quaerat quidem aliquid, eaque sit
            ipsam quisquam aperiam!
          </p>
        </v-col>
      </v-row>
      <SQLCodeMirror />
      <v-row align="stretch" justify="center">
        <v-col cols class="mr-2">
          <h2>Resultado da consulta</h2>
          <v-data-table
            :headers="headers"
            :items="desserts"
            disable-sort
            fixed-header
            calculate-widths
            item-key="name"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import SQLCodeMirror from "@/components/SQLCodeMirror";

export default {
  components: {
    SQLCodeMirror
  },
  data: () => ({
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
    selectedCode: "",
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%"
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%"
      }
    ],
    headers: [
      {
        text: "Dessert (100g serving)",
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" }
    ]
  }),
  computed: {
    question() {
      return this.$route.params.id;
    }
  },
  methods: {
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
.v-data-table {
  max-width: 100%;
}
</style>
