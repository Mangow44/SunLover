<script setup lang="ts">
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import ClickShop from '@/infrastructure/driving/components/shop/ClickShop.vue'

const userStore = useUserStore()
</script>

<template>
  <div v-if="userStore.user" id="shop">
    <click-shop />
  </div>
</template>
