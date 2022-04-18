<template>
  <div class="artist">
    <h1 class="artist__title border border--line">
      Artist’s
    </h1>

    <div class="artist__textRow">
      <p class="artist__text">
        Art and its creators have always been an integral part of our lives, and the artist Point universe is no exception Artists have always expressed relevant and modern ideas that have consistently forced our world to change
      </p>
    </div>

    <div class="artist__inner">
      <h2 class="artist__innerText">
        More information about each individual artist <br> can be found by clicking on their avatar
      </h2>

      <div class="artist__list">
        <TeamList />
      </div>
    </div>
  </div>
</template>

<script>
import TeamList from '@/components/mainPage/artistTeam/teamList/index.vue'

export default {
  name: 'ArtistTeam',

  components: {
    TeamList
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.artist {
  &__title {
    margin: 0 auto 48px;
    padding: 0 100px 20px;

    width: fit-content;

    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;

    color: $lilac;

    text-align: center;
    letter-spacing: -0.02em;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.9);
  }

  &__textRow {
    position: relative;

    display: flex;
    justify-content: center;

    margin: 0 auto 80px;
    padding: 0 44px;

    max-width: 1400px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: 35px;
      height: 35px;

      background: url('/icons/ornamentSmall.png') no-repeat center;

      transform: rotate(-90deg);
    }

    &::after {
      left: auto;
      right: 0;

      transform: rotate(90deg);
    }
  }

  &__text {
    max-width: 1366px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;

    color: $white;

    text-align: center;
    letter-spacing: 0.04em;

    opacity: 0.7;
  }

  &__innerText {
    margin-bottom: 115px;

    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;

    color: $gold;

    text-align: center;
    letter-spacing: 0.04em;

  }
}
</style>
