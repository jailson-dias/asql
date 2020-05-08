import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import HomeStudent from "../views/student/Home.vue";

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
    name: "Student",
    component: HomeStudent,
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(
            /* webpackChunkName: "exercises" */ "../views/student/Exercises.vue"
          ),
        meta: {
          rule: "isPublic",
        },
      },
      {
        path: "/question/:id",
        name: "Question",
        component: () =>
          import(
            /* webpackChunkName: "question" */ "../views/student/Question.vue"
          ),
        meta: {
          rule: "isPublic",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;