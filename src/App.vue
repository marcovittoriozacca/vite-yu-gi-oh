<script>
import { store } from './store';
import axios from 'axios'
import AppHeader from './components/header/AppHeader.vue'
import AppSearchbar from './components/main/AppSearchbar.vue'

    export default {
        components:{
            AppHeader,
            AppSearchbar,
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
    </main>

</template>


<style lang="scss">
@use './assets/style/general'

</style>
