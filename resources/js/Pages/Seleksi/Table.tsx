import React, {useEffect} from 'react';
import { usePage, useForm, Link, router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Student } from '@/types';

// type Props = {
//   student: Student;
// };

const Table = () => {
  const { students } = usePage<{ students: Student }>().props;
  const { flash } = usePage().props as any;
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (flash.error) {
      MySwal.fire({
        title: flash.error,
        icon: 'warning',
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [flash.error, MySwal]);

  return (
    <div className="p-6">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Lengkap
              </th>
              <th scope="col" className="px-6 py-3">
                Kode Pendaftaran
              </th>
              <th scope="col" className="px-6 py-3">
                NIS
              </th>
              <th scope="col" className="px-6 py-3">
                Tahun Lulus
              </th>
              <th scope="col" className="px-6 py-3">
                Asal Sekolah
              </th>
              <th scope="col" className="px-6 py-3">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Seleksi
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((data: any) => (
              <tr
                key={data.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.nama}
                </th>
                <td className="px-6 py-4">{data.kode_pendaftaran}</td>
                <td className="px-6 py-4">{data.nis}</td>
                <td className="px-6 py-4">{data.tahun_lulus}</td>
                <td className="px-6 py-4">{data.asal_sekolah}</td>
                <td className="px-6 py-4">
                  <img
                    src={data.url_foto}
                    alt={data.nama}
                    className="w-10 h-10 rounded-full"
                    loading='lazy'
                  />
                </td>
                <td className="px-6 py-4">{data.nilai}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 whitespace-nowrap text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {data.diterima === 0 ? 'Proses Seleksi' : 'Lulus Seleksi'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link href={route('seleksi.detail', data.id)}>
                    <button
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Formulir
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
