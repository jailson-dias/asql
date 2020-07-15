import axios from "axios";

const USER_PATH = "user";

class User {
  constructor(basepath) {
    this.basepath = `${basepath}/${USER_PATH}`;
    this.signIn = this.signIn.bind(this);
  }

  signIn({ email, password }) {
    const signInURL = `${this.basepath}/signin`;

    return axios.post(signInURL, { email, password }).then((response) => {
      return response.data;
    });
  }

  createTeacher({ fullname, email, username, password }) {
    const createTeacherURL = `${this.basepath}/teacher`;
    return axios
      .post(createTeacherURL, { fullname, email, username, password })
      .then((response) => {
        return {
          status: response.status,
          message: response.data.message,
          data: response.data.data,
        };
      })
      .catch((error) => {
        if (error.isAxiosError) {
          return {
            status: error.response.status,
            message: error.response.data.message,
            data: error.response.data.data,
          };
        }

        throw error;
      });
  }

  createStudent({ fullname, email, username, password }) {
    const createStudentURL = `${this.basepath}/student`;

    return axios
      .post(createStudentURL, { fullname, email, username, password })
      .then((response) => {
        return response.data;
      });
  }
}

export default User;
