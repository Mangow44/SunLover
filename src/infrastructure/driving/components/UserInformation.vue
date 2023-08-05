<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'

const { t } = useI18n()
const userStore = useUserStore()
</script>

<template>
  <div id="user-information">
    <h2>{{ userStore.user?.name }}</h2>
    <span>
      <p>€</p>
      <p>{{ userStore.user?.money }}</p>
    </span>
    <span>
      <p>{{ t('user-information.click-power') }}</p>
      <p>{{ userStore.user?.clickPower }}</p>
    </span>
    <span>
      <p>{{ t('user-information.auto-click-power') }}</p>
      <p>{{ userStore.user?.autoclickPower }}</p>
    </span>
  </div>
</template>
