import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    meta: {
      rule: "isPublic"
    }
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: () =>
      import(
        /* webpackChunkName: "Recovery Password" */ "../views/RecoveryPassword.vue"
      ),
    meta: {
      rule: "isPublic"
    }
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "Sign Up" */ "../views/SignUp.vue"),
    meta: {
      rule: "isPublic",
      title: "Cadastro"
    }
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Exercises",
        component: () =>
          import(/* webpackChunkName: "exercises" */ "../views/Exercises.vue"),
        meta: {
          rule: "isPublic"
        }
      },
      {
        path: "/exercise/:id/populate",
        name: "Populate Exercise",
        component: () =>
          import(
            /* webpackChunkName: "exercise detail" */ "../views/ExercisePopulate.vue"
          ),
        meta: {
          rule: "isPublic"
        }
      },
      {
        path: "/exercise/:id/edit",
        name: "Edit Exercise",
        component: () =>
          import(
            /* webpackChunkName: "exercise detail" */ "../views/ExerciseDetail.vue"
          ),
        meta: {
          rule: "isPublic"
        }
      },
      {
        path: "/exercise/:id",
        name: "Exercise Detail",
        component: () =>
          import(
            /* webpackChunkName: "exercise detail" */ "../views/ExerciseDetail.vue"
          ),
        meta: {
          rule: "isPublic"
        }
      },
      {
        path: "/question/:id",
        name: "Question",
        component: () =>
          import(/* webpackChunkName: "question" */ "../views/Question.vue"),
        meta: {
          rule: "isPublic"
        }
      },
      {
        path: "/create-exercise",
        name: "Create Exercise",
        component: () =>
          import(
            /* webpackChunkName: "create exercise" */ "../views/CreateExercise.vue"
          ),
        meta: {
          rule: "isPublic"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
