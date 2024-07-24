<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulir Pendaftaran Peserta Didik Baru</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /* background-color: #f0f0f0; */
            color: #333;
        }

        .container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        .header,
        .footer {
            text-align: center;
            padding: 10px 0;
        }

        .header img {
            width: 100px;
        }

        .header h1 {
            margin: 10px 0;
        }

        .content {
            margin: 20px 0;
        }

        .section {
            margin-bottom: 20px;
        }

        .section h2 {
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 2px solid #333;
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        .form-group {
            margin-bottom: 10px;
        }

        .form-group label {
            font-weight: bold;
        }

        .form-group p {
            margin: 5px 0;
        }

        .footer p {
            margin: 0;
        }

        .img-container {
            text-align: center;
        }

        .img-container img {
            max-width: 100%;
            height: auto;
            margin-top: 10px;
        }

        .page-break {
            page-break-after: always;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="{{ asset('img/logo.png') }}" alt="Logo Sekolah">
            <h1>SMP 1 Nasrani Medan</h1>
            <h2>Formulir Pendaftaran Peserta Didik Baru</h2>
            <p>Jl. Mojopahit No. 16 Medan, Petisah Hulu, Kec. Medan Baru, Kota Medan Prov. Sumatera Utara</p>
        </div>

        <div class="content">

            <div class="section page-break">
                <h2>Identitas Diri</h2>
                <table>
                    <tr>
                        <th>Kode Pendaftaran</th>
                        <td>{{ $student->kode_pendaftaran }}</td>
                    </tr>
                    <tr>
                        <th>Nama</th>
                        <td>{{ $student->nama }}</td>
                    </tr>
                    <tr>
                        <th>NIS</th>
                        <td>{{ $student->nis }}</td>
                    </tr>
                    <tr>
                        <th>Tempat Lahir</th>
                        <td>{{ $student->tempat_lahir }}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Lahir</th>
                        <td>{{ $student->tanggal_lahir }}</td>
                    </tr>
                    <tr>
                        <th>Jenis Kelamin</th>
                        <td>{{ $student->jenis_kelamin }}</td>
                    </tr>
                    <tr>
                        <th>NEM</th>
                        <td>{{ $student->nem }}</td>
                    </tr>
                    <tr>
                        <th>No Ijazah</th>
                        <td>{{ $student->no_ijazah }}</td>
                    </tr>
                    <tr>
                        <th>Alamat</th>
                        <td>{{ $student->alamat }}</td>
                    </tr>
                    <tr>
                        <th>Asal Sekolah</th>
                        <td>{{ $student->asal_sekolah }}</td>
                    </tr>
                    <tr>
                        <th>Tahun Lulus</th>
                        <td>{{ $student->tahun_lulus }}</td>
                    </tr>
                    <tr>
                        <th>Saran Dari</th>
                        <td>{{ $student->saran_dari }}</td>
                    </tr>
                </table>
            </div>

            <div class="section page-break">
                <h2>Identitas Orang Tua/Wali</h2>
                <table>
                    <tr>
                        <th>Nama Ayah</th>
                        <td>{{ $student->nama_ayah }}</td>
                    </tr>
                    <tr>
                        <th>Pekerjaan Ayah</th>
                        <td>{{ $student->pekerjaan_ayah }}</td>
                    </tr>
                    <tr>
                        <th>No HP Ayah</th>
                        <td>{{ $student->no_hp_ayah }}</td>
                    </tr>
                    <tr>
                        <th>Nama Ibu</th>
                        <td>{{ $student->nama_ibu }}</td>
                    </tr>
                    <tr>
                        <th>Pekerjaan Ibu</th>
                        <td>{{ $student->pekerjaan_ibu }}</td>
                    </tr>
                    <tr>
                        <th>No HP Ibu</th>
                        <td>{{ $student->no_hp_ibu }}</td>
                    </tr>

                </table>
            </div>

            <div class="section page-break">
                <div class="form-group img-container">
                    <label for="url_foto">Pas Foto 3 x 4:</label>
                    <img src="{{ asset('storage/'.$student->url_foto) }}" alt="Pas Foto">
                </div>
            </div>
            <div class="section page-break">
                <div class="form-group img-container">
                    <label for="kartu_keluarga">Kartu Keluarga:</label>
                    <img src="{{ asset('storage/'.$student->kartu_keluarga) }}" alt="Kartu Keluarga">
                </div>
            </div>
            <div class="section page-break">
                <div class="form-group img-container">
                    <label for="ijazah">Ijazah:</label>
                    <img src="{{ asset('storage/'.$student->ijazah) }}" alt="Ijazah">
                </div>
            </div>

            <div class="section">
                <h2>Ujian Seleksi Penerimaan</h2>
                <table>
                    @foreach ($questions as $key => $question)
                        <tr>
                            <th>{{ $question }}</th>
                            <td>{{ $answers[$key] }}</td>
                        </tr>
                    @endforeach
                </table>
                <h1>Nilai seleksi yang diperoleh adalah {{ $student->nilai }}</h1>
            </div>
        </div>
    </div>
</body>

</html>
