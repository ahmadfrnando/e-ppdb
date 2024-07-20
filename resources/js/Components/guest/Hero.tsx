import React from 'react';
import Siswa from '../../../../public/img/siswa-1.png';
import {Link} from '@inertiajs/react';

const Hero = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  const BrosurPath = '/storage/doc/brosur.pdf';
  return (
    <div className="bg-primary">
      <main className="max-w-screen-xl mx-auto px-5 grid lg:grid-cols-2 place-items-center pt-3 pb-8 md:pb-0 md:pt-8">
        <div
          className="md:order-1 block"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-offset="70"
        >
          <img
            src={Siswa}
            alt="siswa"
            className="w-full max-w-md mx-auto p-5 md:p-0"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-offset="70"
        >
          <h1 className="text-5xl text-white lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-lg mt-4 text-slate-200 max-w-xl">
            Telah dibuka penerimaan peserta didik baru. Tahun Ajaran{' '}
            {currentYear} / {nextYear}.
          </p>
          <p className="text-xl font-bold underline">SMP NASRANI 1 MEDAN</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
            href={'/login'}
            target="_blank"
            className='flex bg-white border-2 p-4 border-black hover:bg-gray-100 text-black items-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200'
            rel="noopener">
                Pendaftaran
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          <a
            rel="noopener"
            className='flex bg-black p-4 text-white hover:bg-gray-800 border-2 border-transparent items-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200'
            href={BrosurPath}
            target='_blank'
            >Unduh Brosur</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
