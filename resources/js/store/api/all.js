export default {
   getMessage (id) {
      return new Promise((resolve, reject) => {
         axios.get('webapi/message/' + id).then((response) => {
            resolve(response)
         })
      })
   },

   getMessages (page) {
      return new Promise((resolve, reject) => {
         axios.get('webapi/messages?page=' + page).then((response) => {
            resolve(response)
         })
      })
   }
}
