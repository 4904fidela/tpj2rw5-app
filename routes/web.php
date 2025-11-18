<?php

use App\Http\Controllers\ResidentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('organization', function () {
        return Inertia::render('organization');
    })->name('organization');

    Route::get('residents', [ResidentController::class, 'index'])
        ->name('residents');
});

require __DIR__ . '/settings.php';
