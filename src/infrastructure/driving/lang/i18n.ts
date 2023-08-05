import { createI18n } from 'vue-i18n'
import fr from '@/infrastructure/driving/lang/modules/fr.json'
import en from '@/infrastructure/driving/lang/modules/en.json'

const messages = { fr, en }

const userLanguage = navigator.language.split('-')[0]

export const i18n = createI18n({
  legacy: false,
  locale: userLanguage === 'fr' ? 'fr' : 'en',
  fallbackLocale: 'en',
  messages
})
