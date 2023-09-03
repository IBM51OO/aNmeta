<template>
    <div class="settings-wrapper">
        <div class="container">
            <div class="settings">
                <div class="settings__left">
                    <div class="settings__profile-card">
                        <div class="profile-card__avatar">
                            <img :src="userAvatar" alt="">
                        </div>
                        <div class="profile-card__user-info">
                            <div class="user-info__name">
                                {{currentUser.name}}
                            </div>
                            <div class="user-info__with-us">
                                С нами с: Январь 2022
                            </div>
                        </div>
                    </div>
                    <div class="settings-nav">
                        <nav>
                            <ul class="settings-nav-list">
                                <li class="settings-nav-link active">
                                    <Icon name="ProfileIcon" size="18" />
                                    <button>
                                        Профиль
                                    </button>
                                </li>
                                <li class="settings-nav-link">
                                    <Icon name="UserIcon" size="18" />
                                    <button>
                                        Аккаунт
                                    </button>
                                </li>
                                <li class="settings-nav-link">
                                    <Icon name="BookmarkIcon" size="18" />
                                    <button>
                                        Подписка
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="settings__right">
                    <component :is="profile" :user="currentUser" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup ts>
import ProfileTab from '@/modules/user/components/ProfileTab.vue';
const profile = resolveComponent('ProfileTab') 
import { useUserStore } from "../store/UserStore";


const userStore = useUserStore();


const currentUser = computed(() => userStore.user)
const userAvatar = computed(() => 
{
    return currentUser.value.avatar ? currentUser.value.avatar : '/rnUkxaCldII.jpg'
})

</script>
<style lang="scss">
.settings-wrapper
{
    padding-top: $main-menu-height;
    background: #101014;
    height: 100vh;
    .settings
    {
        display: flex;
        align-items: flex-start;
        .settings__left
        {
            padding-right: 30px;
            .settings__profile-card
            {
                display: flex;
                align-items: center;
                .profile-card__avatar
                {
                    img
                    {
                        height: 65px;
                        width: 65px;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
                .profile-card__user-info
                {
                    margin-left: 20px;
                    
                    font-family: 'Inter';
                    .user-info__name
                    {
                        color: #fff;
                        font-weight: 500;
                        font-family: 'Inter';
                        font-size: 22px;
                    }
                    .user-info__with-us
                    {
                        color: #7a7a7a;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
            }
            .settings-nav
            {
                color: #fff;
                nav
                {
                    ul
                    {
                        padding-left: 0;
                        .settings-nav-link
                        {
                            display: flex;
                            align-items: center;
                            padding: 10px 20px;
                            font-family: 'Open Sans';
                            font-size: 14px;
                            font-weight: 500;
                            // border-radius: 6px;
                            list-style-type: none;
                            button
                            {
                                margin-left: 5px;
                                border: none;
                            }
                            &.active
                            {
                                background: #1b1b20;
                                
                                border-left: 1px solid #bd2621;
                            }
                        }
                    }
                }
            }
        }
        .settings__right
        {
            padding-left: 30px;
        }
    }

}
</style>