import {defineStore} from 'pinia';

export const useThemeListStore = defineStore({
   id: 'pagecontrol',
   state: () => ({
      colorful: false,
      flipped: false,
      view: 'grid'
   }),
   actions: {
      toggleColorful() {
         this.colorful = !this.colorful;
      },
      toggleFlipped() {
         this.flipped = !this.flipped;
      },
      setView(view) {
         this.view = view;
      }
   }
});
