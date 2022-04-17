<template>
  <div class="team">
    <ul class="team__list team__list_big">
      <li v-for="(item, index) in teamArr.slice(0,4)" :key="index" class="team__listItem">
        <div
          class="team__avatar avatar"
          :class="{
            'avatar_anim_1' : !Math.round(Math.random()),
            'avatar_anim_2' : !Math.round(Math.random()),
            'avatar_anim_3' : !Math.round(Math.random()),
          }"
          @click="openModal(item)"
        >
          <img
            class="avatar__img"
            :src="item.avatar"
            :alt="item.name"
          >

          <div class="avatar__inner">
            <img
              class="avatar__icon"
              src="/icons/loupe.png"
              alt="loupe"
            >

            <p class="avatar__tx">
              click to learn more
            </p>
          </div>
        </div>

        <p class="team__name">
          {{ item.name }}
        </p>
      </li>
    </ul>

    <ul class="team__list team__list_small">
      <li v-for="(item, index) in teamArr.slice(4,7)" :key="index" class="team__listItem">
        <div
          class="team__avatar avatar"
          :class="{
            'avatar_anim_1' : !Math.round(Math.random()),
            'avatar_anim_2' : !Math.round(Math.random()),
            'avatar_anim_3' : !Math.round(Math.random()),
          }"
          @click="openModal(item)"
        >
          <img
            class="avatar__img"
            :src="item.avatar"
            :alt="item.name"
          >

          <div class="avatar__inner">
            <img
              class="avatar__icon"
              src="/icons/loupe.png"
              alt="loupe"
            >

            <p class="avatar__tx">
              click to learn more
            </p>
          </div>
        </div>

        <p class="team__name">
          {{ item.name }}
        </p>
      </li>
    </ul>

    <ul class="team__list team__list_big">
      <li v-for="(item, index) in teamArr.slice(7)" :key="index" class="team__listItem">
        <div
          class="team__avatar avatar"
          :class="{
            'avatar_anim_1' : !Math.round(Math.random()),
            'avatar_anim_2' : !Math.round(Math.random()),
            'avatar_anim_3' : !Math.round(Math.random()),
          }"
          @click="openModal(item)"
        >
          <img
            class="avatar__img"
            :src="item.avatar"
            :alt="item.name"
          >

          <div class="avatar__inner">
            <img
              class="avatar__icon"
              src="/icons/loupe.png"
              alt="loupe"
            >

            <p class="avatar__tx">
              click to learn more
            </p>
          </div>
        </div>

        <p class="team__name">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TeamList',

  data () {
    return {
      teamArr: [
        {
          avatar: '/images/avatars/chell.png',
          name: 'Chell',
          preview: 'Hi, my name is Lisa, nice to meet you. I am a 19-year-old artist who adores the theme of the Middle Ages in all its manifestations, I draw it all day long. In short, I just can\'t imagine my life without drawing and creativity.',
          links: {
            twitter: 'https://twitter.com/chell_tot',
            openSea: 'https://twitter.com/chell_tot',
            foundation: 'https://twitter.com/chell_tot',
            instagram: 'https://twitter.com/chell_tot',
            behance: 'https://twitter.com/chell_tot',
            facebook: 'https://twitter.com/chell_tot',
            site: 'https://twitter.com/chell_tot'
          },
          messagesList: [
            {
              type: 'sent',
              text: [
                'What were your first steps in digital art? How did you find this art direction?'
              ]
            },
            {
              type: 'received',
              text: [
                'The pencil ended up in my hand right after birth, and the stylus a little later. Like all children, I drew all sorts of nonsense on scraps of paper in a cage, albums, and notebooks, and did not spare even the walls.',
                'At twelve I was sent to art school. Jugs, still lifes, all the most "interesting" for studying the basics and the base. Of course, I didn\'t like it, because I was more interested in anime girls. I stayed at the art school for three years, after which the era of studios and college began. There were many different teachers and approaches, points of view, and manners of the image. Drawing and painting literally absorbed and fascinated me. Drawing became not an occupation, but a meaning, a goal, an unattainable task, from which the eyes burned. However, it didn\'t always work out. Somewhere in the second year, I was overtaken by a digital, an outlandish thing with a button "make it beautiful", which I have not yet found. I studied CG through YouTube channels, books,speed pointss, and a bunch of other materials.'
              ]
            }
          ]
        }
        // {
        //   avatar: '/images/avatars/nikvsio.png',
        //   name: 'NIKVSIO'
        // },
        // {
        //   avatar: '/images/avatars/hoshiBg.png',
        //   name: 'Hoshi'
        // },
        // {
        //   avatar: '/images/avatars/nikoBg.png',
        //   name: 'NICO'
        // },
        // {
        //   avatar: '/images/avatars/ERMKVbg.png',
        //   name: 'ERMKV'
        // },
        // {
        //   avatar: '/images/avatars/DiMAbg.png',
        //   name: 'DiMA'
        // },
        // {
        //   avatar: '/images/avatars/BTTGbg.png',
        //   name: 'IM BTTG'
        // },
        // {
        //   avatar: '/images/avatars/YarzhombekBg.png',
        //   name: 'Tim Yarzhombek'
        // },
        // {
        //   avatar: '/images/avatars/VladimirBg.png',
        //   name: 'Vladimir Ayuev'
        // },
        // {
        //   avatar: '/images/avatars/thisworldout.png',
        //   name: 'thisworldout'
        // },
        // {
        //   avatar: '/images/avatars/BXBbg.png',
        //   name: 'BXB.STD'
        // }

        // @NOTE в структурах, которые легко различить, лучше не ставить лишние пустые строки. Из-за лишних пустых строк читабельность не увеличится, а только меньше информации в мониторе поместится. Конечно, это вкусовщина, но сама сравни как было и как стало. На мой взгляд, все также читабельное и более компактно.
        // БЫЛО
        //   {
        //   avatar: '/images/avatars/VladimirBg.png',
        //   name: 'Vladimir Ayuev'
        // },
        //
        // {
        //   avatar: '/images/avatars/thisworldout.png',
        //   name: 'thisworldout'
        // },
        //
        // {
        //   avatar: '/images/avatars/BXBbg.png',
        //   name: 'BXB.STD'
        // }
      ]
    }
  },

  methods: {
    openModal (artist) {
      this.$store.dispatch('artistsModal/getArtistData', artist)
      this.$store.dispatch('modal/modalOpen', 'ArtistsModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  max-width: 1703px;

  &__list {
    display: flex;

    &_big {
      justify-content: space-between;
    }

    &_small {
      justify-content: space-around;
    }
  }

  &__listItem {
    // <-- @NOTE сделал аватарки более "резиновыми". Расстояние между элементами можно задавать через align-items, justify-content и т.д.
    // display: grid;
    // grid-template-rows: 236px 37px;

    // padding: 35px 63px 127px 63px;

    // max-width: 317px;
    // height: 382px;
    // --> @NOTE
  }

  &__avatar {
    margin-bottom: 16px;
  }

  &__name {
    font-family: "Cinzel";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
}

.avatar {
  position: relative;

  width: 190px;
  height: 220px;

  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

  background: linear-gradient(61deg, rgba(0,0,0,1) 0%, rgba(201,128,254,1) 55%, rgba(255,255,255,1) 100%);

  cursor: pointer;

  transition: 0.3s;

  animation: soars_left 5s infinite ease alternate-reverse;

  &:hover {
    box-shadow: inset 0px 0px 0px 55px var(--bd_secondary);

    .avatar__inner {
      opacity: 1;
    }
  }

  &_anim {
    &_1 {
      animation: soars_top 5s infinite ease alternate-reverse;
    }

    &_2 {
      animation: soars_top 4s infinite ease;
    }

    &_3 {
      animation: soars_left 6s infinite ease;
    }
  }

  &__img {
    width: 100%;
    height: 100%;

    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

    transform: scale(0.95);
  }

  &__inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: grid;
    justify-items: center;
    align-items: center;

    padding: 45px 20px;

    background: rgba(0, 0, 0, 0.63);

    opacity: 0;

    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

    transform: scale(0.95);

    transition: 0.3s;
  }

  &__icon {
    width: 36px;
    height: 36px;
  }

  &__tx {
    max-width: 80px;

    text-align: center;

    font-family: 'Inter';
    font-size: 15px;
    line-height: 22px;

    color: var(--tx_primary);
  }
}

@keyframes soars_top {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(5px, 10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes soars_left {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(-5px, -16px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
