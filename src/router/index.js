import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Pantalla_I.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/entrada',
    name: 'entrada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/entrada.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
