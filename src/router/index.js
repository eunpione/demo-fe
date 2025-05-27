import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    name: 'BoardList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "board-list" */ '../views/BoardList.vue')
  },
  {
    path: '/board/:id',
    name: 'BoardDetail',
    component: () => import(/* webpackChunkName: "board-detail" */ '../views/BoardDetail.vue')
  },
  {
    path: '/user',
    name: 'UserList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user-list" */ '../views/UserList.vue')
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: () => import(/* webpackChunkName: "user-detail" */ '../views/UserDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
