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
                store
            }
        },
        methods: {
            // function that make the API calla and stores the values in the yugiohCards Array
            getCardsFromAPI(){
                store.loader = true

                axios.get(store.apiUrl).then( (r) => {
                    store.yugiohCards = r.data.data;
                     store.loader = false;

                     // stores all the archetypes in the archetypes array pushing only one for each type. The undefined one will be called 'Nessun Archetipo'
                     r.data.data.forEach(element => {
                        if(element.archetype == undefined){
                            element.archetype = 'Nessun Archetipo'
                            if(!store.archetypes.includes(element.archetype)){
                                store.archetypes.push(element.archetype)
                            }
                        }else{
                            if(!store.archetypes.includes(element.archetype)){
                                store.archetypes.push(element.archetype)
                            }
                        }
                     });
                } )
            }
        },
        mounted() {
            this.getCardsFromAPI()

        }
    }

</script>

<template>

    <header>
        <AppHeader/>
    </header>

    <ApiLoader v-if="store.loader"/>
    <main v-else>
        <AppSearchbar/>
        <CardsContainer/>
    </main>

</template>


<style lang="scss">
@use './assets/style/general';

</style>
