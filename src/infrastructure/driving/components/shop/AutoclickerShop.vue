<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UserManager from '@/infrastructure/driving/services/UserManager'
import ButtonPurchase from '@/infrastructure/driving/components/shop/ButtonPurchase.vue'
import type Autoclicker from '@/domain/models/Autoclicker'

const props = defineProps<{
  autocliker: Autoclicker
}>()

const { t } = useI18n()
const userManager = new UserManager()
const userLanguage = computed<string>(() => navigator.language.split('-')[0])

const autoclikerName = computed<string>(() =>
  userLanguage.value === 'fr' ? props.autocliker.name.fr : props.autocliker.name.en
)
const autoclickerQuantity = computed<number | undefined>(() =>
  userManager.user
    ? userManager.user.autoclickers.filter((autoclicker) => autoclicker.id === props.autocliker.id)
        .length
    : undefined
)
const price = computed<number>(() =>
  autoclickerQuantity.value
    ? props.autocliker.initialCost ** 2 * autoclickerQuantity.value * 5
    : props.autocliker.initialCost ** 2
)
</script>

<template>
  <button-purchase
    v-if="autoclickerQuantity != undefined"
    @click="userManager.purchaseAutoclicker(autocliker.id, price)"
  >
    <div class="autocliker-information">
      <img :src="autocliker.img.src" :alt="autoclikerName" />
      <p>{{ autoclikerName }} ({{ autoclickerQuantity }})</p>
    </div>

    <div class="purchase-information">
      <span class="bonus">
        <img class="icon" src="/icons/sword.svg" :alt="t('user-information.auto-click-power')" />
        <p>{{ autocliker.power }}</p>
      </span>

      <span class="price">
        <img class="icon" src="/icons/coins.svg" :alt="t('user-information.money')" />
        <p>{{ price }}</p>
      </span>
    </div>
  </button-purchase>
</template>

<style scoped>
.autocliker-information {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  margin-bottom: 1rem;
}

.autocliker-information p {
  position: absolute;

  padding: 0.2rem;

  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  backdrop-filter: blur(10px);
}

.autocliker-information img {
  width: 15rem;
  height: 3rem;

  object-fit: cover;
}

.purchase-information {
  display: flex;
  gap: 0.3rem;

  max-width: 100%;
}

.price,
.bonus {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.price {
  overflow: hidden;
}

.price p,
.bonus p {
  font-size: 0.9rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price .icon,
.bonus .icon {
  width: 1.3rem;
  height: auto;
}
</style>
