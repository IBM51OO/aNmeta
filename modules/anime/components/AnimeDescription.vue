<template>
    <div class="anime-descript__container">
        <div class="anime-descript">
            <div class="anime-descript__media">
                <div class="media__poster">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="media__trailer">
                    <img src="../assets/img/dddd.JPG" alt="">
                </div>
            </div>
            <div class="anime-descript__title">
                <p class="title-name">
                    {{ anime.title }}
                </p>
                <p class="title-en-name">
                    {{ anime.title_orig }}
                </p>
                <div class="title-about">
                    <p class="title-about__label">
                        О сериале
                    </p>
                    <div class="title-about__container">
                        <div class="title-about__items">
                            <div class="title-about__item generes">
                                <p>Экшен</p>
                                <p>Фэнтези</p>
                                <p>Приключения</p>
                                <p>Драма</p>
                                <p>Исторический роман</p>
                            </div>
                            <div class="title-about__item type">
                                <p class="item-label">Тип:</p>
                                <p class="item-value">Тв-Сериал</p>
                            </div>
                            <div class="title-about__item year">
                                <p class="item-label">Год выпуска:</p>
                                <p class="item-value">2019</p>
                            </div>
                            <div class="title-about__item episodes">
                                <p class="item-label">Серий:</p>
                                <p class="item-value">26</p>
                            </div>
                            <div class="title-about__item duration">
                                <p class="item-label">Продложительность серии:</p>
                                <p class="item-value">24 мин.</p>
                            </div>
                            <div class="title-about__item studio">
                                <p class="item-label">Студия:</p>
                                <p class="item-value">А1</p>
                            </div>
                            <div class="title-about__item age-limit">
                                <p class="item-label">Возрастное ограничение:</p>
                                <p class="item-value">16+</p>
                            </div>
                        </div>
                        <div class="title-about__synopsis">
                            <p class="synopsis-label">
                                Описание
                            </p>
                            <div class="synopsis-content">
                                <p>
                                    Акихабара – интереснейшее место, где обитают самые разные люди – от слегка сдвинутых по фазе до больных на всю голову. Именно такая компания собралась в Лаборатории проблем времени, что над лавкой старых телевизоров. Возглавляет её 18-летний Ринтаро Окабэ, сумасшедший ученый и борец с мировым заговором. В серьезном деле нельзя без хакера – вот и он, Итару Хасида, конечно же, толстяк и истинный отаку. Добрая фея лаборатории – Маюри Сиина, подруга детства Ринтаро, официантка мейд-кафе и фанатка косплея, а научную мощь бригады резко повысила юный гений Курису Макисэ зя без хакера – вот и – Маюри Сиина, подруга детства Ринтаро, официантка мейд-кафе и фанатка косплея, а научную мощь бнаучную мощь Маюри Сиина, подруга детства Ринтаро, официантка мейд-кафе и фанатка косплея,
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
import AnimeDetail from '../types/AnimeDetail';

const props = defineProps<{
  anime: AnimeDetail;
}>();

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