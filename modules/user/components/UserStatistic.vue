<template>
    <div class="user-statistic">
        <div class="container">
            <div class="user-statistic__label">
                Статистика
            </div>
            <div class="user-statistic__tabs">
                <div class="user-statistic__tab" v-for="tab in tabs" :key="tab.id">
                    <span>
                        {{tab.name}}
                    </span>
                </div>
            </div>
            <div class="user-statistic__cards">
                <div class="user-statistic__card-wrapper">
                    <div class="user-statistic__card">
                        <img src="@/static/sss.jpg" alt="" class="card-img">
                        <div class="card-info">
                            <span class="card-name">
                            Она и её кот: Всё меняется
                            </span>
                            <ContextMenuSpawner>
                                <div class="click-me">ЖМИИИ</div>
                                <template #menu>
                                   <ContextMenuLink icon-name="DeleteIcon">
                                        Редактировать
                                   </ContextMenuLink>
                                   <ContextMenuLink>
                                        Удалить из списка
                                   </ContextMenuLink>
                                </template>
                            </ContextMenuSpawner>
                            <span class="card-year">
                                Лето 2022
                            </span>
                            <div class="card-progress">
                                <div class="progress-bar">
                                    <div class="progress-bar_reached"></div>
                                </div>
                                <div class="progress-info">
                                    <span class="episodes-progress">
                                        <span class="episode-reached">5</span>/12 эп
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-statistic__card-wrapper">
                    <div class="user-statistic__card">
                        <img src="@/static/sss.jpg" alt="" class="card-img">
                        <div class="card-info">
                            <span class="card-name">
                            Она и её кот: Всё меняется
                            </span>
                            <span class="card-year">
                                Лето 2022
                            </span>
                            <div class="card-progress">
                                <div class="progress-bar">
                                    <div class="progress-bar_reached"></div>
                                </div>
                                <div class="progress-info">
                                    <span class="episodes-progress">
                                        <span class="episode-reached">5</span>/12 эп
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-statistic__card-wrapper">
                    <div class="user-statistic__card">
                        <img src="@/static/sss.jpg" alt="" class="card-img">
                        <div class="card-info">
                            <span class="card-name">
                            Она и её кот: Всё меняется
                            </span>
                            <span class="card-year">
                                Лето 2022
                            </span>
                            <div class="card-progress">
                                <div class="progress-bar">
                                    <div class="progress-bar_reached"></div>
                                </div>
                                <div class="progress-info">
                                    <span class="episodes-progress">
                                        <span class="episode-reached">5</span>/12 эп
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-statistic__card-wrapper">
                    <div class="user-statistic__card">
                        <img src="@/static/sss.jpg" alt="" class="card-img">
                        <div class="card-info">
                            <span class="card-name">
                            Она и её кот: Всё меняется
                            </span>
                            <span class="card-year">
                                Лето 2022
                            </span>
                            <div class="card-progress">
                                <div class="progress-bar">
                                    <div class="progress-bar_reached"></div>
                                </div>
                                <div class="progress-info">
                                    <span class="episodes-progress">
                                        <span class="episode-reached">5</span>/12 эп
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import ContextMenuSpawner from '@/shared/common/components/ContextMenuSpawner.vue';
import ContextMenuLink from '@/shared/common/components/ContextMenuLink.vue';
const selectedTab = ref('');

const tabs = reactive([
    {
        id: 1,
        name: 'Все'
    },
    {
        id: 2,
        name: 'Смотрю'
    },
    {
        id: 3,
        name: 'Брошено'
    },
    {
        id: 4,
        name: 'Отложено'
    },
    {
        id: 5,
        name: 'Запланировано'
    },

])

const currentTab = ref();

function fetchSelectedTab()
{

}
</script>
<style lang="scss">
.user-statistic
{
    .user-statistic__tabs
    {
        display: flex;
        align-items: center;
        margin: 10px 0 30px 0;
        .user-statistic__tab
        {
            font-family: 'Open Sans';
            margin-right: 10px;
            color: #828282;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            &_active
            {
                font-size: 16px;
                color: #2F80ED;
            }
        }
    }
    .user-statistic__label
    {
        margin-top: 30px;
        font-family: 'Open Sans';
        font-size: 28px;
        font-weight: 500;
    }
    .user-statistic__cards
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
        row-gap: 15px;
        .user-statistic__card-wrapper
        {
            height: 220px;
            position: relative;
            width: 315px;
        }
        .user-statistic__card
        {
            width: 365px;
            height: 175px;
            position: absolute;
            bottom: 0;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
            -moz-box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
            box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.38);
            border-radius: 20px;
            .card-img
            {
                position: absolute;
                top: -45px;
                height: 220px;
                width: 150px;
                object-fit: cover;
                border-radius: 20px;
                -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
                -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
                box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            }
            .card-info
            {
                padding: 20px 10px 0 46%;
                .card-name
                {
                    font-family: 'Open Sans';
                    color: #333;
                    display: block;
                    font-size: 14px;
                    font-weight: 700;
                }
                .card-year
                {
                    font-family: 'Open Sans';
                    color: #B4B4B4;
                    display: block;
                    font-size: 12px;
                    margin-top: 5px;
                }
                .card-progress
                {
                    padding-top: 40px;

                    .progress-bar
                    {
                        position: relative;
                        border-radius: 20px;
                        width: 100%;
                        background: #EAE8E8;
                        height: 8px;
                        .progress-bar_reached
                        {
                            position: absolute;
                            background: #28D3A1;
                            height: 8px;
                            border-radius: 20px;
                            width: 50px;
                        }
                    }
                    .progress-info
                    {
                        text-align: right;
                        margin-top: 10px;
                        .episodes-progress
                        {
                            font-family: 'Open Sans';
                            font-weight: 700;
                            font-size: 12px;
                            color: #c2c2c2;
                            .episode-reached
                            {
                                color: #181818;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>