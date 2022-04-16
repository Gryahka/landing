<template>
  <div class="card">
    <ul class="card__list">
      <li
        v-for="(item, index) in cardPointList"
        :key="index"
        class="card__listItem"
      >
        <div class="card__bg">
          <img
            class="card__bgInner"
            :src="item.bg"
            :alt="item.title"
          >
        </div>

        <h2 class="card__title">
          {{ item.title }}
        </h2>

        <p class="card__text">
          {{ item.text }}
        </p>

        <p class="card__time">
          {{ item.time }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardsPoint',

  data () {
    return {
      cardPointList: [
        {
          bg: '/images/cardPoint/settingBg.jpg',
          title: 'Bold Point is getting ready for public sale: get your hands on 250,000 $BPT prize pool',
          text: 'Exciting times await us! After the rollout of our latest article about the upcoming plans for the first quarter, we feel that it is time to award...',
          time: '1 day ago'
        },

        {
          bg: '/images/cardPoint/detailBg.jpg',
          title: 'Bold Point Q1 Milestones in Detail',
          text: 'The support from our dear community has been overwhelming during the past few months. Now that the release of $BPT is nearing, we want to highlight some of the main traits that the team is currently working on.',
          time: '3 day ago'
        },

        {
          bg: '/images/cardPoint/seriesBg.jpg',
          title: 'Bold Point In-game Series — How to beat the game and enemies.',
          text: 'Feeling bored already? Oh, we got another interesting piece of information related to the Bold Point universe to cheer you up! What is an RPG without a cool and varied combat system? YAY Games developers...',
          time: '1 day ago'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.card {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  &__listItem {
    cursor: pointer;

    &:hover {
      .card__bg::before {
        opacity: 0;
      }

      .card__title {
        color: rgb(255, 201, 119);
      }
    }
  }

  &__bg {
    position: relative;

    margin: 0 auto;

    &::before {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: linear-gradient(180deg, rgba(191, 102, 255, 0) 0%, rgba(163, 72, 229, 0.45) 67.19%, rgba(140, 47, 207, 0.7) 100%);

      transition: 0.3s;
    }
  }

  &__bgInner {
    margin-bottom: 20px;

    width: 100%;
  }

  &__title {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;

    letter-spacing: 0.04em;
    text-transform: uppercase;

    margin-bottom: 8px;
  }

  &__text {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    opacity: 0.7;

    margin-bottom: 8px;
  }

  &__time {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    opacity: 0.3;
  }
}
</style>
