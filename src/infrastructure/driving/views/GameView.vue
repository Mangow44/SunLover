<script setup lang="ts">
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import router from '@/infrastructure/driving/router'
import UserInformation from '@/infrastructure/driving/components/UserInformation.vue'
import Sun from '@/infrastructure/driving/components/Sun.vue'

const userStore = useUserStore()

if (!userStore.user) router.push({ path: '/' })
</script>

<template>
  <user-information />

  <sun />
</template>
