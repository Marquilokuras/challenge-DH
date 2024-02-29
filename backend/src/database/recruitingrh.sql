-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-02-2024 a las 23:33:08
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recruitingrh`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `dni` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `urlLinkedin` longtext NOT NULL,
  `birthDate` date NOT NULL,
  `gender` enum('Man','Woman','Other') NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `applicants`
--

INSERT INTO `applicants` (`id`, `dni`, `name`, `lastname`, `mail`, `phone`, `urlLinkedin`, `birthDate`, `gender`, `image`) VALUES
(1, 1111, 'Gloria', 'Medina', 'gloriaMedina@gmail.com', 38843, 'gloria-medina-linkedin', '1988-02-10', 'Woman', 'foto1.jpg'),
(2, 2222, 'Daniel', 'Fuentes', 'danielFuentes@gmail.com', 38847, 'daniel-fuentes-linkedin', '1987-11-23', 'Man', 'foto2.jpg'),
(3, 3333, 'Lee', 'Chim', 'leeChim@gmail.com', 38846, 'lee-chim-linkedin', '1992-06-10', 'Woman', 'foto3.jpg'),
(4, 4444, 'Rocio', 'Carle', 'rocioCarle@gmail.com', 38842, 'rocio-carle-linkedin', '1990-05-19', 'Other', 'foto4.jpg'),
(5, 5555, 'Victor', 'Fuentes', 'victorFuentes@gmail.com', 38841, 'victor-fuentes-linkedin', '1991-03-22', 'Man', 'foto5.jpg'),
(6, 6666, 'Luis', 'Fuentes', 'luisFuentes@gmail.com', 38849, 'luis-fuentes-linkedin', '1986-12-12', 'Man', 'foto6.jpg');

-- --------------------------------------------------------


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `professions`
--

CREATE TABLE `professions` (
  `id` int(11) NOT NULL,
  `profession` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `professions`
--

INSERT INTO `professions` (`id`, `profession`) VALUES
(1, 'Desarrollador'),
(2, 'Abogado'),
(3, 'Computista'),
(4, 'Botánico'),
(5, 'Arquitecto'),
(6, 'Linguista'),
(7, 'Técnico de Sonido'),
(8, 'Profesor'),
(9, 'Economista'),
(10, 'Administrador');

--
-- Estructura de tabla para la tabla `applicants_professions`
--

CREATE TABLE `applicants_professions` (
  `id` int(11) NOT NULL,
  `applicant_id` int(11) NOT NULL,
  `profession_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `applicants_professions`
--

INSERT INTO `applicants_professions` (`id`, `applicant_id`, `profession_id`) VALUES
(1, 1, 10),
(2, 2, 7),
(3, 4, 8),
(4, 6, 9),
(5, 3, 6),
(6, 5, 3);

INSERT INTO `recruitingrh`.`applicants_professions` (`id`, `applicant_id`, `profession_id`) VALUES ('7', '4', '9');
INSERT INTO `recruitingrh`.`applicants_professions` (`id`, `applicant_id`, `profession_id`) VALUES ('8', '6', '1');



--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `applicant_id` (`applicant_id`),
  ADD KEY `profession_id` (`profession_id`);

--
-- Indices de la tabla `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `professions`
--
ALTER TABLE `professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  ADD CONSTRAINT `applicants_professions_ibfk_1` FOREIGN KEY (`applicant_id`) REFERENCES `applicants` (`id`),
  ADD CONSTRAINT `applicants_professions_ibfk_2` FOREIGN KEY (`profession_id`) REFERENCES `professions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
