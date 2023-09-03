<template>
    <div class="collection-card">
        <h2 class="collection-card__name">
            Топ 20 Лучших Аниме на Земле
        </h2>
        <div class="collection-card__preview">
            <div class="preview-items">
                <img src="https://animego.org/upload/anime/images/648d93536c613695217329.jpg" alt="" class="preview-items__first">
                <img src="https://animego.org/upload/anime/images/6319cd947a99a365246749.jpg" alt="" class="preview-items__second">
                <img src="https://animego.org/upload/anime/images/649c0c39b93fb233179291.jpg" alt="" class="preview-items__third">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.collection-card
{
    height: 250px;
    margin: 0 10px;
    background: #212121;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .collection-card__name
    {
        max-width: 40%;
        font-size: 18px;
        font-family: 'Open Sans';
        margin: 25px auto 0 auto;
        text-align: center;
        color: #fff;
    }
    .collection-card__preview
    {
        .preview-items
        {
            position: relative;
            img
            {
                position: absolute;
                height: 178px;
                width: 134px;
                border-radius: 15px;
                -o-object-fit: cover;
                object-fit: cover;
                border: 5px solid #212121;
            }
            &__first
            {
                left: 30px;
                transform: rotate(350deg);
                top: 32px;
            }
            &__second
            {
                left: 50%;
                transform: rotate(0);
                top: 32px;
                transform: translate(-50%, 0);
            }
            &__third
            {
                right: 30px;
                transform: rotate(-350deg);
                top: 53px;
            }
        }
    }
}
</style>