<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transformers\MessageTransformer;

class MessageController extends Controller
{
   public function __construct()
   {
      $this->middleware(['auth']);
   }

   public function index(Request $request)
   {
      $messages = $request->user()->messages()->get();

      return fractal()
         ->collection($messages)
         ->parseIncludes(['user', 'users'])
         ->transformWith(new MessageTransformer)
         ->toArray();
   }
}
