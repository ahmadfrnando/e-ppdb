<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Student;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class QuizController extends Controller
{
    public function index($id)
    {
        $quiz = Student::where('id', $id)->first();
        return Inertia::render('Quiz/Index', compact('quiz'));
    }

    public function store(Request $request, $id)
    {
        $data = $request->all();
        // dd($data);
        $answers = [];
        $nilai = 0;

        $correctAnswers = [
            'question0' => 'Soekarno',
            'question1' => 'Medan',
            'question2' => '34',
            'question3' => 'Andrea Hirata',
            'question4' => 'Kalimantan',
            'question5' => '17 Agustus 1945',
            'question6' => 'Rupiah',
            'question7' => 'Wage Rudolf Supratman',
            'question8' => 'Canberra',
            'question9' => 'Garuda',
        ];

        foreach ($data as $key => $value) {
            if (strpos($key, 'question') === 0) {
                $answers[$key] = $value;
                if (isset($correctAnswers[$key]) && $correctAnswers[$key] === $value) {
                    $nilai += 10; // Tambah 10 poin untuk setiap jawaban benar
                }
            }
        }

        // dd($score);
        // Simpan jawaban dan skor ke database
        Quiz::create([
            'student_id' => $id,
            'answers' => json_encode($answers),
        ]);

        $student = Student::find($id);
        $student->nilai = $nilai;
        $student->save();

        return Redirect::route('dashboard')->with([
            'message' => 'Pendaftaran Berhasil. Skor Anda adalah ' . $nilai,
        ]);
    }
}