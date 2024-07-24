import React from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import classNames from 'classnames';
import FileInput from '@/Components/FileInput';
import SelectInput from '@/Components/SelectInput';

const Create = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama: '',
    nis: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    nem: '',
    no_ijazah: '',
    tahun_lulus: '',
    alamat: '',
    asal_sekolah: '',
    url_foto: '',
    kartu_keluarga: '',
    ijazah: '',
    nama_ayah: '',
    pekerjaan_ayah: '',
    no_hp_ayah: '',
    nama_ibu: '',
    pekerjaan_ibu: '',
    no_hp_ibu: '',
    saran_dari: '',
    quiz: '',

    _method: 'put'
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    post('/pendaftaran', {
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='flex items-center'>
          <h1 className="text-2xl p-6 dark:text-white uppercase tracking-wide">
            Identitas Diri
          </h1>
          
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <InputLabel htmlFor="nama">Nama</InputLabel>
            <TextInput
              id="nama"
              name="nama"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.nama}
              onChange={e => setData('nama', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nama} />
          </div>
          <div>
            <InputLabel htmlFor="nis">NIS</InputLabel>
            <TextInput
              id="nis"
              type="number"
              className="mt-2 p-2 block w-full"
              value={data.nis}
              onChange={e => setData('nis', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nis} />
          </div>
          <div>
            <InputLabel htmlFor="tempat_lahir">Tempat Lahir</InputLabel>
            <TextInput
              id="tempat_lahir"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.tempat_lahir}
              onChange={e => setData('tempat_lahir', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.tempat_lahir} />
          </div>
          <div>
            <InputLabel htmlFor="tanggal_lahir">Tanggal Lahir</InputLabel>
            <TextInput
              id="tanggal_lahir"
              type="date"
              className="mt-2 p-2 block w-full"
              value={data.tanggal_lahir}
              onChange={e => setData('tanggal_lahir', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.tanggal_lahir} />
          </div>
          <div>
            <InputLabel htmlFor="jenis_kelamin">Jenis Kelamin</InputLabel>
            <SelectInput
                name="jenis_kelamin"
                error={errors.jenis_kelamin}
                value={data.jenis_kelamin}
                className='mt-2 p-2 block w-full'
                onChange={e => setData('jenis_kelamin', e.target.value)}
                options={[
                  { value: 'Laki-laki', label: 'Laki-laki' },
                  { value: 'Perempuan', label: 'Perempuan' }
                ]}
              />
            <InputError className="mt-2" message={errors.jenis_kelamin} />
          </div>
          <div>
            <InputLabel htmlFor="nem">NEM</InputLabel>
            <TextInput
              id="nem"
              type="number"
              className="mt-2 p-2 block w-full"
              value={data.nem}
              onChange={e => setData('nem', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nem} />
          </div>
          <div>
            <InputLabel htmlFor="no_ijazah">No Ijazah</InputLabel>
            <TextInput
              id="no_ijazah"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.no_ijazah}
              onChange={e => setData('no_ijazah', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.no_ijazah} />
          </div>
          <div>
            <InputLabel htmlFor="tahun_lulus">Tahun Lulus</InputLabel>
            <SelectInput
                name="tahun_lulus"
                error={errors.tahun_lulus}
                value={data.tahun_lulus}
                className='mt-2 p-2 block w-full'
                onChange={e => setData('tahun_lulus', e.target.value)}
                options={[
                  { value: '2022', label: '2022' },
                  { value: '2023', label: '2023' },
                  { value: '2024', label: '2024' },
                ]}
              />
            <InputError className="mt-2" message={errors.tahun_lulus} />
          </div>
          <div>
            <InputLabel htmlFor="alamat">Alamat</InputLabel>
            <textarea
              id="alamat"
              className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-2 p-2 block w-full"
              value={data.alamat}
              onChange={e => setData('alamat', e.target.value)}
              required
            ></textarea>
            <InputError className="mt-2" message={errors.alamat} />
          </div>
          <div>
            <InputLabel htmlFor="asal_sekolah">Asal Sekolah</InputLabel>
            <TextInput
              id="asal_sekolah"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.asal_sekolah}
              onChange={e => setData('asal_sekolah', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.asal_sekolah} />
          </div>
          <div className="">
            <InputLabel htmlFor="url_foto">Unduh Pas Foto</InputLabel>
            <FileInput
                name="url_foto"
                accept="image/*"
                className="mt-2 p-2 block w-full"
                error={errors.url_foto}
                value={data.url_foto}
                onChange={url_foto => {
                  setData('url_foto', url_foto as unknown as string);
                }}
              />
            {errors.url_foto && (
              <InputError className="mt-2" message={errors.url_foto} />
            )}
          </div>
          <div className="">
            <InputLabel htmlFor="kartu_keluarga">Unduh Kartu Keluarga</InputLabel>
            <FileInput
                name="kartu_keluarga"
                accept="image/*"
                className="mt-2 p-2 block w-full"
                error={errors.kartu_keluarga}
                value={data.kartu_keluarga}
                onChange={kartu_keluarga => {
                  setData('kartu_keluarga', kartu_keluarga as unknown as string);
                }}
              />
            {errors.kartu_keluarga && (
              <InputError className="mt-2" message={errors.kartu_keluarga} />
            )}
          </div>
          <div className="">
            <InputLabel htmlFor="ijazah">Unduh Ijazah</InputLabel>
            <FileInput
                name="ijazah"
                accept="image/*"
                className="mt-2 p-2 block w-full"
                error={errors.ijazah}
                value={data.ijazah}
                onChange={ijazah => {
                  setData('ijazah', ijazah as unknown as string);
                }}
              />
            {errors.ijazah && (
              <InputError className="mt-2" message={errors.ijazah} />
            )}
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
              id="nama_ayah"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.nama_ayah}
              onChange={e => setData('nama_ayah', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nama_ayah} />
          </div>
          <div>
            <InputLabel htmlFor="pekerjaan_ayah">Pekerjaan Ayah</InputLabel>
            <TextInput
              id="pekerjaan_ayah"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.pekerjaan_ayah}
              onChange={e => setData('pekerjaan_ayah', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.pekerjaan_ayah} />
          </div>
          <div>
            <InputLabel htmlFor="no_hp_ayah">No HP Ayah</InputLabel>
            <TextInput
              id="no_hp_ayah"
              type="number"
              className="mt-2 p-2 block w-full"
              value={data.no_hp_ayah}
              onChange={e => setData('no_hp_ayah', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.no_hp_ayah} />
          </div>
          <div>
            <InputLabel htmlFor="nama_ibu">Nama Ibu</InputLabel>
            <TextInput
              id="nama_ibu"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.nama_ibu}
              onChange={e => setData('nama_ibu', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nama_ibu} />
          </div>
          <div>
            <InputLabel htmlFor="pekerjaan_ibu">Pekerjaan Ibu</InputLabel>
            <TextInput
              id="pekerjaan_ibu"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.pekerjaan_ibu}
              onChange={e => setData('pekerjaan_ibu', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.nama} />
          </div>
          <div>
            <InputLabel htmlFor="no_hp_ibu">No HP Ibu</InputLabel>
            <TextInput
              id="no_hp_ibu"
              type="number"
              className="mt-2 p-2 block w-full"
              value={data.no_hp_ibu}
              onChange={e => setData('no_hp_ibu', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.no_hp_ibu} />
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
              id="saran_dari"
              type="text"
              className="mt-2 p-2 block w-full"
              value={data.saran_dari}
              onChange={e => setData('saran_dari', e.target.value)}
              required
            />
            <InputError className="mt-2" message={errors.saran_dari} />
          </div>
        </div>
        <div className="px-6 mb-6">
          <PrimaryButton
            disabled={processing}
            className={classNames({ 'opacity-25': processing })}
          >
            Daftar
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default Create;
