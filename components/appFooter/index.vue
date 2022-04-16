<template>
  <footer class="footer">
    <h1 class="footer_title">
      Follow us on socials<br>to stay up-to-date
    </h1>

    <div class="footer__cards">
      <CardsPoint />
    </div>

    <div class="footer__bottom">
      <div class="footer__social">
        <a class="footer__socialLink" href="/">
          <img
            class="footer__socialImg"
            src="/images/social/socialTwitter.png"
            alt="twitter"
          >
        </a>

        <a class="footer__socialLink" href="">
          <img
            class="footer__socialImg"
            src="/images/social/socialTelegramm.png"
            alt="twitter"
          >

        </a>
        <a class="footer__socialLink" href="">
          <img
            class="footer__socialImg"
            src="/images/social/socialM.png"
            alt="twitter"
          >
        </a>
      </div>

      <div class="footer__info">
        <p class="footer__leftText">
          © 2022. Bold Point, all rights reserved
        </p>

        <div class="footer__right">
          <p class="footer__text">
            coming soon
          </p>

          <div class="footer__links">
            <a
              class="footer__link"
              href="/"
            >
              <img
                class="footer__img"
                src="/images/social/downloadApp.png"
                alt="item.title"
              >
            </a>

            <a
              class="footer__link"
              href="/"
            >
              <img
                class="footer__img"
                src="/images/social/downloadGoogle.png"
                alt="item.title"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CardsPoint from '@/components/appFooter/cardsPoint/index.vue'

export default {
  name: 'AppFooter',

  components: {
    CardsPoint
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.footer {
  margin: 0 auto;
  max-width: 1728px;

  background-image: url(/images/footerBg.png);
  background-repeat: no-repeat;
  background-position-x: center;

  padding-top: 127px;

  &_title {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;

    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin-bottom: 42px;

  }

  &__cards {
    margin-bottom: 40px;
  }

  &__bottom {
    position: relative;

    padding-bottom: 70px;
    }

    &__social {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;

      width: 144px;

      margin: 0 auto;
      height: 0;

      &::before {
        content: "";

        position: absolute;
        top: 30px;
        left: 0px;

        width: 100%;
        height: 1px;
        background: rgba(88, 88, 88, 0.5);
      }
    }

    &__socialImg {
      position: relative;
      top: 10px;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 81px;
    }

  &__leftText {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    opacity: 0.7;
  }

  &__right {
    display: grid;
    grid-template-columns: 0.9fr 2fr;
    gap: 24px;

    align-items: center;
  }

  &__links {
    display: grid;
    grid-template-columns: 116px 135px;
    gap: 16px;
  }

  &__text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    opacity: 0.7;
  }
}
</style>
