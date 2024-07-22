<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Quiz;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Student;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Redirect;


class SeleksiController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user()->id;
        $students = Student::where('user_id', $user)->get();

        $students->map(function($student) {
            $student->url_foto = asset('storage/'. $student->url_foto);
        });
        return Inertia::render('Seleksi/Index', [
            'students' => $students
        ]);
    }

    public function show(Request $request)
    {
        // dd($request->id);
        $student = Student::find($request->id);
        $quiz = Quiz::where('student_id', $request->id)->first();
        $answers = json_decode($quiz->answers, true);

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

        if (!$student) {
            return redirect()->back()->with('error', 'Student not found');
        }
        if (!$quiz) {
            return redirect()->back()->with('error', 'Quiz not found');
        }

        $pdf = PDF::loadView('datasiswa', compact('student', 'answers', 'questions'));

        return $pdf->stream('data-siswa.pdf');
    }
}