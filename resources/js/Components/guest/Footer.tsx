import { Link } from '@inertiajs/react';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-primary relative bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center py-12 text-center">
        <div className="text-xl font-bold text-white">
          Masih bingung dengan Pendaftaran Peserta Didik Baru? Yuk, tanyakan
          langsung.
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="mailto:example@gmail.com"
            target="_blank"
            className='bg-white border-2 border-black hover:bg-gray-100 text-black flex items-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 lg:px-5 lg:py-2.5 md:px-4 md:py-2'
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
