-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : jeu. 16 juin 2022 à 12:32
-- Version du serveur : 10.6.5-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateCreation` timestamp NOT NULL DEFAULT current_timestamp(),
  `titre` varchar(60) NOT NULL,
  `contenu` longtext NOT NULL,
  `attachment` varchar(120) DEFAULT NULL,
  `userId` int(3) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `titre` (`titre`),
  KEY `fk_posts_users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `dateCreation`, `titre`, `contenu`, `attachment`, `userId`, `createdAt`, `updatedAt`) VALUES
(17, '2022-06-11 12:28:39', 'A l\'occasion de mon départ à la retraite...', 'Je vous convie à mon pot de départ, qui aura lieu le vendredi 24 juin à 15h dans la salle \"Horizon\".\r\n\r\nJe serai heureux de partager ces derniers instants chez Groupomania avec vous.\r\n\r\nVenez nombreux !', '', 21, '2022-06-11', '2022-06-13 22:13:18'),
(27, '2022-06-12 11:16:51', 'Le télétravail booste la performance !', 'les télétravailleurs ont généralement une opinion particulièrement positive de la flexibilité de l’organisation de leur journée de travail et du gain de temps des trajets domicile-travail. Or la hausse de la satisfaction au travail est en général source de gains de productivité et d’une rotation des salariés moins forte… ', NULL, 37, '2022-06-12', '2022-06-13 21:26:15'),
(28, '2022-06-12 15:51:09', 'Bravo aux gagnants de la Groupomania-Cup', 'Félicitations pour vos performances et votre sportivité. J\'ai beaucoup aimé l\'ambiance et l\'esprit d\'équipe.\r\n\r\nWell done guys :)', '', 21, '2022-06-12', '2022-06-13 21:32:42'),
(29, '2022-06-12 21:26:36', 'Bienvenue aux nouveaux stagiaires', 'Bienvenue à nos nouveaux stagiaires, je vous souhaite une bonne intégration parmi la Groupomania team.\r\n\r\nA bientôt autour d\'un café :)', '', 6, '2022-06-12', '2022-06-13 22:05:32'),
(54, '2022-06-14 16:41:14', 'Préparez-vous pour un tournoi de foot', 'Hello la team, un petit message pour vous informer que je réfléchis à organiser un tournoi de foot entre collègues. Ce tournoi aura lieu un samedi après-midi au mois de juillet, je vous tiens au courant de la date exacte. Mais en attendant, préparez-vous physiquement. A+\r\n', 'http://localhost:5000/images/foot.jpg1655224874032.jpg', 44, '2022-06-14', '2022-06-14 16:41:14'),
(55, '2022-06-14 17:17:03', 'Pour vous donner le sourire en cette belle journée', 'Je vous souhaite une agréable journée :)', 'http://localhost:5000/images/giphy.gif1655227023262.gif', 6, '2022-06-14', '2022-06-14 17:17:03'),
(57, '2022-06-15 09:37:06', 'And the winner is .......', 'Groupomania !!!!!\r\nNous avons été élu meilleure entreprise de l\'année ! Eh oui, grâce à l\'effort collectif et au bon climat qui règne dans notre entreprise, nous avons été réélu cette année 2022 !!!', 'http://localhost:5000/images/pingouin.gif1655285826063.gif', 33, '2022-06-15', '2022-06-15 09:37:06'),
(66, '2022-06-15 18:26:54', 'Places de cinéma', 'J\'offre 2 places de cinéma, valable jusqu\'à fin juillet. N\'hésitez pas à me contacté si cela vous intéresse.\r\n', '', 6, '2022-06-15', '2022-06-15 18:26:54');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `sexe` varchar(1) NOT NULL DEFAULT 'h',
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `sexe` (`sexe`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `sexe`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(6, 'Valentino', 'Mario', 'H', 'mario@yahoo.fr', '$2b$10$80ocng/ct9L1EyyX.02YfeW2fNKn9rnGF3CdJwWxtgwqXBBbF4QRa', 0, '2022-05-12 14:18:28', '2022-05-12 14:18:28'),
(21, 'Lemarchand', 'Arnaud', 'H', 'ami@yahoo.fr', '$2b$10$hLqh8K3SaUMmosF.rm7ed.1XMg9Nb.iGmeZqpeI46LL2yECFrtZli', 0, '2022-06-11 12:26:41', '2022-06-11 12:26:41'),
(33, 'Lahssini', 'Safia', 'F', 'safia@yahoo.fr', '$2b$10$UPPcnfPD.AqswOYGt6f1FOKD648jEp./helZV.qo5EApZCihFmuDu', 0, '2022-06-12 07:11:52', '2022-06-12 07:11:52'),
(34, 'Sultan', 'Sultan', 'H', 'sultan@yahoo.fr', '$2b$10$aCuVIz8I4BUvSUYt6GYFaeUasP2fj9rg4.2AiNEWha8jUFRTD1vci', 0, '2022-06-12 08:16:07', '2022-06-12 08:16:07'),
(37, 'Salou', 'Mili', 'F', 'mimi@yahoo.fr', '$2b$10$JfpPV3TnAK/AqiZsb7uBwuD9J5w4kI1osRhVpXrXF7qLmdqw475Gi', 0, '2022-06-12 10:13:34', '2022-06-12 10:13:34'),
(39, 'Lala', 'Nadia', 'F', 'Nadia@yahoo.fr', '$2b$10$hI3K2H2PoXVpUvWQ2QyJ.us/1Vdrp0.2AKvkwN3L.f6exyUBYtK0y', 0, '2022-06-13 15:36:16', '2022-06-13 15:36:16'),
(40, 'Rodriguez', 'Hugo', 'H', 'hugo@yahoo.fr', '123', 0, '2022-06-13 21:42:34', '2022-06-13 21:42:34'),
(41, 'Dubois', 'Valentin', 'H', 'valentin@yahoo.fr', '$2b$10$g1yARPPIG8fbtc/pPY9RkOuj9ASPUT5kVd/Dg7PU16ZQd9581y5cW', 0, '2022-06-13 21:50:21', '2022-06-13 21:50:21'),
(42, 'Lahssini-Chorches', 'Nadia', 'F', 'nana@yahoo.fr', '$2b$10$y9bIaK..74/IZ4uUu.wagODt.qB3Y4LCJWJV/kSZrr3AzCoNs/W0y', 0, '2022-06-13 23:57:07', '2022-06-13 23:57:07'),
(44, 'Super-héro', 'Amine', 'H', 'amine@yahoo.fr', '$2b$10$gcVE.VLvoDn.1auiZ6DsJOHXJ8vadRxbQojt4csNHy5p0gBw5JYtO', 0, '2022-06-14 14:21:50', '2022-06-14 14:21:50'),
(45, 'Administrateur', 'Admin', 'H', 'admin1102@yahoo.fr', '$2b$10$pwgC.26hRfirCwxXVIXDHuiPz1tnHF/9lZruWL/gzO1yIDg1I9cRe', 1, '2022-06-16 07:02:43', '2022-06-16 07:02:43');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_posts_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
