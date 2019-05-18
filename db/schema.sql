-- Drops the statue if it exists currently --
DROP DATABASE IF EXISTS statue_db;
-- Creates the "statue" database --
CREATE DATABASE statue_db;

USE statue_db;

CREATE TABLE statues (
id int NOT NULL AUTO_INCREMENT,
ASSET_NAME varchar(255) NOT NULL,
ASSET_ADDR varchar(255) NOT NULL,
SITE_NAME varchar(255) NOT NULL,
LATITUDE DECIMAL (10, 8) NOT NULL,
LONGITUDE DECIMAL (11, 8) NOT NULL,
PRIMARY KEY (id)
);

select * from statues