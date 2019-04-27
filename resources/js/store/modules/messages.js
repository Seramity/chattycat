import api from '../api/all'
import message from './message'

const state = {
   messages: [],
   loadingMessages: false
}

const getters = {

}

const actions = {

}

const mutations = {
   getMessages ({dispatch, commit}, page) {
      //
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
