<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('landing');
})->name('home');

Route::get('/welcome', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('welcome');

Route::get('/portal', function () {
    return Inertia::render('portal');
})->name('portal');

Route::get('/rt/login', [App\Http\Controllers\RtController::class, 'login'])->name('rt.login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $user = auth()->user();
        
        if ($user->role === 'rt') {
            return redirect()->route('rt.dashboard');
        }
        
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    Route::get('/rt/dashboard', [App\Http\Controllers\RtController::class, 'dashboard'])->name('rt.dashboard');
    Route::get('/rt/residents', [App\Http\Controllers\RtController::class, 'residents'])->name('rt.residents');
    Route::get('/rt/residents/create', [App\Http\Controllers\RtController::class, 'createResident'])->name('rt.residents.create');
    Route::post('/rt/residents', [App\Http\Controllers\RtController::class, 'storeResident'])->name('rt.residents.store');
    Route::get('/rt/residents/{id}/edit', [App\Http\Controllers\RtController::class, 'editResident'])->name('rt.residents.edit');
    Route::put('/rt/residents/{id}', [App\Http\Controllers\RtController::class, 'updateResident'])->name('rt.residents.update');
    Route::delete('/rt/residents/{id}', [App\Http\Controllers\RtController::class, 'destroyResident'])->name('rt.residents.destroy');
    Route::get('/rt/organization', [App\Http\Controllers\RtController::class, 'organization'])->name('rt.organization');
    Route::put('/rt/organization/{id}', [App\Http\Controllers\RtController::class, 'updateOrganization'])->name('rt.organization.update');
    Route::get('/rt/pkk', [App\Http\Controllers\RtController::class, 'pkk'])->name('rt.pkk');
    Route::put('/rt/pkk/{id}', [App\Http\Controllers\RtController::class, 'updatePkk'])->name('rt.pkk.update');
    Route::get('/rt/kartar', [App\Http\Controllers\RtController::class, 'kartar'])->name('rt.kartar');
    Route::put('/rt/kartar/{id}', [App\Http\Controllers\RtController::class, 'updateKartar'])->name('rt.kartar.update');
    
    // PKK Members
    Route::get('/rt/pkk/members/create', [App\Http\Controllers\RtController::class, 'createPkkMember'])->name('rt.pkk.members.create');
    Route::post('/rt/pkk/members', [App\Http\Controllers\RtController::class, 'storePkkMember'])->name('rt.pkk.members.store');
    Route::get('/rt/pkk/members/{id}/edit', [App\Http\Controllers\RtController::class, 'editPkkMember'])->name('rt.pkk.members.edit');
    Route::put('/rt/pkk/members/{id}', [App\Http\Controllers\RtController::class, 'updatePkkMember'])->name('rt.pkk.members.update');
    Route::delete('/rt/pkk/members/{id}', [App\Http\Controllers\RtController::class, 'destroyPkkMember'])->name('rt.pkk.members.destroy');
    
    // Kartar Members
    Route::get('/rt/kartar/members/create', [App\Http\Controllers\RtController::class, 'createKartarMember'])->name('rt.kartar.members.create');
    Route::post('/rt/kartar/members', [App\Http\Controllers\RtController::class, 'storeKartarMember'])->name('rt.kartar.members.store');
    Route::get('/rt/kartar/members/{id}/edit', [App\Http\Controllers\RtController::class, 'editKartarMember'])->name('rt.kartar.members.edit');
    Route::put('/rt/kartar/members/{id}', [App\Http\Controllers\RtController::class, 'updateKartarMember'])->name('rt.kartar.members.update');
    Route::delete('/rt/kartar/members/{id}', [App\Http\Controllers\RtController::class, 'destroyKartarMember'])->name('rt.kartar.members.destroy');
});

require __DIR__.'/settings.php';
