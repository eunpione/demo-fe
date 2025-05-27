import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */"../views/SignUpView.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */"../views/LoginView.vue")
  },
  {
    path: '/board',
    name: 'BoardList',
    component: () => import(/* webpackChunkName: "board-list" */ '../components/BoardList.vue'),
    children: [
      {
        path: 'detail',
        name: 'BoardDetail',
        component: () => import(/* webpackChunkName: "board-detail" */ '../components/BoardDetail.vue')
      },
      {
        path: 'create',
        name: 'BoardCreate',
        component: () => import(/* webpackChunkName: "board-create" */ '../components/BoardCreate.vue')
      },
    ]
  },
  {
    path: '/user',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "user-list" */ '../components/UserList.vue'),
    children: [
      {
        path: 'detail',
        name: 'UserDetail',
        component: () => import(/* webpackChunkName: "user-detail" */ '../components/UserDetail.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
