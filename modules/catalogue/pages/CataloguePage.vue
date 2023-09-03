<template>
    <div class="catalogue">
        <div class="container">
            <h1 class="catalogue-label">
                Каталог
            </h1>
            <div class="catalogue__content">
                <AnimeFilters />
                <AnimeList />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import AnimeFilters from '@/modules/catalogue/components/AnimeFilters.vue';
import AnimeList from '@/modules/catalogue/components/AnimeList.vue'

</script>
<style lang="scss">
.catalogue
{
    padding-top: $main-menu-height;
    background-color: #121212;
    .catalogue__content
    {
        display: flex;
    }
}
</style>