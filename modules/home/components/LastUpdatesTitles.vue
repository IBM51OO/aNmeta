<template>
    <div class="container">
        <div class="last-updates">
            <div class="row">
                <div class="last-updates__label">
                    <h2>Популярные новинки</h2>
                </div>
                <div class="last-updates__show-all">
                    <span>
                        Смотреть все
                    </span>
                </div>
            </div>
            <div class="last-updates__list">
                <Swiper class="last-updates__slider" :slides-per-view="7" :space-between="30">
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/9.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Добро пожаловать в класс превосходства 2
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/7.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Аюму всё равно станет ближе
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/17.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Девушка на час 2
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/21.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Стальной алхимик: Братство
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/22.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Этот глупый свин не понимает мечту девочки-зайки. Фильм
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/23.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Аюму всё равно станет ближе
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/24.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Вайолет Эвергарден. Фильм
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/24.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Вайолет Эвергарден. Фильм
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/24.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Вайолет Эвергарден. Фильм
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="slider-item movie">
                            <div class="movie__poster">
                                <img src="../assets/img/24.jpg" alt="">
                                <div class="movie__hided-info-wr">
                                    <div class="movie__hided-info">
                                        <div class="movie__rate">
                                            <Icon name="StarIcon" size="14" />
                                            <span>4.3</span>
                                        </div>
                                        <div class="movie__status">
                                            <span>Вышел</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__name">
                                Вайолет Эвергарден. Фильм
                            </div>
                            <div class="movie__info">
                                <span class="movie__episodes">
                                    25 из 25
                                </span>
                                <span class="movie__year">
                                    2021
                                </span>
                                <span class="movie__type">
                                    ТВ-сериал
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.last-updates
{
    margin-top: 30px;
    .row
    {
        justify-content: space-between;
    }
    .last-updates__label
    {
        position: relative;
        h2
        {
            margin: 0;
            font-family: 'Century Gothic';
            font-size: 24px;
            color: #fff;
            font-weight: 600;
            margin-bottom: 25px;
        }
    }

    .last-updates__show-all
    {
        color: #BDBDBD;
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 14px;
        text-align: right;
        cursor: pointer;
        margin-bottom: 25px;
    }
    .last-updates__list
    {
        .last-updates__slider
        {
            .movie
            {
                width: 100%;
                padding-right: 30px;
                img
                {
                    width: 240px;
                    object-fit: cover;
                    transition: .3s all ease;
                    overflow: hidden;
                    height: 260px;
                }
                .movie__poster
                {
                    position: relative;
                    cursor: pointer;
                    height: 260px;
                    overflow: hidden;
                    border-radius: 10px;

                    .movie__hided-info-wr
                    {
                        visibility: hidden;
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background: rgba($color: #000000, $alpha: 0);
                        border-radius: 0;

                        .movie__hided-info
                        {
                            height: 100%;
                        }
                        .movie__status
                        {
                            position: absolute;
                            bottom: 10px;
                            left: 10px;
                            background: #333333;
                            border-radius: 4px;
                            padding: 3px 15px;
                            color: #fff;
                            font-family: 'Open Sans';
                            font-weight: 300;
                            font-size: 14px;
                        }
                        .movie__rate
                        {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            font-family: 'Open Sans';
                            font-weight: 300;
                            background: #141518;
                            color: #fff;
                            border-radius: 4px;
                            width: 50px;
                            top: 10px;
                            left: 10px;
                            padding: 3px 8px;
                            font-size: 14px;
                            
                            span
                            {
                                margin-left: 5px;
                            }
                        }
                    }
                }
                .movie__poster:hover .movie__hided-info-wr
                {
                    transition: .3s all ease;
                    visibility: visible;
                    background: rgba($color: #000000, $alpha: 0.7);
                }
                .movie__poster:hover img
                {
                    transition: transform .3s ease-in-out;
                    transform: scale(1.1);
                }
                .movie__name
                {
                    font-family: 'Open Sans';
                    font-weight: 300;
                    color: #F2F2F2;
                    font-size: 14px;
                    max-width: 201px;
                    margin: 5px 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -moz-box;
                    -moz-box-orient: vertical;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    line-clamp: 5;
                    box-orient: vertical;
                }
                .movie__info
                {
                    font-family: 'Roboto' sans-serif;
                    color: #828282;
                    font-size: 14px;
                    
                    .movie__episodes
                    {
                        margin-right: 5px;
                    }
                    .movie__year
                    {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>