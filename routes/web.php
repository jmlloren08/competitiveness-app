<?php

use App\Http\Controllers\PhilippinesReportsRankingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage');
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
})->name('/');

Route::get('/phils-reports-ranking', [PhilippinesReportsRankingController::class, 'getPhilippinesReportsRanking']);

Route::get('/about', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/reports', function () {
    return Inertia::render('ReportPage');
})->name('reports');

Route::get('/news', function () {
    return Inertia::render('NewsPage');
})->name('news');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUsPage');
})->name('contact-us');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
