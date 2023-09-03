<template>
  <div class="anime-player" v-if="currentAnime && playerLink">
    <div class="title-settings__popup"
              v-if="isPopupOpen"
          >
        <TitleSettings 
            :title-card="userStatistic" 
            v-click-outside="closePopup"
            :currentTitle="currentAnime"
            @updated="titleSettingsUpdated"
            @created="titleSettingsCreate"
            @delete="deleteUserBookmark"
        />
    </div>
    <iframe
      id="kodik-player"
      loading="lazy"
      :src="playerLink"
      height="550"
      frameborder="0"
      allowfullscreen
      allow="autoplay *; fullscreen *"
    ></iframe>
    
    <button class="anime-player__add-to-list btn" @click.stop="isPopupOpen = true">
      <Icon name="BookmarkIcon" size="20" />
    </button>
    <div class="anime-player__controlls">
      <div class="anime-player__voicies">
        <span class="voicies-label">Озвучка</span>
        <div class="voicies-list">
          <div 
            class="voice" 
              v-for="anime in allAnime" 
              :key="anime.id" 
              :class="{'active': animeTranslation?.id === anime.translation.id }"
              @click="changeTranslation(anime)"
            >
            <p>{{anime.translation.title}}</p>
            <span class="episodes-count" v-if="anime.last_episode">{{ anime.last_episode }} эп</span>
          </div>
        </div>
      </div>
      <div class="anime-player__episodes" v-if="(currentAnime.seasons)">
        <span class="episodes-label"> Серии </span>
        <div class="episodes-list">
          <Swiper :slides-per-view="5" :space-between="20">
            <SwiperSlide v-for="(episode, index) in animeEpisodes" :key="index">
              <div class="episode">
                <div class="episode-container" @click="changePlayerLink(episode.link)">
                  <img :src="episode.screenshots[0]" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number" @click="changePlayerLink(episode.link)">Серия {{index}}</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useAnime } from "../store/animeStore";
import AnimeDetail, { Episode, Translation } from "../types/AnimeDetail";
import { UserStatistic, UserStatisticEdit } from "~/modules/user/types/IUser";
import { useUserStore } from "~/modules/user/store/UserStore";
import api from "~/api/repositories/api";

const store = useAnime();

const currentAnime = computed(() => store.getCurrentAnime)
const allAnime = computed(() => store.anime)
const animeTranslation = ref(currentAnime.value?.translation)
const isPopupOpen = ref(false)
const userStatistic = ref<UserStatistic>();
const modifiedPlayerLink = ref(`${currentAnime.value?.link}?hide_selectors=true`)
const userStore = useUserStore();
const router = useRoute()

if(userStore.getUser?.id)
{
  setUserStatistics();
}

const playerLink = computed(() => 
{  
  return modifiedPlayerLink.value
})

const animeEpisodes = computed(() => 
{
  return checkValidIsSerial(currentAnime.value) ? currentAnime.value?.seasons[currentAnime.value.last_season].episodes as Episode[] : null
})
function titleSettingsCreate(titleCard: UserStatisticEdit)
{  
  closePopup();
  api.userRepository.createUserAnimeBookmark(titleCard, Number(router.params.id)).then(() => 
  {
    setUserStatistics();
  });
}
function titleSettingsUpdated(titleCard: UserStatisticEdit)
{
  closePopup();
  userStore.updateUserTopicTitle(titleCard, Number(titleCard.id))
}
function closePopup()
{    
  isPopupOpen.value = false
}
async function fetcUserTopic(): Promise<UserStatistic>
{
  const userId = Number(userStore?.getUser?.id);
  return api.userRepository.getUserBookmark(Number(router.params.id), userId)
}
async function setUserStatistics()
{
  userStatistic.value = await fetcUserTopic();
}
function changeTranslation(anime: AnimeDetail)
{
  store.setCurrentAnime(anime);
  changePlayerLink(anime.link);
  animeTranslation.value = anime.translation;
}
function deleteUserBookmark()
{
  closePopup();
  api.userRepository.deleteUserBookmark(Number(userStatistic.value?.id))
}

// Проверяет есть ли у аниме сезоны,
// если нет значит это фильм, ова или еще какая приблуда
// возвращает true если если сериал

function checkValidIsSerial(anime: AnimeDetail | null)
{
  if(anime?.seasons)
  {
    if(anime?.seasons[anime.last_season])
    {
      return true
    }
  }

  return false
}

function changePlayerLink(link: string)
{ 
  modifiedPlayerLink.value = `${link}?hide_selectors=true`
}


</script>
<style lang="scss">
.title-settings__popup
{
    background: rgba($color: #000000, $alpha: 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
}
.anime-player {
    .anime-player__add-to-list
    {
      display: flex;
      align-items: center;
      color: #fff;
      justify-content: center;
      background: #1c1c1c;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
      /* text-align: right; */
      margin-left: auto;
      border: none;
      outline: none;
      &:hover
      {
        transition: 300ms all ease;
        transform: scale(1.1);
      }
    }
    .anime-player__controlls
    {
        background: #1c1c1c;
        padding: 15px;
        margin: 10px 0 30px 0;
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
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
        background: #303030;
        margin-right: 10px;
        .episodes-count
        {
          color: #a9a9a9;
          font-size: 12px;
          margin-right: 10px;
          font-family: 'Open Sans';
        }
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
        background: #0e0e0e;
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
          display: block;
          margin-top: 5px;
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
