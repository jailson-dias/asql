import actions from "./actions";

const exercise = {
  namespaced: true,
  state: {
    exercises: [],
    header: {
      title: {
        button: false,
        text: "",
        link: "",
      },
      prev: null,
      next: null,
    },
  },
  mutations: {
    saveExercises(state, exercises) {
      state.exercises = exercises;
    },

    setTitle(state, { button, text, link }) {
      state.header.title = { button, text, link };
    },

    setPrevButton(state, { link }) {
      state.header.prev = link;
    },

    setNextButton(state, { link }) {
      state.header.next = link;
    }
  },
  actions,
  getters: {},
};

export default exercise;
