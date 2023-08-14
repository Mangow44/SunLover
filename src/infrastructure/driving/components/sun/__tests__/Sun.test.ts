import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia, setActivePinia } from 'pinia'
import Sun from '@/infrastructure/driving/components/sun/Sun.vue'

import fr from '@/infrastructure/driving/lang/modules/fr.json'
import en from '@/infrastructure/driving/lang/modules/en.json'
import UserManager from '@/infrastructure/driving/services/UserManager'

describe('User information', () => {
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
    wrapper = shallowMount(Sun, { global: { plugins: [mockI18n] } })
  })

  it('Click on sun trigger user click and an animation', async () => {
    // Given
    const userSpy = vi.spyOn(UserManager.prototype, 'click')
    const animationSpy = vi.spyOn(wrapper.vm, 'playAnimation')
    const sun = wrapper.find("[data-testid='sun']")

    // When
    await sun.trigger('click')

    // Then
    expect(userSpy).toHaveBeenCalledOnce()
    expect(animationSpy).toHaveBeenCalledOnce()
  })
})
