<template>
    <section class="sign-in">
        <div class="sign-in__left-card">
            <div class="left-card__row">
                <div class="sign-in__label">
                    Войти                    
                </div>
                <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }" class="sign-in__form">
                    <div class="form-group">
                        <div class="field-label">
                            E-mail
                        </div>
                        <Field 
                            name="email" 
                            v-model="user.email" 
                            placeholder="E-mail" 
                            :class="{ 'is-invalid': errors.email }" 
                        />
                        <div class="invalid-feedback">{{errors.email}}</div>
                    </div>
                    <div class="form-group">
                        <div class="field-label">
                            Пароль
                        </div>
                        <Field 
                            name="password" 
                            type="password" 
                            v-model="user.passowrd" 
                            placeholder="Пароль" 
                            :class="{ 'is-invalid': errors.password }" 
                        />
                        <div class="invalid-feedback">{{errors.password}}</div>
                    </div>
                    <button type="submit" class="form__submit-btn">
                        Войти
                    </button>
                </Form>
                <div class="sign-in__to-sign-up">
                    <span class="to-sign-up__label">Нет аккаунта ? <NuxtLink class="to-sign-up__button" to="/register">Пройдите регистрацию</NuxtLink></span>
                </div>
            </div>
        </div>
        <div class="sign-in__right-card">
            <img src="../assets/img/tit.jpg" alt="" class="right-card__poster">
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import Input from '@/shared/ui/RegisterInput.vue';
import { UserLogin } from '@/modules/user/types/IUser';
import { useUserStore } from '@/modules/user/store/UserStore';
import { object, string, ref } from 'yup';
import { useNotification } from '@kyvg/vue3-notification';

definePageMeta({
  middleware: ['guest-only'],
})

const router = useRouter();

const schema = object().shape({
    email: string()
        .required('Почта обязательна')
        .email('Не верный формат почты'),
    password: string()
        .min(8,'Пароль должен содержать минимум 8 символов')
        .required('Пароль обязателен'),
});


const user = reactive<UserLogin>({
    email: '',
    passowrd: ''
});

const userStore = useUserStore();

function handleSubmit()
{
    userStore.login(user).then(() =>
    {
        router.push('/')
    })
}
// onMounted(() => 
// {
// 	const {notify} = useNotification()
// 	notify(({ type: 'success', text: 'Логин или пароль неверный' }))
// })
</script>
<style lang="scss">
.sign-in__to-sign-up
{
    font-family: 'Inter';
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    .to-sign-up__label
    {
        color: #9c9c9c;
    }
    .to-sign-up__button
    {
        text-decoration: none;
        color: #1b90fd;
        font-weight: 500;
    }
}
.sign-in
{
    // padding-top: 60px;
    display: flex;
    height: 100vh;
    .sign-in__label
    {
        font-family: 'Century Gothic';
        font-size: 42px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .sign-in__left-card
    {
        background: #121212;
        flex: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-card__row
        {            
            .sign-in__form
            {
                width: 400px;
                margin: 0 auto;
                .form-group
                {
                    font-family: 'Inter';
                    margin-top: 30px;
                    .field-label
                    {
                        color: #fff;
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                    .invalid-feedback, .is-invalid
                    {
                        color: #dc3545;
                        border-color: #dc3545;
                    }
                    .invalid-feedback
                    {
                        margin-top: 5px;
                        font-size: 12px;
                        font-weight: 400;
                    }
                    input
                    {
                        color: #fff;
                        border: 1px solid #fff;
                        display: block;
                        font-size: 14px;
                        box-sizing: border-box;
                        padding: 10px 20px;
                        border-radius: 0.25rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                        width: 100%;
                        background: none;
                    }
                    input:focus
                    {
                        border-color: #80bdff;
                        outline: 0;
                        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
                    }
                    .is-invalid:focus
                    {
                        border-color: #dc3545;
                        box-shadow: 0 0 0 0.2rem rgba(220,53,69,.25);
                    }
                }
                .form__input-nickname
                {
                    margin-bottom: 40px;
                }
                .form__submit-btn
                {
                    margin-top: 57px;
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
    .sign-in__right-card
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