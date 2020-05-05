import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import acl from "./plugins/acl";

Vue.config.productionTip = false;

new Vue({
  acl,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
