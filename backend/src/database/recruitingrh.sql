DROP DATABASE IF EXISTS recruitingrh;
CREATE DATABASE IF NOT EXISTS recruitingrh;
use recruitingrh;

CREATE TABLE professions (
   `id` INT NOT NULL AUTO_INCREMENT,
   `profession` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE applicants (
   `id` INT NOT NULL,
   `dni` INT NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `mail` VARCHAR(255) NOT NULL,
   `phone` INT NOT NULL,
   `urlLinkedin` LONGTEXT NOT NULL,
   `birthDate` DATE NOT NULL,
   `gender` ENUM('Man','Woman','Other') NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE applicants_professions (
   `id` INT NOT NULL AUTO_INCREMENT,
   `applicant_id` INT NOT NULL,
   `profession_id` INT NOT NULL,
   PRIMARY KEY (`id`),
   FOREIGN KEY (`applicant_id`) REFERENCES applicants(`id`),
   FOREIGN KEY (`profession_id`) REFERENCES professions(`id`)
);