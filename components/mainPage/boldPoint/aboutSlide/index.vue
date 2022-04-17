<template>
  <div class="aboutSlide">
    <div class="aboutSlide__left">
      <h2 class="aboutSlide__title">
        {{ slideData.title }}
      </h2>

      <p class="aboutSlide__text">
        {{ slideData.text }}
      </p>
    </div>

    <div class="aboutSlide__right">
      <div class="aboutSlide__imgWrap">
        <img
          class="aboutSlide__img"
          :src="slideData.img"
          :alt="slideData.title"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSlide',

  props: {
    slideData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutSlide {
  display: flex;
  justify-content: space-between;
  gap: 40px;

  max-width: 1360px;
  width: 100%;

  &__left {
    flex-shrink: 0;

    padding-top: 56px;

    width: 300px;
  }

  &__title {
    margin-bottom: 20px;

    font-family: 'Cinzel';
    font-size: 42px;
    line-height: 48px;
    color: var(--title_tertiary);
  }

  &__text {
    font-size: 18px;
    line-height: 28px;
    color: var(--tx_tertiary);
  }

  &__right {
    flex-shrink: 0;

    width: 50vw;
  }

  &__imgWrap {
    position: relative;
    padding: 3px;

    max-width: 852px;

    border-radius: 12px;

    &::before{
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      border-radius: 12px;

      background: url('/images/bg.jpg');
    }
  }

  &__img {
    width: 100%;
    height: 100%;

    border-radius: 12px;
  }
}
</style>
