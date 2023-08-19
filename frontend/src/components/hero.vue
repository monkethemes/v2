<template>
  <div class="relative flex items-center w-full p-4 bg-alt rounded-lg z-50">
    <font-awesome-icon :icon="icon" size="2xl" class="px-5 text-sub" />
    <div class="flex flex-col justify-center leading-5">
      <h2 class="text-text">{{ title }}</h2>
      <p class="text-xs text-sub">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHeroStore } from '@/stores/hero';

const store = useHeroStore();
const icon = ref(store.icon);
const title = ref(store.title);
const description = ref(store.description);
</script>