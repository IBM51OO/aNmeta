<template>
    <div class="user-profile" v-if="user">
        <div class="user-profile__card" :style="{'background': `linear-gradient(rgba(0, 0, 0, 0.427),rgba(0, 0, 0, 1)), url(${user.backgroundAvatar}) no-repeat`}">
            <div class="card__user-avatar">
                <NuxtLink to="/settings">
                    <span class="user-avatar__edit-profile">
                        Редактировать профиль
                    </span>
                </NuxtLink>
                <img :src="user.avatar" alt="" class="user-avatar__img">
            </div>
            <div class="card__user-name">
                {{ user.name }}
            </div>
            <div class="user-profile__tabs">
                <div class="statistic-tab user-tab" @click="selectedTab = 'statistic'" :class="{'user-tab_active': selectedTab === 'statistic'}">
                    <span>Статистика</span>
                </div>
                <div class="history-tab user-tab" @click="selectedTab = 'history'" :class="{'user-tab_active': selectedTab === 'history'}">
                    <span>История</span>
                </div>
                <div class="favorite-tab user-tab" @click="selectedTab = 'favorite'" :class="{'user-tab_active': selectedTab === 'favorite'}">
                    <span>Избранное</span>
                </div>
                <div class="achivement-tab user-tab" @click="selectedTab = 'achivement'" :class="{'user-tab_active': selectedTab === 'achivement'}">
                    ewfwefw
                </div>
            </div>
        </div>
        <div class="user-profile__content">
            <div class="content__background">
                <keep-alive>
                    <component :is="currentTab" />
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/modules/user/store/UserStore";
import UserStatistic from "@/modules/user/components/UserStatistic.vue";
import UserHistory from "@/modules/user/components/UserHistory.vue";


const statistic = resolveComponent('UserStatistic')
const history = resolveComponent('UserHistory')


const userStore = useUserStore();
const route = useRoute();

await userStore.fetchUserById(Number(route.params.id))

const user = computed(() => userStore.getCurrentUserProfile)

const selectedTab = ref('statistic');

const currentTab = computed(() => 
{
    if(selectedTab.value === 'statistic')
    {
        return statistic
    }
    if(selectedTab.value === 'history')
    {
        return history
    }
})

</script>
<style lang="scss">
.user-profile
{
    .user-profile__card
    {
        border-bottom: 1px #262626 solid;
        // background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 1)) no-repeat !important;
        background-size: cover !important;
        height: 500px;
        position: relative; 
        
        .user-profile__tabs
        {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            text-align: center;            
            bottom: 30px;

            .user-tab
            {
                cursor: pointer;
                color: #BDBDBD;
                margin: 0 10px;
                font-family: 'Inter';
                font-weight: 500;
                
                &_active
                {
                    color: #fff;
                }
            }
        }
        .card__user-name
        {
            text-align: center;
            position: absolute;
            bottom: 120px;
            left: 0;
            right: 0;
            font-family: 'Poppins';
            font-size: 28px;
            font-weight: 500;
            color: #fff;
        }
        .card__user-avatar
        {
            position: relative;
            height: 200px;
            width: 200px;
            margin-left: auto;
            margin-right: auto;
            top: 45%;
            transform: translate(0, -50%);
            left: 0;
            right: 0;
            text-align: center;

            .user-avatar__edit-profile
            {
                position: absolute;
                text-align: center;
                visibility: hidden;
                opacity: 0;
                color: #fff;
                height: 200px;
                width: 200px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 200px;
                font-family: 'Inter';
                font-size: 18px;
                font-weight: 500;
                cursor: pointer;
                background: rgba($color: #000000, $alpha: 0.6);
                transition: 200ms all ease-in;
            }
            .user-avatar__img
            {
                cursor: pointer;
                height: 200px;
                width: 200px;
                border-radius: 20px;
                object-fit: cover;
                
            }
            .user-avatar__img::before
            {
                content: "";
                position: absolute;
                width: 90%;
                height: 100%;
                background-image: inherit;
                background-size: cover;
                border-radius: var(--radius);
                z-index: -1;
                filter: blur(12px);
                opacity: 0.6;
                left: 50%;
                transform: translate(-50%, 10%);
            }
        }
        .card__user-avatar:hover .user-avatar__edit-profile
        {
            visibility: visible;
            
            opacity: 1;
        }
    }
    .user-profile__content
    {
        height: 1000px;
        background: #fff;
    }
}

</style>