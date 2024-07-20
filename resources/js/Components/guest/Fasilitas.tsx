import React from 'react';
import Siswa from '../../../../public/img/fasilitas.svg';

const Fasilitas = () => {
  return (
    <div
      className="bg-white"
      
    >
      <main className="max-w-screen-xl mx-auto px-5 grid lg:grid-cols-2 items-center pt-16 pb-8 md:pt-8 gap-6">
        <div 
        className="md:order-1 block"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-offset="70">
          <img
            src={Siswa}
            alt="siswa"
            className="w-full max-w-md mx-auto p-5 md:p-0 object-cover object-center"
          />
        </div>
        <div className=""
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-offset="70">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold lg:tracking-tight">
            Fasilitas Sekolah
          </h1>
          <div className="text-lg mt-4 text-slate-600 w-full max-w-xl flex flex-col">
            <p className="mb-5">
              Fasilitas sekolah yang lengkap dan memadai untuk mendukung
              kegiatan belajar mengajar.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <ul>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Ruang Belajar
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Lab IPA dan TIK
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Perpustakaan
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  UKS
                </li>
              </ul>
              <ul>
                
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Ruang Bimbingan Konseling
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Wadah Tempat Cuci Tangan
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  WIFI
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Aula
                </li>
                <li>
                  <span className="text-2xl font-semibold text-slate-700">
                    -
                  </span>{' '}
                  Kantin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fasilitas;
