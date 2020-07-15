import { user } from "../../api/index";

const signIn = ({ commit }, { email, password }) => {
  return user.signIn({ email, password }).then((response) => {
    commit("saveUser", response.data.user);
    commit("saveToken", response.data.token);
  });
};

const createTeacher = ({ commit }, { fullname, email, username, password }) => {
  console.log("createTeacher");
  return user
    .createTeacher({ fullname, email, username, password })
    .then((response) => {
      console.log("create then", response);
      commit("saveUser", { fullname, email, username });
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

const getToken = ({ state, commit }) => {
  if (state.token) {
    return state.token
  }

  let token = localStorage.getItem('token')

  if (token) {
    commit("saveToken", token);
    return token
  }

  throw new Error('User not authenticated')
}

const logOut = ({commit}) => {
  commit("logOut")
}

export default {
  signIn,
  createTeacher,
  createStudent,
  getToken,
  logOut
};
