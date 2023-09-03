<template>
    <div class="release-calendar__wrapper">
        <div class="container">
            <div class="release-calendar">
                <div class="release-calendar__tabs">
                    <div class="tab monday">
                        <span class="day-of-week">
                            Понедельник
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab tuesday">
                        <span class="day-of-week">
                            Вторник
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab wednesday">
                        <span class="day-of-week">
                            Среда
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab thursday">
                        <span class="day-of-week">
                            Четверг
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab friday">
                        <span class="day-of-week">
                            Пятница
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab saturday">
                        <span class="day-of-week">
                            Суббота
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                    <div class="tab sunday">
                        <span class="day-of-week">
                            Воскресенье
                        </span>
                        <span class="day">
                            3 Июля
                        </span>
                    </div>
                </div>
                <div class="release-calendar_tab-rows">
                    <div class="tab-row">
                        <div class="tab-row__title">
                            <div class="title">
                                <div class="title__release-time">
                                    15:00
                                </div>
                                <p class="title__name">
                                    История о мононокэ 2
                                </p>
                            </div>
                            <button class="title-watch">
                                Эпизод 04
                                <Icon name="PlayIcon" size="12" />
                            </button>
                        </div>
                    </div>
                    <div class="tab-row">
                        <div class="tab-row__title">
                            <div class="title">
                                <div class="title__release-time">
                                    15:00
                                </div>
                                <p class="title__name">
                                    История о мононокэ 2
                                </p>
                            </div>
                            <button class="title-watch">
                                Эпизод 04
                                <Icon name="PlayIcon" size="12" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.release-calendar__wrapper
{
    margin-top: 30px;
    .release-calendar
    {
        border: 5px solid #111111;
        border-radius: 5px;
        .release-calendar__tabs
        {
            padding: 30px 30px 5px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .tab
            {
                text-align: center;
                padding: 8px 0;
                font-family: "Open Sans";
                background: #0f0f0f;
                width: 100%;
                border-radius: 5px;
                color: #fff;
                max-width: 180px;
                margin: 10px 0;
                .day-of-week
                {
                    font-size: 14px;
                    font-weight: 800;
                }
                .day
                {
                    display: block;
                    font-size: 12px;
                    color: #a7a7a7;
                }
            }
        }
        .release-calendar_tab-rows
        {
            padding: 0 30px 30px 30px;
            .tab-row
            {
                margin-bottom: 10px;
            }
            .tab-row__title
            {
                padding: 5px 10px;
                background: #0f0f0f;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .title
                {
                    font-family: 'Open Sans';
                    .title__release-time
                    {
                        font-weight: 500;
                        color: #c7c7c7;
                        font-size: 12px;
                    }
                    .title__name
                    {
                        margin-left: 10px;
                        font-size: 14px;
                        color: #fff;
                        font-weight: 700;
                    }
                    display: flex;
                    align-items: center;
                }
                .title-watch
                {
                    border: none;
                    padding: 10px 15px;
                    color: #fff;
                    font-size: 14px;
                    font-family: 'Open Sans';
                    font-weight: 500;
                    background: #181820;
                    display: flex;
                    border-radius: 5px;
                    align-items: center;
                    transition: 300ms all ease;
                    .icon
                    {
                        margin-left: 10px;
                    }
                }
                .title-watch:hover
                {
                    transition: 300ms all ease;
                    background: #212121;
                }
            }
        }
    }
}
</style>