import React from 'react';
import { Kegiatans } from '@/types';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Gallery = () => {
  const { photos } = usePage<{ photos: Kegiatans }>().props;
  const handlePageChange = (url: string) => {
    Inertia.visit(url);
  };
  return (
    <div className="bg-white">
      <main className="max-w-screen-xl mx-auto px-5 items-center pt-16 pb-8 md:pt-8 gap-6">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-center">
          Gallery
        </h1>
       
        <div className="grid mt-6 md:grid-cols-3 gap-2">
          {photos.data.map((item:any) => (
            <div
              key={item.id}
              className=""
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
              data-aos-offset="70"
            >
              <img src={item.file} alt="" className="w-[500px] h-[500px] object-cover rounded-lg " />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {photos.links.map((link: any, index: number) => (
            <button
              key={index}
              onClick={() => handlePageChange(link.url)}
              className={`mx-1 px-3 py-2 rounded-lg ${link.active ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-600 border border-cyan-600'}`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            ></button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
