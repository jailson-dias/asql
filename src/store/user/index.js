import actions from "./actions";

const user = {
  namespaced: true,
  state: {
    user: {
      fullname: "",
      email: "",
      username: "",
      role: "Student",
    },
    token: null,
  },
  mutations: {
    saveUser(state, { fullname, email, username, role }) {
      state.user = {
        fullname,
        email,
        username,
        role,
      };
      // console.log("user", state.user)
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    saveToken(state, { token }) {
      state.token = token;
      // console.log("token", token)
      localStorage.setItem("token", token);
    },

    logOut(state) {
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  actions,
  getters: {},
};

export default user;
