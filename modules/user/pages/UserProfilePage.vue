<template>
    <div class="user-profile" v-if="user">
        <div class="user-profile__card">
            <div class="card__user-avatar">
                <span class="user-avatar__edit-profile">
                    Редактировать профиль
                </span>
                <img src="https://3dnews.ru/assets/external/illustrations/2018/09/26/976011/Steins-Gate-Elite_2.png" alt="" class="user-avatar__img">
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
                    <span>Достижения</span>
                </div>
            </div>
        </div>
        <div class="user-profile__content">
            <component :is="currentTab" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/modules/user/store/UserStore";
import UserStatistic from "@/modules/user/components/UserStatistic.vue";

const statistic = resolveComponent('UserStatistic') 

const userStore = useUserStore();
const user = computed(() => userStore.getUser)

const selectedTab = ref('statistic');

const currentTab = computed(() => 
{
    if(selectedTab.value === 'statistic')
    {
        return statistic
    }
})

</script>
<style lang="scss">
.user-profile
{
    .user-profile__card
    {
        border-bottom: 1px #262626 solid;
        background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 1)), url('https://c4.wallpaperflare.com/wallpaper/263/5/312/warrior-fantasy-art-samurai-sword-wallpaper-preview.jpg') no-repeat;
        background-size: cover;
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