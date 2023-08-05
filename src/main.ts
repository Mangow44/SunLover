import './infrastructure/driving/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './infrastructure/driving/App.vue'
import router from './infrastructure/driving/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
