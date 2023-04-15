<template>
    <div class="anime-wrapper">
        <div class="container">
            <div class="anime">
                <div class="anime__left">
                    <div class="anime__left-content">
                        <div class="anime-player anime__empty-box"></div>
                        <div class="anime__episodes anime__episodes_empty"></div>
                        <div class="anime-descript__container">
                            <div class="anime-descript">
                                <div class="anime-descript__media">
                                    <div class="media__poster">
                                        <div class="media__empty-img"></div>
                                    </div>
                                    <div class="media__trailer">
                                        <div class="media__empty-trailer"></div>
                                    </div>
                                </div>
                                <div class="anime-descript__title">
                                    <p class="title-name title-name_empty">
                                    </p>
                                    <p class="title-en-name title-en-name_empty">
                                    </p>
                                    <div class="title-about">
                                        <p class="title-about__label">
                                        </p>
                                        <p class="title-about__label">
                                        </p>
                                        <p class="title-about__label">
                                        </p>
                                        <p class="title-about__label">
                                        </p>
                                        <p class="title-about__label last">
                                        </p>
                                        <div class="title-about__container">
                                            <div class="title-about__items">
                                                <div class="title-about__item generes">
                                                    <p class="genere_empty"></p>
                                                    <p class="genere_empty"></p>
                                                    <p class="genere_empty"></p>
                                                    <p class="genere_empty"></p>
                                                    <p class="genere_empty"></p>
                                                </div>
                                                <div class="title-about__item type">
                                                    <p class="item-label"></p>
                                                    <p class="item-value item-value_empty"></p>
                                                </div>
                                                <div class="title-about__item year">
                                                    <p class="item-label"></p>
                                                    <p class="item-value item-value_empty"></p>
                                                </div>
                                                <div class="title-about__item episodes">
                                                    <p class="item-label"></p>
                                                    <p class="item-value item-value_empty"></p>
                                                </div>
                                                <div class="title-about__item duration">
                                                    <p class="item-label"></p>
                                                    <p class="item-value item-value_empty"></p>
                                                </div>
                                                <div class="title-about__item studios">
                                                    <p class="item-label"></p>
                                                    <div class="studio">
                                                        <p class="item-value item-value_empty"></p>
                                                    </div>
                                                    <div class="studio">
                                                        <p class="item-value item-value_empty"></p>
                                                    </div>
                                                    <div class="studio">
                                                        <p class="item-value item-value_empty"></p>
                                                    </div>
                                                    <div class="studio">
                                                        <p class="item-value item-value_empty"></p>
                                                    </div>
                                                    <div class="studio">
                                                        <p class="item-value item-value_empty"></p>
                                                    </div>
                                                </div>
                                                <div class="title-about__item age-limit">
                                                    <p class="item-label"></p>
                                                    <p class="item-value item-value_empty"></p>
                                                </div>
                                            </div>
                                            <div class="title-about__synopsis">
                                                <p class="synopsis-label">
                                                    
                                                </p>
                                                <div class="synopsis-content synopsis-content_empty">
                                                    <p>
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="anime__right">
                    <div class="anime__right-content">
                        <div class="anime-related">
                            <h3></h3>
                            <div class="anime-related__item anime-related__item_empty">
                                <div class="item__img item__img_empty">
                                    <div class="empty"></div>
                                </div>
                                <div class="item__info item__info_empty">
                                    <p class="item-name item-name_empty">
                                    </p>
                                    <span class="item-year item-year_empty">
                                    </span>
                                    <span class="item-episodes item-episodes_empty">
                                        
                                    </span>
                                </div>
                            </div>
                            <div class="anime-related__item anime-related__item_empty">
                                <div class="item__img item__img_empty">
                                    <div class="empty"></div>
                                </div>
                                <div class="item__info item__info_empty">
                                    <p class="item-name item-name_empty">
                                    </p>
                                    <span class="item-year item-year_empty">
                                    </span>
                                    <span class="item-episodes item-episodes_empty">
                                        
                                    </span>
                                </div>
                            </div>
                            <div class="anime-related__item anime-related__item_empty">
                                <div class="item__img item__img_empty">
                                    <div class="empty"></div>
                                </div>
                                <div class="item__info item__info_empty">
                                    <p class="item-name item-name_empty">
                                    </p>
                                    <span class="item-year item-year_empty">
                                    </span>
                                    <span class="item-episodes item-episodes_empty">
                                        
                                    </span>
                                </div>
                            </div>
                            <div class="anime-related__item anime-related__item_empty">
                                <div class="item__img item__img_empty">
                                    <div class="empty"></div>
                                </div>
                                <div class="item__info item__info_empty">
                                    <p class="item-name item-name_empty">
                                    </p>
                                    <span class="item-year item-year_empty">
                                    </span>
                                    <span class="item-episodes item-episodes_empty">
                                        
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


