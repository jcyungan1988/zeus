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
    return view('modulos.home.home');
});

Route::get('/home', function () {
    return view('modulos.home.home');
});

Route::get('/busqueda', function () {
    return view('modulos.busqueda.busqueda');
});

Route::get('/influencers', function () {
    return view('modulos.influencers.influencers');
});
