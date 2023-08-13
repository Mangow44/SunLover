import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia } from 'pinia'
import SignInView from '@/infrastructure/driving/views/SignInView.vue'
import UserManager from '@/infrastructure/driving/services/UserManager'
import router from '@/infrastructure/driving/router'

import fr from '@/infrastructure/driving/lang/modules/fr.json'
import en from '@/infrastructure/driving/lang/modules/en.json'

describe('Sign in view', () => {
  let wrapper: any

  const mockI18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { fr, en }
  })

  beforeEach(() => {
    vi.resetAllMocks()
    setActivePinia(createPinia())
    wrapper = shallowMount(SignInView, { global: { plugins: [mockI18n] } })
  })

  it('Create a new user', async () => {
    // Given
    const spyOnRouter = vi.spyOn(router, 'push')
    const userManager = new UserManager()
    const submitButton = wrapper.find("[data-testid='submit-btn']")

    // When
    await submitButton.trigger('submit')

    // Then
    expect(userManager.user).toBeDefined()
    expect(spyOnRouter).toHaveBeenCalledWith({ path: '/game' })
  })
})
