<template>
  <div class="header-recomendations__wrapper">
	<Swiper
	  :modules="[SwiperThumbs]"
	  :thumbs="{ swiper: thumbsSwiper }"
	  class="header-swiper"
	>
	  <SwiperSlide v-for="slide in slideItems" :key="slide.id">
		<div
		  class="poster-background"
		  :style="{ background: `url(${slide.poster})` }"
		></div>
		<div class="header-recomendations">
		  <div class="container">
			<div class="header-recomendations__movie">
			  <div class="movie-info">
				<div class="movie__episodes-info">
				  <div class="movie__episodes-time">24 мин / Серия</div>
				  <span class="movie__episodes-count"
					>Серий:
					<span class="count-num"> 13 </span>
					-
				  </span>
				  <span class="movie__episodes-status"
					>Статус: <span class="status-value">Завершенный</span></span
				  >
				</div>
				<div class="movie__title">{{ slide.title }}</div>
				<div class="movie__subtitle">
				  {{ slide.content }}
				</div>
				<div class="movie__watch-btn">
				  <button class="slide">Смотреть</button>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </SwiperSlide>
	</Swiper>
	<div class="movie-recomendations__list">
	  <div class="movie-slider">
		<Swiper
			class="header__swiper-small"
			@swiper="setThumbsSwiper($event)"
			:modules="[SwiperThumbs, Scrollbar]"
			:slides-per-view="3"
			:scrollbar="{ hide: false, draggable: true }"
		>
		  <SwiperSlide v-for="slide in slideItems" :key="slide.id">
			<div class="movie-item">
			  <img :src="slide.img" alt="" />
			</div>
		  </SwiperSlide>
		</Swiper>
	  </div>
	</div>
  </div>
