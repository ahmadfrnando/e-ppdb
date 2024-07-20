import React from 'react';
import Logo from '../../../../public/img/logo.png';


const akreditasi = [
  {
    id: 1,
    description: 'Nilai Standar Isi',
    percent: '86',
  },
  {
    id: 2,
    description: 'Nilai Standar Proses',
    percent: '84',
  },
  {
    id: 3,
    description: 'Nilai Standar Kelulusan',
    percent: '86',
  },
  {
    id: 4,
    description: 'Nilai Standar Pendidik',
    percent: '83',
  },
  {
    id: 5,
    description: 'Nilai Standar Sarana dan Prasarana',
    percent: '80',
  },
  {
    id: 6,
    description: 'Nilai Standar Pengelolaan',
    percent: '82',
  },
  {
    id: 7,
    description: 'Nilai Standar Sarana Pembiayaan',
    percent: '93',
  },
]

const InformasiSekolah = () => {
  return (
    <div
      className="bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
      data-aos-offset="70"
    >
      <main className="max-w-screen-xl mx-auto px-5 items-center pt-16 pb-8 md:pt-8 gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl uppercase text-center lg:text-3xl xl:text-5xl font-bold lg:tracking-tight">
            Informasi sekolah
          </h1>
            <p className="mb-5 text-justify">
            SMP swasta ini didirikan pertama kali pada tahun 2015. Pada waktu ini SMP Nasrani mengimplementasikan panduan kurikulum belajar SMP 2013. SMP Nasrani dibawah kepemimpinan seorang kepala sekolah yang bernama Sopian Indris Simanullang dibantu oleh operator bernama Imelda Oktovia Nilawati Siringoringo.
            </p>
            <p>
            SMP Nasrani terakreditasi grade B dengan nilai 85 (akreditasi tahun 2017) dari BAN-S/M (Badan Akreditasi Nasional) Sekolah/Madrasah.
            </p>
            <div className='grid lg:grid-cols-2 gap-4'>
              {akreditasi.map((item) => (
                <div key={item.id}>
                  <span className='font-bold text-sm tracking-widest uppercase'>{item.description}</span>
                  <div className='w-full bg-gray-300 h-3 rounded-full'><div className={`bg-primary h-full rounded-full`} style={{ width: `${item.percent}%` }}></div></div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InformasiSekolah;
