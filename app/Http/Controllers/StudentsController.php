<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Student;
use App\Models\Students;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StudentsStoreRequest;
use Illuminate\Validation\Rules\File;


class StudentsController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Index');
    }

    public function store(StudentsStoreRequest $request): RedirectResponse
    {   
        $validator = $request->all();
        if ($request->hasFile('url_foto')) {
            $file = $request->file('url_foto');
            $customFileName = 'Pas Foto-' . preg_replace('/\s+/', '_', $request->nama) . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('Pas-Foto', $customFileName, 'public');
            $validator['url_foto'] = $path;
        }
        if ($request->hasFile('kartu_keluarga')) {
            $file = $request->file('kartu_keluarga');
            $customFileName = 'Kartu Keluarga-' . preg_replace('/\s+/', '_', $request->nama) . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('Kartu-Keluarga', $customFileName, 'public');
            $validator['kartu_keluarga'] = $path;
        }
        if ($request->hasFile('ijazah')) {
            $file = $request->file('ijazah');
            $customFileName = 'Ijazah-' . preg_replace('/\s+/', '_', $request->nama) . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('Ijazah', $customFileName, 'public');
            $validator['ijazah'] = $path;
        }

        $validator['user_id'] = Auth::user()->id;
        $student = Student::create($validator);

        return Redirect::route('quiz', ['id' => $student->id]);
        // return Redirect::route('dashboard')->with([
        //     'message' => 'Pendaftaran Berhasil',
        // ]);
    }
}