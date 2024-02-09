<script>
    export default {
        name: 'SingleCard',
        props:[
            'element',
        ]
    }
</script>

<template>
    <div>
        <figure>
            <img :src="element.card_images[0].image_url_small" alt="">
        </figure>
        <div class="card-info">
            <h4>{{ element.name }}</h4>
            <span>{{element.archetype}}</span>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    div:not(.card-info){
        width: calc( 100% / 5  - 16px );
        figure{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .card-info{
            background-color: orange;
            text-align: center;
            padding: 15px 5px;
            h4{
                color: white;
                padding-bottom: 15px;
            }
            span{
                font-weight: 300;

            }
        }
    }

</style>