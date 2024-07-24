<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Student extends Model
{   
    protected $table = 'students';
    use HasFactory;
    
    
    protected $fillable = [
        'nama', 'nis', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin',
        'nem', 'no_ijazah', 'alamat', 'url_foto', 'asal_sekolah', 'tahun_lulus',
        'nama_ayah', 'pekerjaan_ayah', 'no_hp_ayah', 'nama_ibu', 'pekerjaan_ibu',
        'no_hp_ibu', 'saran_dari', 'diterima', 'user_id', 'ijazah', 'kartu_keluarga', 'score'
    ];

    protected $casts = [
        'quiz' => 'array',
    ];

    // protected $guarded = [];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($student) {
            $student->kode_pendaftaran = self::generateUniqueCode();
        });
    }

    /**
     * Generate a unique code for kode_pendaftaran.
     *
     * @return string
     */
    private static function generateUniqueCode()
    {
        do {
            $code = self::generateAlphaNumericCode(10);
        } while (self::where('kode_pendaftaran', $code)->exists());

        return $code;
    }

    /**
     * Generate an alphanumeric code.
     *
     * @param int $length
     * @return string
     */
    private static function generateAlphaNumericCode($length)
    {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function getStatusAttribute()
    {
        return match ($this->attributes['diterima']) {
            0 => 'Proses Seleksi',
            1 => 'Diterima',
            2 => 'Ditolak',
            default => 'Unknown',
        };
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}   