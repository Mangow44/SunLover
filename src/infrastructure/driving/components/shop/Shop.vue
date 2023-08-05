<script setup lang="ts">
import { autoclickers } from '@/infrastructure/driven/data/autoclickers'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import ClickShop from '@/infrastructure/driving/components/shop/ClickShop.vue'
import AutoclickerShop from '@/infrastructure/driving/components/shop/AutoclickerShop.vue'

const userStore = useUserStore()
</script>

<template>
  <div v-if="userStore.user" id="shop">
    <click-shop />

    <div class="shop-autoclikers">
      <autoclicker-shop v-for="autocliker in autoclickers" :autocliker="autocliker" />
    </div>
  </div>
</template>
