<template>
    <div class="ft:animate-fade-in relative ft:w-ft flex flex-col-reverse ft:flex-row max-w-[450px] ft:max-w-none m-auto px-4 bg-alt rounded-lg">
        <div class="flex">
            <div class="flex items-center flex-grow ft:w-48 my-3 px-4 ft:px-0">
                <font-awesome-icon icon="moon" size="xs" class="mr-4 text-sub" />
                <vue-slider class="flex-grow -mt-1.5" v-model="store.brightness" :min="0" :max="100"
                    :enable-cross="false" />
                <font-awesome-icon icon="sun" size="xs" class="ml-4 text-sub" />
            </div>
            <div class="hidden ft:block bg-bg rounded-xl w-1 h-6 mx-4 my-2"></div>
        </div>
        <div class="flex">
            <div class="ft:w-auto w-5/12 flex items-center justify-around ft:gap-4">
                <toggle id="bg" v-model="store.bgChecked">
                    <font-awesome-icon :icon="['far', 'image']" class="pr-1.5 mt-0.5" />
                    bg
                </toggle>
                <toggle id="no-bg" v-model="store.nobgChecked">
                    <font-awesome-icon :icon="['far', 'image']" class="px-1.5 mt-0.5 z-10" />
                    <font-awesome-icon :icon="['fas', 'slash']" class="absolute ml-1 mt-0.5 z-20" />
                    no bg
                </toggle>
            </div>
            <div class="ft:w-auto w-2/12 flex justify-around">
                <div class="bg-bg rounded-xl w-1 h-6 mx-4 my-2"></div>
            </div>
            <div class="ft:w-auto w-5/12 flex items-center justify-around ft:gap-4">
                <toggle id="likes" activeClass="text-error" v-model="store.likesOnly">
                    <font-awesome-icon :icon="['fas', 'heart']" class="pr-1.5 mt-0.5" />
                    likes only
                </toggle>
            </div>
                <div class="hidden ft:block bg-bg rounded-xl w-1 h-6 mx-4 my-2"></div>
        </div>
        <div class="flex">
            <div class="ft:w-auto w-5/12 flex pl-3">
                <input type="text" v-model="store.searchText" placeholder="search..."
                    class="w-36 caret-main outline-none bg-alt border-text placeholder-sub text-xs text-text">
            </div>
            <div class="ft:w-auto w-2/12 flex justify-around">
                <div class="bg-bg rounded-xl w-1 h-6 mx-4 my-2"></div>
            </div>
            <div class="ft:w-auto w-5/12 flex justify-around">
                <button @click="toggleDropdown" class="text-xs text-sub hover:text-text transition">
                    {{ selectedOption }}
                    <font-awesome-icon :icon="['fas', 'caret-down']" />
                </button>
                <transition name="fade">
                    <div v-show="showDropdown" class="absolute mt-7 right-0 left-[51%] ft:left-[82%] z-20">
                        <div class="py-1 bg-alt rounded-lg pt-3" role="menu" aria-orientation="vertical">
                            <button v-for="option in dropdownOptions" :key="option" @click="selectOption(option)"
                                class="w-full p-2 transition text-xs hover:bg-text hover:text-alt text-left cursor-pointer"
                                :class="option === selectedOption ? 'bg-main text-alt' : 'text-sub'">
                                {{ option }}
                            </button>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useFilterBarStore } from '@/stores/filterbar'

const store = useFilterBarStore()

const showDropdown = ref(false)
const selectedOption = ref(store.selectedOption)

const dropdownOptions = [
    "top all time", "top this month", "top this week",
    "top today", "brightest", "darkest", "newest", "oldest"
]

const selectOption = (option) => {
    selectedOption.value = option
    store.setSelectedOption(option)
    showDropdown.value = false
}

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

onMounted(() => {
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.relative')) {
            showDropdown.value = false
        }
    })
    store.resetToDefaults()
})

onUnmounted(() => {
    document.removeEventListener('click', (event) => {
        if (!event.target.closest('.relative')) {
            showDropdown.value = false
        }
    })
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 100%;
  }
}

@media (max-width: 913px) {
  .relative {
    animation: fadein 2s linear;
  }
}
</style>