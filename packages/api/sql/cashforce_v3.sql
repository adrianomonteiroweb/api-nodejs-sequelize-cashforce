-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Dez-2020 às 12:55
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cashforce_v3`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `buyers`
--

CREATE TABLE `buyers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tradingName` varchar(255) DEFAULT NULL,
  `cashforceTax` varchar(255) DEFAULT NULL,
  `responsibleName` varchar(255) DEFAULT NULL,
  `responsibleEmail` varchar(255) DEFAULT NULL,
  `responsiblePosition` varchar(255) DEFAULT NULL,
  `responsiblePhone` varchar(255) DEFAULT NULL,
  `responsibleMobile` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `complement` varchar(255) DEFAULT NULL,
  `neighborhood` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `situation` varchar(255) DEFAULT NULL,
  `situationDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cnpjId` int(11) DEFAULT NULL,
  `confirm` tinyint(1) DEFAULT 1,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `buyers`
--

INSERT INTO `buyers` (`id`, `name`, `tradingName`, `cashforceTax`, `responsibleName`, `responsibleEmail`, `responsiblePosition`, `responsiblePhone`, `responsibleMobile`, `website`, `postalCode`, `address`, `number`, `complement`, `neighborhood`, `city`, `state`, `phoneNumber`, `situation`, `situationDate`, `createdAt`, `updatedAt`, `cnpjId`, `confirm`, `email`) VALUES
(1, 'SACADO 001', 'SACADO 001 LTDA', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-10-29 21:20:33', '2020-10-29 21:20:34', 1, 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cnpjs`
--

