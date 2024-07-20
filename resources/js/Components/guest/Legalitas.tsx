import React from 'react';
import Image from '../../../../public/img/legalitas.svg';
import { FaBook } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';

const legalitas = [
  {
    id: 1,
    icon: <FaBook />,
    description: 'SK Pendirian',
    detail: ': AHU-95.AH.01.08.Tahun 2015',
  },
  {
    id: 2,
    icon: <FaCalendarAlt />,
    description: 'SK Tanggal Pendirian',
    detail: ': 04 November 2015',
  },
  {
    id: 3,
    icon: <FaBook />,
    description: 'SK Operasional',
    detail: ': 420/15553 SMP/2019',
  },
  {
    id: 4,
    icon: <FaCalendarAlt />,
    description: 'Tanggal SK Operasional',
    detail: ': 10 Oktober 2019',
  },
];

const Legalitas = () => {
  return (
    <div
      className="bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
      data-aos-offset="70"
    >
      <main className="max-w-screen-xl mx-auto px-5 items-center pt-16 pb-8 md:pt-8 gap-6">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <img src={Image} alt="illustrator" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl uppercase font-bold lg:tracking-tight">
              Legalitas sekolah
            </h2>
            <div className="flex flex-col gap-4">
              {legalitas.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  {item.icon}
                  <div className="flex w-full">
                    <p className='w-50'>{item.description}</p>
                    <p className='w-50'>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Legalitas;
