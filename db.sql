-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: pup_iot_backend
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fan_logs`
--

DROP TABLE IF EXISTS `fan_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fan_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fan_id` varchar(200) DEFAULT NULL,
  `is_fan_on` int NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_manual_trigger` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fan_logs`
--

LOCK TABLES `fan_logs` WRITE;
/*!40000 ALTER TABLE `fan_logs` DISABLE KEYS */;
INSERT INTO `fan_logs` VALUES (1,'1',1,'2026-01-10 19:15:51',1),(2,'1',0,'2026-01-10 19:16:04',1),(3,'1',1,'2026-01-10 19:16:05',1),(4,'1',0,'2026-01-10 19:16:06',1),(5,'1',1,'2026-01-10 19:19:59',1),(6,'1',0,'2026-01-10 19:20:03',1),(7,'1',1,'2026-01-10 19:20:09',0),(8,'1',1,'2026-01-10 19:20:10',0),(9,'1',1,'2026-01-10 19:24:14',0),(10,'1',1,'2026-01-10 19:24:15',0),(11,'1',0,'2026-01-10 19:24:22',1),(12,'1',1,'2026-01-10 19:24:23',1),(13,'1',0,'2026-01-10 19:24:24',1),(14,'1',1,'2026-01-10 19:24:25',1),(15,'1',1,'2026-01-10 19:24:35',0),(16,'1',1,'2026-01-10 19:24:37',0),(17,'1',1,'2026-01-10 19:24:40',0),(18,'1',1,'2026-01-10 19:24:42',0),(19,'1',0,'2026-01-10 19:25:07',1),(20,'1',1,'2026-01-10 19:25:08',1),(21,'1',0,'2026-01-10 19:25:29',1),(22,'1',1,'2026-01-10 19:25:33',0),(23,'1',1,'2026-01-10 19:25:35',0),(24,'1',0,'2026-01-10 19:27:18',1),(25,'1',1,'2026-01-10 19:27:20',1),(26,'1',0,'2026-01-10 19:27:34',1),(27,'1',1,'2026-01-10 19:27:45',0),(28,'1',1,'2026-01-10 19:28:13',0),(29,'1',1,'2026-01-10 19:28:14',0),(30,'1',1,'2026-01-10 19:28:15',0),(31,'1',1,'2026-01-10 19:28:56',0),(32,'1',1,'2026-01-10 19:28:57',0),(33,'1',1,'2026-01-10 19:28:58',0),(34,'1',1,'2026-01-10 19:29:02',0),(35,'1',1,'2026-01-10 19:29:03',0),(36,'1',1,'2026-01-10 19:29:19',0),(37,'1',1,'2026-01-10 19:29:30',0),(38,'1',1,'2026-01-10 19:29:33',0),(39,'1',1,'2026-01-10 19:29:42',0),(40,'1',1,'2026-01-10 19:29:50',0),(41,'1',0,'2026-01-10 19:30:17',1),(42,'1',1,'2026-01-10 19:30:26',1),(43,'1',0,'2026-01-10 19:30:27',1),(44,'1',0,'2026-01-10 19:30:32',0),(45,'1',0,'2026-01-10 19:30:33',0),(46,'1',0,'2026-01-10 19:30:34',0),(47,'1',1,'2026-01-10 19:30:37',0),(48,'1',0,'2026-01-10 19:30:38',0),(49,'1',1,'2026-01-10 19:30:42',0),(50,'1',0,'2026-01-10 19:30:46',0),(51,'1',0,'2026-01-10 19:30:48',0),(52,'1',1,'2026-01-10 19:30:50',0),(53,'1',0,'2026-01-10 19:30:54',1),(54,'1',1,'2026-01-10 19:30:55',1),(55,'1',0,'2026-01-10 19:30:56',1),(56,'1',1,'2026-01-10 19:31:00',0),(57,'1',0,'2026-01-10 19:31:12',0),(58,'1',0,'2026-01-10 19:31:29',0),(59,'1',0,'2026-01-10 19:31:30',0),(60,'1',1,'2026-01-10 19:31:48',0),(61,'1',0,'2026-01-10 19:31:50',0);
/*!40000 ALTER TABLE `fan_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_feeder_logs`
--

DROP TABLE IF EXISTS `pet_feeder_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet_feeder_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(100) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_manual_trigger` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_feeder_logs`
--

