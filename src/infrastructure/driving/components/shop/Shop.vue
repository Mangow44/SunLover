<script setup lang="ts">
import { inject } from 'vue'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import ClickShop from '@/infrastructure/driving/components/shop/ClickShop.vue'
import AutoclickerShop from '@/infrastructure/driving/components/shop/AutoclickerShop.vue'
import type Autoclicker from '@/domain/models/Autoclicker'
import type Repository from '@/domain/ports/Repository'

const userStore = useUserStore()
const autoclickerRepository: Repository<Autoclicker> = inject('AutoclickerRepository')!
const autoclickers: Autoclicker[] = autoclickerRepository.getAll()
</script>

<template>
  <div v-if="userStore.user" id="shop">
    <click-shop />

    <div class="shop-autoclikers">
      <autoclicker-shop v-for="autocliker in autoclickers" :autocliker="autocliker" />
    </div>
  </div>
</template>
