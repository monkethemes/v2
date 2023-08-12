<script setup>
import Navbar from './components/navbar.vue'
const apiUrl = import.meta.env.VITE_API_BASE_URL;
</script>

<template>
  <div class="w-st max-w-full m-auto p-8 pt-6">
    <Navbar />
    <div class="my-8">
      <RouterView />
    </div>
  </div>
</template>