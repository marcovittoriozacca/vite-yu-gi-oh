<script>
import { store } from './store';
import axios from 'axios'
import AppHeader from './components/header/AppHeader.vue'
import AppSearchbar from './components/main/AppSearchbar.vue'
import CardsContainer from './components/main/CardsContainer.vue'
import ApiLoeader from './components/main/ApiLoeader.vue';

    export default {
        components:{
            AppHeader,
            AppSearchbar,
            CardsContainer,
            ApiLoeader,
        },
        data() {
            return {
                store
            }
        },
        methods: {
            getCardsFromAPI(){
                store.loader = true

                axios.get(store.apiUrl).then( r => {store.yugiohCards = r.data.data; store.loader = false} )
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

    <ApiLoeader v-if="store.loader"/>
    <main v-else>
        <AppSearchbar/>
        <CardsContainer/>
    </main>

</template>


<style lang="scss">
@use './assets/style/general'

</style>
