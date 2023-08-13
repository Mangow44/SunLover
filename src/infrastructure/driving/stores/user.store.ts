import { defineStore } from 'pinia'
import { ref } from 'vue'
import type User from '@/domain/models/User'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>(undefined)

  return { user }
})
