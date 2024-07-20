<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class TestsController extends Controller
{
    public function store(Request $request)
    {
        Test::create($request->validate([
          'email' => ['required', 'max:50', 'email'],
          'password' => ['required', 'max:50'],
        ]));

        return to_route('dashboard');
    }
}