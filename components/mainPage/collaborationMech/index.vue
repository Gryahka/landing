<template>
  <div class="collab">
    <div class="collab__inner">
      <div class="collab__top">
        <h1 class="collab__title border border--line">
          mechanics of collaboration
        </h1>

        <div class="collab__topDescr">
          <div class="collab__descrBox">
            <div class="collab__decrtInner">
              <h2 class="collab__descrSubtitle txGold">
                11 Artist’s
              </h2>

              <p class="collab__descrText">
                11 artists with different views united <br>
                in one project
              </p>
            </div>
          </div>

          <div class="collab__descrBox collab__descrBox__bdrLilac">
            <h2 class="collab__descrSubtitle txLilac">
              39 art works
            </h2>

            <p class="collab__descrText">
              39 works of art with different <br>
              circulation
            </p>
          </div>

          <div class="collab__descrBox">
            <h2 class="collab__descrSubtitle txGold">
              every 3 days
            </h2>

            <p class="collab__descrText">
              An artist will be presented once <br>
              every 3 days
            </p>
          </div>
        </div>
      </div>

      <div class="collab__bottom">
        <div class="collab__main">
          <h2 class="collab__bottomTitle">
            Collect digital art and earn <br>
            additional prizes
          </h2>

          <p class="collab__text">
            We invite you to take part in our cooperation as an art collector.
            <br>
            Anyone who acquires a piece of art crafted by an artist before the
            publication of the works of the next artist will receive <br>
            $BPT tokens as a gift and the opportunity to participate in the
            draws of additional prizes from Bold Point.
          </p>

          <div class="collab__step">
            <p class="collab__stepText mb13">
              Buy NFTs and favorite <br>
              artworks
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.png"
              alt="ornament"
            >

            <p class="collab__stepText mb13 mt13">
              Wait BP TGE
            </p>

            <img
              class="collab__bottomOrnament"
              src="/icons/ornamentSmall.png"
              alt="ornament"
            >

            <p class="collab__stepText mt13">
              Get rewarded in BPT
            </p>
          </div>
        </div>

        <nuxt-link class="collab__link btn" to="/">
          <img
            class="collab__btnIcon btn__icon btn__icon--left"
            src="/icons/ornament.png"
            alt="ornament"
          >

          <p class="collab__btnText btn__text txWhite">
            Buy art
          </p>

          <img
            class="collab__btnIcon btn__icon btn__icon--right"
            src="/icons/ornament.png"
            alt="ornament"
          >
        </nuxt-link>

        <div class="collab__LineRow">
          <svgicon
            class="collab__Line collab__Line--left"
            :name="'lineGray'"
            :original="true"
          />

          <svgicon
            class="collab__Line collab__Line--right"
            :name="'lineGray'"
            :original="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollaborationMech'
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.collab {
  max-width: 1920px;
  margin: 0 auto;

  &__inner {
    margin: 202px 150px 196px 150px;

    @media (max-width: $media_xl) {
      margin: 110px 54px 110px 54px;
    }
  }

  &__title {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    color: $lilac;

    text-align: center;
    letter-spacing: 0.04em;

    margin: 0 auto;

    @media (max-width: $media_xl) {
      font-size: 50px;
    }
  }

  &__topDescr {
    display: flex;
    justify-content: space-between;
    gap: 78px;

    margin-top: 94px;

    @media (max-width: $media_xl) {
      gap: 25px;
      margin-top: 55px;
    }
  }

  &__descrBox {
    width: 100%;
    height: 100%;

    padding: 29px 0 29px 0;
    border-width: 0 3px 4px 5px;
    border: 4px solid $gold;

    border-radius: 12px;

    &__bdrLilac {
      border: 4px solid $lilac;
    }

    @media (max-width: $media_xl) {
      padding: 15px 0 15px 0;
    }
  }

  &__decrtInner {
    text-align: center;
  }

  &__descrSubtitle {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 48px;
    line-height: 24px;

    text-align: center;

    margin-bottom: 13px;

    white-space: nowrap;

    @media (max-width: $media_xl) {
      font-size: 24px;

      margin-bottom: 8px;
    }
  }

  &__descrText {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    opacity: 0.7;

    @media (max-width: $media_xl) {
      font-size: 14px;
    }
  }

  &__bottom {
    background-image: linear-gradient(
        90deg,
        #000000 0%,
        rgba(0, 0, 0, 0.3) 16.19%,
        rgba(0, 0, 0, 0.3) 83.77%,
        #000000 100%
      ),
      url("/images/nftBg.png");
    background-repeat: no-repeat;
    background-position-x: center;

    margin-bottom: 70px;
  }

  &__main {
    padding-top: 120px;
    padding-bottom: 151px;

    @media (max-width: $media_xl) {
      padding-top: 80px;
      padding-bottom: 120px;
    }
  }

  &__bottomTitle {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 56px;
    line-height: 56px;

    color: $gold;

    text-align: center;
    letter-spacing: -0.02em;

    margin-bottom: 44px;

    @media (max-width: $media_xl) {
      font-size: 46px;

      margin-bottom: 17px;
    }
  }

  &__text {
    font-family: "Inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: $white;

    text-align: center;

    opacity: 0.7;

    margin-bottom: 50px;

    @media (max-width: $media_xl) {
      font-size: 16px;

      margin-bottom: 25px;
    }
  }

  &__stepText {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: $white;

    text-align: center;

    @media (max-width: $media_xl) {
      font-size: 18px;
    }
  }

  &__bottomOrnament {
    display: block;
    margin: 0 auto;
    width: 33px;
    height: 31px;

    object-fit: none;
  }

  &__link {
    position: relative;
  }

  &__LineRow {
    display: flex;

    align-items: center;
  }

  &__Line {
    position: absolute;

    margin-bottom: 150px;
    width: 530px;
    height: 20px;

    &--left {
      top: 10px;
      left: 10px;

      transform: rotate(180deg);
    }

    &--right {
      top: 10px;
      left: 10px;
    }
  }
}

.border {
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: $media_xl) {
      padding-bottom: 10px;
    }
}

</style>
