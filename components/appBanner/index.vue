<template>
  <div class="banner">
    <div class="banner__inner">
      <div class="banner__top txGreyMed">
        <a href="https://t.me/bold_point" class="banner__link">telegram</a>
        <a
          href="https://twitter.com/bold_point"
          class="banner__link"
        >
          Twitter
        </a>
        <a
          href="https://yay-games.medium.com/"
          class="banner__link"
        >
          medium
        </a>
      </div>

      <div class="banner__center">
        <h1
          id="main"
          class="banner__centerTitle title_1 txGold border border--line"
        >
          Bold Point — Art Project
        </h1>

        <p class="banner__centerText">
          11 digital artists were inspired by Bold Point and are showcasing
          their vision of the game’s universe. Join us as a collector or artist
          and participate in the competition. Breathe new life into the Bold
          Point metaverse!
        </p>

        <nuxt-link
          class="banner__centerLink btn"
          to="https://opensea.io/collection/boldpoint"
        >
          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--left"
            src="/icons/ornament.png"
            alt="ornament"
          >

          <p class="banner__centerBtnText btn__text txWhite">
            Buy art
          </p>

          <img
            class="banner__cenerBtnIcon btn__icon btn__icon--right"
            src="/icons/ornament.png"
            alt="ornament"
          >
        </nuxt-link>
      </div>
    </div>

    <div class="banner__scroll">
      <img
        class="banner__iconScroll"
        src="/icons/scrollDown.svg"
        alt="scroll"
      >

      <p class="banner__scrollText">
        Learn more
      </p>
    </div>

    <svgicon class="banner__icon" :name="'blackLine'" :original="true" />
  </div>
</template>

<script>

export default {
  name: 'AppBanner'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";

.banner {
  max-width: 1920px;

  margin: 0 auto;
  padding-bottom: 112px;

  background-image: linear-gradient(
      90.39deg,
      #000000 17.86%,
      rgba(0, 0, 0, 0.58) 52.83%,
      rgba(30, 30, 30, 0.26) 99.67%
    ),  url("/images/plot.jpg");
  background-repeat: no-repeat;
  background-position-x: right;

  position: relative;

  &__inner {
    padding: 62px 100px 1px 100px;

    @media (max-width: $media_xl) {
      padding: 31px 15px;
    }
  }

  &__top {
    display: flex;
    gap: 24px;
    text-transform: uppercase;
  }

  &__link {
    position: relative;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    &:not(:last-child) {
      &::after {
        content: "";

        position: absolute;
        top: -4px;
        right: -12px;

        background: #262626;

        width: 1px;
        height: 28px;
      }
    }
  }

  &__center {
    margin-top: 291px;
    margin-bottom: 290px;

    width: 932px;

    @media (max-width: $media_xl) {
      margin-top: 238px;
    }
  }

  &__centerTitle {
    text-align: center;
    color: $gold;

    margin-bottom: 20px;
  }

  &__centerText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: $white;
    opacity: 0.7;

    text-align: center;

    margin-bottom: 40px;
  }

  &__scroll {
    display: flex;
    justify-content: center;

    margin: 0 auto -113px;
    width: 77px;
    z-index: 10;
  }

  &__iconScroll {
    position: absolute;
    z-index: 1;

    width: 17px;
    height: 156px;
  }

  &__scrollText {
    position: relative;
    top: 158px;

    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;

    color: rgb(217, 217, 217);

    text-align: center;
  }

  &__icon {
    position: absolute;
    top: 1017px;
    left: -45px;
  }
}

.border {
  width: 100%;
}
</style>
