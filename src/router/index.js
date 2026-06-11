import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CronogramaView from '../views/CronogramaView.vue'
import PalestrantesView from '../views/PalestrantesView.vue'
import InscricaoView from '../views/InscricaoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/cronograma', name: 'cronograma', component: CronogramaView },
  { path: '/palestrantes', name: 'palestrantes', component: PalestrantesView },
  { path: '/inscricao', name: 'inscricao', component: InscricaoView },
]
const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
