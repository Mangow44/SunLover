<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import ButtonPurchase from '@/infrastructure/driving/components/shop/ButtonPurchase.vue'

const { t } = useI18n()
const userStore = useUserStore()
const price = computed<number | undefined>(() =>
  userStore.user ? userStore.user.clickPower ** 2 * 10 : undefined
)
</script>

<template>
  <button-purchase v-if="price" @click="userStore.purchaseClickPower(price)">
    <img
      class="icon-primary"
      src="/icons/cursor-click.svg"
      :alt="t('user-information.click-power')"
    />

    <span class="price">
      <img class="icon" src="/icons/coins.svg" :alt="t('user-information.money')" />
      <p>{{ price }}</p>
    </span>
  </button-purchase>
</template>

<style scoped>
.icon-primary {
  width: 2rem;
  height: auto;
}

.price {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  width: 100%;
}

.price p {
  font-size: 0.9rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price .icon {
  width: 1.3rem;
  height: auto;
}
</style>
