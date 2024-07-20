-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 03:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db-ppdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('396833ef4e764f02f0cb7d52b18b1071', 'i:1;', 1720688453),
('396833ef4e764f02f0cb7d52b18b1071:timer', 'i:1720688453;', 1720688453),
('a17961fa74e9275d529f489537f179c05d50c2f3', 'i:1;', 1720688588),
('a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1720688588;', 1720688588),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'i:1;', 1720545601),
('da4b9237bacccdf19c0760cab7aec4a8359010b0:timer', 'i:1720545601;', 1720545601),
('e7edf5d074f05e70f7b8971b8eec5f2b', 'i:1;', 1720531729),
('e7edf5d074f05e70f7b8971b8eec5f2b:timer', 'i:1720531729;', 1720531729),
('fada5637f079415645bfb65b18cbb1de', 'i:2;', 1720650894),
('fada5637f079415645bfb65b18cbb1de:timer', 'i:1720650894;', 1720650894);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kegiatans`
--

CREATE TABLE `kegiatans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `desc` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kegiatans`
--

INSERT INTO `kegiatans` (`id`, `title`, `file`, `desc`, `created_at`, `updated_at`) VALUES
(1, 'Gotong Royong', 'Foto-kegiatan/kegiatan-WhatsApp Image 2024-07-09 at 21.32.16_7adcb149.jpg', '<p>Kegiatan gotong royong rutin untuk meningkatkan rasa peduli kebersihan lingkungan kepada siswa siswi SMP&nbsp;Nasrani&nbsp;1&nbsp;Medan</p>', '2024-07-09 09:30:24', '2024-07-09 09:30:24'),
(2, 'HUT RI', 'Foto-kegiatan/kegiatan-WhatsApp Image 2024-07-09 at 21.33.13_36183e96.jpg', '<p>Serba serbi perayaan ulang tahun kemerdekaan RI di SMP Nasrani&nbsp;1&nbsp;Medan</p>', '2024-07-09 10:16:35', '2024-07-09 10:16:35'),
(3, 'Pendidikan dan Pelatihan', 'Foto-kegiatan/kegiatan-WhatsApp Image 2024-07-09 at 21.34.22_c92beaad.jpg', '<p>Kegiatan pendidikan dan pelatihan karakter kedisplinan tingkat dasar SMP&nbsp;Nasrani&nbsp;1&nbsp;Medan</p>', '2024-07-09 10:17:47', '2024-07-09 10:17:47'),
(4, 'Hari Guru Nasional', 'Foto-kegiatan/kegiatan-WhatsApp Image 2024-07-09 at 21.35.31_8ca79247.jpg', '<p>Serba serbi perayaan hari guru nasional</p>', '2024-07-09 10:18:33', '2024-07-09 10:18:33'),
(5, 'Vaksinasi Covid', 'Foto-kegiatan/kegiatan-WhatsApp Image 2024-07-09 at 21.37.30_12c8e720.jpg', '<p>Vaksinasi Covid</p>', '2024-07-09 10:19:05', '2024-07-09 10:19:05');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_06_23_202101_add_two_factor_columns_to_users_table', 1),
(5, '2024_06_23_202126_create_personal_access_tokens_table', 1),
(6, '2024_06_26_092156_create_students_table', 1),
(7, '2024_06_27_052247_create_schedules_table', 1),
(8, '2024_06_27_211724_create_tests_table', 1),
(10, '2024_07_09_150802_create_kegiatans_table', 2),
(17, '2024_07_10_075123_create_quizzes_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`answers`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `student_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`id`, `answers`, `created_at`, `updated_at`, `student_id`) VALUES
(3, '\"{\\\"question0\\\":\\\"Suharto\\\",\\\"question1\\\":\\\"Surabaya\\\",\\\"question2\\\":\\\"35\\\",\\\"question3\\\":\\\"Dee Lestari\\\",\\\"question4\\\":\\\"Papua\\\",\\\"question5\\\":\\\"17 Agustus 1945\\\",\\\"question6\\\":\\\"Yen\\\",\\\"question7\\\":\\\"Ismail Marzuki\\\",\\\"question8\\\":\\\"Melbourne\\\",\\\"question9\\\":\\\"Elang\\\"}\"', '2024-07-10 22:58:51', '2024-07-10 22:58:51', 26);

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `tanggal` date NOT NULL,
  `waktu` time NOT NULL,
  `body` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `name`, `tanggal`, `waktu`, `body`, `created_at`, `updated_at`) VALUES
