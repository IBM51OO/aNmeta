<template>
    <div class="user-history__card">
        <div class="card">
            <NuxtLink :to="`/anime/${data.animeId}`">
                <img :src="data.animeList.poster" alt="">
                <span class="card__title-name">
                    {{data.animeList.title}}
                </span>
            </NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserHistory } from "../types/IUser"

const props = defineProps<{
    data: UserHistory
}>()
</script>
<style lang="scss">
.user-history__card
{
    width: 100%;
    .card
    {
        &:hover .card__title-name
        {
            transition: 300ms all ease;
            color: #1d1616;
        }
        a
        {
            text-decoration: none;
        }
        border-radius: 10px 10px 0 0;
        max-width: 170px;
        position: relative;
        img
        {
            height: 240px;
            width: 170px;
            display: flex;
            object-fit: cover;
            border-radius: 10px;
        }
        .card__title-name
        {
            text-decoration: none;
            font-family: "Open Sans";
            color: #333;
            display: block;
            font-size: 14px;
            margin-top: 5px;
            max-width: 170px;
            font-weight: 700;
        }
    }
}
</style>