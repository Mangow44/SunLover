import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia } from 'pinia'
import UserInformation from '@/infrastructure/driving/components/user/UserInformation.vue'
import UserManager from '@/infrastructure/driving/services/UserManager'
import type User from '@/domain/models/User'

import fr from '@/infrastructure/driving/lang/modules/fr.json'
import en from '@/infrastructure/driving/lang/modules/en.json'

describe('User information', () => {
  let userManager: UserManager
  let wrapper: any

  const user: User = {
    name: 'toto',
    money: 10,
    numberOfClicks: 0,
    clickPower: 1,
    autoclickPower: 1,
    autoclickers: []
  }

  const mockI18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { fr, en }
  })

  beforeEach(() => {
    vi.resetAllMocks()
    setActivePinia(createPinia())
    userManager = new UserManager()
    userManager.user = user
    wrapper = shallowMount(UserInformation, { global: { plugins: [mockI18n] } })
  })

  it('Fill html with user information', async () => {
    // Given
    const username = wrapper.find("[data-testid='username']")
    const userMoney = wrapper.find("[data-testid='money']")
    const userClickPower = wrapper.find("[data-testid='click-power']")
    const userAutoclickPower = wrapper.find("[data-testid='auto-click-power']")

    // When

    // Then
    expect(username.text()).toEqual(user.name.toString())
    expect(userMoney.text()).toEqual(user.money.toString())
    expect(userClickPower.text()).toEqual(user.clickPower.toString())
    expect(userAutoclickPower.text()).toEqual(user.autoclickPower.toString())
  })
})
