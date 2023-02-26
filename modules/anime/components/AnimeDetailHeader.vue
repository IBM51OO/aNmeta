<template>
    <!-- <video class="video" src="../assets/vv.mp4" muted="true" loop="true" autoplay="true"></video> -->
    <div class="anime-header__wrapper" :style="{backgroundImage: 'url(https://img1.akspic.ru/crops/1/7/0/0/7/170071/170071-anime-zhanna_dark_i_sejber-sablya-sejber_alter-dzhejn_alter-1920x1080.jpg)'}">
        <div class="container">
            <div class="anime-header__content">
                <div class="anime-header__white-space-hack"></div>
                <div class="anime-header__title-wrapper">
                    <div class="anime-header__title">
                        <h1>Истребитель демонов [ТВ-1]</h1>
                    </div>
                    <div class="header__subtitle">
                        <h3>Kimetsu no Yaiba</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.anime-header__wrapper::before
{
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    height: 330px;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.6);
}
.anime-header__wrapper
{
    height: 250px;
    width: 100%;
    padding-top: 80px;
    background-size: cover !important;
    background: rgba($color: #000000, $alpha: 0.7);
    background-repeat: no-repeat !important;
    background-position: 50% 50% !important;
    
    .anime-header__content
    {
        display: flex;
        z-index: 4;
        position: relative;
        align-items: center;

        .anime-header__title-wrapper
        {
            font-family: 'Oswald';
            margin-left: 30px;
            .header__subtitle
            {
                h3
                {
                    font-weight: 300;
                    color: #fff;
                    font-size: 28px;
                }
            }
            .anime-header__title
            {
                h1
                {
                    font-size: 60px;
                    font-weight: 300;
                    color: #fff;
                    margin: 0;
                }
            }
        }
        .anime-header__white-space-hack
        {
            width: 250px;
        }
    }
}
.video
{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
}
</style>