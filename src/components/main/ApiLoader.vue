<script>
import { store } from '../../store'
export default {
    name: 'ApiLoader',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <div>
        <h2>Loading...</h2>
    </div>

</template>

<style lang="scss" scoped>

div{
    display: flex;
    height: calc( 100vh - 62.5px );
    justify-content: center;
    align-items: center;
    background-color: gray;
    h2{
        font-size: 5rem;
    }
}
    
</style>