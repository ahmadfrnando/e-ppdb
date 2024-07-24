<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            
            //identitas diri
            $table->id();
            $table->string('kode_pendaftaran', 10);
            $table->string('nama');
            $table->string('nis');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->enum('jenis_kelamin', ['Laki-laki', 'Perempuan']);
            $table->string('nem');
            $table->string('no_ijazah');
            $table->longText('alamat');
            $table->text('url_foto')->nullable();
            $table->text('kartu_keluarga')->nullable();
            $table->text('ijazah')->nullable();
            $table->string('asal_sekolah');
            $table->year('tahun_lulus');

            // identitas orantu/wali
            $table->string('nama_ayah');
            $table->string('pekerjaan_ayah');
            $table->string('no_hp_ayah');
            $table->string('nama_ibu');
            $table->string('pekerjaan_ibu');
            $table->string('no_hp_ibu');
            
            // tambahan
            $table->string('saran_dari')->nullable();
            
            // nilai
            $table->integer('nilai')->default(0);
            // di terima apa tidak akan di lakkukan pengecekan oleh admin
            // 0 = proses seleksi
            // 1 = diterima
            // 2 = di tolak
            $table->tinyInteger('diterima')->default(0);
            
            $table->timestamps();
        });

        Schema::table('students', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};