import {useMainStore} from "~/store";

export default function useSave(item) {
    const store = useMainStore()
    if (item.isSaved) {
        store.saveItem(item)
    } else {
        store.removeSavedItem(item)
    }
}