<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import type Autoclicker from '@/domain/models/Autoclicker'

const props = defineProps<{
  autocliker: Autoclicker
}>()

const { t } = useI18n()
const userStore = useUserStore()
const userLanguage = computed<string>(() => navigator.language.split('-')[0])

const autoclikerName = computed<string>(() =>
  userLanguage.value === 'fr' ? props.autocliker.name.fr : props.autocliker.name.en
)
const userQuantityOfAutocliker = computed<number | undefined>(() =>
  userStore.user
    ? userStore.user.autoclickers.filter((autoclicker) => autoclicker.id === props.autocliker.id)
        .length
    : undefined
)
const price = computed<number>(() =>
  userQuantityOfAutocliker.value
    ? props.autocliker.initialCost ** 2 * userQuantityOfAutocliker.value * 10
    : props.autocliker.initialCost ** 2
)
</script>

<template>
  <div v-if="userQuantityOfAutocliker != undefined" class="autoclicker-shop">
    <span>{{ autoclikerName }}</span>
    <span>
      <p>{{ userQuantityOfAutocliker }}</p>
    </span>
    <span>
      <p>€</p>
      <p>{{ price }}</p>
    </span>
    <span>
      <p>
        {{ t('user-information.auto-click-power') }}
      </p>
      <p>{{ autocliker.power }}</p>
    </span>
    <button @click="userStore.purchaseAutoclicker(autocliker.id, price)">
      {{ t('actions.purchase') }}
    </button>
  </div>
</template>
