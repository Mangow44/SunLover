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
    if (!userState.value) return
    userState.value.money += userState.value!.clickPower
    userState.value.numberOfClicks += 1
  }

  function purchaseClickPower(price: number): void {
    if (!userState.value) return
    if (userState.value.money >= price) {
      userState.value.money -= price
      userState.value.clickPower += 1
    }
  }

  return { user, setUser, click, purchaseClickPower }
})
