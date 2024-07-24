import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import classNames from 'classnames';
import FileInput from '@/Components/FileInput';
import SelectInput from '@/Components/SelectInput';
import { Student, Quiz } from '@/types';
import { Router } from '@inertiajs/core';

const Detail = () => {
  const { student } = usePage<{ student: Student }>().props;
  const handleBack = () => {
    router.visit('/seleksi')
  }

  console.log(student);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-2xl p-6 dark:text-white uppercase tracking-wide">
          Identitas Diri
        </h1>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <InputLabel htmlFor="nama">Nama</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.nama}
          />
        </div>
        <div>
          <InputLabel htmlFor="nis">NIS</InputLabel>
          <TextInput
            disabled
            type="number"
            className="mt-2 p-2 block w-full"
            value={student.nis}
          />
        </div>
        <div>
          <InputLabel htmlFor="tempat_lahir">Tempat Lahir</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.tempat_lahir}
          />
        </div>
        <div>
          <InputLabel htmlFor="tanggal_lahir">Tanggal Lahir</InputLabel>
          <TextInput
            disabled
            type="date"
            className="mt-2 p-2 block w-full"
            value={student.tanggal_lahir}
          />
        </div>
        <div>
          <InputLabel htmlFor="jenis_kelamin">Jenis Kelamin</InputLabel>
          <TextInput
            disabled
            value={student.jenis_kelamin}
            className="mt-2 p-2 block w-full"
          />
        </div>
        <div>
          <InputLabel htmlFor="nem">NEM</InputLabel>
          <TextInput
            disabled
            type="number"
            className="mt-2 p-2 block w-full"
            value={student.nem}
          />
        </div>
        <div>
          <InputLabel htmlFor="no_ijazah">No Ijazah</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.no_ijazah}
          />
        </div>
        <div>
          <InputLabel htmlFor="tahun_lulus">Tahun Lulus</InputLabel>
          <TextInput
            disabled
            value={student.tahun_lulus}
            className="mt-2 p-2 block w-full"
          />
        </div>
        <div>
          <InputLabel htmlFor="alamat">Alamat</InputLabel>
          <textarea
            disabled
            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-2 p-2 block w-full"
            value={student.alamat}
          ></textarea>
        </div>
        <div>
          <InputLabel htmlFor="asal_sekolah">Asal Sekolah</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.asal_sekolah}
          />
        </div>
        <div className="">
          <InputLabel htmlFor="url_foto">Pas Foto</InputLabel>
          <img
            src={student.url_foto}
            className="rounded-t-lg w-full h-[200px] object-cover"
            alt=""
          />
        </div>
        <div className="">
          <InputLabel htmlFor="kartu_keluarga">Kartu Keluarga</InputLabel>
          <img
            src={student.kartu_keluarga}
            className="rounded-t-lg w-full h-[200px] object-cover"
            alt=""
          />
        </div>
        <div className="">
          <InputLabel htmlFor="ijazah">Ijazah</InputLabel>
          <img
            src={student.ijazah}
            className="rounded-t-lg w-full h-[200px] object-cover"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-2xl p-6 dark:text-white uppercase tracking-wide">
        Identitas Orang Tua
      </h1>
      <hr />
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <InputLabel htmlFor="nama_ayah">Nama Ayah</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.nama_ayah}
          />
        </div>
        <div>
          <InputLabel htmlFor="pekerjaan_ayah">Pekerjaan Ayah</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.pekerjaan_ayah}
          />
        </div>
        <div>
          <InputLabel htmlFor="no_hp_ayah">No HP Ayah</InputLabel>
          <TextInput
            disabled
            type="number"
            className="mt-2 p-2 block w-full"
            value={student.no_hp_ayah}
          />
        </div>
        <div>
          <InputLabel htmlFor="nama_ibu">Nama Ibu</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.nama_ibu}
          />
        </div>
        <div>
          <InputLabel htmlFor="pekerjaan_ibu">Pekerjaan Ibu</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.pekerjaan_ibu}
          />
        </div>
        <div>
          <InputLabel htmlFor="no_hp_ibu">No HP Ibu</InputLabel>
          <TextInput
            disabled
            type="number"
            className="mt-2 p-2 block w-full"
            value={student.no_hp_ibu}
          />
        </div>
      </div>
      <h1 className="text-2xl p-6 dark:text-white uppercase tracking-wide">
        Tambahan
      </h1>
      <hr />
      <div className="grid grid-cols-2 gap-6 p-6">
        <div>
          <InputLabel htmlFor="saran_dari">Saran dari</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.saran_dari}
          />
        </div>
        <div>
          <InputLabel htmlFor="saran_dari">Nilai Ujian Seleksi</InputLabel>
          <TextInput
            disabled
            type="text"
            className="mt-2 p-2 block w-full"
            value={student.nilai + '/100'}
          />
        </div>
      </div>
      <div className="px-6 mb-6">
        <PrimaryButton
        onClick={handleBack}
        >Kembali</PrimaryButton>
      </div>
    </>
  );
};

export default Detail;
