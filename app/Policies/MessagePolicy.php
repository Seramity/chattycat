<?php

namespace App\Policies;

use App\User;
use App\Message;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
   use HandlesAuthorization;

   public function show(User $user, Message $message)
   {
      return $this->affect($user, $message);
   }

   public function affect(User $user, Message $message)
   {
      return $user->isInMessage($message);
   }
}
