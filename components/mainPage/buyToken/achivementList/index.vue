<template>
  <div class="achivement">
    <ul class="achivement__list">
      <li
        v-for="(item, index) in achivementList"
        :key="index"
        class="achivement__listItem"
      >
        <div class="achivement__logoInner">
          <img
            class="achivement__logo"
            :src="item.logo"
            :alt="item.title"
          >
        </div>

        <h1 class="achivement__title">
          {{ item.title }}
        </h1>

        <p class="achivement__text">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AchivementList',

  data () {
    return {
      achivementList: [
        {
          logo: '/images/token/yay.png',
          title: 'Partnership with YAY Games',
          text: 'leading GameFi marketplace, whose token launched with over 10x performance'
        },

        {
          logo: '/images/token/indacoin.png',
          title: 'Partnership with Indacoin',
          text: '7+years of expertise in the crypto industry, bridging the gap with traditional finance market'
        },

        {
          logo: '/images/token/avalanche.png',
          title: 'Partnership with Avalanche',
          text: 'leading crypto ecosystem and fastest smart contracts platform in the blockchain industry'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.achivement {
    &__list {
        display: flex;
        justify-content: space-between;
    }

    &__listItem {
        max-width: 350px;
        padding: 0 114px 92px 0;

        border-right: 1px solid rgba(88, 88, 88, 0.5);
    }

    &__logoInner {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 24px;

        width: 260px;
        height: 173px;

        border: 2px solid $gold;
        border-radius: 12px;

        box-shadow: -24px 24px 64px rgba(191, 102, 255, 0.28);
    }

    &__logo {
        margin: 50px auto;
    }

    &__title {
        font-family: "Cinzel";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        letter-spacing: 0.04em;
        text-transform: uppercase;

        margin-bottom: 8px;
    }

    &__text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        opacity: 0.6;

        max-width: 260px;
    }
}
</style>
