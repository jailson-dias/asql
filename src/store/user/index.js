import actions from "./actions";

const user = {
  namespaced: true,
  state: {
    user: {
      fullname: "",
      email: "",
      username: "",
    },
    token: null,
  },
  mutations: {
    saveUser(state, { fullname, email, username }) {
      state.user = {
        fullname,
        email,
        username,
      };
    },

    saveToken(state, { token }) {
      state.token = token;
      localStorage.setItem('token', token)
    },

    logOut(state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions,
  getters: {},
};

export default user;
