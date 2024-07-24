<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
            <img src="{{ $img }}" alt="Logo Sekolah">
            <h1>SMP 1 Nasrani Medan</h1>
            <h2>Formulir Pendaftaran Peserta Didik Baru</h2>
            <p>Jl. Mojopahit No. 16 Medan, Petisah Hulu, Kec. Medan Baru, Kota Medan Prov. Sumatera Utara</p>
        </div>
            <h1>{{$student->kode_pendaftaran}}</h1>
    </div>
</body>

</html>
