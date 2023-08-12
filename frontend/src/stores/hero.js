import { defineStore } from 'pinia';

export const useHeroStore = defineStore({
  id: 'hero',
  state: () => ({
    icon: ['far', 'image'],
    title: 'themes',
    description: 'top themes this month'
  }),
  actions: {
    setHeroData(icon, title, description) {
      this.icon = icon;
      this.title = title;
      this.description = description;
    }
  }
});
