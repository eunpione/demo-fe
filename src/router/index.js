import { createRouter, createWebHistory } from 'vue-router'
import MainIntroView from '../views/MainIntroView.vue'

const routes = [
  {
    path: "/",
    name: "mainIntro",
    component: MainIntroView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
  },
  {
    path: "/board",
    name: "BoardList",
    component: () =>
      import(
        /* webpackChunkName: "board-list" */ "../components/BoardList.vue"
      ),
    children: [
      {
        path: "detail/:id",
        name: "BoardDetail",
        component: () =>
          import(
            /* webpackChunkName: "board-detail" */ "../components/BoardDetail.vue"
          ),
        props: true,
      },
      {
        path: "update/:id",
        name: "BoardUpdate",
        component: () =>
          import(
            /* webpackChunkName: "board-update" */ "../components/include/BoardUpdate.vue"
          ),
        props: true,
      },
    ],
  },
  {
    path: "/board-create",
    name: "BoardCreate",
    component: () =>
      import(
        /* webpackChunkName: "board-create" */ "../components/BoardCreate.vue"
      ),
  },
  {
    path: "/user",
    name: "UserList",
    component: () =>
      import(/* webpackChunkName: "user-list" */ "../components/UserList.vue"),
  },
  {
    path: "/userDetail",
    name: "UserDetail",
    component: () =>
      import(
        /* webpackChunkName: "user-detail" */ "../components/UserDetail.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
