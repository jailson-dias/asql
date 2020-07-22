import { exercise } from "../../api/index";

const getExercises = ({ commit }, { token }) => {
  return exercise.list({ token }).then((response) => {
    commit("saveExercises", response.data);
  });
};

const setTitle = ({ commit }, { button, text, link }) => {
  console.log(text)
  commit("setTitle", { button, text, link });
};

const setPrevButton = ({ commit }, { text, link }) => {
  commit("setPrevButton", { text, link });
};

const setNextButton = ({ commit }, { text, link }) => {
  commit("setNextButton", { text, link });
};

export default {
  getExercises,
  setTitle,
  setPrevButton,
  setNextButton
};
