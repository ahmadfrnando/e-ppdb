import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Create from './Create';

export default function Dashboard() {
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
