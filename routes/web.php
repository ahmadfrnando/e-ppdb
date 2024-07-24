<?php

use Inertia\Inertia;
use App\Models\Student;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TestsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\SeleksiController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\StudentsController;
use App\Http\Controllers\DashboardController;
use App\Notifications\PengumumanNotification;
use App\Http\Controllers\PengumumanController;

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/profile', function () {
    return Inertia::render('Profile', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('profile');

Route::get('/visi-misi', function () {
    return Inertia::render('VisiDanMisi', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('visimisi');

Route::get('/kegiatan', [KegiatanController::class, 'index'])->name('kegiatan');

Route::get('/gallery', [KegiatanController::class, 'gallery'])->name('gallery');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/seleksi', [SeleksiController::class, 'index'])->name('seleksi');
    Route::get('/seleksi/{id}/detail', [SeleksiController::class, 'show'])->name('seleksi.detail');
    Route::get('/pengumuman', [PengumumanController::class, 'index'])->name('pengumuman');
    Route::put('/pendaftaran', [StudentsController::class, 'store'])->name('pendaftaran');
    Route::get('/quiz/{id}', [QuizController::class, 'index'])->name('quiz');
    Route::put('/quiz/submit/{id}', [QuizController::class, 'store'])->name('quiz.submit');
});


// Route::post('/users', [TestsController::class, 'store'])
//     ->name('users')
//     ->middleware('auth');

Route::get('/laporan-seleksi', [PDFController::class, 'cetakseleksi'])->name('download.laporan-seleksi');
Route::get('/export-laporan-seleksi', [PDFController::class, 'export'])->name('export.laporan-seleksi');
// Route::get('/seleksi/diterima', [PengumumanController::class, 'test'])->name('seleksi.diterima');
Route::get('/seleksi/diterima/{id}', [PengumumanController::class, 'sendNotificationDiterima'])->name('seleksi.diterima');
Route::get('/pemberitauan', [PengumumanController::class, 'sendNotification'])->name('pemberitahuan');