import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/infrastructure/driving/views/SignInView.vue'
import GameView from '@/infrastructure/driving/views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    }
  ]
})

export default router
