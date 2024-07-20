import React from 'react';
import Image from '../../../../public/img/struktur-organisasi.png';

const StrukturOrganisasi = () => {
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
            Struktur Organisasi
          </h1>
          <div className="flex justify-center">
            <img
              src={Image}
              alt="Struktur Organisasi"
              className="items-center flex"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StrukturOrganisasi;
