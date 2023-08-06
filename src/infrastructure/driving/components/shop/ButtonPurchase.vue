<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <button class="btn-purchase">
    <slot />

    <p>
      {{ t('actions.purchase') }}
    </p>
  </button>
</template>

<style scoped>
.btn-purchase {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0.2rem;

  cursor: pointer;

  border-color: var(--color-black);
  border-style: solid;
  border-width: 1px 0;

  color: var(--color-black);
  background-color: var(--color-white);
}

.btn-purchase:hover {
  background-color: var(--color-light-gray);
}

.btn-purchase > p {
  margin-top: 0.3rem;

  text-transform: uppercase;
  font-weight: bold;
}
</style>
