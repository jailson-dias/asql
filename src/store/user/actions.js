import { user } from "../../api/index";

const signIn = ({ commit }, { username, password }) => {
  return user.signIn({ username, password }).then((response) => {
    console.log(response);
    commit("saveUser", response.data);
  });
};

const createTeacher = (context, { fullname, email, username, password }) => {
  console.log("createTeacher");
  return user
    .createTeacher({ fullname, email, username, password })
    .then((response) => {
      console.log(response);
    });
};

const createStudent = (context, { fullname, email, username, password }) => {
  console.log("createStudent");
  return user
    .createStudent({ fullname, email, username, password })
    .then((response) => {
      console.log(response);
    });
};

export default {
  signIn,
  createTeacher,
  createStudent,
};
