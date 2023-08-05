<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import router from '@/infrastructure/driving/router'

const { t } = useI18n()
const userStore = useUserStore()
const username = ref<string>('')

function createUser() {
  userStore.setUser({
    name: username.value,
    money: 1000000,
    numberOfClicks: 0,
    clickPower: 1,
    autoclickPower: 0,
    autoclickers: []
  })
  router.push({ path: '/game' })
}
</script>

<template>
  <h1>{{ t('sign-in.sign-in') }}</h1>

  <form @submit.prevent="createUser()">
    <label for="name">{{ t('sign-in.username') }}</label>
    <input v-model="username" id="name" type="text" required />

    <button type="submit">{{ t('actions.validate') }}</button>
  </form>
</template>
