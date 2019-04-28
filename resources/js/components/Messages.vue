<template>
   <div class="card">
      <div class="card-header">
         All conversations
      </div>

      <div v-if="loading" class="loader">Loading...</div>

      <ul class="list-group list-group-flush" v-for="message in messages" v-else-if="messages.length">
         <li class="list-group-item">
            <a href="#" @click.prevent="getMessage(message.id)">{{ trunc(message.body, 50) }}</a>
            <p class="text-muted">
               You and {{ message.participant_count }} {{ pluralize('other', message.participant_count) }}
            </p>

            <ul class="list-inline">
               <li class="list-inline-item">
                  <img v-bind:src="user.avatar" v-bind:title="user.name" v-bind:alt="user.name + ' avatar'" v-for="user in message.users.data">
               </li>
               <li class="list-inline-item text-muted">
                  Last reply {{ message.last_reply_human }}
               </li>
            </ul>
         </li>
      </ul>

      <div v-else>No conversations</div>

   </div>
</template>

<script>
   import trunc from '../helpers/trunc'
   import pluralize from 'pluralize'
   import { mapActions, mapGetters } from 'vuex'

   export default {
      computed: mapGetters({
         messages: 'allMessages',
         loading: 'loadingMessages'
      }),
      methods: {
         ...mapActions([
            'getMessages',
            'getMessage'
         ]),
         trunc: trunc,
         pluralize: pluralize
      },

      mounted() {
         this.getMessages(1)
      }
   }
</script>