LOCK TABLES `pet_feeder_logs` WRITE;
/*!40000 ALTER TABLE `pet_feeder_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `pet_feeder_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pet_feeding_time_settings`
--

DROP TABLE IF EXISTS `pet_feeding_time_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pet_feeding_time_settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` varchar(10) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pet_feeding_time_settings`
--

LOCK TABLES `pet_feeding_time_settings` WRITE;
/*!40000 ALTER TABLE `pet_feeding_time_settings` DISABLE KEYS */;
INSERT INTO `pet_feeding_time_settings` VALUES (4,'10:00:00',0,'2026-01-10 16:28:30','2026-01-10 16:55:36'),(5,'17:00',0,'2026-01-10 17:00:05','2026-01-10 17:00:46'),(6,'17:00',0,'2026-01-10 17:00:46','2026-01-10 17:01:10'),(7,'19:00',0,'2026-01-10 17:00:46','2026-01-10 17:01:10'),(8,'10:00:00',0,'2026-01-10 17:01:10','2026-01-10 17:15:34'),(9,'10:00:00',0,'2026-01-10 17:15:34','2026-01-10 17:44:33'),(10,'02:00',0,'2026-01-10 17:15:34','2026-01-10 17:44:02'),(11,'10:00:00',1,'2026-01-10 17:44:33',NULL),(12,'17:44',0,'2026-01-10 17:44:33','2026-01-10 17:44:36');
/*!40000 ALTER TABLE `pet_feeding_time_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_temperature_records`
--

DROP TABLE IF EXISTS `room_temperature_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_temperature_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` varchar(45) NOT NULL,
  `temperature` int NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_timestamp_checked` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_temperature_records`
--

LOCK TABLES `room_temperature_records` WRITE;
/*!40000 ALTER TABLE `room_temperature_records` DISABLE KEYS */;
INSERT INTO `room_temperature_records` VALUES (1,'1',30,'2026-01-10 11:48:34',NULL),(2,'1',30,'2026-01-10 12:08:02','2026-01-10 12:14:08'),(3,'1',31,'2026-01-10 12:14:20',NULL),(4,'1',30,'2026-01-10 12:14:26','2026-01-10 18:55:32'),(5,'2',30,'2026-01-10 12:14:40','2026-01-10 12:14:43'),(6,'1',20,'2026-01-10 18:55:35','2026-01-10 19:24:31'),(7,'1',30,'2026-01-10 19:24:35','2026-01-10 19:24:37'),(8,'1',20,'2026-01-10 19:24:40','2026-01-10 19:25:13'),(9,'1',30,'2026-01-10 19:25:19','2026-01-10 19:25:22'),(10,'1',20,'2026-01-10 19:25:25','2026-01-10 19:25:34'),(11,'1',29,'2026-01-10 19:25:44','2026-01-10 19:28:10'),(12,'1',20,'2026-01-10 19:28:13','2026-01-10 19:28:34'),(13,'1',27,'2026-01-10 19:28:36',NULL),(14,'1',29,'2026-01-10 19:28:39','2026-01-10 19:28:53'),(15,'1',20,'2026-01-10 19:28:56','2026-01-10 19:28:58'),(16,'1',29,'2026-01-10 19:29:00',NULL),(17,'1',20,'2026-01-10 19:29:02','2026-01-10 19:29:03'),(18,'1',29,'2026-01-10 19:29:06','2026-01-10 19:29:14'),(19,'1',20,'2026-01-10 19:29:19','2026-01-10 19:30:34'),(20,'1',25,'2026-01-10 19:30:37','2026-01-10 19:30:38'),(21,'1',29,'2026-01-10 19:30:42','2026-01-10 19:30:44'),(22,'1',20,'2026-01-10 19:30:46','2026-01-10 19:30:48'),(23,'1',29,'2026-01-10 19:30:50','2026-01-10 19:31:06'),(24,'1',20,'2026-01-10 19:31:12','2026-01-10 19:31:44'),(25,'1',29,'2026-01-10 19:31:48',NULL),(26,'1',20,'2026-01-10 19:31:50','2026-01-10 19:31:52');
/*!40000 ALTER TABLE `room_temperature_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sms_mobile_number_records`
--

DROP TABLE IF EXISTS `sms_mobile_number_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sms_mobile_number_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mobile_number` varchar(20) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sms_mobile_number_records`
--

LOCK TABLES `sms_mobile_number_records` WRITE;
/*!40000 ALTER TABLE `sms_mobile_number_records` DISABLE KEYS */;
INSERT INTO `sms_mobile_number_records` VALUES (1,'09299501827',0,'2026-01-10 17:50:47','2026-01-10 17:50:58'),(2,'09299501827',0,'2026-01-10 17:50:58','2026-01-10 17:56:25'),(3,'09299501827',0,'2026-01-10 17:56:25','2026-01-10 17:57:41'),(4,'09299501827',0,'2026-01-10 17:58:27','2026-01-10 17:59:29'),(5,'09299501827',0,'2026-01-10 17:59:29','2026-01-10 17:59:47'),(6,'09299501827',1,'2026-01-10 17:59:47',NULL),(7,'09999999999',0,'2026-01-10 17:59:47','2026-01-10 18:00:29');
/*!40000 ALTER TABLE `sms_mobile_number_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sms_notification_logs`
--

DROP TABLE IF EXISTS `sms_notification_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sms_notification_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `receiver_number` varchar(45) NOT NULL,
  `message` text NOT NULL,
  `status` varchar(50) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sms_notification_logs`
--

LOCK TABLES `sms_notification_logs` WRITE;
/*!40000 ALTER TABLE `sms_notification_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `sms_notification_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_config`
--

DROP TABLE IF EXISTS `system_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_config` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(200) NOT NULL,
  `value` varchar(200) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_config`
--

LOCK TABLES `system_config` WRITE;
/*!40000 ALTER TABLE `system_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temperature_settings`
--

DROP TABLE IF EXISTS `temperature_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temperature_settings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `temperature` int DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temperature_settings`
--

LOCK TABLES `temperature_settings` WRITE;
/*!40000 ALTER TABLE `temperature_settings` DISABLE KEYS */;
INSERT INTO `temperature_settings` VALUES (1,30,'2026-01-10 14:56:46',0),(2,30,'2026-01-10 15:12:05',0),(3,30,'2026-01-10 15:13:07',0),(4,25,'2026-01-10 15:28:17',0),(5,26,'2026-01-10 15:32:22',0),(6,27,'2026-01-10 16:58:13',0),(7,27,'2026-01-10 16:58:16',0),(8,27,'2026-01-10 16:58:31',0),(9,27,'2026-01-10 16:58:47',1);
/*!40000 ALTER TABLE `temperature_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pup_iot_backend'
--

--
-- Dumping routines for database 'pup_iot_backend'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-11 17:44:04
