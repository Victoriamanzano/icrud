-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-04-2024 a las 11:02:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inprocode_data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chartjs`
--

CREATE TABLE `chartjs` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `colorcode` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `chartjs`
--

INSERT INTO `chartjs` (`id`, `year`, `amount`, `colorcode`) VALUES
(2, 2011, 300, 'green'),
(3, 2012, 600, 'red'),
(4, 2013, 1500, 'red'),
(5, 2014, 3000, 'orange'),
(6, 2015, 7000, 'blue'),
(7, 2016, 8500, 'green'),
(8, 2017, 7000, 'blue'),
(9, 2018, 6000, 'purple'),
(10, 2019, 6000, 'purple'),
(11, 2020, 200, 'red'),
(12, 2021, 5000, 'pink'),
(13, 2022, 6000, 'purple'),
(14, 2023, 8000, 'green'),
(15, 2024, 700, 'red');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `birthdate` date NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postalcode` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `name`, `surname`, `dni`, `birthdate`, `address`, `postalcode`, `email`, `phone`) VALUES
(1, 'Marçel ', 'Aguilar De la Cruz', '66595845s', '2021-04-08', 'Av. Madrid 21, Barcelona', '08008', 'marcelmcmc@gmail.com', '555998556'),
(3, 'Catalina', 'Lorite Martinez', '45484545d', '1989-09-06', 'Calle Badajoz 90, Barcelona', '08011', 'catalinacoco@gmail.com', '454151526'),
(5, 'Mariela', 'Dominguez Lopez', '45848595ñ', '1998-07-12', 'Calle Doce 25, Barcelona', '08002', 'Psychomarie@gmail.com', '333665995'),
(6, 'Jose ', 'Navarro Lopez', '55578455k', '1985-01-19', 'Calle Lerida 2, Barcelona', '08130', 'jnegro@gmail.com', '999885886'),
(9, 'Daniel', 'Vargas Lopez', '48557844j', '1985-10-09', 'Calle Virgen Maria 2, Barcelona', '08008', 'dvl1984@gmail.com', '555858998'),
(10, 'Mario', 'Lopez Garcia', '55458457o', '1985-12-02', 'av. Barcelona 8, Montmeló', '08150', 'marioyoshi@gmail.com', '454845785'),
(12, 'Mari Carmen', 'Guerra Garcia', '45484587o', '1985-08-13', 'Rambla 14, La LLagosta', '08131', 'mcarmen@gmail.com', '336565985');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(12) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `date`) VALUES
(1, 'VMTattoo', '2024-04-04'),
(2, 'Maria2Tattoo', '2024-04-12'),
(3, 'Inspección Studio', '2024-04-16'),
(4, 'Pedido Mensual', '2024-04-05'),
(5, 'Inventario Almacén', '2024-04-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maps`
--

CREATE TABLE `maps` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maps`
--

INSERT INTO `maps` (`id`, `title`, `latitude`, `longitude`, `category`) VALUES
(1, 'Oficina de Turisme de Catalunya Barcelona - Palau Robert', '41.3960428', '2.1235532', 'Info Point'),
(2, 'Turisme de Barcelona Sagrada Familia', '41.3878215', '2.1100545', 'Info Point'),
(3, 'Turisme de Barcelona Plaça Espanya', '41.3746268', '2.1139294', 'Info Point'),
(4, 'Punto de Información Glòries', '41.399055', '2.1213349', 'Info Point'),
(5, 'El Nacional', '41.3905838', '2.153235', 'Restaurant'),
(6, 'Port Vela Barcelona', '41.3689007', '2.1869702', 'Restaurant'),
(7, 'Vigo Restaurant Tapes', '41.3870359', '2.160394', 'Restaurant'),
(8, 'Casa Dario', '41.3875902', '2.1607089', 'Restaurant'),
(9, 'Parking Romara', '41.3860828', '2.1590108', 'Parking'),
(10, 'El Triangle', '41.3862782', '2.1682758', 'Parking'),
(11, 'Parking Saba Bamsa Plaza Urquinaona', '41.3896634', '2.1727556', 'Parking'),
(12, 'Parking Indigo - C.C. Maremagnum', '41.3768708', '2.1803571', 'Parking'),
(13, 'Parking Marina Village', '41.3862223', '2.1949484', 'Parking'),
(14, 'Parking BSM Ferran Casablancas', '41.4030743', '2.128345', 'Parking'),
(15, 'Aparcamiento Camp Nou', '41.3810381', '2.1133784', 'Parking'),
(16, 'Pàrquing Centre comercial Arenas', '41.374116', '2.1445486', 'Parking'),
(17, 'Parking BSM Rambla Poblenou', '41.4043459', '2.1946227', 'Parking'),
(18, 'Punto De Información y Atención a las Mujeres', '41.3869355', '2.1095681', 'Info Point'),
(19, 'Punto de Información Juvenil Sants-Montjuic', '41.3850446', '2.130267', 'Info Point'),
(20, 'Fundació puntCAT', '41.3844563', '2.1535578', 'Info Point'),
(21, 'Punt d\'informació Montjuïc - Funicular', '41.3767723', '2.1334559', 'Info Point'),
(22, 'Information point', '41.3767723', '2.1334559', 'Info Point'),
(23, 'Asociación Punto de Referencia', '41.3960267', '2.1474463', 'Info Point'),
(24, 'Joves Sant Martí', '41.4146961', '2.1701056', 'Info Point'),
(25, 'Punt d\'Informació Fabra i Coats', '41.4426902', '2.1743649', 'Info Point'),
(26, 'Barcelona Cuida. Espacio de información y orientación', '41.3863238', '2.1228728', 'Info Point'),
(27, 'Centre LGTBI de Barcelona', '41.3902482', '2.1421846', 'Info Point'),
(28, 'Quinoa Bar', '41.3928609', '2.1224556', 'Restaurant'),
(29, 'Restaurante vegano Alive', '41.3944706', '2.1112976', 'Restaurant'),
(30, 'Veggie Garden', '41.3837813', '2.1290645', 'Restaurant'),
(31, 'Wild Food BCN', '41.400771 ', '2.154845', 'Restaurant'),
(32, 'Honest Greens Tuset', '41.3953386', '2.1378364', 'Restaurant'),
(33, 'Bestial Beach Club', '41.3858871', '2.1923428', 'Restaurant'),
(34, 'La Taberna Gallega de Marcos Barcelona', '41.3853558 ', '2.1914416', 'Restaurant'),
(35, 'Restaurante La Barca del Salamanca', '41.3785352', '2.1895816', 'Restaurant'),
(36, 'Surf House Barcelona', '41.3775032', '2.1896899', 'Restaurant'),
(37, 'Las Muns', '41.373983', '2.1616254', 'Restaurant'),
(38, 'A taberna de Vigo', '41.375215', '2.1647552', 'Restaurant'),
(39, 'Can Travi Nou', '41.4304245 ', '2.1478427', 'Restaurant');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `chartjs`
--
ALTER TABLE `chartjs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dni` (`dni`);

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `maps`
--
ALTER TABLE `maps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
