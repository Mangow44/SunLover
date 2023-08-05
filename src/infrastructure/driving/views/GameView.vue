<script setup lang="ts">
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import router from '@/infrastructure/driving/router'
import UserInformation from '@/infrastructure/driving/components/UserInformation.vue'
import Sun from '@/infrastructure/driving/components/Sun.vue'
import Shop from '@/infrastructure/driving/components/shop/Shop.vue'

const userStore = useUserStore()

if (!userStore.user) router.push({ path: '/' })
</script>

<template>
  <user-information />

  <sun />

  <shop />
</template>
