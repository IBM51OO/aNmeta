<template>
    <div class="anime-descript__container" v-if="currentAnime">
        <div class="anime-descript">
            <div class="anime-descript__media">
                <div class="media__poster">
                    <img :src="currentAnime.material_data.poster_url" alt="">
                </div>
                <div class="media__trailer">
                    <!-- <img src="../assets/img/dddd.jpg" alt=""> -->
                </div>
            </div>
            <div class="anime-descript__title">
                <p class="title-name">
                    {{ currentAnime.title }}
                </p>
                <p class="title-en-name">
                    {{ currentAnime.title_orig }}
                </p>
                <div class="title-about">
                    <p class="title-about__label">
                        О сериале
                    </p>
                    <div class="title-about__container">
                        <div class="title-about__items">
                            <div class="title-about__item generes">
                                <p v-for="(genre, index) in currentAnime.material_data.genres" :key="index">{{genre}}</p>
                            </div>
                            <div class="title-about__item type">
                                <p class="item-label">Тип:</p>
                                <p class="item-value">Тв-Сериал</p>
                            </div>
                            <div class="title-about__item year">
                                <p class="item-label">Год выпуска:</p>
                                <p class="item-value">{{ currentAnime.year }}</p>
                            </div>
                            <div class="title-about__item episodes">
                                <p class="item-label">Серий:</p>
                                <p class="item-value">{{ currentAnime.episodes_count }}</p>
                            </div>
                            <div class="title-about__item duration">
                                <p class="item-label">Продложительность серии:</p>
                                <p class="item-value">{{currentAnime.material_data.duration}} мин.</p>
                            </div>
                            <div class="title-about__item studios">
                                <p class="item-label">Студия:</p>
                                <div class="studio" v-for="(studio, index) in currentAnime.material_data.anime_studios" :key="index">
                                    <p class="item-value">{{ studio }}</p>
                                </div>
                            </div>
                            <div class="title-about__item age-limit">
                                <p class="item-label">Возрастное ограничение:</p>
                                <p class="item-value">{{currentAnime.material_data.rating_mpaa}}</p>
                            </div>
                        </div>
                        <div class="title-about__synopsis">
                            <p class="synopsis-label">
                                Описание
                            </p>
                            <div class="synopsis-content">
                                <p>
                                    {{ currentAnime.material_data.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAnime } from '../store/animeStore';
import AnimeDetail from '../types/AnimeDetail';
import RelatedAnime from '../types/RelatedAnime';

const store = useAnime();

const currentAnime = computed(() => store.getCurrentAnime)

</script>
<style lang="scss">
.anime-descript__container
{
    .anime-descript
    {
        padding: 15px;
        border-radius: 6px;
        background: #1c1c1c;
        display: flex;
        .anime-descript__media
        {
            width: 300px;
            margin-right: 30px;
            .media__poster
            {
                width: 280px;
                img
                {
                    height: 410px;
                    border-radius: 6px;
                    width: 280px;
                    object-fit: cover;
                }
            }
            .media__trailer
            {
                margin-top: 10px;
                img
                {
                    border-radius: 6px;
                }
            }
        }
        .anime-descript__title
        {
            .title-name
            {
                font-family: 'Oswald';
                color: #fff;
                margin: 0;
                font-size: 28px;
            }
            .title-en-name
            {
                color: #F2F2F2;
                font-size: 18px;
                font-family: 'Oswald';
                margin: 0;
            }
            .title-about
            {
                font-family: 'Open Sans';
                margin-top: 30px;
                .title-about__label
                {
                    margin: 0 0 10px 0;
                    color: #fff;
                    font-weight: 500;
                    font-size: 20px;
                }
                .title-about__container
                {
                    .title-about__items
                    {
                        .title-about__item 
                        {
                            .item-label
                            {
                                color: #c3c3c3;
                            }
                            p
                            {
                                margin: 0 0 10px 0;
                            }
                        }
                        .title-about__item 
                        {
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            color: #fff;
                            font-size: 14px;
                            p
                            {

                                margin-right: 7px;
                            }
                        }
                    }
                    .title-about__synopsis
                    {
                        .synopsis-label
                        {
                            margin: 10px 0 10px 0;
                            color: #fff;
                            font-weight: 500;
                            font-size: 20px;
                        }
                        .synopsis-content
                        {
                            p
                            {
                                margin: 0;
                                color: #F2F2F2;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>