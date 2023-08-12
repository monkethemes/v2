import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBrush, faHouse, faPenToSquare, faPaintRoller, faCircleInfo, faUser, faSun, faMoon, faSlash } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBrush, faHouse, faPenToSquare, faPaintRoller, faCircleInfo, faUser, faImage, faSun, faMoon, faSlash)

app.use(router)
app.use(createPinia());
app.mount('#app')
