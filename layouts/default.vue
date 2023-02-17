<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-navigation">
          <div class="header-navigation__main">
            <nav class="nav header__nav">
              <ul class="nav__list">
                <li class="nav__item">Главная</li>
                <li class="nav__item">Аниме</li>
                <li class="nav__item">Календарь релизов</li>
                <li class="nav__item">Новости</li>
              </ul>
            </nav>
            <div class="main__search">
              <input type="text" placeholder="Поиск..." />
              <div class="search-icon">
                <Icon name="SearchIcon" size="16" />
              </div>
            </div>
          </div>
          <div class="header-navigation__user">rtegrthtrwww</div>
        </div>
      </div>
    </header>
    <div class="page">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.header 
{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 3;
	height: 60px;

	.header-navigation 
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}
	.header-navigation__main 
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 100%;
	.main__search 
	{
		position: relative;
		border-radius: 20px;
		background: #16151a;
		input 
		{
			color: #fff;
			outline: none;
			border: none;
			background: none;
			padding: 11px 0 11px 40px;
			border-radius: 20px;
			width: 180px;
		}
		input::placeholder
		{
			font-size: 14px;
		}
	}
	.nav__list {
			color: #fff;
			font-family: "Inter";
			font-weight: normal;
			list-style-type: none;
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
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
