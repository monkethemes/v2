<template>
  <div class="w-st max-w-full m-auto space-y-8 p-8 pt-6">
    <navbar />
    <div class="flex flex-col my-8 gap-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
import { onMounted } from 'vue';

const apiUrl = import.meta.env.VITE_API_BASE_URL;
</script>
