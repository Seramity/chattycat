<template>

   <div v-if="loading" class="loader">Loading...</div>

   <div v-else-if="message">

      <ul class="list-inline" v-if="message.users.data.length">
         <li class="list-inline-item font-weight-bold">In conversation: </li>
         <li class="list-inline-item" v-for="user in message.users.data">{{ user.name }}</li>
      </ul>

      <div class="media" v-for="reply in message.replies.data">
         <img class="mr-3" v-bind:src="reply.user.data.avatar" v-bind:alt="reply.user.data.name + ' avatar'"">
         <div class="media-body">
            <p class="text-muted">
               {{ reply.user.data.name }} &bull; {{ reply.created_at_human }}
            </p>
            <div class="card">
               <div class="card-body">
                  {{ reply.body }}
               </div>
            </div>
         </div>
      </div>

      <div class="media">
         <img class="mr-3" v-bind:src="message.user.data.avatar" v-bind:alt="message.user.data.name + ' avatar'"">
         <div class="media-body">
            <p class="text-muted">
               {{ message.user.data.name }} &bull; {{ message.created_at_human }}
            </p>
            <div class="card">
               <div class="card-body">
                  {{ message.body }}
               </div>
            </div>
         </div>
      </div>

   </div>

   <div v-else>Select a conversation</div>
</template>

<script>
   import { mapActions, mapGetters } from 'vuex'

   export default {
      computed: mapGetters({
         message: 'currentMessage',
         loading: 'loadingMessage'
      })
   }
</script>
