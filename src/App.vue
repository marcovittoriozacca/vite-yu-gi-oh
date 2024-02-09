<script>
import { store } from './store';
import AppHeader from './components/header/AppHeader.vue'

    export default {
        components:{
            AppHeader,
        },

        data() {
            return {
                store
            }
        },
        mounted() {}
    }

</script>

<template>

    <header>
        <AppHeader/>
    </header>
    
</template>


<style lang="scss">
@use './assets/style/general'

</style>
