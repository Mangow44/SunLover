<script setup lang="ts">
import { useUserStore } from '@/infrastructure/driving/stores/user.store'

const userStore = useUserStore()
</script>

<template>
  <div id="sun">
    <button @click="userStore.click()">SOLEIL</button>
  </div>
</template>
