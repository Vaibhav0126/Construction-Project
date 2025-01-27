<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\front\ContactController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-projects', [FrontProjectController::class, 'allProjects']);
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);
Route::post('contact-now', [ContactController::class, 'index']);



// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);
    //service routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);
    //project routes
    Route::post('projects', [ProjectController::class, 'store']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);
    //temp image route
    Route::post('temp-images', [TempImageController::class, 'store']);
});
