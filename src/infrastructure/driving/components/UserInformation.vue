<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'

const { t } = useI18n()
const userStore = useUserStore()
</script>

<template>
  <div id="user-information">
    <h2 class="username">{{ userStore.user?.name }}</h2>

    <div class="information">
      <img class="icon" src="/icons/coins.svg" :alt="t('user-information.money')" />
      <p>{{ userStore.user?.money }}</p>
    </div>

    <div>
      <p class="information-text">{{ t('user-information.click-power') }}</p>
      <span class="information">
        <img class="icon" src="/icons/cursor-click.svg" :alt="t('user-information.click-power')" />
        <p>{{ userStore.user?.clickPower }}</p>
      </span>
    </div>

    <div>
      <p class="information-text">{{ t('user-information.auto-click-power') }}</p>
      <span class="information">
        <img class="icon" src="/icons/sword.svg" :alt="t('user-information.auto-click-power')" />
        <p>{{ userStore.user?.autoclickPower }}</p>
      </span>
    </div>
  </div>
</template>

<style scoped>
#user-information {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.2rem;
}

.username {
  text-transform: uppercase;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.information-text {
  font-size: 0.7rem;
  font-style: italic;
}

.information {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.information p {
  font-size: 0.9rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  width: 1.5rem;
  height: auto;
}
</style>
