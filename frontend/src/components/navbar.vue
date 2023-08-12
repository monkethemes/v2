<template>
    <nav class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
            <font-awesome-icon icon="brush" size="2xl" class="text-main pt-1 pl-2" />
            <div class="flex flex-col font-brand">
                <h1 class="text-title text-text -mt-2">monkethemes</h1>
                <p class="text-xs text-sub -mt-3 ml-0.5 ">reject humanity embrace monke</p>
            </div>
            <div class="flex items-center space-x-2 pl-4 gap-3">
                <router-link v-for="icon in icons" :key="icon.name" :to="icon.route"
                    class="p-1 block transition duration-200 text-sub hover:text-text active:text-sub">
                    <font-awesome-icon :icon="icon.name" />
                </router-link>
            </div>
        </div>
        <div class="flex items-center space-x-4 pr-2">
            <router-link to="/" class="p-1 block transition duration-200 text-sub hover:text-text active:text-sub">
                <font-awesome-icon icon="user" />
            </router-link>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            icons: [
                { name: 'home', route: '/' },
                { name: 'circle-plus', route: '/' },
                { name: 'paintbrush', route: '/' },
                { name: 'info', route: '/' },
            ],
        };
    },
};
</script>
  