(2, 'Registrasi Ulang', '2024-07-20', '10:10:00', '<p>Kami dengan bangga mengumumkan bahwa Anda telah diterima sebagai peserta didik baru di SMP 1 Nasrani Medan untuk tahun ajaran 2024/2025. Kami sangat senang menyambut Anda sebagai bagian dari keluarga besar sekolah kami.<br><br>Sebagai langkah selanjutnya, kami mengharapkan Anda untuk melakukan pendaftaran ulang dan pembayaran biaya pendaftaran ulang sebesar Rp. 500.000.<br><br>Informasi Pendaftaran Ulang:<br><br>Waktu Pendaftaran Ulang:<br>Pendaftaran ulang dapat dilakukan mulai tanggal [tanggal mulai] hingga [tanggal berakhir].<br>Tempat Pendaftaran Ulang:<br>Pendaftaran ulang dilakukan di kantor administrasi SMP 1 Nasrani Medan.<br>Persyaratan:<br>Membawa bukti penerimaan peserta didik baru.<br>Melengkapi formulir pendaftaran ulang yang dapat diambil di kantor administrasi atau diunduh dari situs web resmi sekolah.<br>Melampirkan fotokopi Kartu Keluarga (KK) dan Akta Kelahiran.<br>Pembayaran Biaya Pendaftaran Ulang:<br>Besaran biaya: Rp. 500.000.<br>Pembayaran dapat dilakukan melalui transfer bank ke rekening sekolah atau secara tunai di kantor administrasi.<br>Jika melakukan transfer bank, harap membawa bukti transfer pada saat pendaftaran ulang.<br>Kami berharap Anda dapat segera melaksanakan pendaftaran ulang sesuai jadwal yang telah ditentukan. Untuk informasi lebih lanjut, Anda dapat menghubungi kantor administrasi SMP 1 Nasrani Medan di nomor telepon [nomor telepon sekolah] atau melalui email di [email sekolah].<br><br>Selamat bergabung dan selamat menempuh perjalanan pendidikan yang baru di SMP 1 Nasrani Medan. Kami berharap Anda dapat meraih prestasi gemilang selama masa studi di sini.<br><br>Hormat kami,<br><br>[Nama Kepala Sekolah]<br>Kepala Sekolah SMP 1 Nasrani Medan</p>', '2024-07-10 23:41:54', '2024-07-10 23:41:54');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('KZffYliBL28PLnqfSNyW4lMzqZ7aVHNRrqx9JHQy', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVnVSS3A1QVpvRFFCOU84Zm9keWVxSmNBYVlQbHplWHgzS1FoTFAxZSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNzoiaHR0cDovL3BwZGItc21wbjEudGVzdC9hZG1pbi9zdHVkZW50cyI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjM3OiJodHRwOi8vcHBkYi1zbXBuMS50ZXN0L2FkbWluL3N0dWRlbnRzIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721309956),
('SFYvloIEBceuJsWtaVwLVu8nMbtyhtp8tiCLzHf0', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoibTQ2U0VIZDNDcDVRcElKNGNhRXFKUXdld25rQ0k3MGNacnlLMkhZNiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjM3OiJodHRwOi8vcHBkYi1zbXBuMS50ZXN0L2FkbWluL3N0dWRlbnRzIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJExpZ0M1c0l3clRKOExXN3c3LzVwMXVsZXVaMUFJUDZSSkpwYlpJSHVTZWt3R2Q0LmlLZ05XIjt9', 1720688615);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_pendaftaran` varchar(10) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nis` varchar(255) NOT NULL,
  `tempat_lahir` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `nem` varchar(255) NOT NULL,
  `no_ijazah` varchar(255) NOT NULL,
  `alamat` longtext NOT NULL,
  `url_foto` text DEFAULT NULL,
  `kartu_keluarga` text DEFAULT NULL,
  `ijazah` text DEFAULT NULL,
  `asal_sekolah` varchar(255) NOT NULL,
  `tahun_lulus` year(4) NOT NULL,
  `nama_ayah` varchar(255) NOT NULL,
  `pekerjaan_ayah` varchar(255) NOT NULL,
  `no_hp_ayah` varchar(255) NOT NULL,
  `nama_ibu` varchar(255) NOT NULL,
  `pekerjaan_ibu` varchar(255) NOT NULL,
  `no_hp_ibu` varchar(255) NOT NULL,
  `saran_dari` varchar(255) DEFAULT NULL,
  `diterima` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `kode_pendaftaran`, `nama`, `nis`, `tempat_lahir`, `tanggal_lahir`, `jenis_kelamin`, `nem`, `no_ijazah`, `alamat`, `url_foto`, `kartu_keluarga`, `ijazah`, `asal_sekolah`, `tahun_lulus`, `nama_ayah`, `pekerjaan_ayah`, `no_hp_ayah`, `nama_ibu`, `pekerjaan_ibu`, `no_hp_ibu`, `saran_dari`, `diterima`, `created_at`, `updated_at`, `user_id`) VALUES
