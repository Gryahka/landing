<template>
  <header class="header">
    <div class="header__wrap">
      <nuxt-link
        class="header__logoLink"
        to="/"
      >
        <svgicon
          class="header__logo"
          :name="'logo'"
          :original="true"
        />
      </nuxt-link>

      <div class="header__center">
        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            Main
          </p>
        </nuxt-link>

        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            ABOUT GAME
          </p>
        </nuxt-link>

        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            Mechanics
          </p>
        </nuxt-link>

        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            Artist’s
          </p>
        </nuxt-link>

        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            Timeline
          </p>
        </nuxt-link>

        <nuxt-link
          class="header__link"
          to="/"
        >
          <p class="header__linkText">
            FAQ
          </p>
        </nuxt-link>
      </div>

      <button class="header__btn">
        <p class="header__btnText txWhite">
          Join Vr-Gallery
        </p>
      </button>
    </div>

    <div class="header__fake" aria-hidden="true" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
  &__wrap {
    max-width: 1920px;

    margin: 0 auto;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: space-between;

    align-items: center;

    backdrop-filter: blur(48px);
    padding: 0px 120px;

    box-shadow: 1px 1px 1px rgb(48, 48, 48);

    @supports not (backdrop-filter: blur(48px)) {
      background: rgba(37, 37, 37, 0.76);
    }
  }

  &__center {
    width: fit-content;
    display: flex;
    justify-content: space-between;
  }

  &__logoLink {
    display: block;
    width: 209px;
  }

  &__link {
    position: relative;
    z-index: 2;

    padding: 36px 40px 28px 40px;

    text-transform: uppercase;
    transition: 0.6s;

    &:hover {
      color: $gold;

      // background: linear-gradient(
      //   180deg,
      //   rgba(255, 255, 255, 0) 0%,
      //   rgba(255, 255, 255, 0.24) 100%
      // );
      // backdrop-filter: blur(18px);

      &::after,
      &::before {
        opacity: 1;
      }

      & .header__linkText {
        &::after {
          opacity: 1;
        }
      }
    }

    &::after {
      content: "";

      position: absolute;

      left: 0px;
      top: 86px;

      width: 100%;
      height: 3px;

      background: linear-gradient(
        270deg,
        rgba(255, 201, 119, 0) 0%,
        #ffc977 18.75%,
        #ffc977 53.13%,
        #ffc977 80.21%,
        rgba(255, 201, 119, 0) 100%
      );

      opacity: 0;
      transition: 0.3s;
    }

    &::before {
      content: url("/icons/arrow-gold.svg");

      position: absolute;
      left: 0px;
      top: 34px;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: -1;

      width: 100%;
      height: 80px;

      transition: 0.3s;

      opacity: 0;
    }
  }

  &__linkText {
    &::after {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: rgba(255, 255, 255, 0.561);
      backdrop-filter: blur(10px);

      opacity: 0;
    }
  }

  &__btn {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    align-items: center;
    text-transform: uppercase;

    padding: 8px;

    width: 193px;
    max-width: 100%;

    border: 1px solid $white;
    border-radius: 8px;
  }
}
</style>
