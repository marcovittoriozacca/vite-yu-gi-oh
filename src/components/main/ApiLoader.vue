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
    <div class="loader-container">
        <div class="loader">
            
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../assets/style/partials/mixins' as *;
.loader-container{
    height: calc(100vh - 62.5px);
    @include flex-align-center;
    justify-content: center;

}
.loader {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 10px solid rgb(0, 0, 0);
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
    
</style>