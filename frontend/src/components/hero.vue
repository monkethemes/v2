<template>
  <div class="flex items-center w-full p-4 bg-alt rounded-lg">
    <font-awesome-icon :icon="icon" size="2xl" class="px-5 text-sub mt-0.5" />
    <div class="flex flex-col justify-center">
      <h2 class="text-2xl text-text">{{ title }}</h2>
      <p class="text-xs text-sub -mt-1">{{ description }}</p>
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
