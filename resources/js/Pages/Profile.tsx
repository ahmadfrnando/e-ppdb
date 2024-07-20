import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import Fasilitas from '@/Components/guest/Fasilitas'
import StrukturOrganisasi from '@/Components/guest/StrukturOrganisasi'
import InformasiSekolah from '@/Components/guest/InformasiSekolah'
import Legalitas from '@/Components/guest/Legalitas'

const Profile = () => {
  return (
    <GuestLayout title={'Profile'} canLogin={true} canRegister={true}>
        <InformasiSekolah />
        <Legalitas />
        <StrukturOrganisasi />
        <Fasilitas />
    </GuestLayout>
  )
}

export default Profile