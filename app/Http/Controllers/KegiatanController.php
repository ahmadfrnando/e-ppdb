<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KegiatanController extends Controller
{
    public function index()
    {   
        $kegiatans = kegiatan::paginate(10);
        return Inertia::render('KegiatanPage', [
            'kegiatans' => $kegiatans,
        ]);
    }
    
    public function gallery()
    {   
        $photos = kegiatan::paginate(10);
        return Inertia::render('GalleryPage', [
            'photos' => $photos
        ]);
    }
}