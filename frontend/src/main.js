import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia} from 'pinia';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {
   faBrush,
   faHouse,
   faPenToSquare,
   faList,
   faBorderAll,
   faShuffle,
   faDroplet,
   faPaintRoller,
   faCircleInfo,
   faUser,
   faSun,
   faMoon,
   faSlash,
   faHeart,
   faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-regular-svg-icons';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
library.add(
   faBrush,
   faHouse,
   faPenToSquare,
   faList,
   faBorderAll,
   faShuffle,
   faDroplet,
   faPaintRoller,
   faCircleInfo,
   faUser,
   faImage,
   faSun,
   faMoon,
   faSlash,
   faHeart,
   faCaretDown
);

app.config.devtools = true;

app.use(router);
app.use(createPinia());
app.mount('#app');
