-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2023 a las 15:25:45
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
-- Base de datos: `ori-db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor`
--

CREATE TABLE `actor` (
  `nombres` varchar(254) NOT NULL,
  `apellidos` varchar(254) NOT NULL,
  `codigo` int(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `email_inst` varchar(100) NOT NULL,
  `tipo_doc` varchar(30) NOT NULL,
  `numero_doc` varchar(15) NOT NULL,
  `expedido_en` varchar(100) NOT NULL,
  `fecha_expedicion` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `est_civil` varchar(15) NOT NULL,
  `fecha_nac` date NOT NULL,
  `pais_nac` varchar(40) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `municipio` varchar(30) NOT NULL,
  `celular` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `actor`
--

INSERT INTO `actor` (`nombres`, `apellidos`, `codigo`, `email`, `email_inst`, `tipo_doc`, `numero_doc`, `expedido_en`, `fecha_expedicion`, `sexo`, `est_civil`, `fecha_nac`, `pais_nac`, `departamento`, `municipio`, `celular`) VALUES
('Cris', 'taut', 115, 'crtautiva@gmail.com', 'crtautiva@gmail.com', 'C.C. - Cédula De Ciudadanía', '1092834456', 'los patios', '2023-06-05', 'Hombre', 'Soltero(A)', '2023-06-05', 'Colombia', 'zulia', 'zulia', '+571234567809'),
('Pedro', 'Gun', 115456, 'crtautiva@gmail.com', 'cristiantl@ufps.edu.co', 'Cedula de Ciudadania', '1093787070', 'Los patios', '2014-09-19', 'Hombre', 'Soltero(A)', '1996-09-13', 'Colombia', 'Norte de Santander', 'Los patios', '+57 311861828'),
('Cristian1', 'Taut2', 1151421, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1092833', 'barranca', '1993-04-14', 'Hombre', 'Soltero(A)', '2023-06-06', 'Colombia', 'Depart', 'Patios', '+571223344222'),
('Cristian1', 'Tautiva2', 1151560, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093787070', 'Los Patios', '2023-05-03', 'Hombre', 'Casado(A)', '1996-09-18', 'Spain', 'Norte de Santander', 'Los Patios', '+573119828352'),
('Dcris', 'Taut', 1151563, 'dc@gmail.com', 'dc@gmail.com', 'C.C. - Cédula De Ciudadanía', '10192873544', 'Cucuta', '2023-06-05', 'Hombre', 'Unión Libre', '2023-06-27', 'American Samoa', 'Norte', 'Patios', '+573111652434'),
('Dana', 'Grimaldos', 1151564, 'danagrimaldos@gmail.com', 'danagrimaldos@gmail.com', 'C.C. - Cédula De Ciudadanía', '11092828364', 'Los Patios', '2023-06-07', 'Hombre', 'Casado(A)', '2023-06-27', 'Albania', 'Depart1', 'Muni2', '+573152635421'),
('Cristian1', 'Tautiva2', 1151565, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093787070', 'Los Patios', '2023-05-03', 'Hombre', 'Casado(A)', '1996-09-18', 'Spain', 'Norte de Santander', 'Los Patios', '+573119828352'),
('Breyner', 'tautiva', 1151566, 'breini@gmail.com', 'breini@gmail.com', 'T.I. - Tarjeta De Identidad', '123456789', 'Cucuta', '2023-06-07', 'Hombre', 'Soltero(A)', '2023-06-14', 'Colombia', 'Norte de santander', 'Los Patios', '+573142535521'),
('David', 'Ferrer', 1151589, 'crta@gmail.com', 'crta@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093765221', 'Cucuta', '2023-06-20', 'Hombre', 'Soltero(A)', '2023-06-06', 'Albania', 'depart', 'muni', '+573125162441'),
('aasss', 'aaaa', 1151590, 'c@gmail.com', 'c@gmail.com', 'C.C. - Cédula De Ciudadanía', '1172635222', 'ccuuta', '2023-06-20', 'Hombre', 'Casado(A)', '2023-06-05', 'Afghanistan', 'ahjsgstreess', 'aahgsgsaaa', '+57112344'),
('Farce', 'Udir', 1153412, 'crtautiva@gmail.com', 'crtautiva@gmail.com', 'C.C. - Cédula De Ciudadanía', '123456', 'cucuta', '2023-06-28', 'Hombre', 'Soltero(A)', '2023-06-06', 'Albania', 'sdereee', 'los patios', '+572123432123'),
('Catalina', 'Quebrada', 1156534, 'cata@tech.com', 'cata@ufps.edu.co', 'C.C. - Cédula De Ciudadanía', '1029837545', 'Cucuta', '2010-03-10', 'Mujer', 'Soltero(A)', '1993-11-11', 'Colombia', 'Norte de Santander', 'Los Patios', '+573229087541'),
('angelica', 'villan', 1260867, 'angelicavr@ufps.edu.co', 'angelicavr@ufps.edu.co', 'C.C. - Cédula De Ciudadanía', '1094167209', 'en el zulia', '2023-06-13', 'Mujer', 'Soltero(A)', '2023-06-14', 'Algeria', 'norte de sant', 'el zulia', '+573124342594');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facultad`
--

CREATE TABLE `facultad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `facultad`
--

INSERT INTO `facultad` (`id`, `nombre`) VALUES
(1, 'Facultad de Ciencias Agrarias y del Ambiente'),
(2, 'Facultad de Ciencias Básicas'),
(3, 'Facultad de Ciencias Empresariales'),
(4, 'Facultad de Ciencias de la Salud'),
(5, 'Facultad de Educación, Artes y Humanidades'),
(6, 'Facultad de Ingenieria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movilidad_actor`
--

CREATE TABLE `movilidad_actor` (
  `id` int(11) NOT NULL,
  `tipo_mov` varchar(15) NOT NULL,
  `clase_mov` varchar(20) NOT NULL,
  `facultad` varchar(40) NOT NULL,
  `programa` varchar(40) NOT NULL,
  `anio_mov` date NOT NULL,
  `semestre_mov` varchar(30) NOT NULL,
  `actividad_mov` varchar(40) NOT NULL,
  `descrip_act_mov` varchar(200) NOT NULL,
  `inst_origen` varchar(50) NOT NULL,
  `direccion_origen` varchar(70) NOT NULL,
  `pais_origen` varchar(30) NOT NULL,
  `depart_origen` varchar(30) NOT NULL,
  `municipio_origen` varchar(30) NOT NULL,
  `inst_destino` varchar(50) NOT NULL,
  `direccion_destino` varchar(30) NOT NULL,
  `pais_destino` varchar(30) NOT NULL,
  `depart_destino` varchar(30) NOT NULL,
  `municipio_destino` varchar(30) NOT NULL,
  `numero_dias_mov` int(2) NOT NULL,
  `mov_convenio` varchar(30) NOT NULL,
  `fuent_fin_nacional` varchar(80) NOT NULL,
  `valor_fin_nacional` int(11) NOT NULL,
  `fuent_fin_internacional` varchar(80) NOT NULL,
  `pais_fin_internacional` varchar(80) NOT NULL,
  `valor_fin_internacional` int(11) NOT NULL,
  `codigo_actor` int(10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `rol` varchar(15) NOT NULL,
  `numero_convenio_mov` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `movilidad_actor`
--

INSERT INTO `movilidad_actor` (`id`, `tipo_mov`, `clase_mov`, `facultad`, `programa`, `anio_mov`, `semestre_mov`, `actividad_mov`, `descrip_act_mov`, `inst_origen`, `direccion_origen`, `pais_origen`, `depart_origen`, `municipio_origen`, `inst_destino`, `direccion_destino`, `pais_destino`, `depart_destino`, `municipio_destino`, `numero_dias_mov`, `mov_convenio`, `fuent_fin_nacional`, `valor_fin_nacional`, `fuent_fin_internacional`, `pais_fin_internacional`, `valor_fin_internacional`, `codigo_actor`, `createdAt`, `rol`, `numero_convenio_mov`) VALUES
(1, 'Virtual', 'Entrante', 'Ingenieria', 'Ingenieria de Sistemas', '2019-08-14', 'Semestre I', 'Pasantias', 'Realización de las pasantías fuera del país ', 'UFPS', '#0- a Avenida Gran Colombia No. 12E-96, Cúcuta, Norte de Santander', 'Colombia', 'Norte de Santander', 'Los Patios', 'Harvard University', 'Massachusetts Hall, Cambridge,', 'Estados Unidos', ' Massachusetts', 'Cambridge', 10, 'NO', 'Recursos UFPS', 9000000, 'Recursos Propios', 'Colombia', 8000000, 1151565, '2023-06-01 08:33:08', '', ''),
(7, 'Nacional', 'Movilidad Entrante', 'Ingenieria', 'Ingeniería Electrónica', '2023-06-20', 'I Semestre (Ene', 'Misión', 'misioncita', 'inst origen', 'dir origen', 'Colombia', 'depart origen', 'muni origen', 'inst dest', 'dir dest', 'Afghanistan', 'depart dest', 'prov dest', 3, 'conve', 'Recursos UFPS', 1263520, 'Sector Empresarial', 'pais inter', 209811, 1151589, '2023-06-02 08:33:08', '', ''),
(8, 'Nacional', 'Movilidad Entrante', 'Ingenieria', 'Ingeniería Electrónica', '2023-06-20', 'I Semestre (Ene', 'Misión', 'misioncita', 'inst origen', 'dir origen', 'Colombia', 'depart origen', 'muni origen', 'inst dest', 'dir dest', 'Afghanistan', 'depart dest', 'prov dest', 3, 'conve', 'Recursos UFPS', 1263520, 'Sector Empresarial', 'pais inter', 209811, 1151589, '2023-06-24 08:33:08', '', ''),
(9, 'Nacional', 'Movilidad Entrante', 'Ingenieria', 'Ingeniería Electrónica', '2023-06-20', 'I Semestre (Ene', 'Misión', 'misioncita', 'inst origen', 'dir origen', 'Colombia', 'depart origen', 'muni origen', 'inst dest', 'dir dest', 'Afghanistan', 'depart dest', 'prov dest', 3, 'conve', 'Recursos UFPS', 1263520, 'Sector Empresarial', 'pais inter', 209811, 1151589, '2023-06-20 08:33:08', '', ''),
(10, 'Internacional', 'Movilidad Saliente', 'Ciencias Empresariales', 'Administración de Empresas', '2023-06-07', 'I Semestre (Ene', 'Semestre Académico De Intercambio', 'qqwwqq', 'qqwww', 'qqqwqqqqqq', 'American Samoa', 'dcdssaaa', 'bvcddss', 'vbvvv', 'xxdssa', 'Aruba', 'cvddsaa', 'accxzsads', 2, 'ascxs', 'Recursos Públicos Nacionales - Ministerio De Relaciones Exteriores', 34220, 'Sector Empresarial', 'ssweww', 22343, 1151565, '2023-06-23 08:33:08', '', ''),
(11, 'Internacional', 'Movilidad Saliente', 'Ciencias Agrarias y del Ambiente', 'Ingeniería Agronómica', '2023-06-07', 'II Semestre (Ju', 'Pasantía', 'qwee', 'qqwwwqqw', 'qqww', 'American Samoa', 'qqww', 'qqqqsxxz', 'qqas', 'qwxc111', 'Aland Islands', 'ascdff', 'asssss', 2, 'N/A', 'Recursos Públicos Nacionales - Ministerio Del Interior Y Justicia', 12340, 'Sector Empresarial', '3sdse', 45678, 1151565, '2023-06-24 08:33:08', '', ''),
(12, 'Internacional', 'Movilidad Saliente', 'Ciencias Agrarias y del Ambiente', 'Ingeniería Ambiental', '2023-06-14', 'I Semestre (Ene', 'Trabajo De Grado', 'Trabajito', 'Inst origen', 'direccionista', 'Austria', 'Dewwwr', 'prov gt', 'ufps', 'dir cucu', 'Australia', 'assi', 'ahagsfsaa', 2, 'Nom c', 'Recursos Públicos Nacionales - Ministerio Del Interior Y Justicia', 1110, 'Instituciones Privadas Sin Ánimo De Lucro', 'agstdre', 100000, 1151564, '2023-06-21 08:33:08', '', ''),
(13, 'Internacional', 'Movilidad Saliente', 'Ingenieria', 'Ingeniería de Sistemas', '2023-06-06', 'I Semestre (Ene', 'Pasantía', 'fadsree', 'assreee', 'origabsbsss', 'Armenia', 'depart', 'oiryss', 'ufpss', 'ddirrb', 'Australia', 'dest hagss', 'aassss', 1, 'N/A', 'Recursos Públicos Nacionales - Ministerio Del Interior Y Justicia', 198220, '4', 'aahssss', 100, 1151563, '2023-06-24 08:38:40', '', ''),
(14, 'Virtual', 'Entrante', 'Ingenieria', 'Ingenieria de Sistemas', '2019-08-14', 'Semestre I', 'Pasantias', 'Realizacion de Pasantias en Exterior', 'UFPS', '#0- a Avenida Gran Colombia No. 12E-96, Cúcuta, Norte de Santander', 'Colombia', 'Norte de Santander', 'Los Patios', 'Harvard University', 'Massachusetts Hall, Cambridge,', 'Estados Unidos', ' Massachusetts', 'Cambridge', 10, 'NO', 'Recursos UFPS', 9000000, 'Recursos Propios', 'Colombia', 8000000, 1151566, '2023-06-30 09:48:46', 'Docente', '1234'),
(15, 'Virtual', 'movilidad Saliente', 'Ingenieria', 'Ingenieria de Sistemas', '2019-08-14', 'Semestre I', 'Pasantias', 'Realizacion de Pasantias en Exterior', 'UFPS', '#0- a Avenida Gran Colombia No. 12E-96, Cúcuta, Norte de Santander', 'Colombia', 'Norte de Santander', 'Los Patios', 'Harvard University', 'Massachusetts Hall, Cambridge,', 'Estados Unidos', ' Massachusetts', 'Cambridge', 10, 'NO', 'Recursos UFPS', 9000000, 'Recursos Propios', 'Colombia', 8000000, 1151566, '2023-07-04 07:53:40', 'Investigador', '10293'),
(18, 'Nacional', 'Movilidad Saliente', 'Ciencias Empresariales', 'Contaduría Pública', '2023-07-05', 'II Semestre (Ju', 'Misión', 'Una misión importante', 'UFPS', 'CALLE 2', 'Colombia', 'GEORG', 'GAP', 'HARVARD', 'DQ1', 'Colombia', 'SA2', 'FE4', 3, 'hOTwe', 'Recursos Públicos Nacionales - Sena', 230922, 'Instituciones Privadas Sin Ánimo De Lucro', 'Colombia', 1928330, 1151421, '2023-07-04 09:28:36', 'Estudiante', '12344'),
(19, 'Nacional', 'Movilidad Saliente', 'Ingenieria', 'Ingeniería de Sistemas', '2023-08-02', 'I Semestre (Enero - Junio)', 'Misión', 'Va a hacer misiones', 'UFPS', 'Calle falsa #09-2', 'Colombia', 'Norte de Santander', 'Los Patios', 'UDES', 'Calle falsa #9-76', 'Colombia', 'Tarra', 'tarrita', 2, 'Conve', 'Recursos UFPS', 100000, 'Sector Administración Pública', 'Colombia', 200000, 1156534, '2023-08-24 18:23:58', 'Estudiante', '1203945');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `facultadId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`facultadId`, `id`, `name`) VALUES
(6, 1, 'Ingeniería de Sistemas'),
(6, 2, 'Ingeniería Electrónica'),
(6, 3, 'Ingeniería Civil'),
(6, 4, 'Ingeniería Electromecánica'),
(6, 5, 'Ingeniería Industrial'),
(6, 6, 'Ingeniería de Minas'),
(6, 7, 'Ingeniería Mecánica'),
(3, 8, 'Administración de Empresas'),
(3, 9, 'Contaduría Pública'),
(3, 10, 'Comercio Internacional'),
(2, 11, 'Química Industrial'),
(1, 12, 'Ingeniería Agroindustrial'),
(1, 13, 'Ingeniería Agronómica'),
(1, 14, 'Ingeniería Ambiental'),
(6, 15, 'Ingeniería Biotecnológica'),
(1, 16, 'Zootecnia'),
(4, 17, 'Enfermería'),
(4, 18, 'Seguridad y Salud en el Trabajo'),
(5, 19, 'Comunicación Social'),
(5, 20, 'Trabajo Social'),
(5, 21, 'Derecho'),
(5, 22, 'Arquitectura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `age`, `email`, `password`, `firstName`, `lastName`, `role`, `createdAt`, `updateAt`) VALUES
(1, 26, 'crtautiva@gmail.com', '$2a$10$Ej/6yRYlTpgWDHmCyPaUuewCQVUXf8/6Jag8K9lFwUkZ9Boj2V00e', 'Cristian', 'Tautiva', 'admin', '2023-05-13 08:39:03.378772', '2023-05-13 08:39:03.378772'),
(2, 17, 'dana20@gmail.com', '$2a$10$BzrZFa.p89GRCswAnjuuvueujKzzUzzigcn5IVbcoRdqZA6tGAr4W', 'Dana', 'grimaldos', 'user', '2023-05-13 08:39:35.340752', '2023-05-13 08:39:35.340752');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `facultad`
--
ALTER TABLE `facultad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_est` (`codigo_actor`);

--
-- Indices de la tabla `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_facu` (`facultadId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `facultad`
--
ALTER TABLE `facultad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `programa`
--
ALTER TABLE `programa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  ADD CONSTRAINT `fk_est` FOREIGN KEY (`codigo_actor`) REFERENCES `actor` (`codigo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `programa`
--
ALTER TABLE `programa`
  ADD CONSTRAINT `prog_fk_facu` FOREIGN KEY (`facultadId`) REFERENCES `facultad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
