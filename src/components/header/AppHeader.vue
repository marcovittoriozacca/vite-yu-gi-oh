<script>
export default {
    name: 'AppHeader',
    setup () {
        return {
            
        }
    }
}
</script>

<template>
    <div>
        <figure>
            <img src="../../assets/img/yu-gi-oh-logo.jpg" alt="logo-da-inserire">
        </figure>
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/style/partials/mixins' as *;

div{
    background-color: white;
    padding: 15px 0;
    @include flex-align-center;

    figure{
        @include flex-align-center;
        width: 80px;
        margin-inline: 15px;

        img{
            width: 100%;
        }
    }

    h1{
        font-weight: 400;
    }
}

</style>