</template>
<script lang="ts" setup>
import { Movie } from "@/modules/home/types/types";
import { Scrollbar } from "swiper";
const slideItems = ref<Array<Movie>>([
  {
	id: 1,
	poster:
	  "https://pbs.twimg.com/media/B6myKuICEAIGS4-.png:large",
	img: "https://media.2x2tv.ru/content/images/2022/04/----------------5.jpg",
	title: "Мастера Меча Онлайн",
	content:
	  "Начало двадцать первого века, японский гений создал вселенную, релиз которой ждал весь мир «искусство меча». Геймеры получили возможность полного погружения. Новинка стала самой ожидаемой и десять тысяч образцов с молниеносной скоростью исчезли с прилавков. Все вошли в реальность, растворившись в ней и собрались в Городе. Появился создатель. Огромная черная тень пояснила участникам, что вернуться в реальный мир возможно только пройдя всю игру. Но есть один жестокий момент, виртуальная смерть означает и смерть в реальной жизни и пройти её наобум не получится. После громких слов создатель испарился, оставив игроков одних. Реакция на сообщение оказалась разной. Началось отчаяние, кто-то объединился с другими, а некоторые, как герой Кадзуто, пошли по пути одни. Киригая сирота и поэтому попав в этот мир, он ни чего не теряет. Он бета-тестер и зная всё об этой игре, быстро завоевал популярность у игроков. Герой понимает, что без взаимодействия с другими ему не выбраться и приходится налаживать контакты с остальными игроками. А пока идёт бой на мечах, всем предстоит увидеть ещё немало удивительных вещей.",
  },
  {
	id: 2,
	poster: "https://anifound.org/uploads/posts/2022-11/1668872409_2222.jpg",
	img: "https://animego.org/upload/anime/images/639f6b1915770743546275.jpg",
	title: "Ложные выводы 2",
	content:
	  "Когда Иванаге Котоко было одиннадцать лет, она была похищена демонами, которые вознамерились сделать ее своей «Богиней мудрости» - посредником между человеческим и духовным миром. Это было неожиданно, но девочка быстро согласилась на эту авантюру. Увы, за силу нужно заплатить, и она лишилась правого глаза и левой ноги. С этого дня она стала значимой персоной в мире духов и к ней то и дело обращаются екаи и мифические создания за советом. С тех пор минуло шесть лет. Двадцатидвухлетний студент Куро Сакурагава только что пережил болезненный разрыв с любимой девушкой. Она бросила его из-за того, что парень сбежал при встрече с каппой. Куро же очень понравился Котоко, и она решила во что бы то ни стало выйти за него замуж. Но как завоевать его сердце? Он становится ее напарником по решению сверхъестественных конфликтов. Ведь, как оказалось, у него тоже есть некая сверспособность, и Куро вполне неплохо справляется со своими обязанностями.Так началось их невероятное приключение. И, кто знает, может у парня появятся чувства к его напарнице? Ведь Котоко мечтает об этом уже очень долго.",
  },
  {
	id: 3,
	poster:
	  "https://img5.goodfon.ru/original/1920x1080/c/dc/v-podzemele-ia-poidu-tam-krasavitsu-naidu-danmachi-devushka.jpg",
	img: "https://animego.org/upload/anime/images/63ac98ef97c6f067593859.jpg",
	title: "Может, я встречу тебя в подземелье? 4. Часть 2",
	content:
	  "Город лабиринтов Орарио — огромный город с невероятным количеством лабиринтов под ним (более известных как «подземелья»). Воздвинутый неизвестными людьми, в нём происходят сражения за честь, а также возникают отношения с миловидными девушками. В городе, где желания и мечты становятся явью, мальчик встречает небольшую «богиню». После того, как все остальные «семьи» дали Беллу холодный приём, мальчику, который определённо должен стать Авантюристом, и Богине без каких-либо участников в семье... Их встреча была предопределена судьбой. Да начнутся приключения самого необычного авантюриста!",
  },
  {
	id: 4,
	poster: "https://wallpaperaccess.com/full/5613338.jpg",
	img: "https://animego.org/upload/anime/images/63a9e7cb1b033692031561.jpg",
	title: "Ниер: Автомата — Версия 1.1а",
	content:
	  "За тысячелетия своего существования человечество всегда выживало, даже в самых ужасных катастрофах. Но везение когда-нибудь заканчивается. Однажды на Землю пришли машины и обрушили на людей всю свою мощь. Перед лицом, казалось, несокрушимой угрозы человеческая раса была вынуждена покинуть Землю и укрыться на Луне. В изгнании люди создали армию боевых андроидов, дабы уничтожить захватчиков и вернуть дом, отнятый столетия назад. Это история об андроидах, что иногда человечнее своих создателей, и злых захватчиках из космоса. История о давно потерянном наследии и правде, которую лучше не знать.",
  },
  {
	id: 5,
	poster:
	  "https://www.teahub.io/photos/full/266-2668481_bleach-wallpaper-ichigo-hd.jpg",
	img: "https://animego.org/upload/anime/images/6325a97c596a5704160745.jpg",
	title: "Блич: Тысячелетняя кровавая война",
	content:
	  'Конец близок. "Готей 13" под угрозой полного уничтожения. Старый могущественный враг всех шинигами вновь объявляет войну Обществу душ. И это не кто иной, как сами квинси, возглавляемые новым императором Ванденрейха, зовущим себя Яхве. И цель его ясна, как блеск клинка занпакто. Он хочет убить Короля душ, захватить трон и на руинах построить свою новую империю. Так пламя тысячелетней кровавой войны разгорается с новой силой, а грядущая битва потрясёт оба мира и изменит судьбы многих. Насколько тяжёлым будет это испытание? А такие ли они хорошие, эти шинигами? И какой может быть цена победы в однажды начатой войне? Придётся узнать ответ…',
  },
  {
	id: 6,
	poster:
	  "https://wallpaperwaifu.com/wp-content/uploads/2022/09/lucy-cyberpunk-edgerunners-thumb-1500x844.jpg",
	img: "https://animego.org/upload/anime/images/6321e088d91c5890130687.jpg",
	title: "Киберпанк: Бегущие по краю",
	content:
	  "Найт-Сити — город будущего, оснащённый всевозможными новейшими технологиями. Город, где модификация тела не просто мечты безумных учёных, а реальность сродни обычной покупке. Именно там живёт наш юный герой, для которого этот город не является чем-то невообразимым, он знает всю его настоящую суть, где выживание не просто слово, а истинное лицо этого мира. В один миг, потеряв всё, что имел, парень не опускает рук и в борьбе за выживание становится наёмником по прозвищу Киберпанк.",
  },
]);
const thumbsSwiper = ref(null);

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}
</script>
<style lang="scss">
.header-recomendations__wrapper {
	position: relative;
	height: 650px;

  .header-recomendations__movie {
		display: flex;
  }

  .header-swiper {
		height: 100%;
  }
  .movie-recomendations__list 
  {
	min-width: 0;
	display: flex;
	flex-direction: column;
	position: relative;
	/* width: 1440px; */
	right: 0;
	bottom: 30px;
	width: calc(100% - 68px);
	margin: 0 auto;
	max-width: 1440px;
	.swiper-slide
	{
		display: flex;
		justify-content: center;
	}
	.movie-slider {
		width: 450px;
		position: absolute;
		right: 0;
		top: -250px;
		.movie-item {
			display: flex;
			justify-content: center;
			position: relative;
			padding-right: 34px;
			margin-right: -30px;
			height: 220px;
			width: 155px;
			img {
				bottom: 0;
				position: absolute;
				height: 180px;
				width: 130px;
				object-fit: cover;
				border-radius: 20px;
			}
		}
	}
  }
  .poster-background {
		background: url(../assets/img/posterimg1.png) no-repeat center;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		height: 650px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
  }
  .poster-background::before
  {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	height: 650px;
	width: 100%;
	background: #000;
	opacity: 0.7;
  }
  .header-recomendations {
		position: relative;
		z-index: 2;
		padding-top: 100px;

	.movie-info {
		font-family: "Inter";
		max-width: 60%;
		padding-bottom: 160px;
	  .movie__episodes-info {
		.movie__episodes-time {
			color: #fff;
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 15px;
		}
		.movie__episodes-count,
		.movie__episodes-status {
			font-weight: 500;
			color: #fff;
			font-size: 20px;
			.count-num,
			.status-value {
				color: $dark-red;
			}
		}
	  }
	  .movie__title {
			font-weight: normal;
			font-size: 52px;
			color: #fff;
			margin: 20px 0;
	  }
	  .movie__subtitle {
			font-size: 16px;
			font-weight: 500;
			color: #fff;
			margin-bottom: 40px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -moz-box;
			-moz-box-orient: vertical;
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
			line-clamp: 5;
			box-orient: vertical;
			height: 100px;
	  }
	  .movie__watch-btn {
		button {
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
		.slide:focus {
		  	box-shadow: inset 330px 0 0 0 $dark-red;
		}
	  }
	}
  }
  .header__swiper-small
  {
	padding-bottom: 40px;
	.swiper-slide-thumb-active
	{
		.movie-item
		{
			img
			{
				transform: scale(1.2) translate(0, -8%);
				transition: .3s all ease;
			}
		}
		
	}
	
	.swiper-scrollbar-horizontal
	{
		background-color: #333333;
		height: 12px;
	}
	.swiper-scrollbar-drag
	{
		background-color: #707179;
	}
  }
}
</style>
