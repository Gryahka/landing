<template>
  <div class="mainPage">
    <BoldPoint />

    <CollaborationMech />

    <section class="mainPage__artistTeam">
      <div class="container">
        <ArtistTeam />
      </div>
    </section>

    <section class="mainPage__timeline">
      <div class="container">
        <MainTimeline />
      </div>
    </section>

    <GalleryBold />

    <QuestionAnswer />

    <BuyToken />
  </div>
</template>

<script>
import CollaborationMech from '@/components/mainPage/collaborationMech/index.vue'
import BoldPoint from '@/components/mainPage/boldPoint/index.vue'
import ArtistTeam from '@/components/mainPage/artistTeam/index.vue'
import GalleryBold from '@/components/mainPage/galleryBold/index.vue'
import QuestionAnswer from '@/components/mainPage/questionAnswer/index.vue'
import BuyToken from '@/components/mainPage/buyToken/index.vue'
import MainTimeline from '@/components/mainPage/mainTimeline/index.vue'

export default {
  name: 'MainPage',

  components: {
    CollaborationMech,
    BoldPoint,
    ArtistTeam,
    GalleryBold,
    QuestionAnswer,
    BuyToken,
    MainTimeline
  }
}
</script>

<style lang="scss" scoped>
.mainPage {
  &__artistTeam {
    margin: 0 auto;

    max-width: 2000px;

    box-shadow: inset 0px 0px 20px 11px var(--bg_main);

    background: url('/images/artists/artistsBg.png');
  }
}
</style>
