<template>
   <div class="card">
      <div class="card-header">
         All conversations
      </div>

      <ul class="list-group list-group-flush" v-for="message in messages">
         <li class="list-group-item">
            <a href="#">{{ message.body }}</a>
            <p class="text-muted">
               You and {{ message.participant_count }} others
            </p>

            <ul class="list-inline">
               <li>
                  <img v-bind:src="user.avatar" v-bind:title="user.name" v-bind:alt="user.name + ' avatar'" v-for="user in message.users.data">
               </li>
               <li class="text-muted">
                  Last reply {{ message.last_reply_human }}
               </li>
            </ul>
         </li>
      </ul>

   </div>
</template>

<script>
   import { mapActions, mapGetters } from 'vuex'

   export default {
      computed: mapGetters({
         messages: 'allMessages'
      }),
      methods: {
         ...mapActions([
            'getMessages'
         ])
      },

      mounted() {
         this.getMessages(1)
      }
   }
</script>
