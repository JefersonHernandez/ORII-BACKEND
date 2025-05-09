-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2024 at 03:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ori-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `actividad`
--

CREATE TABLE `actividad` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `actividad`
--

INSERT INTO `actividad` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'PROFESOR VISITANTE', '2024-07-06 17:38:25', '2024-07-06 17:38:28', NULL),
(2, 'ASISTENCIA A EVENTOS', '2024-07-06 17:38:29', '2024-07-06 17:38:31', NULL),
(3, 'MISIÓN', '2024-07-06 17:38:46', '2024-07-06 17:38:48', NULL),
(4, 'CURSO CORTO', '2024-07-06 17:38:58', '2024-07-06 17:39:00', NULL),
(5, 'ESTANCIA DE INVESTIGACIÓN', '2024-07-06 17:39:11', '2024-07-06 17:39:12', NULL),
(6, 'PROFESOR PROGRAMA PREGRADO', '2024-07-06 17:39:24', '2024-07-06 17:39:25', NULL),
(7, 'PROFESOR PROGRAMA ESPECIALIZACIÓN', '2024-07-06 17:39:37', '2024-07-06 17:39:38', NULL),
(8, 'PROFESOR PROGRAMA MAESTRÍA', '2024-07-06 17:39:48', '2024-07-06 17:39:49', NULL),
(9, 'PROFESOR PROGRAMA DOCTORADO', '2024-07-06 17:40:00', '2024-07-06 17:40:02', NULL),
(10, 'PROFESOR PROGRAMA POSDOCTORADO', '2024-07-06 17:40:14', '2024-07-06 17:40:15', NULL),
(11, 'ESTUDIOS DE MAESTRÍA', '2024-07-06 17:40:24', '2024-07-06 17:40:26', NULL),
(12, 'ESTUDIOS DE DOCTORADO', '2024-07-06 17:40:38', '2024-07-06 17:40:40', NULL),
(13, 'ESTUDIOS DE POSTDOCTORADO', '2024-07-06 17:40:51', '2024-07-06 17:40:53', NULL),
(14, 'SEMESTRE ACADÉMICO DE INTERCAMBIO', '2024-07-06 17:41:29', '2024-07-06 17:41:32', NULL),
(15, 'DESARROLLO DE ASIGNATURAS', '2024-07-06 17:41:36', '2024-07-06 17:41:38', NULL),
(16, 'PASANTÍA', '2024-07-06 17:41:52', '2024-07-06 17:41:54', NULL),
(17, 'ACTIVIDAD DE CORTA DURACIÓN', '2024-07-06 17:42:13', '2024-07-06 17:42:14', NULL),
(18, 'ROTACIÓN MÉDICA', '2024-07-06 17:42:30', '2024-07-06 17:42:31', NULL),
(19, 'CURSO DE ESPAÑOL', '2024-07-06 17:42:40', '2024-07-06 17:42:42', NULL),
(20, 'PRÁCTICA PROFESIONAL', '2024-07-06 17:42:52', '2024-07-06 17:42:54', NULL),
(21, 'TRABAJO DE GRADO', '2024-07-06 17:43:05', '2024-07-06 17:43:06', NULL),
(22, 'DOBLE TITULACIÓN', '2024-07-06 17:43:16', '2024-07-06 17:43:18', NULL),
(23, 'VISITA TÉCNICA', '2024-07-06 17:43:46', '2024-07-06 17:43:47', NULL),
(24, 'VISITA ACADÉMICA', '2024-07-06 17:44:55', '2024-07-06 17:44:59', NULL),
(25, 'GESTIÓN DE CONVENIOS', '2024-07-06 17:44:57', '2024-07-06 17:45:00', NULL),
(26, 'ESTUDIOS DE MAESTRÍA ', '2024-07-06 17:44:53', '2024-07-06 17:45:02', NULL),
(27, 'OTRO', '2024-07-06 17:45:45', '2024-07-06 17:45:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `nombres` varchar(254) NOT NULL,
  `apellidos` varchar(254) NOT NULL,
  `codigo` int(11) NOT NULL,
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
-- Dumping data for table `actor`
--

INSERT INTO `actor` (`nombres`, `apellidos`, `codigo`, `email`, `email_inst`, `tipo_doc`, `numero_doc`, `expedido_en`, `fecha_expedicion`, `sexo`, `est_civil`, `fecha_nac`, `pais_nac`, `departamento`, `municipio`, `celular`) VALUES
('Cris', 'taut', 115, 'crtautiva@gmail.com', 'crtautiva@gmail.com', 'C.C. - Cédula De Ciudadanía', '1092834456', 'los patios', '2023-06-05', 'Hombre', 'Soltero(A)', '2023-06-05', 'Colombia', 'zulia', 'zulia', '+571234567809'),
('Pedro', 'Gun', 115456, 'crtautiva@gmail.com', 'cristiantl@ufps.edu.co', 'Cedula de Ciudadania', '1093787070', 'Los patios', '2014-09-19', 'Hombre', 'Soltero(A)', '1996-09-13', 'Colombia', 'Norte de Santander', 'Los patios', '+57 311861828'),
('maria', 'duran', 1151111, 'crtautiva@gmail.com', 'j.hernandez@ufps.edu.co', 'C.E. - CÉDULA DE EXTRANJERÍA', '1094349752', 'Wed, 14 Aug 2024 05:00:00 GMT', '2024-08-14', '2', 'CASADO(A)', '2024-08-13', 'AX', 'Departamento 1', 'municipio 1', '573157966101'),
('Cristian1', 'Taut2', 1151421, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1092833', 'barranca', '1993-04-14', 'Hombre', 'Soltero(A)', '2023-06-06', 'Colombia', 'Depart', 'Patios', '+571223344222'),
('michael', 'mancera', 1151553, 'crtautiva@gmail.com', 'j.hernandez@ufps.edu.co', 'C.A. - CERTIFICADO CABILDO', '1094349752', 'Tue, 13 Aug 2024 05:00:00 GMT', '2024-08-13', '1', 'SOLTERO(A)', '2024-08-13', 'AI', 'Departamento 1', 'municipio 1', '573157966113'),
('Cristian1', 'Tautiva2', 1151560, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093787070', 'Los Patios', '2023-05-03', 'Hombre', 'Casado(A)', '1996-09-18', 'Spain', 'Norte de Santander', 'Los Patios', '+573119828352'),
('Dcris', 'Taut', 1151563, 'dc@gmail.com', 'dc@gmail.com', 'C.C. - Cédula De Ciudadanía', '10192873544', 'Cucuta', '2023-06-05', 'Hombre', 'Unión Libre', '2023-06-27', 'American Samoa', 'Norte', 'Patios', '+573111652434'),
('Dana', 'Grimaldos', 1151564, 'danagrimaldos@gmail.com', 'danagrimaldos@gmail.com', 'C.C. - Cédula De Ciudadanía', '11092828364', 'Los Patios', '2023-06-07', 'Hombre', 'Casado(A)', '2023-06-27', 'Albania', 'Depart1', 'Muni2', '+573152635421'),
('Cristian1', 'Tautiva2', 1151565, 'crt@gmail.com', 'crt@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093787070', 'Los Patios', '2023-05-03', 'Hombre', 'Casado(A)', '1996-09-18', 'Spain', 'Norte de Santander', 'Los Patios', '+573119828352'),
('Breyner', 'tautiva', 1151566, 'breini@gmail.com', 'breini@gmail.com', 'T.I. - Tarjeta De Identidad', '123456789', 'Cucuta', '2023-06-07', 'Hombre', 'Soltero(A)', '2023-06-14', 'Colombia', 'Norte de santander', 'Los Patios', '+573142535521'),
('David', 'Ferrer', 1151589, 'crta@gmail.com', 'crta@gmail.com', 'C.C. - Cédula De Ciudadanía', '1093765221', 'Cucuta', '2023-06-20', 'Hombre', 'Soltero(A)', '2023-06-06', 'Albania', 'depart', 'muni', '+573125162441'),
('aasss', 'aaaa', 1151590, 'c@gmail.com', 'c@gmail.com', 'C.C. - Cédula De Ciudadanía', '1172635222', 'ccuuta', '2023-06-20', 'Hombre', 'Casado(A)', '2023-06-05', 'Afghanistan', 'ahjsgstreess', 'aahgsgsaaa', '+57112344'),
('Farce', 'Udir', 1153412, 'crtautiva@gmail.com', 'crtautiva@gmail.com', 'C.C. - Cédula De Ciudadanía', '123456', 'cucuta', '2023-06-28', 'Hombre', 'Soltero(A)', '2023-06-06', 'Albania', 'sdereee', 'los patios', '+572123432123'),
('Catalina', 'Quebrada', 1156534, 'cata@tech.com', 'cata@ufps.edu.co', 'C.C. - Cédula De Ciudadanía', '1029837545', 'Cucuta', '2010-03-10', 'Mujer', 'Soltero(A)', '1993-11-11', 'Colombia', 'Norte de Santander', 'Los Patios', '+573229087541'),
('mafer', 'cardozo', 1260867, 'ant@ufps.edu.co', 'ant@ufps.edu.co', 'C.E. - Cédula De Extranjería', '1091', 'el zulia', '2001-12-01', 'Hombre', 'Soltero(A)', '2024-05-22', 'China', 'villa', 'el zulia', '+1342565');

-- --------------------------------------------------------

--
-- Table structure for table `ciudad`
--

CREATE TABLE `ciudad` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `country_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `ciudad`
--

INSERT INTO `ciudad` (`id`, `name`, `country_id`) VALUES
(62, 'Bogota', 13),
(63, 'Cucuta', 13),
(64, 'Miami', 14),
(65, 'Ibague', 13),
(66, 'Ciudad de Mexico', 15);

-- --------------------------------------------------------

--
-- Table structure for table `contacto`
--

CREATE TABLE `contacto` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `web_site` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `contacto`
--

INSERT INTO `contacto` (`id`, `name`, `position`, `email`, `web_site`) VALUES
(31, 'Jhon', 'Gerente', 'jhondoe@mail.com', 'http://vigilante.com'),
(32, 'Maria', 'Staff', 'maria@gmail.com', 'https://maria.com.co'),
(34, 'Contacto A', 'Vigilante', 'www.vigilante@gmail.com', 'http://vigilante.com'),
(35, 'Juan', 'Supervisor', 'crtautiva@gmail.com', 'http://vigilante.com'),
(36, 'Juan', 'Supervisor', 'dexter@mail.com', 'http://vigilante.com');

-- --------------------------------------------------------

--
-- Table structure for table `convenio`
--

CREATE TABLE `convenio` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `validity` varchar(255) DEFAULT NULL,
  `seccional_ocania` tinyint(1) NOT NULL DEFAULT 0,
  `end_date` date DEFAULT NULL,
  `type_agreement_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `object` varchar(255) NOT NULL,
  `institution_id` int(11) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `convenio`
--

INSERT INTO `convenio` (`id`, `name`, `code`, `validity`, `seccional_ocania`, `end_date`, `type_agreement_id`, `title`, `object`, `institution_id`, `date`) VALUES
(96, 'Estudiantes pregrado 12', '00001', 'vig', 1, '2024-08-15', 5, 'Titulo del convenio', 'assas', 33, '2024-08-12'),
(98, 'convenio 2', '1111', NULL, 1, '2024-08-03', 4, 'titulo 2', 'objeto baby', 33, '2024-08-29');

-- --------------------------------------------------------

--
-- Table structure for table `estado_civil`
--

CREATE TABLE `estado_civil` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `estado_civil`
--

INSERT INTO `estado_civil` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'SOLTERO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(2, 'CASADO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(3, 'DIVORCIADO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(4, 'VIUDO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(5, 'UNIÓN LIBRE', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(6, 'RELIGIOSO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL),
(7, 'SEPARADO(A)', '2024-06-16 16:28:26', '2024-06-16 16:28:26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `facultad`
--

CREATE TABLE `facultad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `facultad`
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
-- Table structure for table `fuente_financiacion_internacional`
--

CREATE TABLE `fuente_financiacion_internacional` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `fuente_financiacion_internacional`
--

INSERT INTO `fuente_financiacion_internacional` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'SECTOR EMPRESARIAL', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(2, 'SECTOR ADMINISTRACIÓN PÚBLICA', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(3, 'CENTROS DE INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO HOSPITALES Y CLÍNICAS', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(4, 'INSTITUCIONES PRIVADAS SIN ÁNIMO DE LUCRO', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(5, 'INSTITUCIONES DE EDUCACIÓN SUPERIOR', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(6, 'ORGANISMO MULTILATERAL', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(7, 'RECURSOS PROPIOS', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(8, 'N/A', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL),
(9, 'OTRO (añadir opción para escribir texto)', '2024-06-16 16:28:23', '2024-06-16 16:28:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `fuente_financiacion_nacional`
--

CREATE TABLE `fuente_financiacion_nacional` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `fuente_financiacion_nacional`
--

INSERT INTO `fuente_financiacion_nacional` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'RECURSOS UFPS', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(2, 'RECURSOS OTRAS IES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(3, 'RECURSOS PÚBLICOS NACIONALES – COLCIENCIAS', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(4, 'RECURSOS PÚBLICOS NACIONALES – SENA', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(5, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DEL INTERIOR Y JUSTICIA', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(6, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE RELACIONES EXTERIORES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(7, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE HACIENDA Y CRÉDITO PÚBLICO', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(8, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE DEFENSA NACIONAL', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(9, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE AGRICULTURA Y DESARROLLO RURAL', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(10, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE PROTECCIÓN SOCIAL', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(11, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE ENERGÍA Y MINAS', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(12, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE COMERCIO, INDUSTRIA Y TURISMO', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(13, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE EDUCACIÓN NACIONAL', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(14, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE AMBIENTE, VIVIENDA Y DESARROLLO TERRITORIAL', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(15, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE COMUNICACIONES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(16, 'RECURSOS PÚBLICOS NACIONALES - MINISTERIO DE CULTURA', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(17, 'RECURSOS PÚBLICOS DEPARTAMENTALES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(18, 'RECURSOS PÚBLICOS MUNICIPALES O DISTRITALES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(19, 'RECURSOS PRIVADOS', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(20, 'OTRAS ENTIDADES', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(21, 'RECURSOS PROPIOS', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(22, 'N/A', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL),
(23, 'OTRO', '2024-06-16 16:28:22', '2024-06-16 16:28:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'Hombre', '2024-07-06 20:01:40', '2024-07-06 20:01:40', NULL),
(2, 'Mujer', '2024-07-06 20:01:40', '2024-07-06 20:01:40', NULL),
(3, 'Otro', '2024-07-06 20:01:40', '2024-07-06 20:01:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `institucion`
--

CREATE TABLE `institucion` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `institucion`
--

INSERT INTO `institucion` (`id`, `name`, `contact_id`, `city_id`) VALUES
(30, 'UFPS', 32, 62),
(33, 'MIT', 31, 64),
(34, 'UNIMEX', 34, 66);

-- --------------------------------------------------------

--
-- Table structure for table `mobility_application`
--

CREATE TABLE `mobility_application` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `mobility_application`
--

INSERT INTO `mobility_application` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'SI', '2024-07-06 19:32:17', '2024-07-06 19:32:17', NULL),
(2, 'NO APLICA', '2024-07-06 19:32:17', '2024-07-06 19:32:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `modalidad_movilidad`
--

CREATE TABLE `modalidad_movilidad` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `modalidad_movilidad`
--

INSERT INTO `modalidad_movilidad` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'SALIENTE', '2024-06-16 16:28:29', '2024-06-16 16:28:29', NULL),
(2, 'ENTRANTE', '2024-06-16 16:28:29', '2024-06-16 16:28:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `movilidad_actor`
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
  `numero_dias_mov` int(11) NOT NULL,
  `mov_convenio` varchar(30) NOT NULL,
  `fuent_fin_nacional` varchar(80) NOT NULL,
  `valor_fin_nacional` int(11) NOT NULL,
  `fuent_fin_internacional` varchar(80) NOT NULL,
  `pais_fin_internacional` varchar(80) NOT NULL,
  `valor_fin_internacional` int(11) NOT NULL,
  `codigo_actor` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `rol` varchar(15) NOT NULL,
  `numero_convenio_mov` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `movilidad_actor`
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
(19, 'Nacional', 'Movilidad Saliente', 'Ingenieria', 'Ingeniería de Sistemas', '2023-08-02', 'I Semestre (Enero - Junio)', 'Misión', 'Va a hacer misiones', 'UFPS', 'Calle falsa #09-2', 'Colombia', 'Norte de Santander', 'Los Patios', 'UDES', 'Calle falsa #9-76', 'Colombia', 'Tarra', 'tarrita', 2, 'Conve', 'Recursos UFPS', 100000, 'Sector Administración Pública', 'Colombia', 200000, 1156534, '2023-08-24 18:23:58', 'Estudiante', '1203945'),
(20, 'Internacional', 'Movilidad Entrante', 'Ciencias Básicas', 'Química Industrial', '2024-05-15', 'I Semestre (Enero - Junio)', 'Visita Técnica O Académica', 'gghghh', 'ufpsfgt6', 'norte de santander', 'American Samoa', 'xx', 'xx', 'vv', 'vv', 'Afghanistan', 'b', 'f', 124, 'N/A', 'Otras Entidades', 67000, 'Sector Administración Pública', 'American Samoa', 350000, 1260867, '2024-05-30 15:15:38', 'Estudiante', 'N/A'),
(21, 'INTERNACIONAL', 'SALIENTE', 'Facultad de Educación, Artes y Humanidad', 'Programa A', '2024-08-12', 'I Semestre (Enero - Junio)', 'Misión', 'xxx', 'asas', 'asasas', 'AS', 'asas', 'asas', 'asasas', 'asasas', 'AS', 'asasa', 'asasa', 2, 'SI', 'Recursos Otras IES', 112, 'Centros De Investigación Y Desarrollo Tecnológico', 'DZ', 1212, 1151111, '2024-08-12 21:09:21', 'Estudiante', '0'),
(22, 'INTERNACIONAL', 'SALIENTE', 'Facultad de Ciencias de la Salud', 'Enfermería', '2024-08-13', '1', '1', 'descripcion de la actividad', 'extrangera', 'direccion ins de origen', 'AF', 'departamento de origen', 'municipio d eorigen', 'insrtitucion extrangera', 'direccion de la institucion', 'AD', 'dep destino', 'municipio de destino', 2, 'SI', '6', 33, '5', 'AL', 33, 1151553, '2024-08-13 20:23:10', 'Estudiante', '0'),
(23, 'INTERNACIONAL', 'SALIENTE', 'Facultad de Ciencias de la Salud', 'Enfermería', '2024-08-14', '1', '2', 'desct', 'extrangera', 'direccion ins de origen', 'AF', 'dep de origen', 'municipio d eorigen', 'insrtitucion extrangera', 'direccion de la institucion', 'AO', 'asasa', 'municipio de destino', 9, 'NO APLICA', '6', 5, '4', 'AD', 55, 1151111, '2024-08-13 20:37:38', 'Docente', '0'),
(24, 'INTERNACIONAL', 'SALIENTE', 'Facultad de Ingenieria', 'Ingeniería Biotecnológica', '2024-08-13', '1', '2', 'descripcion de la actividad', 'extrangera', 'direccion ins de origen', 'AO', 'departamento de origen', 'insrtitucion extrangera', 'insrtitucion extrangera', 'direccion de la institucion', 'AQ', 'asasa', 'asasa', 7, 'SI', '5', 77, '3', 'AI', 77, 1151553, '2024-08-13 20:45:14', 'Administrativo ', '0');

-- --------------------------------------------------------

--
-- Table structure for table `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `pais`
--

INSERT INTO `pais` (`id`, `name`) VALUES
(13, 'Colombia'),
(14, 'United States'),
(15, 'Mexico');

-- --------------------------------------------------------

--
-- Table structure for table `parameters`
--

CREATE TABLE `parameters` (
  `id` int(11) NOT NULL,
  `ufps_institution_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `parameters`
--

INSERT INTO `parameters` (`id`, `ufps_institution_id`) VALUES
(2, 30);

-- --------------------------------------------------------

--
-- Table structure for table `programa`
--

CREATE TABLE `programa` (
  `faculty_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `programa`
--

INSERT INTO `programa` (`faculty_id`, `id`, `name`) VALUES
(4, 36, 'Enfermería'),
(6, 37, 'Ingeniería Biotecnológica'),
(2, 38, 'Ingeniería Agronómica'),
(5, 59, 'Programa A'),
(6, 60, 'Desarrollo de Software');

-- --------------------------------------------------------

--
-- Table structure for table `programa_institucion`
--

CREATE TABLE `programa_institucion` (
  `id` int(11) NOT NULL,
  `program_id` int(11) NOT NULL,
  `instititution_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `programa_institucion`
--

INSERT INTO `programa_institucion` (`id`, `program_id`, `instititution_id`) VALUES
(62, 36, 30),
(63, 37, 30),
(74, 59, 33),
(75, 38, 33),
(76, 60, 34);

-- --------------------------------------------------------

--
-- Table structure for table `programa_institucion_convenio`
--

CREATE TABLE `programa_institucion_convenio` (
  `id` int(11) NOT NULL,
  `program_institution_id` int(11) NOT NULL,
  `agreement_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `programa_institucion_convenio`
--

INSERT INTO `programa_institucion_convenio` (`id`, `program_institution_id`, `agreement_id`) VALUES
(128, 74, 96),
(135, 62, 96),
(136, 75, 96),
(137, 63, 96),
(138, 75, 98),
(139, 62, 98);

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'Estudiante', '2024-07-06 20:20:50', '2024-07-06 20:20:50', NULL),
(2, 'Docente', '2024-07-06 20:20:50', '2024-07-06 20:20:50', NULL),
(3, 'Administrativo o Gestor', '2024-07-06 20:20:50', '2024-07-06 20:20:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'staff');

-- --------------------------------------------------------

--
-- Table structure for table `rol_actividad`
--

CREATE TABLE `rol_actividad` (
  `id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `actividad_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `rol_actividad`
--

INSERT INTO `rol_actividad` (`id`, `rol_id`, `actividad_id`) VALUES
(40, 1, 2),
(37, 1, 3),
(38, 1, 4),
(34, 1, 14),
(35, 1, 15),
(36, 1, 16),
(39, 1, 17),
(41, 1, 18),
(42, 1, 19),
(43, 1, 20),
(44, 1, 21),
(45, 1, 22),
(46, 1, 23),
(47, 1, 24),
(48, 1, 27),
(49, 2, 1),
(50, 2, 2),
(51, 2, 3),
(52, 2, 4),
(53, 2, 5),
(54, 2, 6),
(55, 2, 7),
(56, 2, 8),
(57, 2, 9),
(58, 2, 10),
(59, 2, 11),
(60, 2, 12),
(61, 2, 13),
(62, 2, 27),
(63, 3, 2),
(65, 3, 3),
(64, 3, 4),
(68, 3, 11),
(69, 3, 12),
(70, 3, 13),
(66, 3, 16),
(67, 3, 25),
(71, 3, 27);

-- --------------------------------------------------------

--
-- Table structure for table `semester`
--

CREATE TABLE `semester` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `semester`
--

INSERT INTO `semester` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'I Semestre (Enero - Junio)', '2024-07-06 20:27:55', '2024-07-06 20:27:55', NULL),
(2, 'II Semestre (Julio - Diciembre)', '2024-07-06 20:27:55', '2024-07-06 20:27:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_convenio`
--

CREATE TABLE `tipo_convenio` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `tipo_convenio`
--

INSERT INTO `tipo_convenio` (`id`, `name`) VALUES
(1, 'Marco'),
(2, 'Específico'),
(3, 'Práctica'),
(4, 'Investigación'),
(5, 'Tipo convenio A');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tipo_documento`
--

INSERT INTO `tipo_documento` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'C.C. - CÉDULA DE CIUDADANÍA', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL),
(2, 'C.E. - CÉDULA DE EXTRANJERÍA', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL),
(3, 'D.E. - DOCUMENTO DE IDENTIDAD EXTRANJERA', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL),
(4, 'P.S. – PASAPORTE', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL),
(5, 'C.A. - CERTIFICADO CABILDO', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL),
(6, 'T.I. - TARJETA DE IDENTIDAD', '2024-06-16 16:28:25', '2024-06-16 16:28:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_movilidad`
--

CREATE TABLE `tipo_movilidad` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_actualizacion` datetime NOT NULL,
  `fecha_eliminacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tipo_movilidad`
--

INSERT INTO `tipo_movilidad` (`id`, `nombre`, `fecha_creacion`, `fecha_actualizacion`, `fecha_eliminacion`) VALUES
(1, 'INTERNACIONAL', '2024-06-16 16:28:28', '2024-06-16 16:28:28', NULL),
(2, 'NACIONAL', '2024-06-16 16:28:28', '2024-06-16 16:28:28', NULL),
(3, 'VIRTUAL', '2024-06-16 16:28:28', '2024-06-16 16:28:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_movilidad_convenio`
--

CREATE TABLE `tipo_movilidad_convenio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `tipo_movilidad_convenio`
--

INSERT INTO `tipo_movilidad_convenio` (`id`, `nombre`) VALUES
(1, 'Estudiantes pregrado'),
(2, 'Investigadores'),
(3, 'Docentes'),
(4, 'Estudiantes posgrado'),
(53, 'Agreement Mobility');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_movilidad_convenio_convenio`
--

CREATE TABLE `tipo_movilidad_convenio_convenio` (
  `id` int(11) NOT NULL,
  `tipo_movilidad_convenio_id` int(11) NOT NULL,
  `convenio_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `tipo_movilidad_convenio_convenio`
--

INSERT INTO `tipo_movilidad_convenio_convenio` (`id`, `tipo_movilidad_convenio_id`, `convenio_id`) VALUES
(9, 3, 96);

-- --------------------------------------------------------

--
-- Table structure for table `user`
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
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `sex` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `age`, `email`, `password`, `firstName`, `lastName`, `role`, `createdAt`, `updateAt`, `sex`) VALUES
(1, 26, 'crtautiva@gmail.com', '$2a$10$DQfcBzTsbCsxZLi4wnk3teBTZ.q/hHd95GMi2V.uouy0jfWT8vnGG', 'Cristian', 'Tautiva', 'admin', '2023-05-13 08:39:03.378772', '2023-05-13 08:39:03.378772', 1),
(2, 17, 'dana20@gmail.com', '$2a$10$DQfcBzTsbCsxZLi4wnk3teBTZ.q/hHd95GMi2V.uouy0jfWT8vnGG', 'Dana', 'grimaldos', 'user', '2023-05-13 08:39:35.340752', '2023-05-13 08:39:35.340752', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`codigo`);

--
-- Indexes for table `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais_id` (`country_id`);

--
-- Indexes for table `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `convenio`
--
ALTER TABLE `convenio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_convenio_id_fk` (`type_agreement_id`),
  ADD KEY `institution_id_fk` (`institution_id`);

--
-- Indexes for table `estado_civil`
--
ALTER TABLE `estado_civil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facultad`
--
ALTER TABLE `facultad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fuente_financiacion_internacional`
--
ALTER TABLE `fuente_financiacion_internacional`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fuente_financiacion_nacional`
--
ALTER TABLE `fuente_financiacion_nacional`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `institucion`
--
ALTER TABLE `institucion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contact_id_fk` (`contact_id`),
  ADD KEY `city_id_fk` (`city_id`);

--
-- Indexes for table `mobility_application`
--
ALTER TABLE `mobility_application`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modalidad_movilidad`
--
ALTER TABLE `modalidad_movilidad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_est` (`codigo_actor`);

--
-- Indexes for table `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parameters`
--
ALTER TABLE `parameters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ufps_institution_id` (`ufps_institution_id`);

--
-- Indexes for table `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_facu` (`faculty_id`);

--
-- Indexes for table `programa_institucion`
--
ALTER TABLE `programa_institucion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `programa_id_fk` (`program_id`),
  ADD KEY `institucion_id_fk` (`instititution_id`);

--
-- Indexes for table `programa_institucion_convenio`
--
ALTER TABLE `programa_institucion_convenio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `programa_institucion_id` (`program_institution_id`),
  ADD KEY `convenio_id` (`agreement_id`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rol_actividad`
--
ALTER TABLE `rol_actividad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_rol_actividad` (`rol_id`,`actividad_id`),
  ADD KEY `actividad_id` (`actividad_id`);

--
-- Indexes for table `semester`
--
ALTER TABLE `semester`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_convenio`
--
ALTER TABLE `tipo_convenio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_movilidad`
--
ALTER TABLE `tipo_movilidad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_movilidad_convenio`
--
ALTER TABLE `tipo_movilidad_convenio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_movilidad_convenio_convenio`
--
ALTER TABLE `tipo_movilidad_convenio_convenio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `convenio_id_fk` (`convenio_id`),
  ADD KEY `tipo_movilidad_convenio_id_fk` (`tipo_movilidad_convenio_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `convenio`
--
ALTER TABLE `convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `estado_civil`
--
ALTER TABLE `estado_civil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `facultad`
--
ALTER TABLE `facultad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fuente_financiacion_internacional`
--
ALTER TABLE `fuente_financiacion_internacional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fuente_financiacion_nacional`
--
ALTER TABLE `fuente_financiacion_nacional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `institucion`
--
ALTER TABLE `institucion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `mobility_application`
--
ALTER TABLE `mobility_application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `modalidad_movilidad`
--
ALTER TABLE `modalidad_movilidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `parameters`
--
ALTER TABLE `parameters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `programa`
--
ALTER TABLE `programa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `programa_institucion`
--
ALTER TABLE `programa_institucion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `programa_institucion_convenio`
--
ALTER TABLE `programa_institucion_convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rol_actividad`
--
ALTER TABLE `rol_actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `semester`
--
ALTER TABLE `semester`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipo_convenio`
--
ALTER TABLE `tipo_convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tipo_movilidad`
--
ALTER TABLE `tipo_movilidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tipo_movilidad_convenio`
--
ALTER TABLE `tipo_movilidad_convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `tipo_movilidad_convenio_convenio`
--
ALTER TABLE `tipo_movilidad_convenio_convenio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `pais_id` FOREIGN KEY (`country_id`) REFERENCES `pais` (`id`);

--
-- Constraints for table `convenio`
--
ALTER TABLE `convenio`
  ADD CONSTRAINT `institution_id_fk` FOREIGN KEY (`institution_id`) REFERENCES `institucion` (`id`),
  ADD CONSTRAINT `tipo_convenio_id_fk` FOREIGN KEY (`type_agreement_id`) REFERENCES `tipo_convenio` (`id`);

--
-- Constraints for table `institucion`
--
ALTER TABLE `institucion`
  ADD CONSTRAINT `city_id_fk` FOREIGN KEY (`city_id`) REFERENCES `ciudad` (`id`),
  ADD CONSTRAINT `contact_id_fk` FOREIGN KEY (`contact_id`) REFERENCES `contacto` (`id`);

--
-- Constraints for table `movilidad_actor`
--
ALTER TABLE `movilidad_actor`
  ADD CONSTRAINT `fk_est` FOREIGN KEY (`codigo_actor`) REFERENCES `actor` (`codigo`) ON UPDATE CASCADE;

--
-- Constraints for table `parameters`
--
ALTER TABLE `parameters`
  ADD CONSTRAINT `parameters_ibfk_1` FOREIGN KEY (`ufps_institution_id`) REFERENCES `institucion` (`id`);

--
-- Constraints for table `programa`
--
ALTER TABLE `programa`
  ADD CONSTRAINT `prog_fk_facu` FOREIGN KEY (`faculty_id`) REFERENCES `facultad` (`id`);

--
-- Constraints for table `programa_institucion`
--
ALTER TABLE `programa_institucion`
  ADD CONSTRAINT `institucion_id_fk` FOREIGN KEY (`instititution_id`) REFERENCES `institucion` (`id`),
  ADD CONSTRAINT `programa_id_fk` FOREIGN KEY (`program_id`) REFERENCES `programa` (`id`);

--
-- Constraints for table `programa_institucion_convenio`
--
ALTER TABLE `programa_institucion_convenio`
  ADD CONSTRAINT `agreement_id_fk` FOREIGN KEY (`agreement_id`) REFERENCES `convenio` (`id`),
  ADD CONSTRAINT `program_institution_fk` FOREIGN KEY (`program_institution_id`) REFERENCES `programa_institucion` (`id`);

--
-- Constraints for table `rol_actividad`
--
ALTER TABLE `rol_actividad`
  ADD CONSTRAINT `rol_actividad_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `rol_actividad_ibfk_2` FOREIGN KEY (`actividad_id`) REFERENCES `actividad` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tipo_movilidad_convenio_convenio`
--
ALTER TABLE `tipo_movilidad_convenio_convenio`
  ADD CONSTRAINT `convenio_id_fk` FOREIGN KEY (`convenio_id`) REFERENCES `convenio` (`id`),
  ADD CONSTRAINT `tipo_movilidad_convenio_id_fk` FOREIGN KEY (`tipo_movilidad_convenio_id`) REFERENCES `tipo_movilidad_convenio` (`id`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `fk_user_is` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
