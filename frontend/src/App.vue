<template>
  <div class="w-st max-w-full m-auto space-y-8 p-8 pt-6">
    <Navbar />
    <Hero />
    <div class="flex flex-col my-8 gap-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar.vue'
import Hero from '@/components/hero.vue'
const apiUrl = import.meta.env.VITE_API_BASE_URL;
</script>