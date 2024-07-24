<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Quiz;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Student;
use Illuminate\Http\Request;
// use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Redirect;
use PDF;

class SeleksiController extends Controller
{
  public function index(): Response
  {
    $user = Auth::user()->id;
    $students = Student::where('user_id', $user)->get();

    $students->map(function ($student) {
      $student->url_foto = asset('storage/' . $student->url_foto);
    });
    return Inertia::render('Seleksi/Index', [
      'students' => $students,
    ]);
  }

  //     public function show(Request $request)
  // {
  //     // Cari data student berdasarkan ID
  //     $student = Student::find($request->id);

  //     // Jika student tidak ditemukan, redirect kembali dengan pesan error
  //     if (!$student) {
  //         return redirect()->back()->with('error', 'Student not found');
  //     }

  //     // Cari quiz berdasarkan student_id
  //     $quiz = Quiz::where('student_id', $request->id)->first();

  //     // Jika quiz tidak ditemukan, redirect kembali dengan pesan error
  //     if (!$quiz) {
  //         return redirect()->back()->with('error', 'Quiz not found');
  //     }

  //     // Deklarasi array pertanyaan
  //     $questions = [
  //         'question0' => 'Siapa presiden pertama Indonesia?',
  //         'question1' => 'Apa ibu kota dari Provinsi Sumatera Utara?',
  //         'question2' => 'Berapa jumlah provinsi di Indonesia saat ini?',
  //         'question3' => 'Siapakah penulis novel "Laskar Pelangi"?',
  //         'question4' => 'Apa nama pulau terbesar di Indonesia?',
  //         'question5' => 'Kapan Indonesia merdeka?',
  //         'question6' => 'Apa mata uang resmi Indonesia?',
  //         'question7' => 'Siapakah pencipta lagu kebangsaan Indonesia Raya?',
  //         'question8' => 'Apa nama ibukota Australia?',
  //         'question9' => 'Apa lambang negara Indonesia?',
  //     ];

  //     // Ubah jawaban quiz dari format JSON ke array PHP
  //     $answers = json_decode($quiz->answers, true);

  //     // Load view datasiswa.blade.php dengan data student, answers, dan questions
  //     $pdf = PDF::loadView('datasiswa', compact('student', 'answers', 'questions'));

  //     // Tampilkan PDF secara langsung (stream) dengan nama file data-siswa.pdf
  //     return $pdf->stream('data-siswa.pdf');
  // }

  public function show(Request $request)
  {
    $student = Student::find($request->id);
    if (!$student) {
      return redirect()
        ->back()
        ->with('error', 'Student not found');
    }

    $quiz = Quiz::where('student_id', $request->id)->first();
    if (!$quiz) {
      return redirect()
        ->back()
        ->with('error', 'Student not found');
    }
    $questions = [
      'question0' => 'Siapa presiden pertama Indonesia?',
      'question1' => 'Apa ibu kota dari Provinsi Sumatera Utara?',
      'question2' => 'Berapa jumlah provinsi di Indonesia saat ini?',
      'question3' => 'Siapakah penulis novel "Laskar Pelangi"?',
      'question4' => 'Apa nama pulau terbesar di Indonesia?',
      'question5' => 'Kapan Indonesia merdeka?',
      'question6' => 'Apa mata uang resmi Indonesia?',
      'question7' => 'Siapakah pencipta lagu kebangsaan Indonesia Raya?',
      'question8' => 'Apa nama ibukota Australia?',
      'question9' => 'Apa lambang negara Indonesia?',
    ];

    $answers = json_decode($quiz->answers, true);

    $student->url_foto = asset('storage/'.$student->url_foto);
    $student->kartu_keluarga = asset('storage/'.$student->kartu_keluarga);
    $student->ijazah = asset('storage/'.$student->ijazah);

    return Inertia::render('Seleksi/Detail', compact('student', 'answers', 'questions'));
  }
}
