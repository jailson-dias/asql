import axios from "axios";

const EXERCISE_PATH = "/exercise";

class Question {
  constructor(basepath) {
    this.basepath = `${basepath}/${EXERCISE_PATH}`;
    this.create = this.create.bind(this);
  }

  create(exerciseId, { description, teacherSolution, databaseLocation }) {
    const createURL = `${this.basepath}/${exerciseId}/question`;

    return axios
      .post(createURL, { description, teacherSolution, databaseLocation })
      .then((response) => {
        return response.data;
      });
  }

  getById(exerciseId, questionId) {
    const getByIdURL = `${this.basepath}/${exerciseId}/question/${questionId}`;

    return axios.get(getByIdURL).then((response) => {
      return response.data;
    });
  }

  edit(
    exerciseId,
    questionId,
    { description, teacherSolution, databaseLocation }
  ) {
    const editURL = `${this.basepath}/${exerciseId}/question/${questionId}`;

    return axios
      .put(editURL, { description, teacherSolution, databaseLocation })
      .then((response) => {
        return response.data;
      });
  }

  delete(exerciseId, questionId) {
    const deleteURL = `${this.basepath}/${exerciseId}/question/${questionId}`;

    return axios.delete(deleteURL).then((response) => {
      return response.data;
    });
  }
}

export default Question;
