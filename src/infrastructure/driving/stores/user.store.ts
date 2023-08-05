import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type User from '@/domain/models/User'

export const useUserStore = defineStore('user', () => {
  const userState = ref<User | undefined>(undefined)

  const user = computed<User | undefined>(() => userState.value)

  function setUser(newUser: User): void {
    userState.value = newUser
  }

  function click(): void {
    userState.value!.money += userState.value!.clickPower
    userState.value!.numberOfClicks += 1
  }

  return { user, setUser, click }
})
