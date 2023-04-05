<template>
  <div class="anime-player">
    <iframe
      id="kodik-player"
      loading="lazy"
      :src="modifiedPlayerLink"
      height="550"
      frameborder="0"
      allowfullscreen
      allow="autoplay *; fullscreen *"
    ></iframe>
    <div class="anime-player__controlls">
      <div class="anime-player__voicies">
        <span class="voicies-label">Озвучка</span>
        <div class="voicies-list">
          <div 
            class="voice" 
              v-for="anime in allAnime" 
              :key="anime.id" 
              :class="{'active': anime.translation.id === currentAnime.translation.id}"
              @click="changeTranslationAnime(anime)"
            >
            <p>{{anime.translation.title}}</p>
          </div>
        </div>
      </div>
      <div class="anime-player__episodes" v-if="currentAnime.material_data.anime_kind != 'movie'">
        <span class="episodes-label"> Серии </span>
        <div class="episodes-list">
          <Swiper :slides-per-view="5" :space-between="20">
            <SwiperSlide v-for="(episode, index) in episodesModified" :key="index">
              <div class="episode">
                <div class="episode-container" @click="currentPlayerLink = episode.link">
                  <img :src="episode.screenshots[0]" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number" @click="currentPlayerLink = episode.link">Серия {{index}}</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAnime } from "../store/animeStore";
import AnimeDetail, { Episode } from "../types/AnimeDetail";

const store = useAnime();



const allAnime = computed(() => 
{
  return store.allAnime
})

const currentAnime = ref<AnimeDetail>(allAnime.value[0]);

const currentPlayerLink = ref(currentAnime.value.link);

const modifiedPlayerLink = computed(() => 
{
  return `${currentPlayerLink.value}?hide_selectors=true`
})

watchEffect(() => currentAnimeUpdated(currentAnime.value))

function currentAnimeUpdated(updatedAnime: AnimeDetail)
{
  currentPlayerLink.value = updatedAnime.link
}

/*
**  проверка на тип анимме
**  это фильм или сериал
*/
const episodesModified = computed(() => 
{
    if(allAnime.value[0]?.material_data.anime_kind === 'movie')
    {
        return allAnime.value[0].link
    }
    return allAnime.value[0]?.seasons[allAnime.value[0].last_season].episodes
})

function changeTranslationAnime(selectedAnime: AnimeDetail)
{
  currentAnime.value = selectedAnime
}

</script>
<style lang="scss">
.anime-player {
    .anime-player__controlls
    {
        background: #1c1c1c;
        padding: 15px;
        margin: 30px 0 30px 0;
        border-radius: 6px;
    }
  .anime-player__voicies {
    margin-top: 10px;
    .voicies-label {
      font-size: 16px;
      color: #fff;
      font-weight: 700;
      font-family: "Open Sans";
    }
    .voicies-list {
      display: flex;
      margin-top: 10px;

      flex-wrap: wrap;
      .voice {
        cursor: pointer;
        border-radius: 5px;
        background: #303030;
        margin-right: 10px;
        p {
          color: #fff;
          font-family: "Open Sans";
          font-weight: 600;
          font-size: 14px;
          margin: 10px;
        }
      }
      .active
      {
        transition: 300ms all ease-in-out;
        background: #669966;
        p
        {
          color: #fff;
        }
      }
    }
  }
  .anime-player__episodes {
    margin-top: 20px;
    .episodes-label {
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      font-family: "Open Sans";
    }
    .episodes-list {
      margin-top: 10px;
      .episode {
        width: 100%;
        padding-right: 30px;
        // overflow: hidden;
        border-radius: 3px;
        .episode__number {
          cursor: pointer;
          color: #fff;
          font-family: "Open Sans";
          font-size: 14px;
          font-weight: 500;
        }
        .episode-container {
          cursor: pointer;
          border-radius: 3px;
        //   width: 220px;
          position: relative;
          height: 115px;
          overflow: hidden;
          .play-icon {
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            left: 0;
            z-index: 3;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          img {
            width: 100%;
            height: 115px;
            border-radius: 3px;
            // padding-right: 30px;
            object-fit: cover;
          }
          .episode__release-day {
            position: absolute;
            top: 50%;
            z-index: 3;
            transform: translate(0, -50%);
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            text-align: center;

            .day-number {
              display: block;
              font-family: "Roboto" sans-serif;
              font-weight: 500;
              font-size: 48px;
              line-height: 38px;
              color: #fff;
            }
            .day-mounth {
              color: #fff;
              font-size: 18px;
              font-weight: 500;
              font-family: "Open Sans";
            }
          }
        }
        .episode-container::before {
          content: "";
          display: block;
          z-index: 3;
          position: absolute;
          background: rgba($color: #000000, $alpha: 0.4);
          height: 100%;
          border-radius: 3px;
          width: 100%;
        }
      }
      .episode:hover img {
        transition: 300ms all ease;
        transform: scale(1.2);
      }
    }
  }
}
</style>
