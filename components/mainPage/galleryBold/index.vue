<template>
  <div class="gallery">
    <div class="gallery__inner">
      <h1 class="gallery__title txLilac">
        Welcome to the Bold Point Gallery!
      </h1>

      <div class="gallery__textRow">
        <img
          class="gallery__ornament gallery__ornament--left"
          src="/icons/ornamentSmall.png"
          alt="ornament"
        >

        <p class="gallery__text">
          You can visit our exhibition in virtual reality at any time <br>
          Join our exposition and buy paintings
        </p>

        <img
          class="gallery__ornament gallery__ornament--right"
          src="/icons/ornamentSmall.png"
          alt="ornament"
        >
      </div>

      <p class="gallery__textGold txGold">
        Now it's your turn to enter a new virtual environment and find your
        destiny!
      </p>

      <nuxt-link
        class="gallery__link btn"
        to="/"
      >
        <img
          class="gallery__btnIcon btn__icon btn__icon--left"
          src="/icons/ornament.png"
          alt="ornament"
        >

        <p class="gallery__btnText btn__text txWhite">
          join VR-gallery
        </p>

        <img
          class="gallery__btnIcon btn__icon btn__icon--right"
          src="/icons/ornament.png"
          alt="ornament"
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryBold'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.gallery {
  background-image: url("/images/welcomBg.png");
background-repeat: no-repeat;
background-position-x: center;

  &__inner {
    padding-top: 120px;
    padding-bottom: 220px;
    }

  &__title {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;

    text-align: center;
    letter-spacing: -0.02em;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.9);

    margin-bottom: 44px;
  }

  &__textRow {
    margin-bottom: 40px;
    display: flex;
    gap: 20px;
   justify-content: center;
  }

  &__ornament {
    width: 24px;
    height: 35px;

    object-fit: contain;

    &--left {
      transform: rotate(-90deg);
    }

    &--right {
      transform: rotate(90deg);
    }
  }

  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    text-align: center;
  }

  &__textGold {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.04em;

    margin-bottom: 48px;
  }
}

.btn {
  min-width: 340px;
}
</style>
