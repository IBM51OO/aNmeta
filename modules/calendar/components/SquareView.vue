<template>
    <div class="calendar__cards-square" v-if="data">
        <div class="calendar-card" v-for="anime in data" :key="anime.id">
            <div class="card__poster">
                <img :src="anime.img" alt="">
            </div>
            <div class="card__title-name">
                {{ anime.title }}
            </div>
            <div class="card__description">
                <span class="description__year">{{anime.yearRelease}}</span>
                <span class="description__type">ТВ-сериал</span>
            </div>
            <div class="card__info">
                <span class="card__episodes">
                    2 эпизод
                </span>
                <span class="card__release-date">
                    {{anime.timeRelease}}
                </span>
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