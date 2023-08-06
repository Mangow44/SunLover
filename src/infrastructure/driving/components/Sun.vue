<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/infrastructure/driving/stores/user.store'

const isAnimated = ref<boolean>(false)
const { t } = useI18n()
const userStore = useUserStore()

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
      draggable="false"
      @click="
        () => {
          userStore.click()
          playAnimation()
        }
      "
    ></button>
    <p>{{ t('sun') }}</p>
  </div>
</template>

<style scoped>
#sun {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 0.3rem;
}

#sun > p {
  margin: auto;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
}

.btn-sun {
  width: 16rem;
  height: 16rem;
  margin: auto;

  cursor: pointer;

  border: none;
  border-radius: 99%;

  transition: all 0.2s ease-in-out;

  background-color: var(--color-yellow);
  -webkit-tap-highlight-color: transparent;
}

.scale {
  transform: scale(1.1);
}
</style>
