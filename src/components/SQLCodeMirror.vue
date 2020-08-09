<template>
  <div>
    <v-row align="stretch" justify="center">
      <v-col cols class="mr-2">
        <codemirror
          ref="codemirror"
          v-model="code"
          :options="cmOptions"
          @cursorActivity="cursorActivity"
          class="codemirror-question"
        />
      </v-col>
    </v-row>
    <!-- <v-row justify="end">
      <v-col cols>
        <span>Similaridade da resposta: 80%</span>
      </v-col>
      <slot name="buttons">
        <div class="mr-6">
          <v-btn
            class="mr-2"
            color="primary"
            icon
            :disabled="selectedCode.length < 5"
          >
            <v-icon>mdi-play-box-multiple</v-icon>
          </v-btn>
          <v-btn color="primary" icon>
            <v-icon large>mdi-play</v-icon>
          </v-btn>
        </div>
      </slot>
    </v-row> -->
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/lib/codemirror";
import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/search";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/anyword-hint";

export default {
  props: {
    defaultCode: String,
    defaultPlaceholder: String
  },

  components: {
    codemirror
  },

  data: (vm) => ({
    code: vm.defaultCode || "-- Código SQL\nselect x from y;",
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
      placeholder: vm.defaultPlaceholder || "Escreva sua solução aqui"
    },
    selectedCode: ""
  }),

  methods: {
    cursorActivity(codemirror) {
      this.selectedCode = codemirror.getSelection();
    }
  },

  watch: {
    code: function (val) {
      this.$emit('updateCode', val)
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
