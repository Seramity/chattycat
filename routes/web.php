<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['prefix' => 'webapi', 'namespace' => 'Api'], function () {
   Route::get('/messages', 'MessageController@index');
   Route::get('/message/{message}', 'MessageController@show');
});

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/messages', 'MessageController@index')->name('messages');
