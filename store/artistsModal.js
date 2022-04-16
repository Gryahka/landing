export const state = () => ({
  ARTIST_DATA: {}
})

export const getters = {
  ARTIST_DATA: (state) => {
    return state.ARTIST_DATA
  }
}

export const mutations = {
  SET_ARTIST_DATA (state, modalState) {
    state.ARTIST_DATA = modalState
  }
}

export const actions = {
  getArtistData ({ commit }, data) {
    commit('SET_ARTIST_DATA', data)
  }
}
