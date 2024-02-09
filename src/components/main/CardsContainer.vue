<script>
import { store } from '../../store'
import SingleCard from './SingleCard.vue'

export default {
    name: 'CardsContainer',
    components:{
        SingleCard,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <!-- container in cui andranno le carte -->
    <div class="container">
        <div class="padding-custom">
            <div class="cards-row">
                <SingleCard
                v-for="(card, index) in store.yugiohCards" :key="index"
                :element="card"
                />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/style/partials/mixins' as *;
.container{
        @include container;

        div{
            background-color: white;

            > .cards-row{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;

            }
        }
}
.padding-custom{
    padding: 30px;
}

</style>