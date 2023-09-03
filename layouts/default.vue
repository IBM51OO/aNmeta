<template>
	<div>
		<CustomNotification v-if="false" />
		<header class="header">
			<div class="container">
				<div class="header-navigation">
					<div class="header-navigation__main">
						<nav class="nav header__nav">
							<ul class="nav__list">
								<li class="nav__item"><NuxtLink to="/">Главная</NuxtLink></li>
								<li class="nav__item"><NuxtLink to="/catalogue">Аниме</NuxtLink></li>
								<li class="nav__item"><NuxtLink to="/register">Календарь релизов</NuxtLink></li>
								
							</ul>
						</nav>
						<div class="nav__item-right">
							<Search />
							<div class="nav__item-auth">
								<li class="nav__item" v-if="!userStore.isUserAuth"><NuxtLink to="/register" class="nav__item-register">Регистрация</NuxtLink></li>
								<li class="nav__item" v-if="!userStore.isUserAuth"><NuxtLink to="/login" class="nav__item-login">Войти</NuxtLink></li>
							</div>
							<div class="dropdown" v-if="user && userStore.isUserAuth">
								<div class="user" @click.stop="toggleMenu">
									<div class="user-avatar">
										<img src="/rnUkxaCldII.jpg" alt="static" class="user-avatar__img" v-if="!user.avatar">
										<img :src="user.avatar" alt="static" class="user-avatar__img" v-else>
									</div>
								</div>
								<div class="dropdown-content" v-if="profileMenuVisible" v-click-outside="toggleMenu">
									<div class="profile-preview_small" :style="{'background': `url(${user.backgroundAvatar})`}">
										<div class="profile-preview__user">
											<div class="user-avatar">
												<img src="/rnUkxaCldII.jpg" alt="" v-if="!user.avatar">
												<img :src="user.avatar" alt="" v-else>
											</div>
											<div class="user-name">
												{{user?.name}}
											</div>
										</div>
									</div>
									<div class="profile-menu">
										<NuxtLink @click="toggleMenu" :to="`/profile/${currentUser?.id}`" ><Icon name="ProfileIcon" size="20" /><span>Профиль</span></NuxtLink>
										<NuxtLink><Icon name="BookmarkIcon" size="20" /><span>Мои коллекции</span></NuxtLink>
										<NuxtLink @click="toggleMenu" to="/settings"><Icon name="SettingsIcon" size="20" /><span>Настройки</span></NuxtLink>
										<NuxtLink><Icon name="LogoutIcon" size="20" /><span>Выход</span></NuxtLink>
									</div>
								</div>
							</div>
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

const profileMenuVisible = ref(false);


if(!userStore.isUserAuth && authCookie.value)
{
	userStore.fetchUser();
}
const currentUser = computed(() => userStore.getUser);
function toggleMenu()
{	
	profileMenuVisible.value = !profileMenuVisible.value
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
	height: $main-menu-height;
	background: #101014;
	.dropdown {
		float: left;
		overflow: hidden;
		
	}
	.user
	{
		display: flex;
		cursor: pointer;
		align-items: center;
		.user-avatar
		{
			.user-avatar__img
			{
				border: 1px solid ;
				border-radius: 50%;
				object-fit: cover;
				height: 40px;
				width: 40px;
			}
		}
	}
	.dropdown
	{
		margin-left: 10px;
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

		border-radius: 10px;
		position: fixed;
		background-color: #202024;
		transition: 300ms all ease;
		min-width: 260px;
		transition: 200ms all ease-in-out;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
		right: 5px;
		padding-bottom: 10px;
		.dropdown-link
		{
			cursor: pointer	;
		}
		.profile-preview_small
		{
			background-size: cover !important;
			background-repeat: no-repeat !important;
			border-radius: 10px 10px 0 0	;
			-webkit-box-shadow: 0px -80px 68px -9px rgba(0, 0, 0, 0.72) inset;
			-moz-box-shadow: 0px -80px 68px -9px rgba(0, 0, 0, 0.72) inset;
			box-shadow: 0px -80px 68px -9px rgba(0, 0, 0, 0.72) inset;
			.profile-preview__user
			{
				display: flex;
				align-items: center;
				padding: 10px 20px;
				.user-avatar
				{
					img
					{
						height: 40px;
						width: 40px;
						object-fit: cover;
						border-radius: 50%;
					}
				}
				.user-name
				{
					font-family: 'Inter';
					font-weight: 500;
					color: #e6e6ea;
					margin-left: 10px;
				}
			}
		}
	}
	.dropdown-content a {
		float: none;
		font-family: 'Inter';
		color: #e6e6ea;
		display: flex;
		cursor: pointer;
		align-items: center;
		padding: 10px 10px;
		font-weight: 500;
		border-radius: 6px;
		margin: 0 10px;
		text-decoration: none;
		display: block;
		text-align: left;

		span
		{
			font-size: 14px;
			margin-left: 10px;
		}
	}
	
	.dropdown-content a:hover {
		background-color: #404044;
	}
	
	.dropdown:hover .dropdown-content {
		display: block;
	}
	.header-navigation 
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
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
		.nav__item-right
		{
			display: flex;
			align-items: center;
			.nav__item-auth
			{
				display: flex;
				align-items: center;
				.nav__item
				{
					list-style-type: none;
				}
			}
			.nav__item-login,.nav__item-register
			{
				box-sizing: border-box;
				display: flex;
				align-items: center;
				padding-inline: 15px;
				background: #292929;
				font-family: 'Open Sans';
				font-weight: 700;
				font-size: 14px;
				color: #fff;
				text-decoration: none;
				height: 35px;
				list-style-type: none;
				border-radius: 8px;
			}
			.nav__item-register
			{
				margin-inline: 15px;
				background: #fff;
				color: #292929;
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
