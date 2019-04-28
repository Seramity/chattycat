import api from '../api/all'

const state = {
   message: null,
   loadingMessage: false
}

const getters = {
   currentMessage: state => {
      return state.message
   },
   loadingMessage: state => {
      return state.loadingMessage
   }
}

const actions = {
   getMessage ({dispatch, commit}, id) {
      commit('setMessageLoading', true)
      api.getMessage(id).then((response) => {
         commit('setMessage', response.data.data)
         commit('setMessageLoading', false)
      })
   }
}

const mutations = {
   setMessage (state, message) {
      state.message = message
   },
   setMessageLoading (state, status) {
      state.loadingMessage = status
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}
