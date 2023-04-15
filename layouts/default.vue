<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-navigation">
          <div class="header-navigation__main">
            <nav class="nav header__nav">
              <ul class="nav__list">
                <li class="nav__item"><NuxtLink to="/">Главная</NuxtLink></li>
                <li class="nav__item">Аниме</li>
                <li class="nav__item">Календарь релизов</li>
                <li class="nav__item">Новости</li>
              </ul>
            </nav>
			<Search />
          </div>
          <div class="header-navigation__user">rtegrthtrwww</div>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import Search from '@/components/global/Search.vue'
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
			a
			{
				text-decoration: none;
				color: #fff;
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
