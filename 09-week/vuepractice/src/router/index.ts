import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MedicoPage from '@/views/MedicoPage.vue';
import EnfermeroPage from '@/views/EnfermeroPage.vue';
import PacientePage from '@/views/PacientePage.vue';
import RecepcionistaPage from '@/views/RecepcionistaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/medico',
    name: 'Medico',
    component: MedicoPage
  },
  {
    path: '/enfermero',
    name: 'Enfermero',
    component: EnfermeroPage
  },
  {
    path: '/paciente',
    name: 'Paciente',
    component: PacientePage
  },
  {
    path: '/recepcionista',
    name: 'Recepcionista',
    component: RecepcionistaPage
  }


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
