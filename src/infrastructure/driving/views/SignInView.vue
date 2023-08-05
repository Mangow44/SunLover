<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import router from '@/infrastructure/driving/router'

const userStore = useUserStore()
const username = ref<string>('')

function createUser() {
  userStore.setUser({
    name: username.value,
    money: 0,
    numberOfClicks: 0,
    clickPower: 0,
    autoclickPower: 0,
    autoclickers: []
  })
  router.push({ path: '/game' })
}
</script>

<template>
  <h1>Sign in</h1>

  <form @submit.prevent="createUser()">
    <label for="name">Username</label>
    <input v-model="username" id="name" type="text" required />

    <button type="submit">validate</button>
  </form>
</template>
