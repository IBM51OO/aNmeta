<template>
  <div class="anime-player">
    <iframe
      id="kodik-player"
      loading="lazy"
      src="//kodik.info/serial/27074/307742332afb697638fcf78510f0ef91/720p"
      height="550"
      frameborder="0"
      allowfullscreen
      allow="autoplay *; fullscreen *"
    ></iframe>
    <div class="anime-player__controlls">
      <div class="anime-player__voicies">
        <span class="voicies-label">Озвучка</span>
        <div class="voicies-list">
          <div class="voice">
            <p>СВ-Дубль</p>
          </div>
          <div class="voice">
            <p>AniLibria</p>
          </div>
          <div class="voice">
            <p>AniDUB</p>
          </div>
          <div class="voice">
            <p>SHIZA Project</p>
          </div>
          <div class="voice">
            <p>AniMedia</p>
          </div>
          <div class="voice">
            <p>Onibaku Group</p>
          </div>
        </div>
      </div>
      <div class="anime-player__episodes">
        <span class="episodes-label"> Серии </span>
        <div class="episodes-list">
          <Swiper :slides-per-view="5" :space-between="20">
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day" v-if="false">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="episode">
                <div class="episode-container">
                  <img src="../assets/img/ss.jpg" alt="" />
                  <div class="play-icon" v-if="false">
                    <Icon name="PlayIcon" size="38" />
                  </div>
                  <div class="episode__release-day">
                    <span class="day-number"> 6 </span>
                    <span class="day-mounth"> мая </span>
                  </div>
                </div>
                <span class="episode__number">Серия 1</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
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
          color: #fff;
          font-family: "Open Sans";
          font-size: 14px;
          font-weight: 500;
        }
        .episode-container {
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
