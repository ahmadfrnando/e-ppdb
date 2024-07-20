import React, {useState} from 'react';
import { Kegiatans } from '@/types';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Kegiatan = () => {
  const { kegiatans } = usePage<{ kegiatans: Kegiatans }>().props;
  const [detail, setDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleDetailClick = (item: any) => {
    setSelectedItem(item);
    setDetail(true);
  };

  const closeModal = () => {
    setDetail(false);
    setSelectedItem(null);
  };

  const handlePageChange = (url: string) => {
    Inertia.visit(url);
  };
  return (
    <div className="bg-white">
      <main className="max-w-screen-xl mx-auto px-5 items-center pt-16 pb-8 md:pt-8 gap-6">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-center">
          Kegiatan
        </h1>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {kegiatans.data.map((item: any) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="70"
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <img
                className="rounded-t-lg w-full h-[300px] object-cover"
                src={item.file}
                alt={item.title}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <p
                  className="mb-3 line-clamp-2 font-normal text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
              <button
                onClick={() => handleDetailClick(item)}
                className="inline-flex items-center bg-cyan-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-cyan-600 hover:ring-offset-2 tracking-widest"
              >
                Selengkapnya
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {kegiatans.links.map((link: any, index: number) => (
            <button
              key={index}
              onClick={() => handlePageChange(link.url)}
              className={`mx-1 px-3 py-2 rounded-lg ${link.active ? 'bg-cyan-600 text-white' : 'bg-white text-cyan-600 border border-cyan-600'}`}
              dangerouslySetInnerHTML={{ __html: link.label }}
            ></button>
          ))}
        </div>
      </main>
      {detail && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <img
              className="rounded-t-lg w-full h-[300px] object-cover mb-4"
              src={selectedItem.file}
              alt={selectedItem.title}
            />
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: selectedItem.desc }}
            ></div>
            <button
              onClick={closeModal}
              className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kegiatan;
