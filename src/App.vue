<script>
import { store } from './store';
import axios from 'axios'
import AppHeader from './components/header/AppHeader.vue'
import AppSearchbar from './components/main/AppSearchbar.vue'
import CardsContainer from './components/main/CardsContainer.vue'
import ApiLoader from './components/main/ApiLoader.vue';

    export default {
        components:{
            AppHeader,
            AppSearchbar,
            CardsContainer,
            ApiLoader,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            // function that make the API calla and stores the values in the yugiohCards Array
            getCardsFromAPI(){
                store.loader = true
                let newUrl = store.apiUrl
                
                if(store.searchText){
                    if(store.searchText === 'all'){
                        newUrl += '?num=20&offset=0'
                    }else{
                        newUrl += `?archetype=${store.searchText}`
                    }
                }else{
                    newUrl += '?num=20&offset=0'
                }

                axios.get(newUrl).then( (r) => {
                    store.yugiohCards = r.data.data;
                     store.loader = false;
                })
            }
        },
        mounted() {
            this.getCardsFromAPI()

            axios.get(store.archetypesUrl).then((ar) => {
                    store.archetypes = ar.data                    
                })

        }
    }

</script>

<template>

    <header>
        <AppHeader/>
    </header>

    <ApiLoader v-if="store.loader"/>
    <main v-else>
        <AppSearchbar @archetypeFilter="getCardsFromAPI" />
        <CardsContainer/>
    </main>

</template>


<style lang="scss">
@use './assets/style/general';

</style>