CREATE TABLE `cnpjs` (
  `id` int(11) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `companyType` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cnpjs`
--

INSERT INTO `cnpjs` (`id`, `cnpj`, `companyType`, `createdAt`, `updatedAt`) VALUES
(1, '00000000000001', '2', '2020-10-29 21:20:33', '2020-10-29 21:20:33'),
(2, '00000000000002', '1', '2020-10-29 21:20:33', '2020-10-29 21:20:33');

-- --------------------------------------------------------

--
-- Estrutura da tabela `offers`
--

CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `tax` varchar(255) NOT NULL,
  `tariff` varchar(255) NOT NULL,
  `adValorem` varchar(255) NOT NULL,
  `float` varchar(255) NOT NULL,
  `iof` varchar(255) NOT NULL,
  `expiresIn` datetime NOT NULL,
  `paymentStatusSponsor` tinyint(1) DEFAULT 0,
  `paymentStatusProvider` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `sponsorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `orderportions`
--

CREATE TABLE `orderportions` (
  `id` int(11) NOT NULL,
  `nDup` varchar(255) NOT NULL,
  `dVenc` varchar(255) NOT NULL,
  `vDup` varchar(255) NOT NULL,
  `availableToMarket` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderNfId` varchar(255) NOT NULL,
  `orderNumber` varchar(255) NOT NULL,
  `orderPath` varchar(255) DEFAULT NULL,
  `orderFileName` varchar(255) DEFAULT NULL,
  `orderOriginalName` varchar(255) DEFAULT NULL,
  `emissionDate` varchar(255) DEFAULT NULL,
  `pdfFile` varchar(255) DEFAULT NULL,
  `emitedTo` varchar(255) NOT NULL,
  `nNf` varchar(255) DEFAULT NULL,
  `CTE` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cnpjId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `buyerId` int(11) DEFAULT NULL,
  `providerId` int(11) DEFAULT NULL,
  `orderStatusBuyer` varchar(255) DEFAULT '0',
  `orderStatusProvider` varchar(255) DEFAULT '0',
  `deliveryReceipt` varchar(255) DEFAULT NULL,
  `cargoPackingList` varchar(255) DEFAULT NULL,
  `deliveryCtrc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `orders`
--

INSERT INTO `orders` (`id`, `orderNfId`, `orderNumber`, `orderPath`, `orderFileName`, `orderOriginalName`, `emissionDate`, `pdfFile`, `emitedTo`, `nNf`, `CTE`, `value`, `createdAt`, `updatedAt`, `cnpjId`, `userId`, `buyerId`, `providerId`, `orderStatusBuyer`, `orderStatusProvider`, `deliveryReceipt`, `cargoPackingList`, `deliveryCtrc`) VALUES
(1, '1605181324132', '18153', NULL, NULL, NULL, '2020-10-30T11:00:00-03:00', NULL, '22843980000127', '18153', '', '198450', '2020-10-30 17:54:18', '2020-10-30 17:54:18', 1, 1, 1, 1, '0', '0', NULL, NULL, NULL),
(2, '160518132413', '18157', NULL, NULL, NULL, '2020-11-04T15:32:35-02:00', NULL, '35705180000272', '18157', '', '168850', '2020-11-10 18:33:46', '2020-11-10 18:33:46', 1, 1, 1, 1, '0', '0', NULL, NULL, NULL),
(3, '1605181324130', '18184', NULL, NULL, NULL, '2020-11-10', NULL, '00418477002640', '18184', '', '222795', '2020-11-12 11:42:06', '2020-11-18 12:22:14', 1, 1, 1, 1, '7', '3', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tradingName` varchar(255) DEFAULT NULL,
  `cashforceTax` varchar(255) DEFAULT NULL,
  `responsibleName` varchar(255) DEFAULT NULL,
  `responsibleEmail` varchar(255) DEFAULT NULL,
  `responsiblePosition` varchar(255) DEFAULT NULL,
  `responsiblePhone` varchar(255) DEFAULT NULL,
  `responsibleMobile` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `complement` varchar(255) DEFAULT NULL,
  `neighborhood` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `bank` varchar(255) DEFAULT NULL,
  `bankAgency` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `documents` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `situation` varchar(255) DEFAULT NULL,
  `situationDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cnpjId` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `providers`
--

INSERT INTO `providers` (`id`, `name`, `tradingName`, `cashforceTax`, `responsibleName`, `responsibleEmail`, `responsiblePosition`, `responsiblePhone`, `responsibleMobile`, `website`, `postalCode`, `address`, `number`, `complement`, `neighborhood`, `city`, `state`, `bank`, `bankAgency`, `account`, `documents`, `phoneNumber`, `situation`, `situationDate`, `createdAt`, `updatedAt`, `cnpjId`, `email`) VALUES
(1, 'CEDENTE 002', 'CEDENTE 002 LTDA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-10-29 21:22:21', '2020-10-29 21:22:22', 2, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sponsors`
--

CREATE TABLE `sponsors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tradingName` varchar(255) DEFAULT NULL,
  `cashforceTax` varchar(255) DEFAULT NULL,
  `responsibleName` varchar(255) DEFAULT NULL,
  `responsibleEmail` varchar(255) DEFAULT NULL,
  `responsiblePosition` varchar(255) DEFAULT NULL,
  `responsiblePhone` varchar(255) DEFAULT NULL,
  `responsibleMobile` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `complement` varchar(255) DEFAULT NULL,
  `neighborhood` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `bank` varchar(255) DEFAULT NULL,
  `bankAgency` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `situation` varchar(255) DEFAULT NULL,
  `situationDate` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cnpjId` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `departament` varchar(255) DEFAULT NULL,
  `verificationCode` varchar(255) DEFAULT NULL,
  `emailChecked` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cashforceAdm` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phoneNumber`, `mobile`, `departament`, `verificationCode`, `emailChecked`, `createdAt`, `updatedAt`, `cashforceAdm`) VALUES
(1, 'ALLAN SOUZA', 'allan@cashforce.com.br', NULL, NULL, NULL, '', 1, '2020-10-01 21:31:37', '2020-10-01 22:41:23', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cnpjId` (`cnpjId`);

--
-- Índices para tabela `cnpjs`
--
ALTER TABLE `cnpjs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cnpj` (`cnpj`);

--
-- Índices para tabela `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `sponsorId` (`sponsorId`);

--
-- Índices para tabela `orderportions`
--
ALTER TABLE `orderportions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`);

--
-- Índices para tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orderNfId` (`orderNfId`),
  ADD UNIQUE KEY `orderPath` (`orderPath`),
  ADD UNIQUE KEY `orderFileName` (`orderFileName`),
  ADD UNIQUE KEY `orderOriginalName` (`orderOriginalName`),
  ADD KEY `userId` (`userId`),
  ADD KEY `buyerId` (`buyerId`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `cnpjId` (`cnpjId`);

--
-- Índices para tabela `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cnpjId` (`cnpjId`);

--
-- Índices para tabela `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cnpjId` (`cnpjId`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `buyers`
--
ALTER TABLE `buyers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT de tabela `cnpjs`
--
ALTER TABLE `cnpjs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=437;

--
-- AUTO_INCREMENT de tabela `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `orderportions`
--
ALTER TABLE `orderportions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=612;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=540;

--
-- AUTO_INCREMENT de tabela `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;

--
-- AUTO_INCREMENT de tabela `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `buyers`
--
ALTER TABLE `buyers`
  ADD CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_ibfk_61` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `offers_ibfk_62` FOREIGN KEY (`sponsorId`) REFERENCES `sponsors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `orderportions`
--
ALTER TABLE `orderportions`
  ADD CONSTRAINT `orderPortions_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_139` FOREIGN KEY (`buyerId`) REFERENCES `buyers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_140` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_141` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_142` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `providers`
--
ALTER TABLE `providers`
  ADD CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `sponsors`
--
ALTER TABLE `sponsors`
  ADD CONSTRAINT `sponsors_ibfk_1` FOREIGN KEY (`cnpjId`) REFERENCES `cnpjs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;