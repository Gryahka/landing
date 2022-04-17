<template>
  <div class="mainTimeline">
    <div class="mainTimeline__top">
      <h1 class="mainTimeline__title title_1 border border--line">
        Timeline
      </h1>

      <div class="mainTimeline__topTx">
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
      <div
        v-for="(item, index) in timelineList"
        :key="index"
        class="timeline__row"
      >
        <div class="timeline__artist">
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

        <div>
          <TimelineCards
            :cards-data="item.nftList"
            :artist-name="item.artist"
          />
        </div>
      </div>
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
          date: '07.04.2022',
          avatar: 'https://via.placeholder.com/150x600/222f1',
          nftList: [
            {
              name: 'Mountain artifact',
              prcie: '0.07 ETH 1/3',
              img: 'mountainArtifact.jpg',
              link: '/'
            },
            {
              name: 'Desert Artifact',
              prcie: '0.05 ETH 1/5',
              img: 'desertArtifact.jpg',
              link: '/'
            }
          ]
        },
        {
          artist: 'nikvsio',
          date: '10.04.2022',
          avatar: 'https://via.placeholder.com/50x20/2eee1',
          nftList: [
            {
              name: 'KNIGHT OF LIGHT',
              prcie: '0.09 ETH 1/1',
              img: 'knightOfLight.jpg',
              link: '/'
            },
            {
              name: 'Desert Artifact',
              prcie: '0.05 ETH 1/5',
              img: 'desertArtifact.jpg',
              link: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mainTimeline {
  &__top {
  }

  &__title {
    margin: 0 auto 48px;
    padding: 0 100px 20px;

    width: fit-content;
  }

  &__topTx {
    margin-bottom: 85px;
  }

  &__tx {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.04em;
    color: var(--tx_secondary);
  }

  &__timeline {
    margin: 0 auto;

    max-width: 1030px;
  }
}

.timeline {

  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__artist {
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

  &__avatar {
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
</style>
