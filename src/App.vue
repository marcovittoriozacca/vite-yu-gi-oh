<script>
import { store } from './store';
import axios from 'axios'
import AppHeader from './components/header/AppHeader.vue'
import AppSearchbar from './components/main/AppSearchbar.vue'
import CardsContainer from './components/main/CardsContainer.vue'

    export default {
        components:{
            AppHeader,
            AppSearchbar,
            CardsContainer,
        },

        data() {
            return {
                store
            }
        },
        mounted() {
            axios.get(store.apiUrl).then( r => {store.yugiohCards = r.data.data} )
        }
    }

</script>

<template>

    <header>
        <AppHeader/>
    </header>

    <main>
        <AppSearchbar/>
        <CardsContainer/>
    </main>

</template>


<style lang="scss">
@use './assets/style/general'

</style>
