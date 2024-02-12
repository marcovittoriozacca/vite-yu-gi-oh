import { reactive } from "vue";

export const store = reactive({
    // stores the value of the option in AppSearchbar to filter the elements
    searchText: '',
    loading: true,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    archetypesUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',

    // array containing the cards
    yugiohCards: [],

    // array containg the archetypes
    archetypes: [],

})