import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import HomeStudent from "../views/HomeStudent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      rule: "isPublic",
    },
  },
  {
    path: "/",
    name: "Home Student",
    component: HomeStudent,
    meta: {
      rule: "isPublic",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      rule: "isPublic",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
