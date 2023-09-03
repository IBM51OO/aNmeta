<template>
    <div>
        <div class="title-settings__popup"
                v-if="isPopupOpen"
            >
            <TitleSettings 
                :title-card="titleCard" 
                @updated="settingsUpdated"
                v-click-outside="closePopup"
                @delete="deleteUserBookmark"
            />
        </div>
        <div class="user-statistic__card-wrapper">
            <div class="user-statistic__card">
                <img :src="titleCard.animeList.poster" alt="" class="card-img">
                <div class="card-info">
                    <NuxtLink :to="`/anime/${titleCard.animeList.id}`" class="card-name">
                        {{ titleCard.animeList.title }}
                    </NuxtLink>
                    <ContextMenuSpawner v-if="!isPopupOpen" ref="contextM">
                        <div class="card-info__options">
                            <Icon name="DotsIcon" size="14" />
                        </div>
                        
                        <template #menu>
                            <ContextMenuLink @click="isPopupOpen = true">
                                Редактировать
                            </ContextMenuLink>
                            <ContextMenuLink @click="deleteUserBookmark">
                                Удалить из списка
                            </ContextMenuLink>
                        </template>
                    </ContextMenuSpawner>
                    <span class="card-year">
                        {{ titleCard.animeList.year}}
                    </span>
                    <div class="card-progress">
                        <div class="progress-bar">
                            <div class="progress-bar_reached" :style="{width: `${getCardProgress(titleCard)}%`}"></div>
                        </div>
                        <div class="progress-info">
                            <span class="episodes-progress">
                                <span class="episode-reached">{{ titleCard.progress }}</span>/{{titleCard.animeList.episodes}} эп
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { UserStatistic, UserStatisticEdit } from "../types/IUser"
import ContextMenuSpawner from '@/shared/common/components/ContextMenuSpawner.vue';
import ContextMenuLink from '@/shared/common/components/ContextMenuLink.vue';
import { useUserStore } from "../store/UserStore";
import api from "~/api/repositories/api";
const props = defineProps<{
    titleCard: UserStatistic
}>()
const emit = defineEmits<{
    (e: 'updated',): void
    (e: 'delete', titleCardId: number): void

}>()
const userStore = useUserStore();

function settingsUpdated(titleCard: UserStatisticEdit)
{
    closePopup();
    userStore.updateUserTopicTitle(titleCard, Number(titleCard.id)).then(() => 
    {
        emit('updated');
    })
    
}


const isPopupOpen = ref(false)
const contextM = ref();

function closePopup()
{    
    isPopupOpen.value = false    
}
function getCardProgress(titleCard: UserStatistic)
{
    if (!titleCard.progress || !titleCard.animeList.episodes) return 0
    
    return (titleCard.progress / titleCard.animeList.episodes) * 100
}
function deleteUserBookmark()
{
    closePopup();
    emit('delete', props.titleCard.id)
}
</script>
<style lang="scss">
.title-settings__popup
{
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
}
.user-statistic__cards
{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 15px;
    .user-statistic__card-wrapper
    {
        height: 220px;
        position: relative;
        width: 315px;
    }
    .user-statistic__card
    {
        width: 365px;
        height: 175px;
        position: absolute;
        bottom: 0;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
        -moz-box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
        box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
        border-radius: 20px;
        .card-img
        {
            position: absolute;
            top: -45px;
            height: 220px;
            width: 150px;
            object-fit: cover;
            border-radius: 20px;
            -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .card-info
        {
            padding: 20px 20px 0 46%;
            .context-menu-spawner
            {
                position: absolute;
                right: 20px;
                top: 20px;
            }
            .card-info__options
            {
                display: inline-flex;
                cursor: pointer;
                transition: 300ms all ease;
                opacity: 0;
                visibility: hidden;
            }
            .card-info__options:hover
            {
                transform: rotate(90deg);
            }
            .card-name
            {
                text-decoration: none;
                font-family: 'Open Sans';
                color: #333;
                display: block;
                font-size: 14px;
                padding-right: 20px;
                font-weight: 700;
            }
            .card-year
            {
                font-family: 'Open Sans';
                color: #B4B4B4;
                display: block;
                font-size: 12px;
                margin-top: 5px;
            }
            .card-progress
            {
                padding-top: 40px;
                
                .progress-bar
                {
                    position: relative;
                    border-radius: 20px;
                    width: 100%;
                    background: #EAE8E8;
                    height: 8px;
                    .progress-bar_reached
                    {
                        position: absolute;
                        background: #28D3A1;
                        height: 8px;
                        border-radius: 20px;
                        width: 50px;
                    }
                }
                .progress-info
                {
                    text-align: right;
                    margin-top: 10px;
                    .episodes-progress
                    {
                        font-family: 'Open Sans';
                        font-weight: 700;
                        font-size: 12px;
                        color: #c2c2c2;
                        .episode-reached
                        {
                            color: #181818;
                        }
                    }
                }
            }
        }
    }
    .user-statistic__card:hover .card-info__options
    {
        visibility: visible;
        opacity: 1;
    }
}
</style>