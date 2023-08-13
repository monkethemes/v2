import { defineStore } from 'pinia'

export const useFilterBarStore = defineStore({
    id: 'filterBar',

    state: () => ({
        brightness: [0, 100],
        bgChecked: true,
        nobgChecked: true,
        likesOnly: false,
        searchText: '',
        selectedOption: "top this week"
    }),

    actions: {
        setSelectedOption(option) {
            this.selectedOption = option
        },
        resetToDefaults() {
            this.brightness = [0, 100]
            this.bgChecked = true
            this.nobgChecked = true
            this.likesOnly = false
            this.searchText = ''
            this.selectedOption = "top this week"
        }
    }
})
