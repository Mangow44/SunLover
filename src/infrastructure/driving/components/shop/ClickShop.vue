<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'

const { t } = useI18n()
const userStore = useUserStore()
const price = computed<number>(() => userStore.user!.clickPower * 2 * 10)
</script>

<template>
  <div id="clickShop">
    <span>{{ t('user-information.click-power') }}</span>
    <span>
      <p>€</p>
      <p>{{ price }}</p>
    </span>
    <button @click="userStore.purchaseClickPower(price)">{{ t('actions.purchase') }}</button>
  </div>
</template>
