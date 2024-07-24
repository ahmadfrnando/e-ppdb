<?php
use Carbon\Carbon;
?>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Kode Pendaftaran</th>
            <th>Nama Lengkap</th>
            <th>NIS</th>
            <th>Mendaftar Pada</th>
            <th>Nilai Ujian Seleksi</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($students as $student)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $student->kode_pendaftaran }}</td>
                <td>{{ $student->nama }}</td>
                <td>{{ $student->nis }}</td>
                <td>{{ Carbon::parse($student->created_at)->format('d F Y') }}</td>
                <td>{{ $student->nilai }}</td>
                <td>{{ $student->status }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
