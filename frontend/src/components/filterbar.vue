<template>
    <div class="flex flex-col-reverse ft:flex-row items-center bg-alt rounded-lg w-full m-auto p-3 gap-6">
        <div class="flex w-full gap-4 ft:w-3/12">
            <font-awesome-icon icon="moon" size="xs" class="text-sub" />
            <vue-slider class="flex-grow -mt-1.5 z-40" v-model="store.brightness" :min="0" :max="100" :enable-cross="false" />
            <font-awesome-icon icon="sun" size="xs" class="text-sub" />
        </div>
        <div class="flex w-full ft:w-2/6 select-none">
            <div class="hidden ft:block relative w-0"><div class="absolute w-1 h-5 bg-bg"></div></div>
            <div class="flex w-1/2 justify-evenly mr-2 ft:mr-0">
                <toggle id="bg" v-model="store.bg">
                        <font-awesome-icon :icon="['far', 'image']" class="mr-1.5" />
                        bg
                </toggle>
                <toggle id="no-bg" v-model="store.nobg">
                    <font-awesome-icon :icon="['far', 'image']" class="mr-1.5 z-10" />
                    <font-awesome-icon :icon="['fas', 'slash']" class="absolute -ml-0.5 z-20" />
                    no bg
                </toggle>
            </div>
            <div class="relative w-0"><div class="absolute w-1 h-5 bg-bg"></div></div>
            <div class="flex w-1/2 justify-evenly ml-2 ft:ml-0">
                <toggle id="likes" activeClass="text-error" v-model="store.likesOnly">
                    <font-awesome-icon :icon="['fas', 'heart']" class="pr-1.5 mt-0.5" />
                        likes only
                </toggle>
            </div>
            <div class="hidden ft:block relative w-0"><div class="absolute w-1 h-5 bg-bg"></div></div>
        </div>
        <div class="flex w-full ft:w-5/12 gap-4">
            <div class="flex w-1/2">
                <input type="text" v-model="store.searchText" placeholder="search..."
                    class="w-full caret-main outline-none bg-alt border-text placeholder-sub text-xs text-text">
            </div>
            <div class="relative w-0"><div class="absolute w-1 h-5 bg-bg"></div></div>
            <div class="flex w-1/2 relative">
                <button @click="toggleDropdown" ref="dropdownButton" class="flex gap-2 justify-between text-xs text-sub hover:text-text w-full">
                    {{ store.selectedOption }}
                    <font-awesome-icon class="mt-0.5" :icon="['fas', 'caret-down']" />
                </button>
                <transition>
                    <div v-if="dropdownVisible" ref="dropdownMenu" class="absolute top-full w-[calc(100%+18px)] bg-alt rounded-lg text-xs text-sub pt-3 -ml-1.5 z-50">
                        <div v-for="option in options" :key="option" @click="selectOption(option)" 
                            :class="[option === store.selectedOption ? 'select-none cursor-pointer bg-main text-alt' : '', 'select-none cursor-pointer hover:bg-text hover:text-alt p-2']">
                            {{ option }}
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueSlider from 'vue-slider-component'
import '@/assets/slider.css'
import toggle from '@/components/toggle.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useFilterBarStore } from '@/stores/filterbar'

const store = useFilterBarStore()
const dropdownVisible = ref(false)
const dropdownButton = ref(null)
const dropdownMenu = ref(null)
const options = [
    "relevant",
    "top all time",
    "top this month",
    "top this week",
    "top today",
    "brightest",
    "darkest",
    "newest",
    "oldest"
]

function toggleDropdown() {
    dropdownVisible.value = !dropdownVisible.value
}
function selectOption(option) {
    store.setSelectedOption(option)
    dropdownVisible.value = false
}
function handleClickOutside(event) {
    if (dropdownVisible.value && 
        !dropdownMenu.value.contains(event.target) && 
        !dropdownButton.value.contains(event.target)) {
        dropdownVisible.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>