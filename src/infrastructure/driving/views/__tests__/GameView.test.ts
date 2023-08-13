import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia } from 'pinia'
import GameView from '@/infrastructure/driving/views/GameView.vue'
import UserManager from '@/infrastructure/driving/services/UserManager'
import router from '@/infrastructure/driving/router'

import fr from '@/infrastructure/driving/lang/modules/fr.json'
import en from '@/infrastructure/driving/lang/modules/en.json'

describe('Game view', () => {
  let wrapper: any

  const mockI18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { fr, en }
  })

  beforeEach(() => {
    vi.useFakeTimers()
    vi.resetAllMocks()
    setActivePinia(createPinia())
  })

  it('Redirect user if not connected', async () => {
    // Given
    const spyOnRouter = vi.spyOn(router, 'push')

    // When
    wrapper = shallowMount(GameView, { global: { plugins: [mockI18n] } })

    // Then
    expect(spyOnRouter).toHaveBeenCalledWith({ path: '/' })
  })

  it('Run interval autoclick if user is connected', async () => {
    // Given
    const userManager = new UserManager()
    const spyOnAutoClick = vi.spyOn(UserManager.prototype, 'autoClick')
    userManager.user = {
      name: 'name',
      money: 0,
      numberOfClicks: 0,
      clickPower: 1,
      autoclickPower: 0,
      autoclickers: []
    }

    // When
    wrapper = shallowMount(GameView, { global: { plugins: [mockI18n] } })
    vi.advanceTimersByTime(1000)

    // Then
    expect(spyOnAutoClick).toHaveBeenCalled()
  })
})
