-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 28, 2020 lúc 11:01 AM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `fudousan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `home`
--

CREATE TABLE `home` (
  `HomeId` int(2) NOT NULL,
  `Address` varchar(8) DEFAULT NULL,
  `Purpose` varchar(7) DEFAULT NULL,
  `UserId` int(1) DEFAULT NULL,
  `HomeName` varchar(10) DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `Elementary` int(1) DEFAULT NULL,
  `Middle` int(1) DEFAULT NULL,
  `High` int(1) DEFAULT NULL,
  `University` varchar(1) DEFAULT NULL,
  `PublicOffice` int(1) DEFAULT NULL,
  `Hospital` int(1) DEFAULT NULL,
  `DepartmentStore` varchar(1) DEFAULT NULL,
  `Mall` varchar(1) DEFAULT NULL,
  `Park` varchar(1) DEFAULT NULL,
  `Other` int(1) DEFAULT NULL,
  `YearBuilt` int(4) DEFAULT NULL,
  `Area` int(4) DEFAULT NULL,
  `Ground` varchar(3) DEFAULT NULL,
  `Basement` int(255) DEFAULT NULL,
  `Floor` int(2) DEFAULT NULL,
  `Apt` int(1) DEFAULT NULL,
  `Manager` int(2) DEFAULT NULL,
  `Elevators` varchar(2) DEFAULT NULL,
  `BusStop` int(2) DEFAULT NULL,
  `Subway` int(23) DEFAULT NULL,
  `Image1` varchar(1080) DEFAULT NULL,
  `Image2` varchar(1080) DEFAULT NULL,
  `Image3` varchar(1080) DEFAULT NULL,
  `Image4` varchar(1080) DEFAULT NULL,
  `Image5` varchar(1080) DEFAULT NULL,
  `Image6` varchar(1080) DEFAULT NULL,
  `HallWay` varchar(300) DEFAULT NULL,
  `Heating` varchar(300) DEFAULT NULL,
  `ApartmentType` varchar(300) DEFAULT NULL,
  `SubwayStation` varchar(300) DEFAULT NULL,
  `Permission` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `home`
--

INSERT INTO `home` (`HomeId`, `Address`, `Purpose`, `UserId`, `HomeName`, `Price`, `Elementary`, `Middle`, `High`, `University`, `PublicOffice`, `Hospital`, `DepartmentStore`, `Mall`, `Park`, `Other`, `YearBuilt`, `Area`, `Ground`, `Basement`, `Floor`, `Apt`, `Manager`, `Elevators`, `BusStop`, `Subway`, `Image1`, `Image2`, `Image3`, `Image4`, `Image5`, `Image6`, `HallWay`, `Heating`, `ApartmentType`, `SubwayStation`, `Permission`) VALUES
(1, 'number1', 'ForRent', 7, 'Homename1', 141.592, 3, 2, 2, '2', 2, 1, '1', '1', '', 5, 2006, 814, '111', 184, 3, 3, 3, '3', 10, 6, 'https://picsum.photos/300/500', 'https://picsum.photos/300/500', 'https://picsum.photos/300/500', 'https://picsum.photos/300/500', 'https://picsum.photos/300/500', 'https://picsum.photos/300/500', 'terraced', 'individual_heating', 'management_itrust', 'Kyungbuk_uni_hospital', 0),
(3, 'number3', 'ForRent', 7, 'Homename3', 48.672, 2, 1, 1, '', 5, 1, '2', '1', '1', 3, 1985, 587, '8', 76, 6, 1, 2, '2', 0, 26, 'https://picsum.photos/300/502', 'https://picsum.photos/300/502', 'https://picsum.photos/300/502', 'https://picsum.photos/300/502', 'https://picsum.photos/300/502', 'https://picsum.photos/300/502', 'corridor', 'individual_heating', 'self_management', 'Daegu', 1),
(4, 'number4', 'ForRent', 7, 'Homename4', 3.853, 2, 2, 1, '2', 1, 1, '', '1', '', 5, 2006, 256, '249', 536, 8, 6, 5, '11', 7, 5, 'https://picsum.photos/300/503', 'https://picsum.photos/300/503', 'https://picsum.photos/300/503', 'https://picsum.photos/300/503', 'https://picsum.photos/300/503', 'https://picsum.photos/300/503', 'corridor', 'individual_heating', 'self_management', 'Daegu', 1),
(5, 'number5', 'ForRent', 7, 'Homename5', 221.238, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 1761, '523', 536, 3, 8, 8, '2', 6, 3, 'https://picsum.photos/300/504', 'https://picsum.photos/300/504', 'https://picsum.photos/300/504', 'https://picsum.photos/300/504', 'https://picsum.photos/300/504', 'https://picsum.photos/300/504', 'terraced', 'individual_heating', 'management_itrust', 'Sinnam', 0),
(6, 'number6', 'ForRent', 2, 'Homename6', 3.584, 4, 3, 5, '5', 7, 1, '1', '1', '1', 3, 1992, 355, '2', 0, 5, 3, 5, '1', 15, 26, 'https://picsum.photos/300/505', 'https://picsum.photos/300/505', 'https://picsum.photos/300/505', 'https://picsum.photos/300/505', 'https://picsum.photos/300/505', 'https://picsum.photos/300/505', 'mixed', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(7, 'number7', 'ForRent', 2, 'Homename7', 78.318, 3, 3, 4, '4', 5, 1, '1', '1', '', 3, 1992, 644, '142', 79, 2, 3, 4, '8', 19, 29, 'https://picsum.photos/300/506', 'https://picsum.photos/300/506', 'https://picsum.photos/300/506', 'https://picsum.photos/300/506', 'https://picsum.photos/300/506', 'https://picsum.photos/300/506', 'corridor', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(8, 'number8', 'ForRent', 3, 'Homename8', 61.946, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 644, '523', 536, 1, 8, 8, '2', 23, 20, 'https://picsum.photos/300/507', 'https://picsum.photos/300/507', 'https://picsum.photos/300/507', 'https://picsum.photos/300/507', 'https://picsum.photos/300/507', 'https://picsum.photos/300/507', 'mixed', 'individual_heating', 'self_management', 'Myungduk', 1),
(9, 'number9', 'ForSale', 3, 'Homename9', 847, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 644, '523', 536, 3, 8, 8, '2', 29, 22, 'https://picsum.photos/300/508', 'https://picsum.photos/300/508', 'https://picsum.photos/300/508', 'https://picsum.photos/300/508', 'https://picsum.photos/300/508', 'https://picsum.photos/300/508', 'mixed', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(10, 'number10', 'ForSale', 2, 'Homename10', 83185, 3, 3, 4, '4', 5, 1, '1', '1', '', 3, 1992, 644, '142', 79, 13, 3, 4, '8', 1, 11, 'https://picsum.photos/300/509', 'https://picsum.photos/300/509', 'https://picsum.photos/300/509', 'https://picsum.photos/300/509', 'https://picsum.photos/300/509', 'https://picsum.photos/300/509', 'mixed', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(11, 'number11', 'ForSale', 1, 'Homename11', 168141, 3, 1, 1, '1', 5, 1, '1', '', '1', 4, 1986, 1377, '713', 0, 4, 7, 8, '27', 22, 16, 'https://picsum.photos/300/510', 'https://picsum.photos/300/510', 'https://picsum.photos/300/510', 'https://picsum.photos/300/510', 'https://picsum.photos/300/510', 'https://picsum.photos/300/510', 'mixed', 'individual_heating', 'self_management', 'Myungduk', 1),
(12, 'number12', 'ForSale', 3, 'Homename12', 153982, 3, 1, 1, '1', 5, 1, '1', '', '1', 4, 1986, 914, '713', 0, 11, 7, 8, '27', 5, 12, 'https://picsum.photos/300/511', 'https://picsum.photos/300/511', 'https://picsum.photos/300/511', 'https://picsum.photos/300/511', 'https://picsum.photos/300/511', 'https://picsum.photos/300/511', 'terraced', 'central_heating', 'management_itrust', 'Kyungbuk_uni_hospital', 1),
(13, 'number13', 'ForSale', 4, 'Homename13', 2884, 3, 3, 2, '2', 3, 1, '2', '1', '2', 1, 2007, 868, '', 127, 18, 7, 14, '16', 8, 1, 'https://picsum.photos/300/512', 'https://picsum.photos/300/512', 'https://picsum.photos/300/512', 'https://picsum.photos/300/512', 'https://picsum.photos/300/512', 'https://picsum.photos/300/512', 'terraced', 'central_heating', 'management_itrust', 'Kyungbuk_uni_hospital', 1),
(14, 'number14', 'ForSale', 2, 'Homename14', 6176, 2, 1, 1, '', 5, 1, '2', '1', '1', 3, 1985, 587, '8', 76, 7, 1, 2, '2', 9, 16, 'https://picsum.photos/300/513', 'https://picsum.photos/300/513', 'https://picsum.photos/300/513', 'https://picsum.photos/300/513', 'https://picsum.photos/300/513', 'https://picsum.photos/300/513', 'terraced', 'individual_heating', 'management_itrust', 'Kyungbuk_uni_hospital', 1),
(16, 'number16', 'ForSale', 1, 'Homename16', 18584, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 1288, '523', 536, 24, 8, 8, '2', 2, 29, 'https://picsum.photos/300/515', 'https://picsum.photos/300/515', 'https://picsum.photos/300/515', 'https://picsum.photos/300/515', 'https://picsum.photos/300/515', 'https://picsum.photos/300/515', 'corridor', 'individual_heating', 'self_management', 'Daegu', 0),
(17, 'number17', 'ForSale', 1, 'Homename17', 12796, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 914, '523', 536, 2, 8, 8, '2', 6, 25, 'https://picsum.photos/300/516', 'https://picsum.photos/300/516', 'https://picsum.photos/300/516', 'https://picsum.photos/300/516', 'https://picsum.photos/300/516', 'https://picsum.photos/300/516', 'corridor', 'individual_heating', 'management_itrust', 'Sinnam', 1),
(18, 'number18', 'ForSale', 1, 'Homename18', 6461, 4, 3, 5, '5', 7, 1, '1', '1', '1', 3, 1992, 576, '2', 0, 5, 3, 5, '1', 30, 8, 'https://picsum.photos/300/517', 'https://picsum.photos/300/517', 'https://picsum.photos/300/517', 'https://picsum.photos/300/517', 'https://picsum.photos/300/517', 'https://picsum.photos/300/517', 'mixed', 'individual_heating', 'management_itrust', 'Myungduk', 0),
(19, 'number19', 'ForSale', 1, 'Homename19', 176991, 4, 3, 5, '5', 6, 2, '', '1', '', 4, 1993, 1451, '523', 536, 1, 8, 8, '2', 0, 6, 'https://picsum.photos/300/518', 'https://picsum.photos/300/518', 'https://picsum.photos/300/518', 'https://picsum.photos/300/518', 'https://picsum.photos/300/518', 'https://picsum.photos/300/518', 'mixed', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(20, 'number20', 'ForSale', 1, 'Homename20', 55752, 4, 3, 5, '5', 7, 1, '1', '1', '1', 3, 1992, 576, '2', 0, 1, 3, 5, '1', 16, 30, 'https://picsum.photos/300/519', 'https://picsum.photos/300/519', 'https://picsum.photos/300/519', 'https://picsum.photos/300/519', 'https://picsum.photos/300/519', 'https://picsum.photos/300/519', 'corridor', 'individual_heating', 'management_itrust', 'Myungduk', 1),
(26, NULL, 'ForSale', 7, '2314dfasdf', 2, 2, 22, 2, '2', 123, 123, '1', '1', '1', 312, 0, 0, '231', 123, 0, 0, 0, 'ds', 123, 122, 'asdf', NULL, NULL, NULL, NULL, NULL, '2134', 'asdasdfa', 'fasdf', 'asdf', 0),
(27, NULL, 'ForSale', 7, '3123123', 32, NULL, NULL, NULL, '3', NULL, NULL, '1', NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '321312', NULL, 0),
(32, 'Address', 'Purpose', 0, 'HomeName', 0, 0, 0, 0, 'U', 0, 0, 'D', 'M', 'P', 0, 0, 0, 'Gro', 0, 0, 0, 0, 'El', 0, 0, 'Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Hallway', 'Heating', 'ApartmentType', 'SubwayStation', 0),
(33, 'Address', 'Purpose', 0, 'HomeName', 0, 0, 0, 0, 'U', 0, 0, 'D', 'M', 'P', 0, 0, 0, 'Gro', 0, 0, 0, 0, 'El', 0, 0, 'Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Hallway', 'Heating', 'ApartmentType', 'SubwayStation', 0),
(34, 'Address', 'Purpose', 0, 'HomeName', 0, 0, 0, 0, 'U', 0, 0, 'D', 'M', 'P', 0, 0, 0, 'Gro', 0, 0, 0, 0, 'El', 0, 0, 'Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Hallway', 'Heating', 'ApartmentType', 'SubwayStation', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `meeting`
--

CREATE TABLE `meeting` (
  `MeetingId` int(100) NOT NULL,
  `HomeId` int(100) NOT NULL,
  `Permission` int(100) NOT NULL,
  `MeetingDate` varchar(100) NOT NULL,
  `Duration` int(100) NOT NULL,
  `EmailBooker` varchar(1000) NOT NULL,
  `Message` varchar(1000) NOT NULL,
  `CreatedDate` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `meeting`
--

INSERT INTO `meeting` (`MeetingId`, `HomeId`, `Permission`, `MeetingDate`, `Duration`, `EmailBooker`, `Message`, `CreatedDate`) VALUES
(11, 1, 0, '15/11/2000', 0, '3', '213', '2020-02-27'),
(13, 2, 0, '2020-03-28T11:11', 0, '1', '23', '2020-03-01'),
(15, 2, 1, '2020-03-28T11:11', 1, 'dotrunghg1999@gmail.com', 'tét', '2020-03-02'),
(16, 2, 1, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(17, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(18, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(19, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(20, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(21, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(22, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(23, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(24, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(25, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(26, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(27, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(28, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(29, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(30, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(31, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(32, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(33, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(34, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(35, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(36, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(37, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(38, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(39, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(40, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(41, 2, 0, '2020-03-17T01:01', 1, 'dotrunghg1999@gmail.com', '1', '2020-03-12'),
(42, 4, 1, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(43, 4, 1, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(44, 4, 1, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(45, 4, 0, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(46, 4, 1, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(47, 4, 0, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(48, 4, 1, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20'),
(49, 4, 0, '2020-03-10T11:11', 1, 'dotrunghg1999@gmail.com', 'test', '2020-03-20');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `NewsId` int(100) NOT NULL,
  `UserId` int(100) NOT NULL,
  `Permission` int(100) NOT NULL,
  `Brief` varchar(500) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `Content` mediumtext NOT NULL,
  `Place` varchar(10000) NOT NULL,
  `Image` varchar(10000) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`NewsId`, `UserId`, `Permission`, `Brief`, `Title`, `Content`, `Place`, `Image`, `CreatedDate`) VALUES
(1, 7, 1, 'rem Ipsum \"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\" \"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac posuere dolor, quis posuere purus. Sed vel auctor eros. Suspendisse potenti. Suspendisse in nisi augue. Phasellus dapibus luctus augue et lobortis. Mauris tristique justo id ullamcorper feugiat. Mauris risus turpis,', 'day la title', 'Lorem Ipsum\r\n\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"\r\n\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\"\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac posuere dolor, quis posuere purus. Sed vel auctor eros. Suspendisse potenti. Suspendisse in nisi augue. Phasellus dapibus luctus augue et lobortis. Mauris tristique justo id ullamcorper feugiat. Mauris risus turpis, rhoncus pretium lacinia ut, sodales sollicitudin urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vitae est a imperdiet. Vivamus eros libero, eleifend in leo vel, efficitur mattis magna. Vivamus ac enim magna. Mauris vestibulum dignissim fermentum. Etiam viverra dictum mauris, eget molestie sem tempus sodales. Quisque laoreet dapibus urna, non varius nulla placerat non.\r\n\r\nVivamus ac odio purus. Praesent non nulla sed urna suscipit tempor ornare quis risus. Morbi tincidunt dignissim lacinia. Aliquam non leo a dui gravida sollicitudin sit amet vel nunc. Donec lorem arcu, laoreet vel elit at, luctus pulvinar nulla. Nunc consectetur leo vitae rhoncus viverra. Suspendisse ornare tortor leo, et ullamcorper libero porta ut. Sed cursus dolor id mauris vehicula, non facilisis dui varius. Phasellus vitae efficitur dolor.\r\n\r\nMauris rutrum erat diam, et bibendum elit dapibus at. Sed vulputate turpis vitae vulputate volutpat. Nunc odio nibh, suscipit vitae ipsum iaculis, bibendum semper ante. Quisque vulputate purus odio, ut aliquam velit faucibus tempus. Nullam vitae accumsan felis. Phasellus bibendum, purus ut ultrices iaculis, augue velit suscipit turpis, quis euismod nisi ligula quis dui. Cras aliquam elit ac consequat consequat. Praesent tincidunt pretium cursus. Donec at consectetur quam. Quisque dapibus at erat eget eleifend. Vestibulum mauris nisi, euismod non massa et, dignissim viverra libero. Vivamus in ante id turpis gravida ultrices. Suspendisse vitae orci ut sapien laoreet vulputate. Vestibulum velit turpis, malesuada id dui vitae, laoreet fermentum lectus. Sed et diam vitae neque suscipit tincidunt.\r\n\r\nFusce nulla elit, sagittis et rhoncus et, ultrices ut lectus. Vivamus fringilla enim ut malesuada gravida. Integer a elit sed risus bibendum venenatis at vehicula lectus. Proin semper sodales mi, sit amet sagittis ante malesuada sed. In nec dui vitae arcu molestie condimentum. Curabitur vitae magna sed nulla sagittis posuere. Donec id faucibus nibh.\r\n\r\nInteger rutrum, lacus in tincidunt luctus, odio lectus aliquam lacus, non volutpat quam ipsum at diam. Suspendisse porta malesuada augue, eu tempor risus malesuada a. Fusce urna est, accumsan quis mauris eget, pretium vehicula nisl. Aliquam pulvinar ornare enim, sed accumsan metus egestas ut. Sed imperdiet risus sed fermentum consequat. Sed ultrices varius lorem, vel sagittis ipsum. Cras efficitur cursus felis ac mattis. Integer a ex eget lacus pharetra semper at et felis. Aenean at tristique libero. Proin ultricies condimentum velit, a molestie augue. Ut in dui et neque facilisis imperdiet.\r\n\r\nMaecenas leo odio, pulvinar ac aliquet in, consectetur nec ligula. Aliquam erat volutpat. Sed vulputate sapien quis augue hendrerit interdum. Suspendisse congue non dui at rhoncus. Sed semper ullamcorper maximus. Nunc ac ultrices nisi. Fusce cursus cursus dui ut gravida.\r\n\r\nQuisque vel ullamcorper nisi. Cras leo erat, placerat quis ultricies at, bibendum vitae arcu. Nulla faucibus efficitur ipsum, vel rhoncus dui gravida vitae. Nullam in dui ut felis finibus consequat. Pellentesque at lacinia purus, commodo egestas sapien. Sed in pellentesque lacus, nec consectetur libero. Duis dictum finibus ex quis rhoncus. Duis sed odio tincidunt, auctor tortor vel, luctus augue. Donec mattis sollicitudin tristique. Curabitur ultricies ex non orci tempor vestibulum. Nulla facilisi. Quisque nulla elit, sagittis non faucibus non, volutpat quis libero.\r\n\r\nNulla sagittis mattis mauris, ut congue lectus tincidunt non. Donec ut ex non nulla rutrum vulputate ac malesuada mauris. Sed vel pellentesque mauris. Proin blandit metus non urna volutpat, at elementum odio maximus. Pellentesque suscipit augue ut est faucibus bibendum condimentum nec nulla. Quisque bibendum ac lorem eget consequat. Aenean sed tortor vel lorem eleifend porta. Sed sodales libero erat, at aliquam augue ullamcorper nec. Praesent non varius sem, in varius eros. Maecenas varius dapibus libero nec viverra. Donec at efficitur diam, eu luctus tellus. Etiam rhoncus tempus eleifend.\r\n\r\nDonec viverra nisi felis, at convallis diam vehicula et. Duis sit amet bibendum arcu. Aliquam mollis lacus massa, id aliquam velit feugiat id. Phasellus nec lorem egestas magna euismod sollicitudin. Integer tempus dolor at lorem porta dictum eget at nibh. In vitae augue iaculis nibh aliquet interdum et eget diam. Etiam id varius nisi, vestibulum mollis quam. Aenean imperdiet lacus diam, sed auctor sapien egestas vitae. Nunc vitae eros est. Donec sit amet elit at neque consequat pharetra. Nulla facilisi. Donec eget mattis lectus. Nulla elementum mollis metus non suscipit.\r\n\r\nMauris in risus eleifend, auctor leo sit amet, auctor ex. Donec ultrices nisl a sollicitudin porta. In at est eget libero rutrum pulvinar. Sed vehicula, nunc in pretium semper, ligula risus consequat tortor, sit amet euismod metus enim molestie lorem. Nulla ac dolor elit. Sed erat nisl, blandit et erat iaculis, ornare dignissim mauris. Nullam eu ipsum tellus. Donec in dolor faucibus, fringilla magna quis, iaculis lacus. Vivamus rhoncus nec sapien ac porttitor. Sed ligula ex, malesuada a malesuada non, pharetra vitae justo. In pellentesque odio non ultricies pulvinar. Donec vel eros sit amet risus consectetur feugiat. Vestibulum a suscipit leo. Mauris posuere pulvinar magna efficitur luctus. Nulla a eros quam.', 'KimJungkun-Busan', 'https://picsum.photos/300/500', '2020-02-25 00:00:00'),
(2, 7, 1, 'this is title', 'ádasd', 'ádasdas', 'test user 1', 'https://picsum.photos/300/501', '2020-02-27 00:00:00'),
(5, 1, 1, 'Why do we use it?\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in thei', 'news 1', 'Where does it come from?\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Ha noi', 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687', '2020-03-01 00:00:00'),
(8, 1, 1, 'Why do we use it?\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in thei', 'news 1', 'Where does it come from?\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 'Ha noi', 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687', '2020-03-09 00:00:00'),
(9, 7, 1, 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"\n\"Không có ai mu?n kh? ?au cho chính mình, mu?n tìm ki?m v? nó và mu?n có nó, b?i vì nó là s? ?au kh?...\"', 'Vu Han Corona', '<h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>', 'Wuha - China', 'https://znews-photo.zadn.vn/w1024/Uploaded/xqeioxlsxr/2020_01_31/03.jpg', '2020-03-12 00:00:00'),
(13, 7, 1, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(14, 7, 0, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(15, 7, 1, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(16, 7, 0, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(17, 7, 0, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(18, 7, 0, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(19, 7, 0, 'C?n', 'Test News Post', '<p>?âs</p>', 'Hà N?i', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(20, 7, 0, 'fadsfda', '1234', '<p>fasdfasdf</p>', '341234', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(21, 7, 0, 'dasd', 'tetst1111', '<p>afasdf</p>', 'Hà N?i', 'https://picsum.photos/id/247/1000/700', '2020-03-12 00:00:00'),
(22, 7, 0, 'asvqwevrasdvfas', 'Test News Post', '<p>favsdvvfzxcvfwerqwtqwr</p>', 'My dinh', 'https://picsum.photos/id/247/1000/700', '2020-03-12 00:00:00'),
(23, 7, 0, '1234', '234', '<p>341324</p>', '412', 'https://picsum.photos/id/237/1000/700', '2020-03-12 00:00:00'),
(24, 7, 0, '3123', '123', '<p>12312</p>', '3123', 'https://picsum.photos/id/247/1000/700', '2020-03-12 00:00:00'),
(25, 7, 0, '12341234', '4412323', '<p>1234sefafsdgsdf</p>', 'asdfqwebrq', 'https://picsum.photos/id/247/1000/700', '2020-03-12 00:00:00'),
(26, 7, 0, 'asdba', '123', '<p>asdfbasdfbasd</p>', 'fasdf', 'https://picsum.photos/id/277/1000/700', '2020-03-12 00:00:00'),
(27, 7, 0, 'asdbaqwve', '123qwer', '<p>fasdvas</p>', 'fasdf', 'https://picsum.photos/id/277/1000/700', '2020-03-12 00:00:00'),
(28, 7, 0, 'avsdf', 'newsest', '<p>fasdf</p>', 'asdvfas', 'asdfvasd', '2020-03-12 00:00:00'),
(29, 7, 0, '                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium leo. Mauris odio leo, ultricies vitae ex in, iaculis molestie libero. Phasellus consequat quis massa ut tincidunt. Morbi sodales interdum orci sit amet porta. Duis et ex ligula. Maecenas fringilla nulla sed felis ultrices, mattis placerat nisi molestie. Aenean erat libero, tempor non leo vitae, facilisis accumsan tellus. Etiam vehicula lectus turpis, non fringilla tellus rutru', 'Test News Post newest', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium leo. Mauris odio leo, ultricies vitae ex in, iaculis molestie libero. Phasellus consequat quis massa ut tincidunt. Morbi sodales interdum orci sit amet porta. Duis et ex ligula. Maecenas fringilla nulla sed felis ultrices, mattis placerat nisi molestie. Aenean erat libero, tempor non leo vitae, facilisis accumsan tellus. Etiam vehicula lectus turpis, non fringilla tellus rutrum quis. Nulla convallis pulvinar lectus sit amet dapibus. Nullam pretium egestas diam a semper.</p><p>Nullam commodo est sed interdum condimentum. Aenean id sapien ex. Suspendisse vel quam sollicitudin, tincidunt ex eu, fringilla libero. Vestibulum mauris eros, porta sit amet arcu vel, ornare viverra tortor. Curabitur maximus maximus imperdiet. Fusce pretium est diam, ac mollis diam malesuada auctor. Vivamus tempus mauris a nisl vestibulum aliquet id in mi. Aenean facilisis diam eu justo ultricies facilisis. Praesent molestie neque sed est pharetra tristique. Mauris vitae rhoncus purus. Ut id nulla sit amet lorem hendrerit congue. Donec ac lacus hendrerit, rhoncus sem ut, posuere velit. Nunc dapibus risus in sapien cursus gravida. Nunc a justo ut metus vehicula placerat at vel ipsum. In libero lorem, blandit id erat ut, malesuada dictum odio.</p><p>Curabitur pharetra placerat faucibus. Nulla pellentesque finibus libero, quis viverra nisi. Maecenas sed volutpat libero. Aenean sit amet varius metus, viverra malesuada odio. Nam dictum fermentum tincidunt. Curabitur malesuada quis libero quis venenatis. Fusce egestas, neque eu maximus luctus, quam dui faucibus ante, a dignissim ante velit et ipsum.</p><p>Sed risus ligula, vulputate nec est nec, pellentesque dapibus nunc. Pellentesque placerat lorem eget tellus dapibus fringilla. Vestibulum semper non elit vel imperdiet. Morbi porttitor fringilla arcu vitae faucibus. Nulla nec orci venenatis, feugiat metus id, viverra libero. Etiam gravida bibendum feugiat. Quisque in lectus magna. Duis mollis fringilla euismod.</p><p>Proin gravida neque id risus eleifend feugiat. Aliquam odio turpis, placerat in fermentum eu, vulputate mattis lectus. Nulla sed nibh lectus. Mauris gravida ligula quis turpis feugiat ornare. Donec iaculis sem quam, id egestas justo ultrices id. Integer eget felis mattis, condimentum enim at, facilisis purus. Sed ligula quam, dapibus et vehicula eget, sollicitudin eu ipsum. Quisque ac facilisis diam. Morbi vestibulum leo et ornare mollis. Nulla pulvinar gravida arcu ac commodo. Nam aliquam gravida justo id luctus. Maecenas egestas tortor</p>', 'Hà N?i', 'https://picsum.photos/id/247/1000/700', '2020-03-12 14:55:47'),
(30, 7, 0, 'asdf', 'fasdv', '<p>asdfa</p>', 'asdv', 'https://picsum.photos/id/247/1000/700', '2020-03-12 15:16:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `UserId` int(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(10000) NOT NULL,
  `Role` int(100) NOT NULL,
  `FullName` varchar(1000) NOT NULL,
  `Dob` varchar(100) NOT NULL,
  `Phone` int(100) NOT NULL,
  `CreatedDate` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`UserId`, `Email`, `Password`, `Role`, `FullName`, `Dob`, `Phone`, `CreatedDate`) VALUES
(1, 'dotrunghg1999@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Trung Quang Do', '15/11/2002', 398887287, '0000-00-00'),
(2, 'abc@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Tao Manh Duc', '15/2/2000', 12312, '2020-02-25'),
(3, 'dotrung1321312311999@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Sadio Mane', '15/11/1999', 123, '2020-02-25'),
(4, 'do1321312311999@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Chu Du', '15/11/2002', 123, '2020-02-25'),
(5, 'abc232@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Tu Ma Y', '15/2/2000', 12312, '2020-02-27'),
(6, 'abc123132412341@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Nguyen Phuong Linh', '15/2/1998', 12312, '2020-02-27'),
(7, 'qwer@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 0, 'Nguyen Thuy Hang', '31/1/2020', 123, '2020-02-27'),
(8, 'doanvanquang123@gmail.com', '$2a$10$h/QcuFTbaGOUCKdy5SrPIe56Np3mAILNHvuyzToRWDjDiE19SMqW6', 0, 'Doan Van Quang', '15/11/1999', 2147483647, '2020-02-27'),
(9, 'vanquang@gmail.com', '$2a$10$Y/tOh0XVYxUtW6Uf9SPgVuTe7WMQfmaNlbYgFeTlN4xQYFFtj6Zlq', 0, 'Khong Minh ', '15/11/1999', 398887287, '2020-02-27'),
(10, 'erina@gmail.com', '$2a$10$tkg.zRssN/3SKnmt8KTiKuPxvsT9QsAV1QGcd5A1OiAkAVOt/MCW.', 1, 'Truong Phi', '15/11/1995', 398887287, '2020-02-27'),
(11, 'test1@gmail.com', '$2a$10$o6afXlWiai/I14XqYko.ve/t3pbn0m3v8gSMiwomJRibhrQvDUAoW', 0, 'test register', '15/11/1999', 398887287, '2020-02-27');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`HomeId`);

--
-- Chỉ mục cho bảng `meeting`
--
ALTER TABLE `meeting`
  ADD PRIMARY KEY (`MeetingId`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`NewsId`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `home`
--
ALTER TABLE `home`
  MODIFY `HomeId` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `meeting`
--
ALTER TABLE `meeting`
  MODIFY `MeetingId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `NewsId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `UserId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
