import { reactive } from "vue";

export const store = reactive({
    // stores the value of the option in AppSearchbar to filter the elements
    searchText: '',
    loading: true,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=150&offset=0',

    // array containing the cards
    yugiohCards: [],

    // array containg the archetypes
    archetypes: [],

})