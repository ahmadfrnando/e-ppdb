import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/guest/Navbar';
import Hero from '@/Components/guest/Hero';
import Alur from '@/Components/guest/Alur';
import Fasilitas from '@/Components/guest/Fasilitas';
import Footer from '@/Components/guest/Footer';
import GuestLayout from '@/Layouts/GuestLayout';
import InformasiSekolah from '@/Components/guest/InformasiSekolah';
import Program from '@/Components/guest/Program';

const Home = () => {

  return (
    <GuestLayout title={'Beranda'} canLogin={true} canRegister={true}>
          <Hero />
          <InformasiSekolah />
          <Program />
          <Alur />
    </GuestLayout>
  );
};

export default Home;
