<?php

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Carbon\Carbon;

class StudentExport implements FromCollection, WithHeadings, WithMapping, WithStyles
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Student::all();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            '#',
            'Kode Pendaftaran',
            'Nama Lengkap',
            'NIS',
            'Mendaftar Pada',
            'Nilai Ujian Seleksi',
            'Status'
        ];
    }

    /**
     * @param mixed $student
     *
     * @return array
     */
    public function map($student): array
    {
        static $no = 1;

        $status = match($student->diterima) {
            0 => 'Proses Seleksi',
            1 => 'Diterima',
            2 => 'Ditolak',
            default => 'Proses Seleksi',
        };

        return [
            $no++,
            $student->kode_pendaftaran,
            $student->nama,
            $student->nis,
            Carbon::parse($student->created_at)->format('d F Y'),
            $student->nilai,
            $status,
        ];
    }

    /**
     * @param Worksheet $sheet
     *
     * @return array
     */
    public function styles(Worksheet $sheet)
    {
        return [
            // Styling the first row as bold text.
            1    => ['font' => ['bold' => true]],

            // Styling all rows with borders and adjusting width
            'A'  => ['width' => 10],
            'B'  => ['width' => 20],
            'C'  => ['width' => 30],
            'D'  => ['width' => 20],
            'E'  => ['width' => 20],
            'F'  => ['width' => 15],
            'G'  => ['width' => 20],
        ];
    }
}