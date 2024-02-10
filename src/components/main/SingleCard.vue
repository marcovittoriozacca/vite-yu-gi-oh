<script>
import { store } from '@/store';
    export default {
        name: 'SingleCard',
        props:[
            'element'
        ],
        data() {
            return {
                store,
            }
        },
        methods: {
            matchingArchetypes(element){
                return element.archetype == store.searchText || store.searchText == ''
            }
        },
    }
</script>

<template>
    <!-- the single card will be shown in the CardsContainer only if the store.searchText is empty or if it matches the value of the element.archetype 
        this will effectively filter the elements -->
        
    <div class="card-container"
        v-show="matchingArchetypes(element)">
        <figure>
            <img :src="element.card_images[0].image_url_small" :alt="element.name">
        </figure>
        <div class="card-info">
            <h4>{{ element.name }}</h4>
            <span v-show="element.archetype != 'Nessun Archetipo'">{{element.archetype}}</span>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/style/partials/mixins' as *;
    .card-container{
        width: calc( 100% / 5  - 16px );
        position: relative;
        figure{
            width: 100%;
            img{
                width: 100%;
                transition: .2s all linear;
                &:hover{
                    transform: scale(110%);
                    filter: brightness(120%);
                    cursor: pointer;
                }
            }
        }
        .card-info{
            background-color: orange;
            @include flex-align-center;
            flex-direction: column;
            row-gap: 30px;
            padding: 15px 5px; 

            text-align: center;
            min-height: 130px;
            h4{
                padding-top: 10px;
                color: white;
            }
            span{
                font-weight: 300;
                margin-top: auto;
            }
        }
    }

</style>