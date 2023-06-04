<template>
    <section class="sign-up">
        <div class="sign-up__left-card">
            <div class="left-card__row">
                <div class="sign-up__label">
                    Регистрация                    
                </div>
                <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }" class="sign-up__form">
                    <div class="form-group form__input-nickname">
                        <div class="field-label">
                            Никнейм
                        </div>
                        <Field 
                            name="name" 
                            v-model="user.name" 
                            placeholder="Никнейм" 
                            :class="{ 'is-invalid': errors.name }" 
                        />
                        <div class="invalid-feedback">{{errors.name}}</div>
                    </div>
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
                            v-model="user.password" 
                            placeholder="Пароль" 
                            :class="{ 'is-invalid': errors.password }" 
                        />
                        <div class="invalid-feedback">{{errors.password}}</div>
                    </div>
                    <div class="form-group">
                        <div class="field-label">
                            Повторите пароль
                        </div>
                        <Field 
                            name="confirmPassword" 
                            type="password" 
                            v-model="user.passwordConfirm" 
                            placeholder="Повторите пароль" 
                            :class="{ 'is-invalid': errors.confirmPassword }" 
                        />
                        <div class="invalid-feedback">{{errors.confirmPassword}}</div>
                    </div>

                    <button type="submit" class="form__submit-btn">
                        Зарегистрироваться
                    </button>
                </Form>
                <div class="sign-up__to-sign-in">
                    <span class="to-sign-in__label">Уже зарегистрированы ? <NuxtLink class="to-sign-in__button" to="/login">Войдите</NuxtLink></span>
                </div>
            </div>
        </div>
        <div class="sign-up__right-card">
            <img src="../assets/img/tit.jpg" alt="" class="right-card__poster">
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Form, Field } from 'vee-validate';
import Input from '@/shared/ui/RegisterInput.vue';
import { UserRegister } from '@/modules/user/types/IUser';
import { useUserStore } from '@/modules/user/store/UserStore';
import { object, string, ref } from 'yup';

definePageMeta({
  middleware: ['guest-only'],
})

const router = useRouter();

const schema = object().shape({
    name: string()
        .required('Никнейм объязательно поле'),
    email: string()
        .required('Почта обязательна')
        .email('Не верный формат почты'),
    password: string()
        .min(8,'Пароль должен содержать минимум 8 символов')
        .required('Пароль обязателен'),
    confirmPassword: string()
        .oneOf([ref('password')], 'Пароли должны совпадать')
        .required('Потверждение пароля обязательно'),
});


const user = reactive<UserRegister & {passwordConfirm: string}>({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
});

const userStore = useUserStore();

function handleSubmit()
{
    userStore.register(user).then(() =>
    {
        router.push('/')
    })
}

</script>
<style lang="scss">
.sign-up__to-sign-in
{
    font-family: 'Inter';
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    .to-sign-in__label
    {
        color: #9c9c9c;
    }
    .to-sign-in__button
    {
        text-decoration: none;
        color: #1b90fd;
        font-weight: 500;
    }
}
.sign-up
{
    // padding-top: 60px;
    display: flex;
    height: 100vh;
    .sign-up__label
    {
        font-family: 'Century Gothic';
        font-size: 42px;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .sign-up__left-card
    {
        background: #121212;
        flex: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-card__row
        {       
            .sign-up__form
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
                        background: none;
                        width: 100%;
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
                    font-family: 'Inter';
                    font-weight: 600;
                    font-size: 14px;
                    height: 39px;
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