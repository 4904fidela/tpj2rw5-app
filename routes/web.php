<?php

use App\Http\Controllers\ResidentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// --- PUBLIC ROUTES ---
Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
    ]);
})->name('home');

Route::get('/profil', function () {
    return Inertia::render('public/profile');
})->name('public.profile');

Route::get('/program', function () {
    return Inertia::render('public/programs');
})->name('public.programs');

Route::get('/smart-rw', function () {
    return Inertia::render('public/smart-rw');
})->name('public.smart-rw');

Route::get('/galeri', function () {
    // Placeholder for gallery
    return Inertia::render('public/smart-rw');
})->name('public.gallery');

Route::get('/kontak', function () {
    // Placeholder for contact
    return Inertia::render('welcome');
})->name('public.contact');


// --- INTERNAL DASHBOARD ROUTES ---
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('organization', function () {
        return Inertia::render('organization');
    })->name('organization');

    Route::get('residents', [ResidentController::class, 'index'])
        ->name('residents');

    // Placeholder routes for other modules to prevent 404s in Sidebar
    Route::get('finance', function () {
        return Inertia::render('dashboard'); })->name('finance');
    Route::get('assets', function () {
        return Inertia::render('dashboard'); })->name('assets');
    Route::get('pkk', function () {
        return Inertia::render('dashboard'); })->name('pkk');
    Route::get('loans', function () {
        return Inertia::render('dashboard'); })->name('loans');
    Route::get('sinoman', function () {
        return Inertia::render('dashboard'); })->name('sinoman');
    Route::get('security', function () {
        return Inertia::render('dashboard'); })->name('security');
    Route::get('social', function () {
        return Inertia::render('dashboard'); })->name('social');
    Route::get('communication', function () {
        return Inertia::render('dashboard'); })->name('communication');
    Route::get('users', function () {
        return Inertia::render('dashboard'); })->name('users');
});

require __DIR__ . '/settings.php';