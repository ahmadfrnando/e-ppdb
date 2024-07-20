<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PDFController extends Controller
{
    public function cetakseleksi(Request $request){

        $no = 1;
        $diterima = $request->query('diterima');
        // dd($createdFrom, $createdUntil);
        $students = Student::where('diterima', $diterima)->get();

        $pdf = PDF::loadView('laporanseleksi', compact('no', 'students', 'diterima'));

        return $pdf->download('Laporan-Seleksi.pdf');
        return redirect()->back();
    }
}