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
            <div class="cards-found">Found {{ store.yugiohCards.length }} cards</div>
            <div class="cards-row">
                <SingleCard
                v-for="(card, index) in store.yugiohCards" :key="index"
                :element="card"/>
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
    .cards-found{
        width: 100%;
        background-color: rgb(32, 32, 32);
        color: white;
        font-weight: bolder;
        padding: 15px 20px;
    }
}

</style>