<template>
  <div class="mainTimeline">
    <div class="mainTimeline__top">
      <h1 class="mainTimeline__title title_1 border border--line">
        Timeline
      </h1>

      <div class="mainTimeline__topTx text_inter_24">
        <p class="mainTimeline__tx">
          Each artist makes from 2 to 5 works in different editions
        </p>

        <p class="mainTimeline__tx">
          The works are then released on a certain date
        </p>

        <p class="mainTimeline__tx">
          Follow our news and announcements to learn more
        </p>
      </div>
    </div>

    <div class="mainTimeline__timeline timeline">
      <div class="timeline__inner">
        <div
          v-for="(item, index) in timelineList"
          :key="index"
          class="timeline__row"
        >
          <div class="timeline__artist">
            <div class="timeline__wrap">
              <p class="timeline__date">
                {{ item.date }}
              </p>

              <div class="timeline__avatar avatar">
                <img
                  class="avatar__img"
                  :src="item.avatar"
                  :alt="item.artist"
                >

                <p class="avatar__name">
                  {{ item.artist }}
                </p>
              </div>
            </div>
          </div>

          <div class="timeline__line">
            <svgicon
              class="timeline__dot"
              name="dotStyled"
              :original="true"
            />
          </div>

          <div class="timeline__slider">
            <TimelineCards
              :cards-data="item.nftList"
              :artist-name="item.artist"
            />
          </div>
        </div>
      </div>

      <!-- <button class="timeline__btn btn">
        <img
          class="btn__icon btn__icon--left"
          src="/icons/ornament.png"
          alt="ornament"
        >

        <p class="btn__text txWhite">
          Show more
        </p>

        <img
          class="btn__icon btn__icon--right"
          src="/icons/ornament.png"
          alt="ornament"
        >
      </button> -->
    </div>
  </div>
</template>

<script>
import TimelineCards from './timelineCards/index.vue'

export default {
  name: 'MainTimeline',
  components: {
    TimelineCards
  },

  data () {
    return {
      timelineList: [
        {
          artist: 'hoshi',
          date: '18.04.2022',
          avatar: '/images/avatars/hoshi.png',
          nftList: [
            {
              name: 'Forest Artifact',
              prcie: '0.09 ETH 1/1',
              img: 'forestArtifact.jpg',
              link: 'https://www.dropbox.com/s/q3vd4wxaclhnz85/1%20%28Hoshi%29.jpg?dl=0'
            },
            {
              name: 'Mountain artifact',
              prcie: '0.07 ETH 1/3',
              img: 'mountainArtifact.jpg',
              link: 'https://www.dropbox.com/s/rqazdzgmsi2upfl/2%20%28Hoshi%29.jpg?dl=0'
            },
            {
              name: 'Desert Artifact',
              prcie: '0.05 ETH 1/5',
              img: 'desertArtifact.jpg',
              link: 'https://www.dropbox.com/s/3gvnn5vxdclcuif/3%20%28Hoshi%29.jpg?dl=0'
            },
            {
              name: 'Steppe Artifact',
              prcie: '0.03 ETH 1/7',
              img: 'steppeArtifact.jpg',
              link: 'https://www.dropbox.com/s/uff07yccoekd7ax/4%20%28Hoshi%29.jpg?dl=0'
            }
          ]
        }
        // {
        //   artist: 'nikvsio',
        //   date: '10.04.2022',
        //   avatar: 'https://via.placeholder.com/50x20/2eee1',
        //   nftList: [
        //     {
        //       name: 'KNIGHT OF LIGHT',
        //       prcie: '0.09 ETH 1/1',
        //       img: 'knightOfLight.jpg',
        //       link: '/'
        //     },
        //     {
        //       name: 'KNIGHT OF LIGHT',
        //       prcie: '0.09 ETH 1/1',
        //       img: 'knightOfLight.jpg',
        //       link: '/'
        //     },
        //     {
        //       name: 'KNIGHT OF LIGHT',
        //       prcie: '0.09 ETH 1/1',
        //       img: 'knightOfLight.jpg',
        //       link: '/'
        //     },
        //     {
        //       name: 'Desert Artifact',
        //       prcie: '0.05 ETH 1/5',
        //       img: 'desertArtifact.jpg',
        //       link: '/'
        //     }
        //   ]
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mainTimeline {
  padding: 60px 0 150px;

  background: url('/images/mainTimeline/bgGame.jpg') no-repeat;
  background-position: bottom;

  box-shadow: inset 0px 0px 20px 11px var(--bg_main);

  &__title {
    margin: 0 auto 48px;
    padding: 0 100px 20px;

    width: fit-content;
  }

  &__topTx {
    position: relative;

    margin: 0 auto 85px;

    width: fit-content;

    &::before,
    &::after {
      content: "";

      position: absolute;
      top: 0;

      display: block;

      width: 35px;
      height: 35px;

      background: url('/icons/ornamentSmall.png') no-repeat center center/contain;
    }

    &::after {
      right: -55px;

      transform: rotate(90deg);
    }

    &::before {
      left: -55px;

      transform: rotate(-90deg);
    }
  }

  &__tx {
    text-align: center;
  }

  &__timeline {
    margin: 0 auto;

    max-width: 1030px;
  }
}

.timeline {
  &__inner {
    display: grid;
    gap: 80px;

    margin-bottom: 220px;
  }

  &__row {
    display: flex;
    justify-content: center;

    &:nth-child(even) {
      flex-direction: row-reverse;

      & .timeline__artist {
        justify-content: flex-start;
      }

      & .timeline__slider {
        &::before {
          background: rgb(154 161 56 / 28%);

          box-shadow: 50px -17px 90px 80px rgba(154, 161, 56, 0.28);

          animation: rotation 5s infinite linear;
        }
      }
    }
  }

  &__artist {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;

    margin-top: 120px;

    width: 405px;
  }

  &__date {
    margin-bottom: 32px;

    font-family: 'Cinzel';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.04em;

    background: linear-gradient(221.97deg, #D2D2D2 23.68%, #6C15AA 76.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &__line{
    position: relative;

    display: flex;
    flex-shrink: 0;

    width: 190px;

    &::before{
      content: "";
      position: absolute;
      top: 50%;
      left: calc(50% - 2px);

      width: 2px;
      height: 80%;

      background: radial-gradient(circle, rgba(255,255,255,1) 73%, rgba(143,176,210,0) 100%);

      transform: translateY(-50%);
    }
  }

  &__dot{
    position: relative;
  }

  &__slider{
    position: relative;

    flex-shrink: 0;

    &::before {
      content: "";
      position: absolute;
      top: 30%;

      width: 100%;
      height: 50%;

      border-radius: 50%;

      background: rgb(166 61 255 / 25%);

      box-shadow: 20px -17px 90px 80px rgb(166 61 255 / 28%);

      animation: rotation 5s infinite linear reverse;
    }
  }
}

.avatar {
  &__img {
    margin-bottom: 16px;

    width: 220px;
    height: 220px;
  }

  &__name {
    font-family: 'Cinzel';
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--title_secondary);
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
