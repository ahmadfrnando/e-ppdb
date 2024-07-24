import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { usePage, Link } from '@inertiajs/react';
import { Schedule, Student } from '@/types';
import ImageInfo from '../../../../public/img/pengumuman.svg';
import ImageLulus from '../../../../public/img/lolos.svg';
import ImageAvailable from '../../../../public/img/noavailable.svg';

export default function Pengumuman() {
  // const { schedules } = usePage<{ schedules: Schedule[] }>().props;
  // const { seleksi } = usePage<{ seleksi: Student[] }>().props;
  const { schedules, seleksi } = usePage<{
    schedules: Schedule[];
    seleksi: Student[];
  }>().props;
  const [detail, setDetail] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

  const handleDetailClick = (item: any) => {
    setSelectedItem(item);
    setDetail(true);
  };

  const closeModal = () => {
    setDetail(false);
    setSelectedItem(null);
  };

  console.log(schedules);
  return (
    <AppLayout
      title="Pengumuman"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Pengumuman
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-4 dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <div className="flex flex-col gap-6">
              {seleksi && schedules.length === 0 && <div className="bg-white max-h-lg w-full p-10 dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                <div className="flex flex-col items-center justify-center">
                  <img src={ImageAvailable} alt="error" className="max-w-sm" />
                  <h1 className="text-3xl dark:text-white uppercase font-bold">
                    Pemberitahuan Belum Tersedia
                  </h1>
                </div>
              </div>}
              {seleksi &&
                seleksi.map((data: any) => (
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={ImageLulus}
                      alt=""
                    />
                    <div
                      key={data.id}
                      className="flex flex-col justify-between p-4 leading-normal"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Selamat kepada {data.nama}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Kami dengan bangga mengumumkan bahwa Anda telah diterima
                        sebagai peserta didik baru di SMP 1 Nasrani Medan. Kami
                        sangat senang menyambut Anda di keluarga besar sekolah
                        kami dan berharap Anda dapat meraih prestasi gemilang
                        selama masa studi di sini. Selamat bergabung dan selamat
                        menempuh perjalanan pendidikan yang baru!
                      </p>
                    </div>
                  </div>
                ))}
              {schedules &&
                schedules.map((schedule: any) => (
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div
                      key={schedule.id}
                      className="flex flex-col justify-between p-4 leading-normal"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {schedule.name}
                      </h5>
                      <div>
                        <p
                          className="mb-3 font-normal line-clamp-2 text-gray-700 dark:text-gray-400"
                          dangerouslySetInnerHTML={{ __html: schedule.body }}
                        ></p>
                        <button
                          onClick={() => handleDetailClick(schedule)}
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
                  </div>
                ))}
            </div>
          </div>
        </div>
        {detail && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-lg max-h-[80vh] overflow-y-auto mx-auto">
              <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedItem.body }}
              ></div>
              <button
                onClick={closeModal}
                className="mt-4 inline-flex items-center bg-red-600 text-white px-5 py-2 rounded-lg hover:ring-2 ring-red-600 hover:ring-offset-2 tracking-widest"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
