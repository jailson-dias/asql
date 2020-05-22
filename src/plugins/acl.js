import Vue from "vue";
import { AclInstaller, AclCreate, AclRule } from "vue-acl";
import router from "../router";

Vue.use(AclInstaller);

export default new AclCreate({
  initial: "public",
  notfound: {
    path: "/error",
    forwardQueryParams: true
  },
  router,
  acceptLocalRules: false,
  globalRules: {
    isAdmin: new AclRule("admin").generate(),
    isPublic: new AclRule("public").or("admin").generate(),
    isLogged: new AclRule("user").and("inside").generate(),
    isStudent: new AclRule("student").and("inside").generate()
  },
  middleware: async acl => {
    acl.change("admin");
  }
});
