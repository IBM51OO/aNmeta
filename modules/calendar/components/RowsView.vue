<template>
    <div class="calendar__cards-rows" v-if="data">
        <div class="cards-rows" v-for="anime in data" :key="anime.id">
            <div class="row">
                <div class="row-start">
                    <div class="item__img">
                        <img :src="anime.img" alt="">
                    </div>
                    <div class="item__name">
                        {{ anime.title }}
                    </div>    
                </div>
                <div class="row-end">
                    <div class="item-info">
                        <div class="item-info__comings-episode">
                            2 эпизод
                        </div>
                        <div class="item-info__release-date">
                            {{ anime.yearRelease }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Movie } from '@/modules/home/types/types';

const props = defineProps<{
  data: Array<Movie>;
}>();
</script>
<style lang="scss">
.calendar__cards-rows
{
    .cards-rows
    {
        .row
        {
            display: flex;
            margin-bottom: 10px;
            height: 100px;
            align-items: center;
            background: #333;
            .item__img
            {
                img
                {
                    border-radius: 10px;
                    object-fit: cover;
                    height: 100px;
                }
            }
        }
    }
}
</style>