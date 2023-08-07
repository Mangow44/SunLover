<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 1024px) {
  main {
    flex-direction: row;
  }
}
</style>
