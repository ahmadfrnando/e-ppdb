<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'answers',
    ];

    protected $casts = [
        'answers' => 'array',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}