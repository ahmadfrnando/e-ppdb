import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { useForm, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Student } from '@/types';
import classNames from 'classnames';

const questions = [
  {
    question: 'Siapa presiden pertama Indonesia?',
    options: ['Soekarno', 'Suharto', 'B.J. Habibie', 'Abdurrahman Wahid'],
    answer: 'Soekarno',
  },
  {
    question: 'Apa ibu kota dari Provinsi Sumatera Utara?',
    options: ['Medan', 'Bandung', 'Surabaya', 'Makassar'],
    answer: 'Medan',
  },
  {
    question: 'Berapa jumlah provinsi di Indonesia saat ini?',
    options: ['33', '34', '35', '36'],
    answer: '34',
  },
  {
    question: 'Siapakah penulis novel "Laskar Pelangi"?',
    options: [
      'Andrea Hirata',
      'Tere Liye',
      'Dee Lestari',
      'Habiburrahman El Shirazy',
    ],
    answer: 'Andrea Hirata',
  },
  {
    question: 'Apa nama pulau terbesar di Indonesia?',
    options: ['Sumatera', 'Kalimantan', 'Papua', 'Jawa'],
    answer: 'Kalimantan',
  },
  {
    question: 'Kapan Indonesia merdeka?',
    options: ['17 Agustus 1945', '21 April 1908', '20 Mei 1908', '1 Juni 1945'],
    answer: '17 Agustus 1945',
  },
  {
    question: 'Apa mata uang resmi Indonesia?',
    options: ['Rupiah', 'Ringgit', 'Dolar', 'Yen'],
    answer: 'Rupiah',
  },
  {
    question: 'Siapakah pencipta lagu kebangsaan Indonesia Raya?',
    options: [
      'Wage Rudolf Supratman',
      'Ismail Marzuki',
      'Sudirman Ardi',
      'Chairil Anwar',
    ],
    answer: 'Wage Rudolf Supratman',
  },
  {
    question: 'Apa nama ibukota Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    answer: 'Canberra',
  },
  {
    question: 'Apa lambang negara Indonesia?',
    options: ['Harimau', 'Elang', 'Garuda', 'Singa'],
    answer: 'Garuda',
  },
];



export default function Quiz() {
  const { quiz } = usePage<{ quiz: Student }>().props;
  const { data, setData, post, processing } = useForm({
    _method: 'put',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    post('/quiz/submit/' + quiz.id);
    
  };

  return (
    <AppLayout
      title="Ujian Seleksi Penerimaan Peserta Didik Baru"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Ujian Seleksi Penerimaan Peserta Didik Baru
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {questions.map((question, index) => (
                    <div key={index} className="mb-4 dark:text-white">
                      <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {question.question}
                      </p>
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="mt-2">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name={`question${index}`}
                              value={option}
                              onChange={handleInputChange}
                              className="form-radio h-5 w-5 text-blue-600"
                              required
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <PrimaryButton
                    disabled={processing}
                    className={classNames({ 'opacity-25': processing })}
                  >
                    Daftar
                  </PrimaryButton>
                </div>
              </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
