<template>
    <nav class="flex items-center justify-between h-12 w-full relative z-50">
        <div class="flex items-center">
            <router-link to="/"><logo class="fill-main pt-1 pl-2 mr-2 w-8 relative z-10" /></router-link>
            <div class="overflow-hidden relative">
                <div class="mask-content::before content absolute top-0 left-0 bottom-0 width-[50px] bg-white"></div>
                <div
                    class="flex-grow flex items-center transform transition-transform duration-200 -translate-x-[225px] md:translate-x-0 z-0">
                    <div class="flex flex-col font-brand pr-4 relative">
                        <h1 class="text-title text-text -mt-2">monkethemes</h1>
                        <p class="text-xs text-sub -mt-3 ml-0.5">reject humanity embrace monke</p>
                        <router-link to="/" class="absolute top-0 left-0 right-3 bottom-0 z-10"></router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <router-link v-for="icon in icons" :key="icon.name" :to="icon.route"
                            class="p-2 block transition duration-200 text-sub hover:text-text active:text-sub">
                            <font-awesome-icon :icon="icon.name" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/" class="p-1 block absolute top-1/2 transform -translate-y-1/2 right-2 transition duration-200 text-sub hover:text-text active:text-sub">
            <font-awesome-icon icon="user" />
        </router-link>
    </nav>
</template>

<script>
import logo from '@/components/logo.vue'

export default {
    name: 'Navbar',
    components: {
        logo,
    },
    data() {
        return {
            icons: [
                { name: 'home', route: '/' },
                { name: 'pen-to-square', route: '/' },
                { name: 'paint-roller', route: '/' },
                { name: 'circle-info', route: '/' },
            ],
        };
    },
};
</script>
