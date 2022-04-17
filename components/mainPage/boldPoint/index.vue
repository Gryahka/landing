<template>
  <div class="bold">
    <div class="bold__top">
      <h1 class="bold__title border border--line">
        Bold Point is
      </h1>

      <div class="bold__textRow">
        <p class="bold__text">
          Bold Point is your portal to a parallel universe
        </p>
      </div>
    </div>

    <div class="bold__bottom">
      <Swiper
        :options="swiperOptions"
        class="timelineCards__swiper"
      >
        <SwiperSlide
          v-for="(item, index) in slideList"
          :key="index"
          class="timelineCards__slide"
        >
          <AboutSlide :slide-data="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AboutSlide from './aboutSlide/index.vue'

export default {
  name: 'BoldPoint',
  components: {
    Swiper,
    SwiperSlide,
    AboutSlide
  },

  data () {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000
        },
        loop: true
      },
      slideList: [
        {
          title: 'The Plot and Setting',
          text: 'Bold Point — is an alternative reality, stuck in between dimensions, a mosaic of our world’s different pieces torn out of order and crashed by an ancient civilization.',
          img: '/images/mainAbout/slides/img_1.jpg'
        },
        {
          title: 'DAO and DeFi mechanics',
          text: 'The community has the power to decide on the use of different characters, tactics, and other objects in a completely transparent and decentralized manner.',
          img: '/images/mainAbout/slides/img_2.jpg'
        },
        {
          title: 'Play to Earn',
          text: 'In Bold Point, your gaming skills have real value and can bring you uncountable rewards. With few steps you can extract game resources, craft new items and sell them to players on the market or NPC shops.',
          img: '/images/mainAbout/slides/img_3.jpg'
        },
        {
          title: 'BP Arena',
          text: 'The Bold Point champions team will battle against other contenders. The winner will be the last player standing.',
          img: '/images/mainAbout/slides/img_4.jpg'
        },
        {
          title: 'Gold PvP',
          text: 'Battles against other characters in which the winner receives a prize pool determined by the participants',
          img: '/images/mainAbout/slides/img_5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bold {
  margin: 0 auto;
  padding: 80px 16px;

  max-width: 1920px;

  background: url("/images/mainAbout/bgAbout.jpg") no-repeat 50% 50%/cover;

  &__title {
    margin: 0 auto 32px;
    padding: 0 100px 16px;

    width: fit-content;

    font-family: "Cinzel";
    font-size: 72px;
    line-height: 72px;

    color: $lilac;

    text-align: center;
    letter-spacing: -0.02em;
  }

  &__textRow {
    position: relative;

    display: flex;
    justify-content: center;

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

  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: $white;

    text-align: center;
    opacity: 0.7;
  }
}
</style>
