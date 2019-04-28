import api from '../api/all'
import message from './message'

const state = {
   messages: [],
   loadingMessages: false
}

const getters = {
   allMessages: state => {
      return state.messages
   },
   loadingMessages: state => {
      return state.loadingMessages
   }
}

const actions = {
   getMessages ({dispatch, commit}, page) {
      commit('setMessagesLoading', true)
      api.getMessages(1).then((response) => {
         commit('setMessages', response.data.data)
         commit('setMessagesLoading', false)
      })
   }
}

const mutations = {
   setMessages (state, messages) {
      state.messages = messages
   },
   setMessagesLoading (state, status) {
      state.loadingMessages = status
   }
}

const modules = {
   message: message
}

export default {
   state,
   getters,
   actions,
   mutations,
   modules
}
