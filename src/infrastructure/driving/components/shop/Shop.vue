<script setup lang="ts">
import { inject } from 'vue'
import UserManager from '@/infrastructure/driving/services/UserManager'
import ClickShop from '@/infrastructure/driving/components/shop/ClickShop.vue'
import AutoclickerShop from '@/infrastructure/driving/components/shop/AutoclickerShop.vue'
import type Autoclicker from '@/domain/models/Autoclicker'
import type Repository from '@/domain/ports/Repository'

const userManager = new UserManager()
const autoclickerRepository: Repository<Autoclicker> = inject('AutoclickerRepository')!
const autoclickers: Autoclicker[] = autoclickerRepository.getAll()
</script>

<template>
  <div v-if="userManager.user" id="shop">
    <click-shop />

    <autoclicker-shop v-for="autocliker in autoclickers" :autocliker="autocliker" />
  </div>
</template>

<style scoped>
#shop {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
</style>
