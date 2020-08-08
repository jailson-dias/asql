import { user } from "../../api/index";

const signIn = ({ commit }, { email, password }) => {
  return user.signIn({ email, password }).then((response) => {
    commit("saveUser", response.data.user);
    commit("saveToken", { token: response.data.token });
  });
};

const createTeacher = ({ commit }, { fullname, email, username, password }) => {
  console.log("createTeacher");
  return user
    .createTeacher({ fullname, email, username, password })
    .then(() => {
      commit("saveUser", { fullname, email, username, role: "Teacher" });
    });
};

const createStudent = ({ commit }, { fullname, email, username, password }) => {
  console.log("createStudent");
  return user
    .createStudent({ fullname, email, username, password })
    .then(() => {
      commit("saveUser", { fullname, email, username, role: "Student" });
    });
};

const getToken = ({ state, commit }) => {
  if (state.token) {
    // console.log("state token", state.token)
    return state.token;
  }

  let token = localStorage.getItem("token");

  // console.log("token", token)

  if (token && token != "null" && token != "undefined") {
    let user = JSON.parse(localStorage.getItem("user"));
    commit("saveToken", { token });
    commit("saveUser", user);
    return token;
  }

  throw new Error("User not authenticated");
};

const logOut = ({ commit }) => {
  commit("logOut");
};

export default {
  signIn,
  createTeacher,
  createStudent,
  getToken,
  logOut,
};
