<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\EventoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/saveC', [CategoriaController::class, 'saveCategoria']);
Route::get('/obtenerC', [CategoriaController::class, 'obtenerCategoria']);
Route::post('/saveE', [EventoController::class, 'saveEvento']);
Route::get('/obtenerE/{id}', [EventoController::class, 'obtenerEvento']);

