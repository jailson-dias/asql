import { exercise } from "../../api";

const createExercise = ( _, { token, title, dateLimit, description }) => {
  console.log("recebeu", { title, dateLimit, description })
  return exercise.create({ token, title, description, dateLimit }).then( (response) => {
    // commit("saveExercises", response.data);
    console.log(response)
  });
};

const populateExercise = ( _, { token, exerciseId, populationScript }) => {
  return exercise.populate(exerciseId, { token, populationScript }).then( (response) => {
    // commit("saveExercises", response.data);
    console.log(response)
  });
};

const getExercises = ({ commit }, { token }) => {
  // console.log("get exercise", token)
  return exercise.list({ token }).then((response) => {
    commit("saveExercises", response.data);
  });
};

const getExerciseById = async ({ state, commit }, { id, token }) => {
  // console.log("get exercise id", id, token)
  if (!state.exercises || state.exercises.length == 0) {
    await getExercises({commit}, {token})
  }

  // console.log(state.exercises)

  if (state.exercises && state.exercises.length > 0) {
    let exercise = state.exercises.filter((item) => item._id == id)

    if (exercise.length > 0) {
      return exercise[0]
    }
  }

  throw new Error("Exercise not found");
};

const setTitle = ({ commit }, { button, text, link }) => {
  commit("setTitle", { button, text, link });
};

const setPrevButton = ({ commit }, { text, link }) => {
  commit("setPrevButton", { text, link });
};

const setNextButton = ({ commit }, { text, link }) => {
  commit("setNextButton", { text, link });
};

export default {
  createExercise,
  populateExercise,
  getExercises,
  getExerciseById,
  setTitle,
  setPrevButton,
  setNextButton
};
