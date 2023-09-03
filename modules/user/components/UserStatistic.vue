<template>
    <div class="user-statistic-wrapper">
        <div class="container">
            <div class="user-statistic">
                <div class="user-statistic__label">
                    Статистика
                </div>
                <div class="user-statistic__tabs">
                    <div class="user-statistic__tab" v-for="tab in tabs" :key="tab.id">
                        <span>
                            {{tab.name}}
                        </span>
                    </div>
                </div>
                <div class="user-statistic__cards">
                    <UserStatisticCard 
                        v-for="userStatisticItem in userStatistics" 
                        :key="userStatisticItem.id"
                        :title-card="userStatisticItem"
                        @updated="setUserStatistics"
                        @delete="deleteStatisticCard"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import UserStatisticCard from './UserStatisticCard.vue';

import api from '~/api/repositories/api';
import { useUserStore } from '../store/UserStore';
import { UserStatistic } from '../types/IUser';

const currentTab = ref();
const router = useRoute()
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
const userStatistics = ref<UserStatistic[]>();

setUserStatistics();

async function fetcUserTopics(): Promise<UserStatistic[]>
{
    return userStore.fetchUserAnimeList(Number(router.params.id))
}
async function setUserStatistics()
{
    userStatistics.value = await fetcUserTopics();
}
function deleteStatisticCard(titleCardId: number)
{
    userStatistics.value = userStatistics.value?.filter((el) => el.id != titleCardId)
    api.userRepository.deleteUserBookmark(Number(titleCardId))
}
</script>
<style lang="scss">

.user-statistic
{
    .user-statistic__tabs
    {
        display: flex;
        align-items: center;
        margin: 10px 0 30px 0;
        .user-statistic__tab
        {
            font-family: 'Open Sans';
            margin-right: 10px;
            color: #828282;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            &_active
            {
                font-size: 16px;
                color: #2F80ED;
            }
        }
    }
    .user-statistic__label
    {
        font-family: "Open Sans";
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
    }
}

</style>