<style lang="scss" scoped>

.anime-wrapper
{
    .list-enter-active,
        .list-leave-active 
        {
            transition: all 0.5s ease;
        }
    .list-enter-from,
    .list-leave-to 
    {
        opacity: 0;
        transform: translateX(30px);
    }
    background: #0e0e0e;
    padding-top: 90px;
    .anime
    {
        display: flex;
        .anime__left
        {
            width: calc(100% - 365px);
            padding-right: 30px;

            .anime__left-content
            {
                .anime-player
                {
                    width: 100%;
                    height: 550px;
                    iframe
                    {
                        width: 100%;
                    }
                }
            }
        }
        .anime__right
        {
            width: 340px;
            .anime__right-content
            {
                .anime-related
                {
                    margin-bottom: 30px;
                    background: #1c1c1c;
                    padding: 15px;
                    border-radius: 6px;
                    .anime-related__show-more, .anime-related__hide-more
                    {
                        margin: 15px auto 0 auto;
                        width: 100%;
                        border: none;
                        font-family: "Open Sans";
                        font-weight: 500;
                        color: #7a7a7a;
                        font-size: 14px;
                    }
                    h3
                    {
                        font-family: 'Open Sans';
                        font-weight: 700;
                        color: #fff;
                        margin: 0 0 15px 0;
                    }
                    .anime-related__item
                    {
                        display: flex;
                        align-items: center;
                        margin-top: 10px;
                        .item__info
                        {
                            
                            flex: 80%;
                            color: #ababab;
                            font-family: 'Open Sans';
                            font-weight: 500;
                            font-size: 14px;
                            a
                            {
                                color: #ababab;
                                text-decoration: none;
                            }
                            .item-name
                            {
                                margin: 0 0 5px 0;
                            }
                            span
                            {
                                color: #525252;
                                font-size: 14px;
                                font-weight: 400;
                            }
                            .dot
                            {
                                display: inline-block;
                                border-radius: 50%;
                                background: #525252;
                                height: 4px;
                                width: 4px;
                                margin: 3px 6px;
                            }
                        }
                        .item__img
                        {
                            flex: 20%;
                            img
                            {
                                width: 46px;
                                height: 60px;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
        }
    }
}
.anime-descript__container
{
    margin-top: 30px;
}
.anime__empty-box
{
    background: #1c1c1c;
    height: 100%;
    border-radius: 3px;
    width: 100%;
}
.title-name_empty
{
    width: 210px;
    height: 20px;
    background-color: #272727;
    border-radius: 3px;
    animation: pulse 1s infinite;
}
.title-en-name_empty
{
    margin-top: 10px !important;
    width: 100px;
    height: 20px;
    background-color: #272727;
    border-radius: 3px;
    animation: pulse 1s infinite;
}
.anime-descript__title
{
    width: 100%;
}
.title-about
{
    width: 95%;
    .title-about__label
    {
        animation: pulse 1s infinite;
        margin-top: 5px;
        width: 100%;
        height: 20px;
        background-color: #272727;
        border-radius: 3px;
    }
    .last
    {
        width: 45%;
    }
}
.anime-related
{
    h3
    {
        width: 150px;
        height: 20px;
        background-color: #272727;
        animation: pulse 1s infinite;
        border-radius: 3px;
    }
}
.item__img_empty
{
    .empty
    {
        height: 70px;
        width: 50px;
        background-color: #1f1f1f;
        border-radius: 3px;
    }
}
.item-name_empty
{
    width: 95%;
    height: 20px;
    background-color: #272727;
    animation: pulse 1s infinite;
    border-radius: 3px;
}
.item-episodes_empty
{
    display: inline-block;
    width: 60px;
    margin-left: 10px;
    height: 20px;
    background-color: #272727;
    animation: pulse 1s infinite;
    border-radius: 3px;
    margin-top: 5px;
}
.item-year_empty
{
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #272727;
    animation: pulse 1s infinite;
    border-radius: 3px;
    margin-top: 5px;
}

@keyframes pulse {
	0% {
		background-color: #222222;
	}

	50% {
		background-color: #202020;
	}

	100% {
		background-color: #222222;
	}
}
</style>