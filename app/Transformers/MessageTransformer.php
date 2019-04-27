<?php

namespace App\Transformers;

use App\Message;

class MessageTransformer extends League\Fractal\TransformerAbstract
{
   public function transform(Message $message)
   {
      protected $availableIncludes = ['replies', 'user', 'users', 'parent'];

      return [
         'id' => $message->id,
         'parent_id' => $message->parent ? $message->parent->id : NULL,
         'body' => $message->body,
         'created_at_human' => $message->created_at->diffForHumans(),
         'last_reply_human' => $message->last_reply ? $message->last_reply->diffForHumans() ? NULL,
         'participant_count' => $message->usersExceptCurrentlyAuthenticated->count(),
      ];
   }

   public function includeReplies(Message $message)
   {
      return $this->collection($message->replies, new MessageTransformer);
   }

   public function includeParent(Message $message)
   {
      return $this->item($message->parent, new MessageTransformer);
   }

   public function includeUser(Message $message)
   {
      return $this->item($message->user, new UserTransformer);
   }

   public function includeUsers(Message $message)
   {
      return $this->collection($message->users, new UserTransformer);
   }
}
