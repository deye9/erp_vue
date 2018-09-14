<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'tenant'], function() {
    Route::post('/registerschool', 'ValidateController@register')->name('register');
    Route::get('/isavailable/{name}', 'ValidateController@isavailable')->name('isavailable');
});

Route::post('/registeruser', [
    'uses' => 'AuthController@register',
]);

Route::post('/signin',  [
    'uses' => 'AuthController@signin',
]);

Route::group(['middleware' => 'tenancy.enforce'], function () {

    Route::get('/mutations',  [
        'uses' => 'GraphQLController@GraphMutations',
    ]);

    Route::post('/queries',  [
        'uses' => 'GraphQLController@GraphQueries',
    ]);

    Route::post('/forgotpassword',  [
        'uses' => 'AuthController@forgotpassword',
    ]);

    Route::post('/resetpassword', [
        'uses' => 'AuthController@resetpassword',
    ]);
});

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/user', [
        'uses' => 'AuthController@vettoken',
    ]);
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
