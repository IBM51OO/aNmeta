<template>
    <div class="title-settings">
        <form @submit.prevent="onSubmit">
            <button class="title-settings__save" type="submit" v-if="titleCard">
                Сохранить
            </button>
            <button class="title-settings__create" type="submit" v-else>
                Добавить
            </button>
            <div class="title-settings__status">
                <span class="status__label">
                    Статус
                </span>
                <div class="status__list">
                    <button class="status" type="button"
                        @click="titleStatisticEdit.statusId = tab.id"
                        :class="{'status_active' : titleStatisticEdit.statusId === tab.id}" 
                        v-for="tab in tabs" 
                        :key="tab.id">
                        {{ tab.name }}
                    </button>
                </div>
            </div>
            <div class="title-settings__progress">
                <span class="progress__label" v-if="titleCard && titleCard.animeList.episodes || !titleCard && currentTitle?.episodes_count">
                    Прогресс
                </span>
                <div class="progress__list" v-if="titleCard && titleCard.animeList.episodes">
                    <div 
                        v-for="(episode, index) in Number(titleCard.animeList.episodes)" :key="index"
                        class="episode-wrapper" 
                        @click="titleStatisticEdit.progress = episode"
                    >
                        <button class="episode" type="button" :class="{'episode_active' : titleStatisticEdit?.progress === episode}">
                            {{episode}}
                        </button>
                    </div>
                </div>
                <div class="progress__list" v-if="!titleCard && currentTitle?.episodes_count">
                    <div 
                        v-for="(episode, index) in Number(currentTitle?.episodes_count)" :key="index"
                        class="episode-wrapper" 
                        @click="titleStatisticEdit.progress = episode"
                    >
                        <button class="episode" type="button" :class="{'episode_active' : titleStatisticEdit?.progress === episode}">
                            {{episode}}
                        </button>
                    </div>
                </div>
            </div>
            <div class="title-settings__score">
                <span class="score__label">
                    Оценка
                </span>
                <div class="status__list">
                    <button class="score" type="button"
                        @click="titleStatisticEdit.personalRate = index"
                        :class="{'score_active': titleStatisticEdit.personalRate === index}"
                        v-for="(score, index) in 10" 
                        :key="index">
                        {{index}}
                    </button>
                </div>
            </div>
            <div class="title-settings__delete" v-if="titleCard" @click="$emit('delete')">
                <Icon name="DeleteIcon" size="16" />
                <span>Удалить из списка</span>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '~/modules/user/store/UserStore';
import { UserStatistic, UserStatisticEdit } from '~/modules/user/types/IUser';
import AnimeDetail from '../types/AnimeDetail';

const props = defineProps<{
    titleCard: UserStatistic,
    currentTitle?: AnimeDetail
}>()
const emit = defineEmits<{
    (e: 'updated', titleStatisticEdit: UserStatisticEdit): void
    (e: 'created', titleStatisticEdit: UserStatisticEdit): void
    (e: 'delete'): void

}>()
const tabs = ref([
    {
        id: 1,
        name: 'Все'
    },
    {
        id: 2,
        name: 'Смотрю'
    },
    {
        id: 3,
        name: 'Брошено'
    },
    {
        id: 4,
        name: 'Отложено'
    },
    {
        id: 5,
        name: 'Запланировано'
    },

])
const userStore = useUserStore();

const titleStatisticEdit = ref<UserStatisticEdit>(
{
    id: null,
    personalRate: null,
    progress: null,
    statusId: null,
    userId: Number(userStore.getUser?.id)
})
if(props.titleCard)
{
    titleStatisticEdit.value = props.titleCard
}
function onSubmit()
{
    if(props.titleCard)
    {
        emit('updated', titleStatisticEdit.value);
    }
    else
    {
        emit('created', titleStatisticEdit.value);
    }
}
</script>
<style lang="scss">
.title-settings
{
    max-width: 540px;
    .title-settings__delete
    {
        margin: 20px 0 0 0;
        color: red;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span
        {
            margin-left: 5px;
            font-size: 14px;
            font-family: 'Inter';
            font-weight: 500;
        }
    }
    .title-settings__save, .title-settings__create
    {
        display: flex;
        margin-left: auto;
        background: #d9f9ef;
        color: #13c691;
        font-family: 'Inter';
        font-size: 14px;
        padding: 10px;
        border-radius: 6px;
    }
    .title-settings__save:hover, .title-settings__create:hover
    {
        transition: 300ms all ease;
        background: #aaf1db;
    }
    .title-settings__score
    {
        .score__label
        {
            font-family: 'Inter';
            font-weight: 700;
        }
        .status__list
        {
            margin: 15px 0;
            .score
            {
                font-family: 'Inter';
                font-weight: 500;
                color: #4a91fd;
                font-size: 14px;
                padding: 4px 7px;
                margin-right: 10px;
            }
            .score:hover
            {
                color: #fff;
                transition: 300ms all ease-in-out;
                background: #76a7f0;
            }
            .score_active
            {
                background: #4a91fd;
                color: #fff;
            }
        }
    }
    .title-settings__progress
    {
        .progress__label
        {
            font-family: 'Inter';
            font-weight: 700;
        }
        .progress__list
        {
            margin: 15px 0;
            gap: 6px;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            .episode-wrapper
            {
                padding-right: 10px;
            }
            .episode
            {
                min-width: 25px;
                font-family: 'Inter';
                font-weight: 500;
                color: #4a91fd;
                font-size: 14px;
                padding: 4px 7px;
                
            }
            .episode:hover
            {
                color: #fff;
                transition: 300ms all ease-in-out;
                background: #76a7f0;
            }
            .episode_active
            {
                background: #4a91fd;
                color: #fff;
            }
        }
    }
    .title-settings__status
    {
        .status__label
        {
            font-family: 'Inter';
            font-weight: 700;
        }
        .status__list
        {
            margin: 15px 0;
            .status
            {
                color: #4a91fd;
                font-family: 'Inter';
                border: 1px solid #4a91fd;
                border-radius: 4px;
                font-size: 14px;
                margin-right: 5px;
                padding: 5px 15px;
            }
            .status:hover
            {
                transition: 300ms all ease;
                color: #fff;
                background: #5f99f1;
            }
            .status_active
            {
                background: #4a91fd;
                color: #fff;
            }
        }
    }
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    
    button
    {
        border: none;
    }
}
</style>