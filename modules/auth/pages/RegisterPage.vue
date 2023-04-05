<template>
    <section class="sign-up">
        <div class="sign-up__left-card">
            <div class="sign-up">
                <form action="" class="sign-up__form">
                    <label class="form__label">Создать аккаунт</label>
                    <Input v-model="someValue" placeholder="Никнейм" class="form__input-nickname" />
                    <Input v-model="someValue" placeholder="E-mail" />
                    <Input v-model="someValue" placeholder="Пароль" />
                    <Input v-model="someValue" placeholder="Повторите пароль" />
                    <button type="submit" class="form__submit-btn">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
        <div class="sign-up__right-card">
            <img src="../assets/img/tit.jpg" alt="" class="right-card__poster">
        </div>
    </section>
</template>
<script lang="ts" setup>
import Input from '@/shared/ui/RegisterInput.vue';
const someValue = ref('');
</script>
<style lang="scss">
.sign-up
{
    // padding-top: 60px;
    display: flex;
    height: 100vh;
    .sign-up__left-card
    {
        background: #121212;
        flex: 45%;
        .sign-up
        {
            display: flex;
            align-items: center;
            justify-content: center;
            
            .sign-up__form
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .form__input-nickname
                {
                    margin-bottom: 40px;
                }
                .form__submit-btn
                {
                    margin-top: 30px;
                    display: block;
                    border: 1px solid #1b90fd;
                    // border: none;
                    width: 100%;
                    color: #fff;
                    font-family: 'Open Sans';
                    font-weight: 600;
                    font-size: 14px;
                    height: 36px;
                    border-radius: 3px;
                }
                .form__label
                {
                    font-size: 26px;
                    font-family: 'Open Sans';
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .sign-up__right-card
    {
        display: flex;
        flex: 55%;
        .right-card__poster
        {
            object-fit: cover;
            height: 100%;
        }
    }
}
</style>