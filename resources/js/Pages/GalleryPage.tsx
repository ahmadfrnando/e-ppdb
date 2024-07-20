import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import Gallery from '@/Components/guest/Gallery'

const Profile = () => {
  return (
    <GuestLayout title={'Profile'} canLogin={true} canRegister={true}>
        <Gallery />
    </GuestLayout>
  )
}

export default Profile