<template>
    <div class="sign-up-banner">
        <div class="container">
            <div class="sign-up-banner__girl">
                <div id="background" class="clip"></div>
                <div id="clip3" class="clip"></div>
                <div id="clip4" class="clip"></div>
                <div id="clipa" class="clip"></div>
                <div id="clip1" class="clip"></div>
                <div id="clip2" class="clip"></div>
                <div id="clipb" class="clip"></div>
                <!-- <img src="../assets/img/ff.png" alt=""> -->
            </div>
            <div class="sign-up-banner__info">
                <div class="info__header">
                    <h2>Присоединяйтесь!</h2>
                    <div class="info__header__label">Все еще не зарегистрированы? У нас для тебя много классных фич</div>
                    <div class="info__feature-list">
                        <div class="release-promo promo-item">
                            <img src="../assets/img/calendar.png" alt="">
                            <span>Календарь релизов</span>
                        </div>
                        <div class="bell-promo promo-item">
                            <img src="../assets/img/bell.png" alt="">
                            <span>Уведомления о выходе новых серий</span>
                        </div>
                        <div class="play-promo promo-item">
                            <img src="../assets/img/play-button.png" alt="">
                            <span>Смотри где угодно</span>
                        </div>
                    </div>
                    <NuxtLink to="/register">
                        <button class="info__watch-btn btn">
                            Создать аккаунт
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
.sign-up-banner
{
    position: relative;
    background: url(../assets/img/ggggh.png) no-repeat;
    background-size: cover;
    height: 350px;
    margin-top: 150px;
    margin-bottom: 100px;
    background-position: 50% 50%;

    .container
    {
        display: flex;
        align-items: center;
    }
    
    .sign-up-banner__girl
    {
        height: 430px;
        width: 430px;
        flex: 38%;

        @keyframes clip1{
        0%{clip-path: polygon(0% -50%, 50% -50%, -50% 50%, -100% 50% );}
        100%{clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%);}
        }
        @keyframes clipa{
        0%{clip-path: polygon(-5% -55%, 55% -45%, -45% 55%, -95% 55% );}
        100%{clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%);}
        }
        @keyframes clip2{
        0%{clip-path: polygon(50% -50%, 100% -50%, 200% 50%, 150% 50%);}
        100%{clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%);}
        }
        @keyframes clipb{
        0%{clip-path: polygon(40% -60%, 100% -50%, 190% 40%, 150% 50%);}
        100%{clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%);}
        }
        @keyframes clip3{
        0%{clip-path: polygon(-100% -150%, -50% -150%, -150% -50%, -200% -50%);}
        100%{clip-path: polygon(150% 50%, 200% 50%, 100% 150%, 50% 150%);}
        }
        @keyframes clip4{
        0%{clip-path: polygon(150% -150%, 200% -150%, 300% -50%, 250% -50%);}
        100%{clip-path: polygon(-100% 50%, -50% 50%, 50% 150%, 0% 150%);}
        }
        .clip{
            position: absolute;
            height: 430px;
            width: 430px;
            top: -80px;
            object-fit: cover;
            background: url("../assets/img/ff.png") no-repeat center;
            transform-origin:center;
        }
        #clip1 { animation:clip1 4s linear infinite; }
        #clipa {
            transform: scale(1.1,1.1);
            animation:clipa 9s linear infinite;  
        }
        #clip2 {
            transform: scale(1.12,1.12); 
            animation:clip2 5s linear infinite;  
        }
        #clipb {
            transform: scale(1.14,1.14);
            animation:clipb 4s linear infinite;  
        }
        #clip3 {
            transform: scale(1.15,1.15);
            animation:clip3 7s linear infinite;  
        }
        #clip4 {
            transform: scale(1.13,1.13);
            animation:clip4 6s linear infinite;  
        }
    }
    .sign-up-banner__info
    {
        height: 295px;
        flex: 62%;

        .info__header
        {
            
            // .info__watch-btn
            // {
            //     background-color: #b41c1a;
            //     outline: none;
            //     border: none;
            //     color: #fff;
            //     padding: 20px;
            //     border-radius: 10px;
            // }
            button {
                margin: auto;
                border-radius: 10px;
                background-color: #667292;
                box-shadow: 10px 15px 40px #36486b;
                width: 225px;
                height: 65px;
                font-size: 50px;
                font-family: 'Proxima Nova Rg';
                color: #bccad6;
                border: none;
            }

            button:hover {
                border: none;
                background-color: #8d9db6;
                opacity: 1;
                color: #36486b;
            }

            .center {
                margin-left: auto;
                margin-right: auto;
                margin-top: auto;
                margin-bottom: auto;
                // position: ;
            }

            .btn:hover {
                transition: 0.5s ease-in-out;
                background: #8d9db6;
            }

            button {
                --color1: #fff6f1;
                --color2: #b0a6b7;
                font-family: 'Proxima Nova Rg';
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                background: repeating-linear-gradient(
                    45deg,
                    var(--color1),
                    var(--color1) 30px,
                    var(--color2) 30px,
                    var(--color2) 60px
                );
                background-clip: text;
                color: transparent;
                -webkit-background-clip: text;
                animation: 40s linear 0s infinite move;
            }

            @keyframes move {
                from {
                    background-position: 0px;
                }

                to {
                    background-position: 1000px;
                }
            }

            .info__feature-list
            {
                display: flex;
                align-items: center;
                color: #fff;
                margin-top: 20px;
                margin-bottom: 40px;
                .promo-item
                {
                    display: flex;
                    align-items: center;
                    span
                    {
                        margin-left: 10px;
                    }
                }
                .bell-promo,.play-promo 
                {
                    margin-left: 15px;
                }
                img
                {
                    height: 20px;
                    width: 20px;
                }
            }

            h2
            {
                margin: 0;
                font-size: 28px;
                font-family: 'Proxima Nova Rg';
                color: #fff;
            }
            .info__header__label
            {
                color: #fff;
                font-family: 'Proxima Nova Rg';
                font-weight: 400;
                font-size: 16px;
            }
        }
    }
}
</style>