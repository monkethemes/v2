<template>
   <div class="w-full items-center justify-between flex px-2">
      <div class="flex gap-2">
         <toggle id="colorful" v-model="store.colorful" activeClass="text-text">
            <font-awesome-icon :icon="['fas', 'droplet']" class="mr-2" />
            Colorful
         </toggle>
         <toggle id="flipped" v-model="store.flipped" activeClass="text-text">
            <font-awesome-icon :icon="['fas', 'shuffle']" class="mr-2" />
            Flipped
         </toggle>
      </div>
      <div class="flex gap-2">
         <toggle id="list" v-model="store.view" activeClass="text-text" :is-radio="true" :value="'list'">
            <font-awesome-icon :icon="['fas', 'list']" />
         </toggle>
         <toggle id="grid" v-model="store.view" activeClass="text-text" :is-radio="true" :value="'grid'">
            <font-awesome-icon :icon="['fas', 'border-all']" />
         </toggle>
      </div>
   </div>
</template>

<script setup>
import toggle from '@/components/toggle.vue';
import {useThemeListStore} from '@/stores/pagecontrol';

const store = useThemeListStore();
</script>
