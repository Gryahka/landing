<template>
  <div class="pageTop">
    <AppHeader />
    <AppBanner />
    <MainPage />
    <AppFooter />

    <CustomModal v-if="$store.getters['modal/MODAL_NAME']">
      <template slot="modalBody">
        <ArtistsModal :artist-data="$store.getters['artistsModal/ARTIST_DATA']" />
      </template>
    </CustomModal>
  </div>
</template>

<script>
import AppHeader from '@/components/appHeader/index.vue'
import AppBanner from '@/components/appBanner/index.vue'
import MainPage from '@/components/mainPage/index.vue'
import CustomModal from '@/components/ui/customModal/index.vue'
import ArtistsModal from '@/components/ui/customModal/modalBodies/artistsModal/index.vue'
import AppFooter from '~/components/appFooter/index.vue'

export default {
  name: 'IndexPage',
  components: {
    AppBanner, AppHeader, MainPage, CustomModal, ArtistsModal, AppFooter
  }
}
</script>

<style lang="scss" scoped>
.pageTop {
  background: var(--bg_main);
}
</style>
