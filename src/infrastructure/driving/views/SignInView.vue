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
    money: 0,
    numberOfClicks: 0,
    clickPower: 1,
    autoclickPower: 0,
    autoclickers: []
  })
  router.push({ path: '/game' })
}
</script>

<template>
  <h1 class="title">{{ t('sign-in.sign-in') }}</h1>

  <form @submit.prevent="createUser()">
    <span class="username">
      <label for="name">{{ t('sign-in.username') }}</label>
      <input v-model="username" id="name" type="text" required />
    </span>

    <button class="btn-validate" type="submit">{{ t('actions.validate') }}</button>
  </form>
</template>

<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;

  margin: 2rem 0;

  color: var(--color-black);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: auto;
}

.username {
  display: flex;
  flex-direction: column;
}

.username label {
  font-size: 0.9rem;
}

.username input {
  width: 18rem;
  height: 2.25rem;
  padding: 0.25rem;

  border-radius: 10px;
  border: 1px solid var(--color-black);

  font-size: 1rem;

  outline-color: var(--color-black);
}

.btn-validate {
  margin: auto;
  padding: 0.5rem 1rem;

  cursor: pointer;

  border-radius: 10px;
  border: none;
  border: 1px solid var(--color-black);

  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--color-black);

  transition: all 0.2s ease-in-out;

  background-color: var(--color-white);
}

.btn-validate:hover {
  border-color: var(--color-white);
  color: var(--color-white);
  background-color: var(--color-black);
}
</style>
