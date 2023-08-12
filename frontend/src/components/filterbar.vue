<template>
    <div class="bg-alt h-[38.2px] min-w-[750px] rounded-lg flex items-center px-4">
        <div class="w-1/4 flex items-center">
            <font-awesome-icon icon="moon" size="xs" class="mr-6 text-sub" />
            <vue-slider class="flex-grow -mt-1.5" v-model="values" :min="0" :max="100" :enable-cross="false" />
            <font-awesome-icon icon="sun" size="xs" class="ml-6 text-sub" />
        </div>
        <div class="h-3/5 bg-bg rounded-xl w-1 mx-4"></div>
        <div class="flex items-center gap-4">
            <input type="checkbox" id="bg" v-model="bgChecked" class="hidden">
            <label for="bg" class="flex items-center cursor-pointer text-xs transition-colors duration-200 hover:text-text active:text-sub" :class="bgChecked ? 'text-main' : 'text-sub'">
                <font-awesome-icon :icon="['far', 'image']" class="pr-1.5 mt-0.5" />
                bg
            </label>
            <input type="checkbox" id="no-bg" v-model="noBgChecked" class="hidden">
            <label for="no-bg" class="flex items-center cursor-pointer text-xs relative transition-colors duration-300 hover:text-text active:text-sub" :class="noBgChecked ? 'text-main' : 'text-sub'">
                <font-awesome-icon :icon="['far', 'image']" class="px-1.5 mt-0.5 z-10" />
                <font-awesome-icon :icon="['fas', 'slash']" class="absolute ml-1 mt-0.5 z-20" />
                no bg
            </label>
        </div>
        <div class="h-3/5 bg-bg rounded-xl w-1 mx-4"></div>
    </div>
</template>

<script setup>
import VueSlider from 'vue-slider-component'
import '@/assets/slider.css'

import { ref } from 'vue'

const values = ref([0, 100])
const bgChecked = ref(true)
const noBgChecked = ref(false)
</script>
