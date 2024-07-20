<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StudentsStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => ['required','string','max:255'],
            'nis' => ['required','unique:students,nis','max:255'],
            'tempat_lahir' => ['required','string','max:255'],
            'tanggal_lahir' => ['required','string','max:255'],
            'jenis_kelamin' => ['required','string','max:255'],
            'nem' => ['required','string', 'max:20'],
            'no_ijazah' => ['required','string', 'max:20'],
            'tahun_lulus' => ['required','string','max:255'],
            'alamat' => ['required','string','max:255'],
            'asal_sekolah' => ['required','string','max:255'],
            'url_foto' => ['nullable', 'image'],
            'ijazah' => ['nullable', 'image'],
            'kartu_keluarga' => ['nullable', 'image'],
            'nama_ayah' => ['required','string','max:255'],
            'pekerjaan_ayah' => ['required','string','max:255'],
            'no_hp_ayah' => ['required','numeric'],
            'nama_ibu' => ['required','string','max:255'],
            'pekerjaan_ibu' => ['required','string','max:255'],
            'no_hp_ibu' => ['required','numeric'],
            'saran_dari' => 'nullable','string','max:255',
        ];
    }
}