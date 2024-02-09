import { reactive } from "vue";

export const store = reactive({
    searchText: '',
    loading: true,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=150&offset=0',
    yugiohCards: [],
    archetypes: [],
})