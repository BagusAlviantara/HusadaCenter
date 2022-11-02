-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2022 at 07:42 AM
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
  `alter_id` int(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(2, 2, 'Alvian', '081133', 'Jalan Kenangan Indah', 'Laki-laki', 21, 'Ahli pengobatan dalam', '2022-11-02 06:20:39', '2022-11-02 06:20:39');

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
(2, 1, 'Yoga', '082123', 'Jalan Mudah Sekali', 'Laki-laki', 21, '2022-11-02 06:35:07', '2022-11-02 06:35:07');

-- --------------------------------------------------------

--
-- Table structure for table `obat`
--

CREATE TABLE `obat` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `stock` int(5) NOT NULL,
  `price` bigint(25) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(3, 'dyah@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$N+Syg5sZcJRxyZW7sPw5IA$RWhUYB6S8+4a6a71YoPTTaN8W8Wmr+hKViAXB7kEEwk', 'Alvian', '082123', 'Admin', '2022-11-02 03:20:46', '2022-11-02 05:39:42'),
(4, 'wahyu@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$nX3JmR/53GrHRHGynYIDbg$ZngUVINreQ3vRJElWiGUhQJK8ops/bgW42vhdTPSwDs', 'Wahyu', '087762711', 'Customer', '2022-11-02 05:09:24', '2022-11-02 05:40:25'),
(5, 'yudi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$qH82pFUpEWIa9xfATINldw$sOtuH4Rmfn8BmhOCzdkg//rcD6hyb6zpzNOCqgWQRYU', 'Yudi', '08122345', 'Admin', '2022-11-02 05:30:29', '2022-11-02 05:30:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alternatif_balian`
--
ALTER TABLE `alternatif_balian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balian_id` (`balian_id`),
  ADD KEY `alter_id` (`alter_id`);

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
-- Indexes for table `pengobatan_alternatif`
--
ALTER TABLE `pengobatan_alternatif`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `balian`
--
ALTER TABLE `balian`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `obat`
--
ALTER TABLE `obat`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengobatan_alternatif`
--
ALTER TABLE `pengobatan_alternatif`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alternatif_balian`
--
ALTER TABLE `alternatif_balian`
  ADD CONSTRAINT `alternatif_balian_ibfk_1` FOREIGN KEY (`balian_id`) REFERENCES `balian` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alternatif_balian_ibfk_2` FOREIGN KEY (`alter_id`) REFERENCES `pengobatan_alternatif` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
