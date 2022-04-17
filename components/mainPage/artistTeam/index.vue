<template>
  <div class="artist">
    <h1 class="artist__title border border--line">
      Artist’s
    </h1>

    <div class="artist__textRow">
      <img
        class="artist__ornament artist__ornament--left"
        src="/icons/ornamentSmall.png"
        alt="ornament"
      >

      <p class="artist__text">
        Art and its creators have always been an integral part of our lives, and the artist Point universe is no exception Artists have always expressed relevant and modern ideas that have consistently forced our world to change
      </p>

      <img
        class="artist__ornament artist__ornament--right"
        src="/icons/ornamentSmall.png"
        alt="ornament"
      >
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
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;

    color: $lilac;

    text-align: center;
    letter-spacing: -0.02em;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.9);
    margin: 0 auto;
  }

  &__textRow {
      display: flex;
    justify-content: center;
    position: relative;

      margin-top: 47px;
    margin-bottom: 76px;
  }

  &__ornament {
    position: absolute;

    width: 24px;
    height: 35px;

    &--left {
      transform: rotate(-90deg);
      left: 141px;
    }

    &--right {
      transform: rotate(90deg);
      left: 1567px;
    }
  }

  &__text {
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;

color: $white;

text-align: center;
letter-spacing: 0.04em;

opacity: 0.7;

max-width: 1366px;
  }

  &__innerText {
    font-family: 'Cinzel';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 32px;

color: $gold;

text-align: center;
letter-spacing: 0.04em;

margin-bottom: 115px;
  }
}

.border {
    width: 520px;
}
</style>
