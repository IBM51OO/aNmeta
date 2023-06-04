<template>
	<div>
		<CustomNotification />
		<header class="header">
			<div class="container">
				<div class="header-navigation">
					<div class="header-navigation__main">
						<nav class="nav header__nav">
							<ul class="nav__list">
								<li class="nav__item"><NuxtLink to="/">Главная</NuxtLink></li>
								<li class="nav__item"><NuxtLink to="/register">Аниме</NuxtLink></li>
								<li class="nav__item"><NuxtLink to="/register">Календарь релизов</NuxtLink></li>
								<li class="nav__item" v-if="!userStore.isUserAuth"><NuxtLink to="/register">Рег</NuxtLink></li>
								<li class="nav__item" v-if="!userStore.isUserAuth"><NuxtLink to="/login">Войти</NuxtLink></li>
							</ul>
						</nav>
						<Search />
					</div>
					<div class="dropdown" v-if="userStore.isUserAuth">
						<button class="dropbtn" @mouseenter="dropDownHovered = true" @mouseleave="dropDownHovered = false">
							<div class="user">
								<div class="user-avatar">
									<img src="@/static/rnUkxaCldII.jpg" alt="static" class="user-avatar__img">
								</div>
							</div>
						</button>
						<div class="dropdown-content" :class="{'dropdown-hovered': dropDownHovered}" @mouseenter="dropDownHovered = true" @mouseleave="dropDownHovered = false">
							<NuxtLink to="/profile" class="dropdown-link">Профиль</NuxtLink>
							<NuxtLink to="/settings" class="dropdown-link">Настройки</NuxtLink>
							<NuxtLink @click="logout" class="dropdown-link">Выход</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</header>
		<slot />
	</div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/modules/user/store/UserStore'
import CustomNotification from '@/shared/ui/CustomNotification.vue';
import Search from '@/components/global/Search.vue'
const userStore = useUserStore();

const dropDownHovered = ref(false)

const user = computed(() => userStore.getUser)
const authCookie = useCookie('access_token')

if(!userStore.isUserAuth && authCookie.value)
{
	userStore.fetchUser();
}

function logout()
{
	dropDownHovered.value = false;
	
	userStore.logout();
}

</script>
<style lang="scss">
.header 
{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 3;
	height: 60px;
	background: #1E1E1E;
	.dropdown {
		float: left;
		overflow: hidden;
		.user
		{
			display: flex;
			align-items: center;
			.user-avatar
			{
				flex: 0 0 auto;
				.user-avatar__img
				{
					border-radius: 50%;
					object-fit: cover;
					height: 35px;
					width: 35px;
				}
				margin-right: 10px;
			}
		}
	}

	.dropdown .dropbtn {
		font-size: 16px;  
		border: none;
		outline: none;
		color: white;
		padding: 14px 16px;
		background-color: inherit;
		font-family: inherit;
		transition: 300ms all ease;
		margin: 0;
	}
	.dropdown-content {
		visibility: hidden;
		opacity: 0;
		position: absolute;
		background-color: #f9f9f9;
		transition: 300ms all ease;
		min-width: 160px;
		transition: 200ms all ease-in-out;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
		.dropdown-link
		{
			cursor: pointer	;
		}
	}
	.dropdown-hovered
	{
		visibility: visible;
		opacity: 1;
	}
	.dropdown-content a {
		float: none;
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}
	
	.dropdown-content a:hover {
		background-color: #ddd;
	}
	
	.dropdown:hover .dropdown-content {
		display: block;
	}
	.header-navigation 
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
	}
	.header-navigation__main 
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 100%;
		
		.nav__list {
			color: #fff;
			font-family: "Inter";
			font-weight: normal;
			list-style-type: none;
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			.nav__item
			{
				position: relative;
				a
				{
					text-decoration: none;
					color: #96969a;
					transition: color .2s linear,background-color .2s linear;
					
				}
			}
			.nav__item:hover
			{
				a
				{
					color: #fff;	
				}
				a::after
				{
					content: "";
					display: block;
					position: absolute;
					bottom: -9px;
					transition: width 300s ease;
					left: 0;
					height: 0;
					width: 100%;
					border-bottom: 2px solid #d82323;
					border-radius: 1px;
					margin: 0;
				}
			}
			.nav__item:not(:last-child) 
			{
				margin-right: 20px;
			}
		}
	}
	.search-icon 
	{
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		left: 17px;
	}
}
</style>
