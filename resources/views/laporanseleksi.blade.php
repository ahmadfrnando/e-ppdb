<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laporan Seleksi</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .header img {
            width: 100px;
            height: auto;
        }
        .header h1 {
            margin: 10px 0 5px;
            font-size: 24px;
            color: #2c3e50;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .header h2 {
            margin: 0;
            font-size: 20px;
            color: #34495e;
        }
        .header p {
            margin: 5px 0;
            font-size: 14px;
            color: #7f8c8d;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        h2 {
            text-align: center;
            color: #34495e;
            margin-bottom: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1);
            background-color: #fff;
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #3498db;
            color: #fff;
            text-transform: uppercase;
            font-size: 14px;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #e1f5fe;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            margin-top: 20px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="{{ asset('img/logo.png') }}" alt="Logo Sekolah">
        <h1>SMP 1 Nasrani Medan</h1>
        <h2>Laporan Seleksi Penerimaan Siswa Baru</h2>
        <p>Jl. Mojopahit No. 16 Medan, Petisah Hulu, Kec. Medan Baru, Kota Medan Prov. Sumatera Utara</p>
    </div>
    <span>Total Pendaftar: {{ $students->count() }}</span>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Kode Pendaftaran</th>
                <th>Nama</th>
                <th>NIS</th>
                <th>Tahun Lulus</th>
                <th>Asal Sekolah</th>
                <th>Seleksi</th>
            </tr>
        </thead>
        <tbody>
            @foreach($students as $data)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $data->kode_pendaftaran }}</td>
                <td>{{ $data->nama }}</td>
                <td>{{ $data->nis }}</td>
                <td>{{ $data->tahun_lulus }}</td>
                <td>{{ $data->asal_sekolah }}</td>
                <td>{{ match($data->diterima) {
                    0 => 'Proses Seleksi',
                    1 => 'Diterima',
                    2 => 'Ditolak',
                    default => 'Unknown',
                } }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <div class="footer">
        SMP 1 NASRANI MEDAN &copy; {{ date('Y') }}
    </div>
</body>
</html>
