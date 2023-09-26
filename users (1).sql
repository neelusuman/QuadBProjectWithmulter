-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2023 at 03:29 PM
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
-- Database: `quadb_tech`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` text NOT NULL,
  `id` int(11) NOT NULL,
  `user_name` text DEFAULT NULL,
  `user_email` text DEFAULT NULL,
  `user_password` text DEFAULT NULL,
  `user_image` blob DEFAULT NULL,
  `total_orders` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `id`, `user_name`, `user_email`, `user_password`, `user_image`, `total_orders`, `createdAt`, `updatedAt`) VALUES
('SIJRR0', 21, 'king', NULL, '$2a$08$kSVYqbSVJ5c2KCJl8ZYZI.j8/XMbCctF2q0L9yo17p3627H5mwbIe', NULL, NULL, '2023-09-26 12:03:09', '2023-09-26 12:03:09'),
('QVXBP4', 23, 'dee', 'ash@gmail.com', '$2a$08$oVoGmwuIcgiV2gocORHRyu.muFXY0GpEwsS6oybWkvcIGZ1gamcGu', 0x696d616765735c313639353733333336373934372e6a7067, 6, '2023-09-26 13:02:48', '2023-09-26 13:27:50'),
('QQHFT7', 24, '\"King\"', '\"summm2224@gmail.com\"', '$2a$08$SpL3lEFCc74yhQ7d4T.dieHcOl6mMaKZ81oN5SuAcP306zL8SwUNC', NULL, 0, '2023-09-26 13:04:34', '2023-09-26 13:04:34'),
('BIODN7', 25, '\"King\"', '\"summm2224@gmail.com\"', '$2a$08$JqvOSsgGzhYdxFBVvFoKYO.BWajCMg3XDDzIchwkTSn/SSZMonWie', NULL, NULL, '2023-09-26 13:04:58', '2023-09-26 13:04:58'),
('WOJSP3', 26, 'abc', 'summm2224@gmail.com', '$2a$08$o7iftHCDEdb4K2EFBQ7BFumvEyRrsDqNpxemvjrJnbjZSFFbODrjm', NULL, NULL, '2023-09-26 13:09:25', '2023-09-26 13:09:25'),
('ZTZSQ7', 27, '\"King\"', '\"s2224@gmail.com\"', '$2a$08$S6hONOWblkoGnRg.32Hl3OysPWpfBeu4KzslQEThpd3K8f/dxEAeG', NULL, 0, '2023-09-26 13:26:10', '2023-09-26 13:26:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
