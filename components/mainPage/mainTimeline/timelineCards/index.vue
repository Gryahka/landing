<template>
  <div class="timelineCards">
    <Swiper
      :options="swiperOptions"
      class="timelineCards__swiper"
    >
      <SwiperSlide
        v-for="(item, index) in cardsData"
        :key="index"
        class="timelineCards__slide"
      >
        <img
          class="timelineCards__img"
          :src="'/images/mainTimeline/nfts/' + artistName + '/' + item.img"
          :alt="item.name"
        >

        <div class="timelineCards__info">
          <p class="timelineCards__name">
            {{ item.name }}
          </p>

          <p class="timelineCards__price">
            {{ item.prcie }}
          </p>

          <a
            class="timelineCards__link btn"
            :href="item.link"
            target="_blank"
          >
            <img
              class="btn__icon btn__icon--left"
              src="/icons/ornament.png"
              alt="ornament"
            >

            <p class="btn__text txWhite">
              Buy on opensea
            </p>

            <img
              class="btn__icon btn__icon--right"
              src="/icons/ornament.png"
              alt="ornament"
            >
          </a>
        </div>
      </SwiperSlide>

      <div
        slot="pagination"
        class="timelineCards__pagination"
      />
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'TimelineCards',
  components: {
    Swiper, SwiperSlide
  },

  props: {
    cardsData: {
      type: Array,
      required: true
    },
    artistName: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000
        },
        loop: true,
        speed: 700,
        effect: 'coverflow',
        slidesPerView: 'auto',
        pagination: {
          el: '.timelineCards__pagination',
          bulletClass: 'timelineCards__bullet',
          bulletActiveClass: 'timelineCards__bullet--active',
          clickable: true,
          dynamicBullets: true,
          renderBullet (index, className) {
            return `<button class="${className} swiper-pagination-bullet-custom"></button>`
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timelineCards {
  width: 405px;

  &__swiper {
  }

  &__slide {
    padding: 3px;

    width: 100%;
    height: 612px;

    overflow: hidden;

    border-radius: 12px;

    background: url('/images/mainTimeline/bg.jpg') no-repeat 50% 50%/cover;
  }

  &__img {
    width: 100%;
    height: 403px;

    border-radius: 12px;
  }

  &__info{
    position: absolute;
    bottom: 3px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    padding: 10px 10px 30px;

    width: calc(100% - 6px);
    height: 309px;

    border-radius: 12px;

    background: linear-gradient(0deg, #000000 66.22%, rgba(0, 0, 0, 0) 100%);
  }

  &__name {
    margin-bottom: 4px;

    font-family: 'Cinzel';
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.04em;
    color: var(--bd_secondary);
  }

  &__price {
    margin-bottom: 18px;

    font-family: 'Cinzel';
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.04em;
    color: var(--title_secondary);
  }

  &__link {
    padding: 11px 48px;

    max-width: none;
    width: auto;
  }
}
</style>

<style lang="scss">
.timelineCards {
  &__pagination {
    position: absolute;
    z-index: 2;
    bottom: 200px !important;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    width: 100% !important;
    height: 22px;
  }

  &__bullet {
    flex-shrink: 0;

    width: 14px;
    height: 14px;

    background: url('~/static/icons/circle.png');
    background-size: contain;
    background-repeat: no-repeat;

    filter: grayscale(1);

    transition: 0.3s;

    &--active {
      filter: grayscale(0);
      transform: scale(1.6);
    }
  }
}
</style>
