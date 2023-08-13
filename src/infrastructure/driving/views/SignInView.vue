<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import UserManager from '@/infrastructure/driving/services/UserManager'
import router from '@/infrastructure/driving/router'

const { t } = useI18n()
const userManager = new UserManager()
const username = ref<string>('')

function createUser() {
  userManager.user = {
    name: username.value,
    money: 0,
    numberOfClicks: 0,
    clickPower: 1,
    autoclickPower: 0,
    autoclickers: []
  }

  router.push({ path: '/game' })
}
</script>

<template>
  <form @submit.prevent="createUser()">
    <h1 class="title">{{ t('sign-in.sign-in') }}</h1>

    <span class="username">
      <label for="name">{{ t('sign-in.username') }}</label>
      <input v-model="username" id="name" type="text" required />
    </span>

    <button class="btn-validate" type="submit" data-testid="submit-btn">
      {{ t('actions.validate') }}
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin: auto;

  color: var(--color-secondary);
}
.title {
  margin: 2rem auto;

  text-transform: uppercase;
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
  border: 1px solid var(--color-secondary);

  font-size: 1rem;

  outline-color: var(--color-secondary);
}

.btn-validate {
  padding: 0.5rem 1rem;

  cursor: pointer;

  border-radius: 10px;
  border: none;
  border: 1px solid var(--color-secondary);

  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;

  transition: all 0.2s ease-in-out;

  background-color: var(--color-primary);
}

.btn-validate:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background-color: var(--color-secondary);
}
</style>
