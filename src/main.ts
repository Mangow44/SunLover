import './infrastructure/driving/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './infrastructure/driving/App.vue'
import router from './infrastructure/driving/router'
import { i18n } from './infrastructure/driving/lang/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
