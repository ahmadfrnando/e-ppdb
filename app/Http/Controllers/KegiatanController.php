<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KegiatanController extends Controller
{
    public function index() //kegiatan
    {   
        $kegiatans = kegiatan::paginate(10); //pengambilan data dari database

        $kegiatans->map(function($kegiatan) {
            $kegiatan->file = asset('storage/'. $kegiatan->file);
        });

        return Inertia::render('KegiatanPage', [
            'kegiatans' => $kegiatans,
        ]);
    }
    
    public function gallery()
    {   
        $photos = kegiatan::paginate(10);

        $photos->map(function($photo) {
            $photo->file = asset('storage/'. $photo->file);
        });
        return Inertia::render('GalleryPage', [
            'photos' => $photos
        ]);
    }
}