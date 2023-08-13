<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import UserManager from '@/infrastructure/driving/services/UserManager'

const { t } = useI18n()
const userManager = new UserManager()
const isAnimated = ref<boolean>(false)

function playAnimation(): void {
  isAnimated.value = true
  setTimeout(() => {
    isAnimated.value = false
  }, 100)
}
</script>

<template>
  <div id="sun">
    <button
      class="btn-sun"
      :class="{ scale: isAnimated }"
      @click="
        () => {
          userManager.click()
          playAnimation()
        }
      "
      draggable="false"
    ></button>
    <p>{{ t('sun') }}</p>
  </div>
</template>

<style scoped>
#sun {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;

  padding: 0.3rem;
}

#sun > p {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
}

.btn-sun {
  width: 16rem;
  height: 16rem;

  cursor: pointer;

  border: none;
  border-radius: 99%;

  transition: all 0.2s ease-in-out;

  background-color: var(--color-yellow);
  -webkit-tap-highlight-color: transparent;
}

.scale {
  transform: scale(1.05);
}
</style>
