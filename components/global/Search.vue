<template>
    <div class="search" v-click-outside="() => searchStatus = false">
        <div class="main__search">
            <input type="text" placeholder="Поиск..." v-model="searchQuery" @input="handleInputDebounce" @focus="searchStatus = true"/>
            <div class="search-icon">
                <Icon name="SearchIcon" size="16" />
            </div>
            <div class="search__results" v-show="searchStatus && searchResult?.length">
                <div class="results-item" v-for="searchItem in searchResult" :key="searchItem.id" >
                    <NuxtLink :to="'/anime/'+searchItem.id" class="result-item__link">
                        <img :src="searchItem.poster" alt="">
                        <div class="results-item__anime-info">
                            <p class="anime-info__name">
                                {{searchItem.title}}
                            </p>
                            <span class="anime-info__rate">
                                8.9
                            </span>
                            <span class="anime-info__second-name" v-if="searchItem.titleEn">
                                {{ searchItem.titleEn }}
                            </span>
                            <span class="anime-info__episodes" v-if="searchItem.lastEpisode">
                                Сер {{searchItem.lastEpisode}}/{{ searchItem.episodes }}
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

import debounce from 'lodash.debounce'
import AnimeDetailDb from '~/modules/anime/types/AnimeDetailDb'

const searchResult = ref<Array<AnimeDetailDb>>()
const searchStatus = ref(false);

const cok = useCookie('cok',{sameSite: 'none'})

function fetchSearch(searchQuery: string)
{
    searchStatus.value = true;
    $fetch('http://anime/api/search', {params: {title: searchQuery}}).then((data) => 
    {
        searchResult.value = data as Array<AnimeDetailDb>;
    })
}

function handleInput() 
{
    fetchSearch(searchQuery.value)
}

const handleInputDebounce = debounce(handleInput, 500)
const searchQuery = ref('')



</script>
<style lang="scss">
.main__search 
{
    position: relative;
    border-radius: 10px;
    background: #16151a;
    input 
    {
        color: #fff;
        outline: none;
        border: none;
        background: none;
        padding: 11px 0 11px 40px;
        border-radius: 20px;
    }
    input::placeholder
    {
        font-size: 14px;
    }
}
.search
{
    width: 280px;
    .search__results
    {
        position: absolute;
        background: #16151a;
        top: 50px;
        width: 280px;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px 0;
        height: 400px;
        overflow-y: scroll;
        scrollbar-color: #3b3a41 transparent;
        scrollbar-width: thin;

        &::-webkit-scrollbar {
            position: relative;
            width: 7px;
            background-color: transparent;
            z-index: 3;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #3b3a41;
            border: 2px #16151a solid;
            border-radius: 5px;
        }
        .results-item
        {
            display: flex;
            align-items: center;
            cursor: pointer;
            .result-item__link
            {
                display: flex;
                align-items: center;
                text-decoration: none;
            }
            padding-inline: 15px;
            .results-item__anime-info
            {
                color: #fff;
                font-family: 'Open Sans';
                font-size: 14px;
                margin-left: 10px;
                span
                {
                    color: #9e9e9e;
                    font-size: 12px;
                }
                .anime-info__rate
                {
                    color: green;
                    font-weight: 700;
                    font-size: 14px;
                }
                .anime-info__name
                {
                    margin: 0;
                    display: block;
                }
                
            }
            img
            {
                padding: 10px 0;
                height: 60px;
                width: 45px;
                object-fit: cover;
            }
        }
        .results-item:not(:first-child)
        {
            margin-top: 20px;
        }
        .results-item:hover
        {
            transition: 500ms all ease-in-out;
            background: rgb(39, 38, 44);
        }
    }
}
</style>