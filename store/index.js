import {defineStore} from 'pinia'
import {getSavedItems, setSavedItems, getLatestItems, getKnowItems, getNextTripItems} from "~/utils";
import {useMyFetch} from "~/composables/useMyFetch";

export const useMainStore = defineStore('main', {
    state: () => ({
        savedItems: [],
        user: null,
        isNeedRefresh: false,
    }),
    getters: {
        getSavedItems: (state) => {
            if (getSavedItems() && getSavedItems().length > 0) {
                return state.savedItems = getSavedItems()
            } else {
                return state.savedItems
            }
        },
        getIsNeedRefresh: (state) => state.isNeedRefresh,
    },
    actions: {
        saveItem(item) {
            this.savedItems.push(item)
            setSavedItems(this.savedItems)
        },
        removeSavedItem(item) {
            this.savedItems.splice(this.savedItems.findIndex(el => el.id === item.id), 1)
            setSavedItems(this.savedItems)

        },
        setRefreshStatus(status) {
            this.isNeedRefresh = status // Action to set isNeedRefresh
        },
    },
})