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
        class="timelineCards__pagination swiper-pagination"
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
          delay: 5000
        },
        loop: true,
        speed: 700,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 's',
          bulletActiveClass: 's2',
          clickable: true,
          dynamicBullets: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`
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
    background: url('/images/mainTimeline/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__slide {
    width: 405px;
    height: 612px;
  }

  &__img {
    width: 100%;
    height: 403px;
  }

  &__info{
    position: absolute;
    bottom: 0;

    padding: 10px 10px 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;
    height: 309px;

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

  &__pagination {
    position: absolute;
    bottom: 200px;

    margin: 0 auto;
  }
}
</style>
