import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/inicio.vue'
import contenido from "../components/contenido";
import creditos from "../components/creditos";
import entrada from "../components/entrada.vue";
import acti1 from "../components/h5p/actividad1";
import acti2 from "../components/h5p/actividad2";
import actividades from"../components/actividades";
import evaluacion from"../components/evaluacion.vue";
import eva from "../components/h5p/evaluacion";
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
        component : entrada,
       
        children: [
         {
          path: '/contenido',
          name: 'contenido',
          component: contenido,
         },
         {
          path: '/actividades',
          name: 'actividades',
          component: actividades,
          children: [

          {
               path: 'acti1',
               name: 'acti1',
               component: acti1,
            },
            {
              path: 'acti2',
              name: 'acti2',
              component: acti2,
           }
        ],
        },
        {
          path: '/evaluacion',
          name: 'evaluacion',
          component: evaluacion,
          children: [
            {
               path: 'eva',
               name: 'eva',
               component: eva,
            },

        ],
          },
        {
         path: '/creditos',
         name: 'creditos',
         component: creditos,
         },
        ],
    }
 ]

const router = new VueRouter({
    mode: "history",
  base: process.env.BASE_URL,
    routes
})
 
export default router