<template>
    <section class="calendar">
        <div class="calendar-background">
            <div class="container">
                <h1 class="calendar-label">
                    Календарь релизов
                </h1>
                <div class="calendar__topbar">
                    <div class="calendar__current-date">
                        <span class="current-date__label">
                            Сегодня, 29 декабря
                        </span>
                    </div>
                    <div class="calendar__cards-filter">
                        <div class="square filter-item" 
                            :class="{'active': selectedViewCards === 'square'}" 
                            @click="selectedViewCards = 'square'"
                        >
                            <Icon name="MenusquareIcon" size="14"/>
                        </div>
                        <div class="grid filter-item" 
                            :class="{'active': selectedViewCards === 'grid'}"
                            @click="selectedViewCards = 'grid'"
                        >
                            <Icon name="MenugridIcon" size="14" />
                        </div>
                        <div class="rows filter-item" 
                            :class="{'active': selectedViewCards === 'rows'}"
                            @click="selectedViewCards = 'rows'"
                        >
                            <Icon name="MenurowsIcon" size="18" />
                        </div>
                    </div>
                </div>
                <div class="calendar__cards-content">
                    {{ selectedViewCards }}
                    <component :data="animeList" :is="currentView" />
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import MenugridIcon from '@/components/global/MenugridIcon.vue';
import MenurowsIcon from '@/components/global/MenurowsIcon.vue';
import MenusquareIcon from '@/components/global/MenusquareIcon.vue';
import SquareView from '../components/SquareView.vue';
import RowsView from '../components/RowsView.vue';
import { Movie } from '@/modules/home/types/types';

const selectedViewCards = ref('square');
const square = resolveComponent('SquareView') 
const rows = resolveComponent('RowsView') 

const currentView = computed(() => 
{
    if(selectedViewCards.value === 'square')
        return square
    if(selectedViewCards.value === 'rows')
        return rows
})

const animeList = ref<Array<Movie>>([
    {
        id: 22,
        img: 'https://animego.org/upload/anime/images/6325a97c596a5704160745.jpg',
        title: 'Блич: Тысячелетняя кровавая война',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 23,
        img: 'https://animego.org/upload/anime/images/61c0e7650a79e589259475.jpg',
        title: 'Клинок, рассекающий демонов: Квартал красных фонарей',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 24,
        img: 'https://animego.org/upload/anime/images/60a0f7c430c85231214403.jpg',
        title: 'Вайолет Эвергарден. Фильм',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 32,
        img: 'https://animego.org/upload/anime/images/5a47ae2e45700.jpg',
        title: 'Стальной алхимик: Братство',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 26,
        img: 'https://animego.org/upload/anime/images/606be686c2f63301155415.jpg',
        title: 'Атака титанов',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 29,
        img: 'https://animego.org/upload/anime/images/5fb00ba979127440158283.jpg',
        title: 'Этот глупый свин не понимает мечту девочки-зайки',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 43,
        img: 'https://animego.org/upload/anime/images/5f7c1bb915a07033689374.jpg',
        title: 'Магическая битва',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    },
    {
        id: 54,
        img: 'https://animego.org/upload/anime/images/5ae4a619c4a3b788081225.jpg',
        title: 'Врата Штейна',
        content: '',
        poster: '',
        yearRelease: '2022',
        timeRelease: 'с 16:00 по 16:30'
    }
])

</script>
<style lang="scss">
.calendar
{
    .calendar-background
    {
        height: 100%;
        background-color: #141518;
    }
    .calendar-label
    {
        padding: 20px 0 0 0;
        color: #fff;
        margin: 0;
        font-size: 36px;
        font-family: 'Open Sans';
        font-weight: bold;
    }
    .calendar__topbar
    {
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        .calendar__current-date
        {
            .current-date__label
            {
                font-size: 20px;
                color: #fff;
                font-family: 'Open Sans';
                font-weight: normal;
                font-weight: 600;
                display: flex;
                align-items: center;
            }
            .current-date__label::before
            {
                content: '';
                display: block;
                height: 9px;
                width: 9px;
                border-radius: 50%;
                margin-right: 10px;
                background: #EB5757;
            }
        }
        .calendar__cards-filter
        {
            display: flex;
            margin: 0 -5px;
            align-items: center;
            .active
            {
                svg
                {
                    path
                    {
                        fill: #fff;
                    }
                }
            }
            .filter-item
            {
                margin: 0 5px;
                padding: 5px 0;
                cursor: pointer;
            }
            .filter-item:hover
            {
                transition: 500ms all ease;
                transform: scale(1.1);
                svg
                {
                    path
                    {
                        transition: 500ms all ease;
                        fill: #fff;
                    }
                }
            }
        }
    }
    .calendar__cards-content
    {
        padding-top: 60px;
        .calendar__cards-square
        {
            display: grid;
            flex-wrap: wrap;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 15px;
            .calendar-card
            {
                overflow: hidden;
                font-family: 'Open Sans';
                .card__poster
                {
                    cursor: pointer;
                    height: 300px;
                    overflow: hidden;
                    border-radius: 10px;
                    img
                    {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .card__poster:hover
                {
                    img
                    {
                        transition: 500ms all ease;
                        transform: scale(1.1);
                    }
                }
                .card__title-name
                {
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 5px;
                    color: #F2F2F2;
                    font-weight: normal;
                }
                .card__description
                {
                    margin: 0 0 10px 0;
                    .description__year
                    {
                        margin-right: 5px;
                    }
                    span
                    {
                        font-size: 14px;
                        font-weight: 500;
                        color: #828282;
                    }
                }
                .card__info
                {
                    font-weight: 500;
                    font-size: 14px;
                    color: #fff;
                    .card__episodes
                    {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>