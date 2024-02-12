<script>
import { store } from '../../store'
    export default {
        name: 'AppSearchbar',
        
        data() {
            return {
                store,
                
            }
        }
    }
</script>


<template>
    <div>
        <select name="filteredCards" id="filteredCards" v-model="store.searchText"  @change='$emit("archetypeFilter")'>
            <option value="" disabled selected hidden>Seleziona Archetipo</option>
            <option value="all">Tutti gli archetipi</option>
            <option :value="element.archetype_name" 
                v-for="(element, index) in store.archetypes" :key="index">
                {{ element.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/partials/mixins' as *;

    div{
        @include container;
        select{
            padding: 10px;
            background-color: white;
            border: .5px solid black;
            border-radius: 5px;
            margin-block: 20px;
            margin-left: 10px;
            cursor: pointer;

            max-height: 200px;
            overflow-y: hidden;
        }
    }


</style>