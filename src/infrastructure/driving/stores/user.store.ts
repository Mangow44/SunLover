import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type User from '@/domain/models/User'
import { autoclickers } from '@/infrastructure/driven/data/autoclickers'

export const useUserStore = defineStore('user', () => {
  const userState = ref<User | undefined>(undefined)

  const user = computed<User | undefined>(() => userState.value)

  function setUser(newUser: User): void {
    userState.value = newUser
  }

  function updateUserAutoclickPower(): void {
    if (!userState.value) return
    let autoclickpower = 0

    userState.value?.autoclickers.forEach((userAutocliker) => {
      const autoclickerPower: number | undefined = autoclickers.find(
        (autoclicker) => userAutocliker.id === autoclicker.id
      )?.power
      if (autoclickerPower) autoclickpower += autoclickerPower * userAutocliker.quantity
    })

    userState.value.autoclickPower = autoclickpower
  }

  function click(): void {
    if (!userState.value) return
    userState.value.money += userState.value.clickPower
    userState.value.numberOfClicks += 1
  }

  function autoClick(): void {
    if (!userState.value) return
    userState.value.money += userState.value.autoclickPower
  }

  function purchaseClickPower(price: number): void {
    if (!userState.value) return
    if (userState.value.money >= price) {
      userState.value.money -= price
      userState.value.clickPower += 1
    }
  }

  function purchaseAutoclicker(id: string, price: number): void {
    if (!userState.value) return
    if (userState.value.money >= price) {
      userState.value.money -= price
      const autoclickerIndex = userState.value.autoclickers.findIndex(
        (autoclicker) => autoclicker.id === id
      )

      if (autoclickerIndex !== -1) {
        const newQuantity: number = userState.value.autoclickers[autoclickerIndex].quantity + 1
        userState.value.autoclickers.push({ id: id, quantity: newQuantity })
      } else {
        userState.value.autoclickers.push({ id: id, quantity: 1 })
      }

      updateUserAutoclickPower()
    }
  }

  return { user, setUser, click, autoClick, purchaseClickPower, purchaseAutoclicker }
})
