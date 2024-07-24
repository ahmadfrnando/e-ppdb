import React, {useEffect} from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Create from './Create';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
  const { flash } = usePage().props as any;
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (flash.message) {
      MySwal.fire({
        title: flash.message,
        text: 'Silahkan lihat di menu seleksi',
        icon: 'info',
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }, [flash.message, MySwal]);

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Pendaftaran Peserta Didik Baru
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <Create />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
