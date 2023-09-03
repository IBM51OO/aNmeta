<template>
    <div class="collections">
       <div class="container">
            <h2 class="collections-label">
                Подборки
            </h2>
            <div class="collection-cards">
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
       </div>
    </div>
</template>
<script lang="ts" setup>
import CollectionCard from './CollectionCard.vue';
</script>
<style lang="scss">
.collections
{
    .collection-cards
    {
        display: flex;
        align-items: center;
        margin: 0 -10px;
        justify-content: space-between;
    }
    .collections-label
    {
        margin: 0;
        font-family: "Century Gothic";
        font-size: 24px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 25px;
    }
}
</style>