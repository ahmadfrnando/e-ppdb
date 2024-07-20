import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import Kegiatan from '@/Components/guest/Kegiatan'
import useTypedPage from '@/Hooks/useTypedPage';

const KegiatanPage = () => {
  const page = useTypedPage();
  return (
    <GuestLayout title={'Kegiatan'} canLogin={true} canRegister={true}>
        <Kegiatan />
    </GuestLayout>
  )
}

export default KegiatanPage