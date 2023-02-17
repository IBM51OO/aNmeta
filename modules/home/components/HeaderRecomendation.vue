<template>
  <div class="header-recomendations__wrapper">
    <transition>
        <div class="poster-background" :style="{background: `url(${selected.value?.poster})`}"></div>
    </transition>
    <div class="header-recomendations">
      <div class="container">
        <div class="header-recomendations__movie">
          <div class="movie-info">
            <div class="movie__episodes-info">
              <div class="movie__episodes-time">24 мин / Серия</div>
                <span class="movie__episodes-count">Серий: 
                    <span class="count-num">
                        13
                    </span>
                    -
                </span>
              <span class="movie__episodes-status">Статус: <span class="status-value">Завершенный</span></span>
            </div>
            <div class="movie__title">{{selected.value?.title}}</div>
            <div class="movie__subtitle">
              {{ selected.value?.content }}
            </div>
            <div class="movie__watch-btn">
              <button class="slide">Смотреть</button>
            </div>
          </div>
          <div class="movie-recomendations__list">
            <div class="movie-slider">
                <Swiper
                    @swiper="setThumbsSwiper($event)"
                    :slides-per-view="3"
                    :space-between="30"
                >
                    <SwiperSlide v-for="slide in slideItems" :key="slide.id" @click="setActiveItem(slide)">
                        <div class="movie-item">
                            <img :src="slide.img" alt="">
                        </div>
                    </SwiperSlide>
                </Swiper> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Movie } from '@/modules/home/types/types'
const selectedItem = ref<Movie>()
const slideItems = ref<Array<Movie>>([
    {id: 1,poster: 'https://virtus-img.cdnvideo.ru/images/as-is/plain/0e/0e6cf1a1-8221-493d-8c0d-bfdc5f9a1d49.jpg', img: 'https://s5o.ru/storage/simple/cyber/edt/b0/df/66/c1/cybere92117dfe5c.jpg', title: 'Человек-бензопила', content: 'Дэндзи приходится полностью изменить свою жизнь, чтобы отработать непомерные долги отца. Он становится подручным якудзы в нелегком деле уничтожения демонов. На второй план отошли не только сон и отдых, а и общение с любимой девушкой. Только дьявольский питомец-помощник Почита вносит немного разнообразия в череду кровавых будней. Теперь у Дэндзи лишь одна цель – деньги, только в них он видит шанс на освобождение. Желая быстрей получить прибыль, парень забывает об осторожности и в одной из схваток погибает. Верный Почито спасает хозяина, слившись с ним и дав способность частичного превращения в бензопилу.Переродившийся Дэндзи продолжает крушить врагов налево и направо, чем привлекает внимание Бюро общественной безопасности. Теперь вместо якудзы ему приходится выполнять поручения правительства. В этом он видит возможность возвращения к нормальной жизни, поэтому, не страшась, выступает против самых могущественных противников. Но стоит ли так рьяно сокращать количество демонов? Не накличет ли Дэндзи еще больших бед?'},
    {id: 2, poster: 'https://anifound.org/uploads/posts/2022-11/1668872409_2222.jpg', img: 'https://animego.org/upload/anime/images/639f6b1915770743546275.jpg', title: 'Ложные выводы 2', content: 'Когда Иванаге Котоко было одиннадцать лет, она была похищена демонами, которые вознамерились сделать ее своей «Богиней мудрости» - посредником между человеческим и духовным миром. Это было неожиданно, но девочка быстро согласилась на эту авантюру. Увы, за силу нужно заплатить, и она лишилась правого глаза и левой ноги. С этого дня она стала значимой персоной в мире духов и к ней то и дело обращаются екаи и мифические создания за советом. С тех пор минуло шесть лет. Двадцатидвухлетний студент Куро Сакурагава только что пережил болезненный разрыв с любимой девушкой. Она бросила его из-за того, что парень сбежал при встрече с каппой. Куро же очень понравился Котоко, и она решила во что бы то ни стало выйти за него замуж. Но как завоевать его сердце? Он становится ее напарником по решению сверхъестественных конфликтов. Ведь, как оказалось, у него тоже есть некая сверспособность, и Куро вполне неплохо справляется со своими обязанностями.Так началось их невероятное приключение. И, кто знает, может у парня появятся чувства к его напарнице? Ведь Котоко мечтает об этом уже очень долго.'},
    {id: 3,poster: 'https://img5.goodfon.ru/original/1920x1080/c/dc/v-podzemele-ia-poidu-tam-krasavitsu-naidu-danmachi-devushka.jpg', img: 'https://animego.org/upload/anime/images/63ac98ef97c6f067593859.jpg', title: 'Может, я встречу тебя в подземелье? 4. Часть 2', content: 'Город лабиринтов Орарио — огромный город с невероятным количеством лабиринтов под ним (более известных как «подземелья»). Воздвинутый неизвестными людьми, в нём происходят сражения за честь, а также возникают отношения с миловидными девушками. В городе, где желания и мечты становятся явью, мальчик встречает небольшую «богиню». После того, как все остальные «семьи» дали Беллу холодный приём, мальчику, который определённо должен стать Авантюристом, и Богине без каких-либо участников в семье... Их встреча была предопределена судьбой. Да начнутся приключения самого необычного авантюриста!'},
    {id: 4, poster: 'https://wallpaperaccess.com/full/5613338.jpg', img: 'https://animego.org/upload/anime/images/63a9e7cb1b033692031561.jpg', title: 'Ниер: Автомата — Версия 1.1а', content: 'За тысячелетия своего существования человечество всегда выживало, даже в самых ужасных катастрофах. Но везение когда-нибудь заканчивается. Однажды на Землю пришли машины и обрушили на людей всю свою мощь. Перед лицом, казалось, несокрушимой угрозы человеческая раса была вынуждена покинуть Землю и укрыться на Луне. В изгнании люди создали армию боевых андроидов, дабы уничтожить захватчиков и вернуть дом, отнятый столетия назад. Это история об андроидах, что иногда человечнее своих создателей, и злых захватчиках из космоса. История о давно потерянном наследии и правде, которую лучше не знать.'},
    {id: 5, poster: 'https://www.teahub.io/photos/full/266-2668481_bleach-wallpaper-ichigo-hd.jpg', img: 'https://animego.org/upload/anime/images/6325a97c596a5704160745.jpg', title: 'Блич: Тысячелетняя кровавая война', content: 'Конец близок. "Готей 13" под угрозой полного уничтожения. Старый могущественный враг всех шинигами вновь объявляет войну Обществу душ. И это не кто иной, как сами квинси, возглавляемые новым императором Ванденрейха, зовущим себя Яхве. И цель его ясна, как блеск клинка занпакто. Он хочет убить Короля душ, захватить трон и на руинах построить свою новую империю. Так пламя тысячелетней кровавой войны разгорается с новой силой, а грядущая битва потрясёт оба мира и изменит судьбы многих. Насколько тяжёлым будет это испытание? А такие ли они хорошие, эти шинигами? И какой может быть цена победы в однажды начатой войне? Придётся узнать ответ…'},
    {id: 6,poster: 'https://wallpaperwaifu.com/wp-content/uploads/2022/09/lucy-cyberpunk-edgerunners-thumb-1500x844.jpg', img: 'https://animego.org/upload/anime/images/6321e088d91c5890130687.jpg', title: 'Киберпанк: Бегущие по краю', content: 'Найт-Сити — город будущего, оснащённый всевозможными новейшими технологиями. Город, где модификация тела не просто мечты безумных учёных, а реальность сродни обычной покупке. Именно там живёт наш юный герой, для которого этот город не является чем-то невообразимым, он знает всю его настоящую суть, где выживание не просто слово, а истинное лицо этого мира. В один миг, потеряв всё, что имел, парень не опускает рук и в борьбе за выживание становится наёмником по прозвищу Киберпанк.'},

])
const thumbsSwiper = ref(null);

