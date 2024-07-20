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

        $answers = [];

        foreach ($data as $key => $value) {
            if (strpos($key, 'question') === 0) {
                $answers[$key] = $value;
            }
        }
        Quiz::create([
            'student_id' => $id,
            'answers' => json_encode($answers),
        ]);

        return Redirect::route('dashboard')->with([
            'message' => 'Pendaftaran Berhasil',
        ]);
    }
}