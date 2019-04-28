export default {
   getMessages (page) {
      return new Promise((resolve, reject) => {
         axios.get('webapi/messages?page=' + page).then((response) => {
            resolve(response)
         })
      })
   }
}