function setThumbsSwiper(swiper: any)
{
    console.log(swiper);
    
    thumbsSwiper.value = swiper   
}

onMounted(() => 
{
    selectedItem.value = slideItems.value[0]
})
function setActiveItem(item: Movie)
{
    selectedItem.value =  item;
}
const selected = computed(() => selectedItem)
</script>
<style lang="scss">
.header-recomendations__wrapper
{
    position: relative;
    padding-top: 200px;
    .header-recomendations__movie
    {
        display: flex;
    }
    .movie-recomendations__list
    {
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex: 40%;

        .movie-slider
        {
            .movie-item
            {
                padding-right: 30px;
                margin-right: -30px;
                img
                {
                    height: 220px;
                    width: 160px;
                    object-fit: cover;
                    border-radius: 20px;
                }
            }
        }
    }
    .poster-background
    {
        background: url(../assets/img/posterimg1.png) no-repeat center;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        height: 800px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .header-recomendations
    {
        position: relative;
        z-index: 2;

        .movie-info
        {
            font-family: "Inter";
            flex: 60%;
            padding-bottom: 160px;
            .movie__episodes-info
            {
                .movie__episodes-time
                {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 15px;
                }
                .movie__episodes-count,.movie__episodes-status
                {
                    font-weight: 500;
                    color: #fff;
                    font-size: 20px;
                    .count-num,.status-value
                    {
                        color: $dark-red;
                    }
                }
            }
            .movie__title
            {
                font-weight: normal;
                font-size: 52px;
                color: #fff;
                margin: 20px 0;
            }
            .movie__subtitle
            {
                font-size: 16px;
                font-weight: 500;
                color: #fff;
                margin-bottom: 40px;
            }
            .movie__watch-btn
            {
                button
                {
                    background: none;
                    color: #fff;
                    border: 1px solid $dark-red;
                    font-size: 16px;
                    outline: none;
                    padding: 20px 0;
                    text-align: center;
                    width: 330px;

                    transition: 500ms all ease;
                    
                    &:hover,
                    &:focus { 
                        border-color: $dark-red;
                        color: #fff;
                    }
                }
                .slide:hover,
                .slide:focus 
                {
                    box-shadow: inset 330px 0 0 0 $dark-red;
                }
            }
        }
    }
}
</style>