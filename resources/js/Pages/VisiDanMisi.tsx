import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import VisiMisi from '@/Components/guest/VisiMisi'

const VisiDanMisi = () => {
  return (
    <GuestLayout title={'Profile'} canLogin={true} canRegister={true}>
        <VisiMisi />
    </GuestLayout>
  )
}

export default VisiDanMisi