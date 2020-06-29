import axios from "axios";

const EXERCISE_PATH = "exercise";

class Exercise {
  constructor(basepath) {
    this.basepath = `${basepath}/${EXERCISE_PATH}`;
    this.create = this.create.bind(this);
    this.list = this.list.bind(this);
    this.getById = this.getById.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  create({ title, description, dateLimit }) {
    const createURL = `${this.basepath}/`;

    return axios
      .post(createURL, { title, description, dateLimit })
      .then((response) => {
        return response.data;
      });
  }

  list() {
    const listURL = `${this.basepath}`;

    return axios.get(listURL).then((response) => {
      return response.data;
    });
  }

  getById(exerciseId) {
    const getByIdURL = `${this.basepath}/${exerciseId}`;

    return axios.get(getByIdURL).then((response) => {
      return response.data;
    });
  }

  edit(exerciseId, { title, description, dateLimit }) {
    const editURL = `${this.basepath}/${exerciseId}`;

    return axios
      .put(editURL, { title, description, dateLimit })
      .then((response) => {
        return response.data;
      });
  }

  delete(exerciseId) {
    const deleteURL = `${this.basepath}/${exerciseId}`;

    return axios.delete(deleteURL).then((response) => {
      return response.data;
    });
  }
}

export default Exercise;
