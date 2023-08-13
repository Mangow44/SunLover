<script setup lang="ts">
import UserManager from '@/infrastructure/driving/services/UserManager'
import router from '@/infrastructure/driving/router'
import UserInformation from '@/infrastructure/driving/components/UserInformation.vue'
import Sun from '@/infrastructure/driving/components/Sun.vue'
import Shop from '@/infrastructure/driving/components/shop/Shop.vue'

const userManager = new UserManager()

if (!userManager.user) router.push({ path: '/' })

setInterval(() => {
  userManager.autoClick()
}, 1000)
</script>

<template>
  <user-information />

  <sun />

  <shop />
</template>

<style scoped>
@media only screen and (min-width: 1024px) {
  #user-information {
    flex: 1 1 15%;
  }

  #sun {
    flex: 1 1 60%;
    margin-bottom: 2rem;
  }

  #shop {
    flex: 1 1 25%;

    height: 100vh;
    overflow: auto;

    border-left: 1px solid var(--color-secondary);
  }
}
</style>
