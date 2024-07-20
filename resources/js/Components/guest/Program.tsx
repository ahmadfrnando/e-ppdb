import React from 'react';
import Image from '../../../../public/img/program.jpg';

const Program = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
      data-aos-offset="70"
    >
      <main className="max-w-screen-xl mx-auto px-5 py-16 gap-6">
        <div className="flex justify-center mx-auto items-center gap-6">
          <img src={Image} alt="Program" className='border rounded-xl shadow-2xl w-[700px]' />
        </div>
      </main>
    </div>
  );
};

export default Program;
