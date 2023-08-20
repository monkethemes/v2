import {defineStore} from 'pinia';

export const useFilterBarStore = defineStore({
	id: 'filterBar',

	state: () => ({
		brightness: [0, 100],
		bg: true,
		nobg: true,
		likesOnly: false,
		searchText: '',
		selectedOption: 'relevant'
	}),

	actions: {
		setSelectedOption(option) {
			this.selectedOption = option;
		},
		resetToDefaults() {
			this.brightness = [0, 100];
			this.background = ['with', 'without'];
			this.likesOnly = false;
			this.searchText = '';
			this.selectedOption = 'relevant';
		}
	}
});
