<template>
    <div class="profile-tab" v-if="props.user">
        <form @submit.prevent="onSubmit">
            <label for="" class="tab-name">
                <span>Имя</span>
                <input type="text" v-model="user.name">
            </label>
            <label for="" class="tab-city">
                <span>Город</span>
                <input type="text">
            </label>
            <div class="profile-preview">
                <h2 class="profile-preview-label">Изображение профиля</h2>
                <div class="profile-preview__card">
                    <input accept="image/*" type='file' id="imgInp" @change="uploadProfileImage($event)" />
                    <img src="/rnUkxaCldII.jpg" alt="" v-if="!user.avatar">
                    <img :src="user.avatar" alt="" v-else>
                    <div class="card__img-load">
                        <label for="imgInp">
                            <div class="load-button" type="button" v-if="!user.avatar">
                                Добавить изображение профиля
                            </div>
                            <div class="load-button" type="button" v-else>
                                Обновить
                            </div>
                        </label>
                        <span class="load-reminder">Поддерживаемые форматы: JPEG, PNG или GIF. Макс. размер: 10 МБ.</span>
                    </div>
                </div>
            </div>
            <div class="profile-banner">
                <h2 class="profile-banner-label">Баннер профиля</h2>
                <div class="profile-banner__card">
                    <input accept="image/*" type='file' id="imgProf" @change="uploadProfileBackgroundImg($event)" />
                    <img src="/rnUkxaCldII.jpg" alt="" v-if="!user.backgroundAvatar">
                    <img :src="user.backgroundAvatar" alt="" v-else>
                    <div class="card__img-load">
                        <label for="imgProf">
                            <div class="load-button" type="button" v-if="!user.backgroundAvatar">
                                Добавить баннер профиля
                            </div>
                            <div class="load-button" type="button" v-else>
                                Обновить
                            </div>
                        </label>
                        <span class="load-reminder">Поддерживаемые форматы: JPEG, PNG или GIF. Макс. размер: 10 МБ.</span>
                    </div>
                </div>
            </div>
            <div class="settings-save">
                <button type="submit">
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "../store/UserStore";
import User from "../types/IUser";

const props = defineProps<{
    user: User
}>()

const userStore = useUserStore();

const user = ref<User>(
{
    name: '',
    avatar: '',
    backgroundAvatar: ''
})

user.value = JSON.parse(JSON.stringify(props.user))


async function uploadProfileBackgroundImg(e: any)
{
    const file = e.target.files
    if (file.length) {
        const formData = new FormData();
        formData.append('file', file[0]);

        const data = await userStore.uploadFile(formData) as { url : string};
        
        if(data.url)
        {
            user.value.backgroundAvatar = data.url;
        }
    }
}

async function uploadProfileImage(e: any)
{
    const file = e.target.files
    if (file.length) {
        const formData = new FormData();
        formData.append('file', file[0]);

        const data = await userStore.uploadFile(formData) as { url : string};
        if(data.url)
        {
            user.value.avatar = data.url;
        }
    }
}

function onSubmit()
{       
    userStore.updateUser(user.value, Number(props.user.id))
}

</script>
<style lang="scss">
.profile-tab
{
    .profile-preview,.profile-banner
    {
        .profile-preview-label, .profile-banner-label
        {
            font-size: 16px;
            color: #fff;
            font-family: 'Inter';
        }
        .profile-preview__card, .profile-banner__card
        {
            padding: 20px;
            border: 1px solid #1c1b1b;
            background: #18181c;
            display: flex;
            align-items: flex-start;
            input 
            {
                display: none;
            }
            img
            {
                height: 60px;
                width: 60px;
                border: 1px solid #fff;
                object-fit: cover;
            }
            .card__img-load
            {
                margin-left: 20px;
                .load-button
                {
                    cursor: pointer;
                    display: inline-block;
                    border: none;
                    color: #000;
                    padding: 5px 10px;
                    background: #fff;
                    font-size: 14px;
                    font-family: 'Inter';
                    font-weight: 500;
                }
                .load-reminder
                {
                    margin-top: 10px;
                    color: #c5c5c5;
                    font-size: 12px;
                    font-family: 'Inter';
                    display: block;
                }
            }
        }
        .profile-banner__card
        {
            img
            {
                height: 70px;
                width: 120px;
                object-fit: cover;
            }
        }
    }
    form
    {
        padding-top: 30px;
        padding-bottom: 30px;
        .tab-name, .tab-city
        {
            margin-top: 20px;
            display: block;
            span
            {
                margin-bottom: 10px;
                display: block;
                color: #fff;
                font-size: 14px;
                font-family: 'Inter';
            }
            input
            {
                width: 100%;
                box-sizing: border-box;
                background: #18181c;
                border: none;
                outline: none;
                color: #fff;
                padding: 10px;
            }
        }
    }
    .settings-save
    {
        text-align: right;
        margin-top: 30px;
        button
        {
            border-radius: 6px;
            border: none;
            background: #fff;
            padding: 10px;
            font-family: 'Inter';
            font-size: 14px;
        }
    }
}
</style>