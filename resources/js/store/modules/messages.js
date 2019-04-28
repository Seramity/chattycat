import api from '../api/all'
import message from './message'

const state = {
   messages: [],
   loadingMessages: false
}

const getters = {
   allMessages: state => {
      return state.messages
   }
}

const actions = {
   getMessages ({dispatch, commit}, page) {
      api.getMessages(1).then((response) => {
         commit('setMessages', response.data.data)
      })
   }
}

const mutations = {
   setMessages (state, messages) {
      state.messages = messages
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
