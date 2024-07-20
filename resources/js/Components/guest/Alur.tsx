import React from 'react';

const Alur = () => {
  return (
    <div
      className="bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
      data-aos-offset="70"
    >
      <main className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-5 py-16 gap-6">
        <div>
          <h1 className="text-xl xl:text-2xl font-semibold underline decoration-primary lg:tracking-tight">
            Alur Pendaftaran
          </h1>
          <div className="text-sm mt-4 text-slate-600 w-full max-w-2xl flex flex-col">
            <ol>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Calon Peserta Didik baru dapat mendaftar secara mandiri melalui
                website PPDB Online SMP Nasrani 1 Medan dan mengisi formulir
                pendaftaran sesuai data diri peserta.
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Calon Peserta Didik baru dapat langsung datang ke SMP Nasrani 1
                Medan dengan membawa berkas persyaratan yang dibutuhkan.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h1 className="text-xl xl:text-2xl font-semibold underline decoration-primary lg:tracking-tight">
            Persyaratan Pendaftaran
          </h1>
          <div className="text-sm mt-4 text-slate-600 w-full max-w-2xl flex flex-col">
            <ol>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Surat Keterangan Lulus
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Kartu Keluarga
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Akta Lahir
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Kartu Tanda Penduduk Orang Tua
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Pas Foto 3x4
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Ijazah SD
              </li>
              <li className="mb-3 border-l-4 border-secondary pl-3">
                {' '}
                Piagam/Sertifikat bagi yang pernah mendapat
                peringkat 1/2/3 atau juara 1/2/3 bidang akademik maupun non
                akademik minimal tingkat Kabupaten
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alur;
