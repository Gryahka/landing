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
          avatar: '/images/avatars/hoshi.png',
          name: 'Hoshi',
          preview: 'My name is Egor. My nickname on social networks is Hoshi. I came up with it in my school years. In Japanese, it means a star. I\'m not a star yet, but I still have it all to face. I am 20 years old, and I have been drawing for 4 years.',
          links: {
            instagram: 'https://www.instagram.com/00_hoshi_00/',
            twitter: 'https://twitter.com/Egor_Khanenko',
            artStation: 'https://www.artstation.com/hoshi-8',
            foundation: 'https://foundation.app/@Hoshi'
          },
          messagesList: [
            {
              type: 'sent',
              text: [
                'Tell us about your creative path. What were your first steps in digital art? How did you find this art direction?'
              ]
            },
            {
              type: 'received',
              text: [
                'It all started very funnily, when I was watching YouTube, in particular, popular bloggers at that time. I wanted to shoot something, too, and I need to do a video preview somehow. Then I started learning the functions of Photoshop. In the process of understanding the basics of Photoshop, I tried many styles: I tried to draw with a lasso, for example. It looks like a vector picture in a raster though. Later I found out about the so-called photo manipulations. I got interested. It is closer to what I\'m doing now. Then I was in my first year of college and tried to study extra after classes, and my pc was really poor. I was inspired by other artists I was looking for on Instagram. Then I realized that I needed a new computer and got a job at a car wash. For 3 months + scholarship, I have saved up for an average pc, which I work now on.  After that, I found out about the environment concept art, and then it all started! Now I continue to develop in this direction.'
              ]
            },
            {
              type: 'sent',
              text: [
                'What inspires you to create, what is a muse for you?'
              ]
            },
            {
              type: 'received',
              text: [
                'Most often, other artists, although they say that it is better not to do so. I am not one of those artists who put some meaning into their work, I just like to do it beautifully, so I look at how others do it beautifully.'
              ]
            },
            {
              type: 'sent',
              text: [
                'On which NFT sites do you publish your work? At what sites do you plan to publish? Share your profiles so that more people will know about your work.'
              ]
            },
            {
              type: 'received',
              text: [
                'So far, only foundation, and then we\'ll see.',
                'https://foundation.app/@Hoshi'
              ]
            },
            {
              type: 'sent',
              text: [
                'How do you see the development of the NFT market? Are these new opportunities for all authors or a temporary hype?'
              ]
            },
            {
              type: 'received',
              text: [
                'It is a very interesting and difficult question. Those who have made the most of themselves in NFT now have a big name. Most often, people believe that everyone can do this and say that this is the future for digital artists. In fact, an artist without some kind of popularity has nothing to do there, no one will pay attention to them, unfortunately. I believe that all this will continue to remain popular because too many people have learned about NFT. ',
                'Thus, OpenSea turns into a dump, because a lot of people who do not understand anything in this matter believe that if they paint ten colored pictures, they will start earning a lot.'
              ]
            },
            {
              type: 'sent',
              text: [
                'How do you see the development of the NFT market? Are these new opportunities for all authors or a temporary hype?'
              ]
            },
            {
              type: 'received',
              text: [
                'It is a very interesting and difficult question. Those who have made the most of themselves in NFT now have a big name. Most often, people believe that everyone can do this and say that this is the future for digital artists. In fact, an artist without some kind of popularity has nothing to do there, no one will pay attention to them, unfortunately. I believe that all this will continue to remain popular because too many people have learned about NFT. ',
                'Thus, OpenSea turns into a dump, because a lot of people who do not understand anything in this matter believe that if they paint ten colored pictures, they will start earning a lot.'
              ]
            },
            {
              type: 'sent',
              text: [
                'What do you do besides design?'
              ]
            },
            {
              type: 'received',
              text: [
                'I play computer games, I also like chess, a fascinating, in fact. Sometimes I try to improve my skills in traditional art. I walk a lot. I recommend it to all artists, it helps to free your head.'
              ]
            },
            {
              type: 'sent',
              text: [
                'We invite you to answer blitz questions from our team.',
                'What would you do if digital art didn\'t exist?'
              ]
            },
            {
              type: 'received',
              text: [
                'I would be a jeweler.'
              ]
            },
            {
              type: 'sent',
              text: [
                'Three criteria for a successful artist?'
              ]
            },
            {
              type: 'received',
              text: [
                'Purposefulness, understanding that the base is very important, and love for your work.'
              ]
            },
            {
              type: 'sent',
              text: [
                'Describe the style of your work?'
              ]
            },
            {
              type: 'received',
              text: [
                'Semi-realism'
              ]
            },
            {
              type: 'sent',
              text: [
                'Describe yourself in three words?'
              ]
            },
            {
              type: 'received',
              text: [
                'Another one of many others'
              ]
            },
            {
              type: 'sent',
              text: [
                'The artist\'s place in this world? Briefly (What is their mission?)'
              ]
            },
            {
              type: 'received',
              text: [
                'It depends on which artist. My place is to please the eye in any field. I want to try to draw book covers'
              ]
            },
            {
              type: 'sent',
              text: [
                'What would you like to say or wish to your audience?'
              ]
            },
            {
              type: 'received',
              text: [
                'Stay safe'
              ]
            }
          ]
        }
        // {
        //   avatar: '/images/avatars/niko.png',
        //   name: 'Niko',
        //   preview: 'Art director, Founder mossycrew.com, Maker of tutorials, creator of WOMNFT (https://twitter.com/wom_nft). Compound effect in everything.',
        //   links: {
        //     instagram: 'https://www.instagram.com/ninjagraphicstm/',
        //     twitter: 'https://twitter.com/ninjagraphicstm'
        //   },
        //   messagesList: [
        //     {
        //       type: 'sent',
        //       text: [
        //         'Tell us about your creative path. What were your first steps in digital art? How did you find this art direction?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'All my life I wanted to be an artist and earn money from it, but it was very difficult.  Unfortunately, in order to earn a living, I constantly had to work at a job that was not related to art. Nevertheless, in my soul, I constantly cherished my dream.',
        //         'The world is not standing still, NFT culture has appeared, which is now mainstream.',
        //         'I have gained experience as a curator in art galleries in Denmark and Germany and acquired a lot of useful acquaintances, so I decided to create a platform for artists like me, talented, but unable to realize their talent. Thanks to my studio, we finally have the opportunity to do what we love, and also have a good income.'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'Are there any fundamental differences between digital art and traditional art for you? Are they equal?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'Yes, of course, there are. Still, it\'s hard to say what the differences are. If you look closely, everything consists of molecules. If you look at an offline picture, it\'s a physical object and it has molecules, at the quantum level there is gravity and waves, but when you look at the screen, it\'s just a screen. This effect, which we feel instinctively, is not felt in digital art. NFT has value, and offline is something that can be touched. Art has always had to be explained to people. In addition, people needed time to understand its value. It is the same with digital art. I know a lot of people who state that digital art is not art, but I think it\'s not smart to draw such conclusions, because even if you take NFT, it brings real benefits, for example, fundraising. Touch is an ancient instinctive idea, the era where everything needs to be touched is ending. Now people live in a different reality, for them, there is a completely different reality. Behind the digital and VR, the penetration of art will be deeper.'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'What plans and releases are you planning in the near future?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'In addition to the fact that I plan to continue improving my platform, I have an idea to create a neural network in art. Imagine, you set certain parameters, and based on them, the service gives you an image. '
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'What inspires you to create, what is a muse for you?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'What inspired you when working with BP? What did you like about it?',
        //         'TWell, I did a little research and read the history (nature. portal)which you gave me and was inspired by it. I wanted to try to make animation instead of static. You often use purple, I used it too.'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'How do you see the development of the NFT market? Are these new opportunities for all authors or a temporary hype?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'I may be wrong, but everything that is happening in the NFT world right now is chaos. In the future, this chaos will be the basis for improving and developing something more. If we compare it with the past, then everything connected with NFT now is very similar to the Internet in its early years.'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'We invite you to answer blitz questions from our team.',
        //         'What would you do if digital art didn\'t exist?',
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'Welding, production of edged weapons. '
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'WThree criteria for a successful artist?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'Dedication, open-mind, redbull'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'Describe the style of your work?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'static-alive, moment-in-motion'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'Describe yourself in three words?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'Handsome nerd on coffeine, caffeinated handsome nerd'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'The artist\'s place in this world? Briefly (What is their mission?)'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'Inspire other people'
        //       ]
        //     },
        //     {
        //       type: 'sent',
        //       text: [
        //         'What would you like to say or wish to your audience?'
        //       ]
        //     },
        //     {
        //       type: 'received',
        //       text: [
        //         'have a great day'
        //       ]
        //     },
        //   ]
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
