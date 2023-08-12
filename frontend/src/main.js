import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBrush, faHouse, faCirclePlus, faPaintBrush, faInfo, faUser } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBrush, faHouse, faCirclePlus, faPaintBrush, faInfo, faUser )

app.use(router)
app.mount('#app')
