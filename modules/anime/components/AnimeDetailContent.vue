<template>
    <div class="anime-wrapper" v-if="!loading">
       <div class="container">
        <div class="anime">
            <div class="anime__left">
                <div class="anime__left-content">
                    <AnimePlayer/>
                    <AnimeDescription />
                </div>
            </div>
            <div class="anime__right">
                <div class="anime__right-content">
                    <div class="anime-related">
                        <h3>Связанные аниме</h3>
                        <TransitionGroup name="list">
                            <div class="anime-related__item" v-for="relatedAnimeItem in filteredRelatedAnime" :key="relatedAnimeItem.id">
                                <div class="item__img">
                                    <img :src="relatedAnimeItem.poster" alt="">
                                </div>
                                <div class="item__info">
                                    <NuxtLink :to="'/anime/'+relatedAnimeItem.id">
                                        <p class="item-name">
                                            {{relatedAnimeItem.title}}
                                        </p>
                                    </NuxtLink>
                                    <span class="item-year">
                                        {{relatedAnimeItem.year}}
                                    </span>
                                    <span class="dot"></span>
                                    <span class="item-episodes">
                                        Cер {{relatedAnimeItem.lastEpisode}}/{{relatedAnimeItem.lastEpisode}}
                                    </span>
                                </div>
                            </div>
                        </TransitionGroup>
                        <div class="anime-related__controls" v-if="store.getRelatedAnime.length > 5">
                            <button class="anime-related__show-more" v-if="!isAllRelated" @click="showMore">
                                Показать еще
                            </button>
                            <button class="anime-related__hide-more" v-else @click="hideMore">
                                Скрыть
                            </button>
                        </div>
                    </div>
                    <div class="anime-top">
                        <div class="anime-top__header-panel">
                            <h3 class="anime-top__header-label">
                                Топ аниме
                            </h3>
                            <div class="header-controlls">
                                <button class="header-controlls__active">
                                    Сегодня
                                </button>
                                <button>
                                    Неделя
                                </button>
                                <button>
                                    Месяц
                                </button>
                            </div>
                        </div>
                        <div class="anime-top__list">
                            <div class="anime-top__first-place-item">
                                <div class="first-place-item__img">
                                    <img :src="animeTopics.topByDay[0].poster" alt="">
                                </div>
                                <div class="first-place-item__content">
                                    <div class="place-number">
                                        <span>1</span>
                                    </div>
                                    <div class="first-place-item__info">
                                        <NuxtLink class="first-place-item__name" :to="'/anime/'+animeTopics.topByDay[0].id">
                                            {{ animeTopics.topByDay[0].title }}
                                        </NuxtLink>
                                        <div class="first-place-item__viewers">
                                            <Icon name="EyeIcon" size="16" />
                                            <span>{{ animeTopics.topByDay[0].countDay }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="place-item" v-for="(topAnime,index) in animeTopics.topByDay.slice(1, animeTopics.topByDay.length)" :key="topAnime.id+'top'">
                                <div class="place-item__number">
                                    <div class="place-box">
                                        {{index + 2}}
                                    </div>
                                </div>
                                <div class="place-item__title">
                                    <div class="title__img">
                                        <img :src="topAnime.poster" alt="">
                                    </div>
                                    <div class="title__info">
                                        <NuxtLink class="title-name" :to="'/anime/'+topAnime.id">
                                            {{ topAnime.title }}
                                        </NuxtLink>
                                        <div class="title-viewers">
                                            <Icon name="EyeIcon" size="14"/>
                                            <span>
                                                {{topAnime.countDay}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import AnimePlayer from "@/modules/anime/components/AnimePlayer.vue";
import AnimeDescription from "@/modules/anime/components/AnimeDescription.vue";
import AnimeDetail from "../types/AnimeDetail";
import RelatedAnime from "../types/RelatedAnime";
import { useAnime } from "../store/animeStore";
import AnimeTopics from "../types/AnimeTopics";


const props = defineProps<{
    loading: boolean,
}>()

const isAllRelated = ref(false);
const animeStore = useAnime();

const store = useAnime();
const animeTopics = computed(() => animeStore.getTopics)



/*
**  содержит скрытые связанные аниме
**  которые не уместились
*/

const filteredRelatedAnime = ref(store.getRelatedAnime.slice(0, 5));
function showMore()
{
    isAllRelated.value = true;
    filteredRelatedAnime.value = store.getRelatedAnime;
}
function hideMore()
{
    isAllRelated.value = false;
    filteredRelatedAnime.value = store.getRelatedAnime.slice(0, 5)
}

</script>


<style lang="scss">

.anime-wrapper
{
    .list-enter-active,
        .list-leave-active 
        {
            transition: all 0.5s ease;
        }
    .list-enter-from,
    .list-leave-to 
    {
        opacity: 0;
        transform: translateX(30px);
    }
    background: #0e0e0e;
    padding-top: 90px;
    .anime
    {
        display: flex;
        .anime__left
        {
            width: calc(100% - 365px);
            padding-right: 30px;

            .anime__left-content
            {
                .anime-player
                {
                    width: 100%;
                    iframe
                    {
                        width: 100%;
                    }
                }
            }
        }
        .anime__right
        {
            width: 340px;
            .anime__right-content
            {
                .anime-related
                {
                    margin-bottom: 30px;
                    background: #1c1c1c;
                    padding: 15px;
                    border-radius: 6px;
                    .anime-related__show-more, .anime-related__hide-more
                    {
                        margin: 15px auto 0 auto;
                        width: 100%;
                        border: none;
                        font-family: "Open Sans";
                        font-weight: 500;
                        color: #7a7a7a;
                        font-size: 14px;
                    }
                    h3
                    {
                        font-family: 'Open Sans';
                        font-weight: 700;
                        color: #fff;
                        margin: 0 0 15px 0;
                    }
                    .anime-related__item
                    {
                        display: flex;
                        align-items: center;
                        margin-top: 10px;
                        .item__info
                        {
                            
                            flex: 80%;
                            color: #ababab;
                            font-family: 'Open Sans';
                            font-weight: 500;
                            font-size: 14px;
                            a
                            {
                                color: #ababab;
                                text-decoration: none;
                            }
                            .item-name
                            {
                                margin: 0 0 5px 0;
                            }
                            span
                            {
                                color: #525252;
                                font-size: 14px;
                                font-weight: 400;
                            }
                            .dot
                            {
                                display: inline-block;
                                border-radius: 50%;
                                background: #525252;
                                height: 4px;
                                width: 4px;
                                margin: 3px 6px;
                            }
                        }
                        .item__img
                        {
                            flex: 20%;
                            img
                            {
                                width: 46px;
                                height: 60px;
                                object-fit: cover;
                            }
                        }
                    }
                }
                .anime-top
                {
                    background: #1c1c1c;
                    border-radius: 6px;
                    .anime-top__header-panel
                    {
                        display: flex;
                        align-items: center;
                        padding: 15px;
                        justify-content: space-between;
                        .header-controlls
                        {
                            margin-top: 5px;
                            font-family: 'Open Sans';
                            
                            button
                            {
                                border: none;
                                padding: 0 5px;
                                font-size: 14px;
                                font-weight: 500;
                                color: #525252;
                            }
                            .header-controlls__active
                            {
                                font-weight: 600;
                                color: #fff;
                            }
                        }
                        .anime-top__header-label
                        {
                            margin: 0;
                            font-size: 20px;
                            line-height: 32px;
                            font-weight: 700;
                            font-family: 'Open Sans';
                            color: #fff;
                        }
                    }
                    .anime-top__list
                    {
                        .anime-top__first-place-item
                        {
                            position: relative;
                            .first-place-item__img::before
                            {
                                content: "";
                                z-index: 2;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                top: 20%;
                                background: #000;
                                background: linear-gradient(180deg,rgba(0,0,0,0) 0,#000 100%);
                            }
                            .first-place-item__img
                            {
                                
                                height: 160px;
                                img
                                {
                                    width: 100%;
                                    height: 160px;
                                    object-fit: cover;
                                }
                            }
                            .first-place-item__content
                            {
                                position: absolute;
                                display: flex;
                                align-items: center;
                                z-index: 2;
                                bottom: 15px;
                                left: 15px;

                                .first-place-item__info
                                {
                                    color: #fff;
                                    font-family: 'Open Sans';
                                    font-weight: 600;
                                    margin-left: 10px;
                                    

                                    .first-place-item__name
                                    {
                                        color: #fff;
                                        text-decoration: none;
                                        margin: 0;
                                    }

                                    .first-place-item__viewers
                                    {
                                        color: #ABABAB;
                                        font-family: 'Poppins';
                                        font-weight: 400;
                                        font-size: 14px;
                                        display: flex;
                                        align-items: center;
                                        svg
                                        {
                                            fill: #ABABAB;
                                        }
                                        span
                                        {
                                            margin-left: 5px;
                                        }
                                    }
                                }
                                .place-number
                                {
                                    border: none;
                                    font-family: 'Poppins';
                                    background: #fff;
                                    height: 42px;
                                    width: 42px;
                                    font-weight: 600;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 5px;
                                    float: 0 0 auto;
                                    span
                                    {
                                        font-size: 24px;
                                        font-family: 'Poppins';
                                        color: #000;
                                    }
                                }
                            }
                        }
                        .place-item
                        {
                            display: flex;
                            padding: 15px;
                            align-items: center;
                            .place-item__number
                            {
                                width: 40px;
                                height: 40px;
                                border-radius: 5px;
                                border: 1px solid #666;
                                color: #666;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex: 0 0 auto;
                                
                                .place-box
                                {
                                    font-size: 24px;
                                }
                            }
                            .place-item__title
                            {
                                display: flex;
                                align-items: center;
                                margin-left: 10px;
                                .title__img
                                {
                                    height: 60px;
                                    width: 46px;
                                    flex: 0 0 auto;
                                    img
                                    {
                                        height: 60px;
                                        width: 46px;
                                        object-fit: cover;
                                    }
                                }
                                .title__info
                                {
                                    margin-left: 10px;
                                    .title-name
                                    {
                                        text-decoration: none;
                                        font-family: 'Open Sans';
                                        color: #ababab;
                                        font-size: 14px;
                                        font-weight: 500;
                                        margin: 0;
                                    }
                                    .title-viewers
                                    {
                                        color: #525252;
                                        svg
                                        {
                                            fill: #525252 !important;
                                        }
                                        span
                                        {
                                            font-family: 'Poppins';
                                            font-size: 14px;
                                            margin-left: 5px;
                                        }
                                    }
                                }
                            }  
                        }
                        .place-item:hover .place-box
                        {
                            transition: 100ms all ease;
                            font-weight: 500;
                            color: #fff;
                        }
                    }
                }  
            }
        }
    }
}
</style>