(26, 'TYH6MHD3TS', 'Grace', '15454433', 'Medan', '2002-10-02', 'Perempuan', '35', '232343223', 'Jalan Marelan', 'Pas-Foto/Pas Foto-Grace.jpg', 'Kartu-Keluarga/Kartu Keluarga-Grace.jpg', 'Ijazah/Ijazah-Grace.jpg', 'SDN', 2022, 'Aliqua Architecto q', 'Anim consequat Nesc', '80', 'Nobis id amet ipsu', 'Qui perferendis anim', '27', 'Ut ut tempora ut est', 0, '2024-07-10 22:58:46', '2024-07-10 22:58:46', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(2, 'admin', 'admin@gmail.com', NULL, '$2y$12$LigC5sIwrTJ8LW7w7/5p1uleuZ1AIP6RJJpbZIHuSekwGd4.iKgNW', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-30 09:45:59', '2024-06-30 09:45:59'),
(3, 'grace', 'grace@gmail.com', NULL, '$2y$12$GOIc7TB57MwrccSzhMQo1ONNpks0X3T4pJ6FmM.zNKO3egZSjbbYK', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-07 10:10:19', '2024-07-07 10:10:19'),
(4, 'Darryl Alford', 'jefubib@mailinator.com', NULL, '$2y$12$mZN8jmzK0zYk5gqFQK.Tiu1DRIJAU.wOeLKFpXMZQ214UrU7I8236', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-08 07:27:40', '2024-07-08 07:27:40'),
(5, 'Jeanette Maddox', 'syxurak@mailinator.com', NULL, '$2y$12$ypBTGRrNTvfGo3xvvNVWLOAxkJ2zYGawuJlB8juhd4lI2qubIgzE2', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-08 07:30:52', '2024-07-08 07:30:52'),
(6, 'grace', 'grace123@gmail.com', NULL, '$2y$12$PDq4dDQ9B7Pqs.vPM9BqY.jSs9vChhC.cOv9mtyX8SFJAK9/PeUoO', NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-09 06:23:01', '2024-07-09 06:23:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kegiatans`
--
ALTER TABLE `kegiatans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quizzes_student_id_foreign` (`student_id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `students_user_id_foreign` (`user_id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kegiatans`
--
ALTER TABLE `kegiatans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
