<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__inner container">
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
          <a
            class="header__link"
            href="#main"
          >
            <p class="header__linkText">
              Main
            </p>
          </a>

          <a
            class="header__link"
            href="#about"
          >
            <p class="header__linkText">
              ABOUT GAME
            </p>
          </a>

          <a
            class="header__link"
            href="#mechanics"
          >
            <p class="header__linkText">
              Mechanics
            </p>
          </a>

          <a
            class="header__link"
            href="#artists"
          >
            <p class="header__linkText">
              Artist’s
            </p>
          </a>

          <a
            class="header__link"
            href="#timeline"
          >
            <p class="header__linkText">
              Timeline
            </p>
          </a>

          <a
            class="header__link"
            href="#faq"
          >
            <p class="header__linkText">
              FAQ
            </p>
          </a>
        </div>
        <button class="header__btn">
          <p class="header__btnText txWhite">
            Join Vr-Gallery
          </p>
        </button>
      </div>
    </div>

    <div
      class="header__fake"
      aria-hidden="true"
    />
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

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    backdrop-filter: blur(48px);
    box-shadow: 1px 1px 1px rgb(48, 48, 48);

    @supports not (backdrop-filter: blur(48px)) {
      background: rgba(37, 37, 37, 0.76);
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  &__center {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;

    max-width: 980px;
    width: 100%;
  }

  &__logoLink {
    flex-shrink: 0;

    display: block;

    width: 209px;
    height: 30px;

    @media (max-width: $media_xl) {
      width: 150px;
      height: 18px;
    }
  }

  &__link {
    position: relative;
    z-index: 2;

    align-items: center;

    padding: 28px 8px 28px 8px;

    text-transform: uppercase;
    transition: 0.6s;

    white-space: nowrap;

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
      content: "";

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
    flex-shrink: 0;

    padding: 8px;

    width: 193px;
    height: 38px;

    border: 1px solid $white;
    border-radius: 8px;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;
  }

  &__fake {
    height: 60px;
  }
}
</style>
