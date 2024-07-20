<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Student;
use App\Models\Schedule;
use App\Mail\PengumumanMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use App\Notifications\PengumumanNotification;
use App\Notifications\PemberitahuanNotification;
use Illuminate\Notifications\Messages\MailMessage;
// use Notification;

class PengumumanController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user()->id;
        $schedules = Schedule::all();
        $seleksi = Student::where('user_id', $user)->where('diterima', 1)->get();
        return Inertia::render('Pengumuman/Index', [
            'schedules' => $schedules,
            'seleksi' => $seleksi
        ]);
    }

    public function sendNotificationDiterima(Request $request)
    {
        $user = User::where('id', $request->id);
        Notification::route('mail', $request->email)
            ->notify(new PengumumanNotification($user));

        return back();
    }
    
    public function sendNotification()
    {
        $users = User::all();
        foreach ($users as $user) {
            Notification::route('mail', $user->email)
                ->notify(new PemberitahuanNotification($user));
        }

        return back();
    }

    public function test()
    {
        return view('emails.pengumuman');
    }
}