<template>
  <div class="question">
    <div class="question__inner">
      <h1 class="question__title border border--line">
        F.A.Q
      </h1>

      <div class="question__list">
        <CustomAccordion
          v-for="(item, index) in accordionList"
          :key="index"
          class="question__accordion"
          :is-custom-head-icon="true"
        >
          <template slot="head">
            <div class="question__accordionHeadRow">
              <div class="question__accordionHead">
                {{ item.head }}
              </div>
            </div>
          </template>

          <template slot="headIcon">
            <svgicon
              class="question__accordionCross"
              :name="'crossPlus'"
              :original="true"
            />
          </template>

          <template slot="body">
            <div class="question__accordionBody">
              {{ item.body }}
            </div>
          </template>
        </CustomAccordion>
      </div>
    </div>
  </div>
</template>

<script>
import CustomAccordion from '@/components/ui/customAccordion/index.vue'

export default {
  name: 'QuestionAnswer',

  components: {
    CustomAccordion
  },

  data () {
    return {
      accordionList: [
        {
          head: 'How to buy NFT?',
          body: 'All the artworks are placed on OpenSea — the largest NFT marketplace. Click on the Buy Now button and follow the prompts in your wallet. Once the transaction is complete, the item will be transferred to your wallet and the seller will receive the funds.'
        },

        {
          head: 'What benefits for NFT collectors?',
          body: 'The art project is supported by professional independent artists from around the world. Each artwork is unique and interesting for Bold Point fans. Every buyer will also receive up to 20% of the NFT’s price as a reward! The rewards will be nominated in BPT tokens at the price of the TGE.'
        },

        {
          head: 'Why do I need a Bold Point token?',
          body: 'BPT is the native token of the NFT-based RPG Game powered by Avalanche. Its free-to-earn model makes for a unique gaming experience, giving users the ability to earn money doing what they love. With BPT, you also can buy in-game NFT items and expand your opportunities in the game’s universe. Visit the Bold Point project website to learn more.'
        },

        {
          head: 'Where can I see the full list of NFT artworks?',
          body: 'We will announce new artists and their works every 3 days in our Telegram, Discord, and Twitter channels. Keep watching!'
        },

        {
          head: 'How can I participate in your project as an artist',
          body: 'We always welcome new artists who have a feel for the Bold Point metaverse to join. If you are interested in partaking in our project – feel free to contact us.'
        },

        {
          head: 'How is this project related to YAY Games?',
          body: 'The idea behind this project is to attract new members to the Bold Point game and expand its opportunities for the DeFi games players. BP is part of YAY games, the ultimate GameFi brand that works as an incubator thanks to its ZEUS IGO platform, allowing top gaming projects to have access to a combined expertise, large community, and sophisticated game mining architecture.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles/variables.scss";
.question {
    background-image: url("/images/lilacDotBg.png");
    background-repeat: no-repeat;
    background-position-x: center;

    &__inner {
        padding-top: 97px;
        padding-bottom: 220px;

        @media (max-width: $media_xl) {
          padding-top: 55px;
          padding-bottom: 110px;
        }
    }

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

        @media (max-width: $media_xl) {
          font-size: 50px;
        }
    }

    &__list {
        display: grid;
        gap: 20px;

        margin-top: 90px;

        @media (max-width: $media_xl) {
          margin-top: 45px;
        }
    }

    &__accordion {
        max-width: 828px;
        margin: 0 auto;
    }

    &__accordionHeadRow {
        display: flex;
        justify-content: space-between;
    }

    &__accordionCross {
        width: 47px;
        height: 47px;

        @media (max-width: $media_xl) {
          width: 23px;
          height: 23px;
        }
    }

    &__accordionHead {
        font-family: "Cinzel";
        font-weight: 400;
        font-size: 26px;
        line-height: 35px;

        color: $gold;

        @media (max-width: $media_xl) {
          font-size: 20px;
        }
    }

    &__accordionBody {
        font-family: "Inter";
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;

        opacity: 0.7;

        padding-right: 68px;

        @media (max-width: $media_xl) {
          font-size: 14px;
        }
    }
}

.border {
  width: 308px;
}
</style>
