<template>
   <pagecontrol />
   <div class="theme-pop w-full gap-4 grid grid-cols-1 xt:grid-cols-2 ft:grid-cols-3 st:grid-cols-4"></div>
</template>

<script setup>
import pagecontrol from '@/components/pagecontrol.vue';
import theme from '@/components/theme.vue';
</script>

<style scoped>
@keyframes fade1 {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}
@keyframes fade2 {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}

@media (min-width: 0px) and (max-width: 549px) {
   .theme-pop > * {
      animation: fade1 0.15s ease-in forwards;
   }
}
@media (min-width: 550px) and (max-width: 913px) {
   .theme-pop > * {
      animation: fade2 0.15s ease-in forwards;
   }
}
@media (min-width: 914px) and (max-width: 1249px) {
   .theme-pop > * {
      animation: fade1 0.15s ease-in forwards;
   }
}
@media (min-width: 1250px) {
   .theme-pop > * {
      animation: fade2 0.15s ease-in forwards;
   }
}
</style>
