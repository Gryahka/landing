<template>
  <div class="bold">
    <div class="bold__inner">
      <div class="bold__top">
        <h1 class="bold__title">
          Bold Point is
        </h1>

        <div class="bold__topLineRow">
          <svgicon
            class="bold__topLine bold__topLine--left"
            :name="'halfLineLilac'"
            :original="true"
          />

          <svgicon
            class="bold__topLine bold__topLine--right"
            :name="'halfLineLilac'"
            :original="true"
          />
        </div>

        <div class="bold__textRow">
          <img
            class="bold__ornament bold__ornament--left"
            src="/icons/ornamentSmall.png"
            alt="ornament"
          >

          <p class="bold__text">
            Bold Point is your portal to a parallel universe
          </p>

          <img
            class="bold__ornament bold__ornament--right"
            src="/icons/ornamentSmall.png"
            alt="ornament"
          >
        </div>
      </div>

      <!-- <img
        class="bold__bgLight"
        src="/images/light.png"
        alt="ornament"
      > -->
      <div class="bold__bgLight bold__bgLight--left" />
      <div class="bold__bgLight bold__bgLight--right" />

      <!-- <div class="bold__slider"> -->
      <div class="bold__sliderInner">
        <SliderPoint />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import SliderPoint from '@/components/mainPage/boldPoint/sliderPoint/index.vue'

export default {
  name: 'BoldPoint',

  components: {
    SliderPoint
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";

.bold {
max-width: 1920px;

margin: 0 auto;

  background-image: url("/images/pointsBg.png");
  background-repeat: no-repeat;
  background-position-x: center;

  position: relative;

  &__inner {
  margin-top: 225px;

    background-image: url("/images/bdrBgPoints.png");
    background-repeat: no-repeat;
  background-position-x: 546px;
  background-position-y: 93px;
  }

  &__title {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;

    color: $lilac;

    text-align: center;
    letter-spacing: -0.02em;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.9);

    margin-bottom: 6px;
  }

  &__topLineRow {
    display: flex;

    margin-bottom: 32px;
  }

  &__topLine {
    position: absolute;

    width: 406px;

    &--left {
      transform: rotate(180deg);
      left: 527px;
    }

    &--right {
      left: 932px;
    }
  }

  &__textRow {
    display: flex;
justify-content: center;
    position: relative;

    margin-bottom: 76px;
  }

  &__ornament {
    position: absolute;

    width: 24px;
    height: 35px;

    &--left {
      transform: rotate(-90deg);
      left: 667px;
    }

    &--right {
      transform: rotate(90deg);
      left: 1167px;
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

  &__bgLight {
    position: absolute;

background: #A63DFF;
    filter: blur(600px);
transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 411px;
    height: 411px;
    border-radius: 50%;

    &--left {
      left: -227px;
    }

     &--right {
      right: 1px;
      bottom: -208px;
    }
  }

  &__sliderInner {
    // margin-bottom: 202px;
  }
}
</style>
