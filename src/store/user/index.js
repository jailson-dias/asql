import actions from "./actions";

const user = {
  namespaced: true,
  state: {
    user: {
      fullname: "",
      email: "",
      username: "",
    },
    token: "",
  },
  mutations: {
    saveUser(state, { user, token }) {
      const { fullname, email, username } = user;
      state.user = {
        fullname,
        email,
        username,
      };
      state.token = token;
    },
  },
  actions,
  getters: {},
};

export default user;
