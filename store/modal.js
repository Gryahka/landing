export const state = () => ({
  MODAL_STATE: false,
  MODAL_NAME: ''
})

export const getters = {
  MODAL_STATE: (state) => {
    return state.MODAL_STATE
  },

  MODAL_NAME: (state) => {
    return state.MODAL_NAME
  }
}

export const mutations = {
  SET_MODAL_STATE (state, modalState) {
    state.MODAL_STATE = modalState
  },

  SET_MODAL_NAME (state, modalName) {
    state.MODAL_NAME = modalName
  }
}

export const actions = {
  modalOpen ({ commit }, name) {
    document.body.style.overflow = 'hidden'
    commit('SET_MODAL_STATE', true)
    commit('SET_MODAL_NAME', name)
  },

  modalClose ({ commit }) {
    document.body.style.overflow = 'auto'
    commit('SET_MODAL_STATE', false)
    commit('SET_MODAL_NAME', '')
  }
}
