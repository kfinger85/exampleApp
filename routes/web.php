<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;



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


Route::get('/', [PageController::class, 'homePage']);
Route::get('/async', [PageController::class, 'async']);
Route::get('/listeners', [PageController::class, 'listeners']);
Route::get('/serverinfo', 'App\Http\Controllers\PageController@serverinfo');
Route::get('/phpsandbox', 'App\Http\Controllers\PageController@phpsandbox');
Route::get('/guitars', [PageController::class, 'guitars']);
Route::get('/react', [PageController::class, 'react']);
Route::get('/map', [PageController::class, 'map']);