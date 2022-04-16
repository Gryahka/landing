<template>
  <div class="slider">
    <div class="slider__left">
      <h2 class="slider__title">
        The Plot and Setting
      </h2>

      <p class="slider__text">
        Bold Point — is an alternative reality, stuck in between dimensions, a mosaic of our world’s different pieces torn out of order and crashed by an ancient civilization.
      </p>
    </div>

    <div class="slider__right">
      <img
        class="slider__img"
        src="/images/slider/slider1.png"
        alt="sliderIMG"
      >

      <p class="slider__points">
        ....
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderPoint'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.slider {
    margin-left: 96px;
    display: flex;
    gap: 170px;
    &__left {
        max-width: 268px;

        margin-top: 56px;
    }

    &__title {
        font-family: "Cinzel";
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 48px;

        color: $grey;

        margin-bottom: 20px;
    }

    &__text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;

        color: $greyDark;
    }

    &__img {
        margin-bottom: 72px;
    }

    &__points {
        margin-bottom: 30px;
    }
}
</style>
