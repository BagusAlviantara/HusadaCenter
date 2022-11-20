-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2022 at 12:40 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `husada_center`
--

-- --------------------------------------------------------

--
-- Table structure for table `alternatif_balian`
--

CREATE TABLE `alternatif_balian` (
  `id` int(5) NOT NULL,
  `balian_id` int(5) NOT NULL,
  `pengobatan_id` int(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alternatif_balian`
--

INSERT INTO `alternatif_balian` (`id`, `balian_id`, `pengobatan_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2022-11-14 01:31:15', '2022-11-14 01:31:15'),
(3, 3, 1, '2022-11-14 01:34:55', '2022-11-14 01:34:55');

-- --------------------------------------------------------

--
-- Table structure for table `balian`
--

CREATE TABLE `balian` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(2) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `balian`
--

INSERT INTO `balian` (`id`, `user_id`, `name`, `phone`, `address`, `gender`, `age`, `description`, `created_at`, `updated_at`) VALUES
(2, 2, 'Alvian', '081133', 'Jalan Kenangan Indah', 'Laki-laki', 21, 'Ahli pengobatan dalam', '2022-11-02 06:20:39', '2022-11-02 06:20:39'),
(3, 7, 'Pande', '081132', 'Jalan Maju Terus', 'Laki-laki', 21, 'Ahli pengobatan dalam', '2022-11-14 01:34:01', '2022-11-14 01:34:01'),
(4, 11, 'Ni Ketut Anik', '0819130909303', 'Jalan Kubu, Sukadana, Kec. Kubu', 'Perempuan', 40, 'Jero Dasaran adalah seorang praktisi yang membantu dalam pengobatan non medis yang dilakukan dengan ritual ', '2022-11-20 00:19:27', '2022-11-20 00:19:27'),
(5, 12, 'I Nyoman Srikanta', '08563880699', 'Banjar Kanginan, Desa Les', 'Laki-laki', 75, 'Pengusada adalah seorang praktisi yang membantu dalam pengobatan non medis yang dilakukan dengan obat-obatan tradisional', '2022-11-20 00:24:26', '2022-11-20 00:24:26'),
(6, 13, 'Kadek Dana', '085239672672', 'Panji anom, Desa Panji', 'Laki-laki', 40, 'Pijat Tradisional adalah seorang praktisi yang membantu dalam penyembuhan otot yang pegal melalui pemijatan', '2022-11-20 00:27:01', '2022-11-20 00:27:01');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(5) NOT NULL,
  `user_id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `user_id`, `name`, `phone`, `address`, `gender`, `age`, `created_at`, `updated_at`) VALUES
(2, 1, 'Yoga', '082123', 'Jalan Raya Mengwi, Sempidi', 'Laki-laki', 21, '2022-11-02 06:35:07', '2022-11-02 06:35:07'),
(3, 4, 'Wahyu Wastuguna', '082236608104', 'Jalan Srikandi, Bakti Seraga', 'Laki-Laki', 21, NULL, NULL),
(4, 8, 'Lanang Darma', '08563880699', 'Jalan Rama, Singaraja', 'Laki-laki', 21, NULL, NULL),
(5, 10, 'Puji ', '082236608104', 'Jalan Gempol, Gang Jaya Baya', 'Perempuan', 21, NULL, NULL),
(6, 14, 'Bagus Alviantara', '08563880699', 'Jalan Noja II, Kesiman', 'Laki-laki', 21, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `obat`
--

CREATE TABLE `obat` (
  `id` int(5) NOT NULL,
  `latin_name` varchar(150) NOT NULL,
  `local_name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `stock` int(5) NOT NULL,
  `price` bigint(25) NOT NULL,
  `URL` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `obat`
--

INSERT INTO `obat` (`id`, `latin_name`, `local_name`, `description`, `stock`, `price`, `URL`, `created_at`, `updated_at`) VALUES
(1, 'Kunyit/Curcuma longa', 'Kunir (Jawa), Kunit (Kalimantan), Kakunye (Sumatera), Uinida (Sulawesi)', 'Menurunkan   tekanan   darah,   obat malaria,  obat  cacing,  obat  sakit  perut,  mengobati keseleo, memar, dan rematik.', 5, 100000, 'https://drive.google.com/file/d/1Lq10P9Ks-u3NKMCsA_PSZOJuH6VTh0VH/view?usp=share_link', '2022-11-18 08:24:59', '2022-11-18 08:26:12'),
(2, 'Jahe Merah/Zingiber officinale var. rubrum', 'Jahe (Jawa), Halia udang (Aceh)', 'Menghangatkan   badan,   meluruhkan keringat,  mengatasai  perut  kembung,  mengatasi radang tenggorokan, dan megatasi nyeri otot', 5, 10000, 'https://drive.google.com/file/d/1av-d7daGWleIkKoEQmGtiM6ab-qIpIVV/view?usp=share_link', '2022-11-20 00:47:01', '2022-11-20 00:47:01'),
(3, 'Temulawak/Curcuma xanthorrhiza', 'Temulawak  (Jawa),  Temu  Lobak (Madura), Koneng Gede (Sunda)', 'Mengobati   hepatitis,   radang   hati, radang    empedu, radang    ginjal, kurang    napsu makanan,   diare,   wasir,   melancarkan ASI,   dan kolesterol tinggi', 5, 15000, 'https://drive.google.com/file/d/1yJULdk0F30vbqnxwDfuz66g4AEN7JgvK/view?usp=sharing', '2022-11-20 00:47:01', '2022-11-20 00:47:01'),
(4, 'Bangle/Zingiber cassumanar', 'Bangle   (Jawa),   Panglai   (Sunda), Padhiyang   (Madura),   Kunit   bolai   (Sumatera), Banggele (Bali)', 'Mengobati demam, sakit kepala, batuk berdahak,   perut   nyeri,   masuk   angin,   sembelit, sakit kuning, dan cacingan', 5, 10000, 'https://drive.google.com/file/d/1J4Iku5f5t-uxE7UELGmUbrhycBUPNmUr/view?usp=share_link', '2022-11-20 00:48:37', '2022-11-20 00:48:37'),
(5, 'Lengkuas/Alpinia galanga', 'Laos (Jawa), Laja (Sunda)', 'Mengobati  rematik,  bronkitis,  masuk angin,    menambah    nafsu    makan,    mencairkan dahak,   kurap,   flek   hitam,   dan   menghangatkan badan', 5, 10000, 'https://drive.google.com/file/d/1fdFrSferezY87PxDjmhOF5-9ttDrXUSe/view?usp=share_link', '2022-11-20 00:48:37', '2022-11-20 00:48:37'),
(6, 'Jamu Cemcem', 'Loloh Cemcem (Bali)', 'Loloh Cemcem adalah jamu yang terbuat dari daun cemcem yang diolah menggunakan rempah-rempah sehingga menghasilkan minuman yang hangat ditenggorokan. Bermanfaat untuk menghilangkan batuk dan meningkatkan nafsu makan', 10, 10000, 'https://drive.google.com/file/d/1xtwXm8RsEDFC6AIssL8uMn7jixYHG4yd/view?usp=share_link', '2022-11-20 00:53:23', '2022-11-20 00:53:23'),
(7, 'Jamu Kunyit', 'Loloh Kunyit (Bali)', 'Loloh Kunyit adalah jamu yang terbuat dari rempah kunyit yang diolah sehingga menghasilkan minuman yang sehat untuk menjadi obat tradisional. Bermanfaat untuk meningkatkan nafsu makan', 10, 10000, 'https://drive.google.com/file/d/1PYzvDYygdcE8wICycWkw0lGQwWaXWQDI/view?usp=share_link', '2022-11-20 00:53:23', '2022-11-20 00:53:23');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(5) NOT NULL,
  `trans_id` int(5) NOT NULL,
  `date_payment` datetime NOT NULL,
  `total_payment` bigint(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `trans_id`, `date_payment`, `total_payment`, `created_at`, `updated_at`) VALUES
(1, 2, '2022-10-10 16:00:00', 50000, '2022-11-18 08:34:57', '2022-11-18 08:35:46');

-- --------------------------------------------------------

--
-- Table structure for table `pengobatan_alternatif`
--

CREATE TABLE `pengobatan_alternatif` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengobatan_alternatif`
--

INSERT INTO `pengobatan_alternatif` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Pijat', 'Pijat adalah pengobatan tradisional dengan melakukan pemijatan pada bagian yang terindikasi sakit dan pegal', '2022-11-14 01:23:41', '2022-11-14 01:31:58'),
(2, 'Lepas Susuk', 'Melepaskan susuk dari badan', '2022-11-14 01:42:21', '2022-11-14 01:42:21');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(5) NOT NULL,
  `customer_id` int(5) NOT NULL,
  `obat_id` int(5) NOT NULL,
  `date` datetime NOT NULL,
  `qty` int(5) NOT NULL,
  `description` varchar(50) NOT NULL,
  `response_midtrans` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `customer_id`, `obat_id`, `date`, `qty`, `description`, `response_midtrans`, `created_at`, `updated_at`) VALUES
(2, 2, 1, '2022-10-10 16:00:00', 5, 'Pending', '', '2022-11-18 08:30:31', '2022-11-18 08:32:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `role` varchar(15) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `role`, `created_at`, `updated_at`) VALUES
(1, 'yoga@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$xvGYlpa8tg6+9EnHgbWnIA$IWpY9Fa/l1a76L7FBOXJN2MOezsGo/ZH3etl2Frbwcw', 'Yoga', '082123', 'Customer', '2022-11-02 03:06:36', '2022-11-02 05:39:17'),
(2, 'alviantara12.kw@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$otlbKbWWfHr9rezaD787/A$2B7//s203AYcnsYZAC8ubRuA1bVe9lrDentF18etw7A', 'Alvian', '081133', 'Dukun', '2022-11-02 03:12:02', '2022-11-02 05:36:15'),
(3, 'dyah@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$N+Syg5sZcJRxyZW7sPw5IA$RWhUYB6S8+4a6a71YoPTTaN8W8Wmr+hKViAXB7kEEwk', 'Dyah', '082123', 'Admin', '2022-11-02 03:20:46', '2022-11-02 05:39:42'),
(4, 'wahyu@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$nX3JmR/53GrHRHGynYIDbg$ZngUVINreQ3vRJElWiGUhQJK8ops/bgW42vhdTPSwDs', 'Wahyu', '087762711', 'Customer', '2022-11-02 05:09:24', '2022-11-02 05:40:25'),
(5, 'yudi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$qH82pFUpEWIa9xfATINldw$sOtuH4Rmfn8BmhOCzdkg//rcD6hyb6zpzNOCqgWQRYU', 'Yudi', '08122345', 'Admin', '2022-11-02 05:30:29', '2022-11-02 05:30:29'),
(7, 'pande@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$hGNyAB75Mg9cKPYOIbvjxg$vTgTxjwk6zCB6FuyTqWx2Ecz5AsCqw+FojjI+eb7tvw', 'Pande', '08122345', 'Dukun', '2022-11-14 01:33:37', '2022-11-14 01:33:37'),
(8, 'lanang@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$J5lpmu/IRKoyLpQ+09XNcw$v2bIG+6CFn4DulE5IbE/36JONPuhEmqSx6Rtg8jcOkg', 'Lanang', '08122345', 'Customer', '2022-11-14 10:47:54', '2022-11-14 10:47:54'),
(9, 'made@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$3sWn3xhmG7f6goGSXgUhwQ$uQaqCQPd0qOFsX5oHnRXCNn43gq+EbwOka5v15WrKKA', 'Made', '08122345', 'Customer', '2022-11-14 10:50:49', '2022-11-14 10:50:49'),
(10, 'puji@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$uJy6D5GBlwDyiQM4d0KrGw$35cx1Eq2KwMO11PqwBFN5mniFTB70rMUzI61v+WMxxw', 'Puji', '087762', 'Customer', '2022-11-19 05:03:44', '2022-11-19 05:03:44'),
(11, 'ketutanik@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$9K7I1f1ggQrNoWI2wqxn8A$HRpe4ApLhBsGyCmB6Pe5LdC0u7SuT8lDwUCWS0T27ig', 'Ni Ketut Anik', '0819130909303', 'Dukun', '2022-11-20 00:16:23', '2022-11-20 00:16:23'),
(12, 'nyomansrikanta@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$VA2m/FfxTwP/1YbK6fCygg$fENPg5vuyCyITU45giyHnHnuekUIJKCavxmvdqA9KFQ', 'I Nyoman Srikanta', '08563880699', 'Dukun', '2022-11-20 00:22:27', '2022-11-20 00:22:27'),
(13, 'kadekdana@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$kXa2TsIgC0zc5+RrgB05Tw$9R54c3UIhFDJBV2MSkaXOtoNS0+NihjqamXXm2f/NIQ', 'Kadek Dana', '085239672672', 'Dukun', '2022-11-20 00:25:14', '2022-11-20 00:25:14'),
(14, 'bagusalviantara@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$mZBlusU1pUvoPlQkPdU4uw$8eeh0+lQqRoSGauE7mh6OyP27kQCbBDJBYtWmLy7o3Y', 'I Made Bagus Alviantara', '087762711664', 'Customer', '2022-11-20 05:33:56', '2022-11-20 05:33:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alternatif_balian`
--
ALTER TABLE `alternatif_balian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balian_id` (`balian_id`),
  ADD KEY `alter_id` (`pengobatan_id`);

--
-- Indexes for table `balian`
--
ALTER TABLE `balian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `obat`
--
ALTER TABLE `obat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trans_id` (`trans_id`);

--
-- Indexes for table `pengobatan_alternatif`
--
ALTER TABLE `pengobatan_alternatif`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `obat_id` (`obat_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alternatif_balian`
--
ALTER TABLE `alternatif_balian`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `balian`
--
ALTER TABLE `balian`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `obat`
--
ALTER TABLE `obat`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pengobatan_alternatif`
--
ALTER TABLE `pengobatan_alternatif`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alternatif_balian`
--
ALTER TABLE `alternatif_balian`
  ADD CONSTRAINT `alternatif_balian_ibfk_1` FOREIGN KEY (`balian_id`) REFERENCES `balian` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alternatif_balian_ibfk_2` FOREIGN KEY (`pengobatan_id`) REFERENCES `pengobatan_alternatif` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `balian`
--
ALTER TABLE `balian`
  ADD CONSTRAINT `balian_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`trans_id`) REFERENCES `transaction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`obat_id`) REFERENCES `obat` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
