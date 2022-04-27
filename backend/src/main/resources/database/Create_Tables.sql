CREATE SCHEMA IF NOT EXISTS `asd_ui` DEFAULT CHARACTER SET utf8;
USE `asd_ui`;

CREATE TABLE `users`
(
    `user_id`      int         NOT NULL AUTO_INCREMENT,
    `first_name`   varchar(45) NOT NULL,
    `last_name`    varchar(45) NOT NULL,
    `email`        varchar(45) NOT NULL,
    `password`     varchar(45) NOT NULL,
    `phone_number` varchar(45) NOT NULL,
    `birth_date`   date DEFAULT NULL,
    `gender`       varchar(45) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `pictures`
(
    `picture_id` int         NOT NULL,
    `url`        blob,
    `width`      varchar(45) NOT NULL,
    `height`     varchar(45) NOT NULL,
    PRIMARY KEY (`picture_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `headers`
(
    `header_id` int         NOT NULL,
    `width`     varchar(45) NOT NULL,
    `height`    varchar(45) NOT NULL,
    PRIMARY KEY (`header_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `cards`
(
    `card_id` int         NOT NULL,
    `name`    varchar(45) NOT NULL,
    `width`   varchar(45) NOT NULL,
    `height`  varchar(45) NOT NULL,
    `color`   varchar(45) NOT NULL,
    PRIMARY KEY (`card_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `buttons`
(
    `button_id`   int         NOT NULL,
    `action_type` varchar(45) NOT NULL,
    `width`       varchar(45) NOT NULL,
    `height`      varchar(45) NOT NULL,
    PRIMARY KEY (`button_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `main`
(
    `main_id`    int NOT NULL,
    `user_id`    int NOT NULL,
    `card_id`    int NOT NULL,
    `picture_id` int NOT NULL,
    `button_id`  int NOT NULL,
    `header_id`  int NOT NULL,
    KEY `button_id_idx` (`button_id`),
    KEY `header_id_idx` (`header_id`),
    KEY `card_id` (`card_id`),
    KEY `picture_id` (`picture_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `button_id` FOREIGN KEY (`button_id`) REFERENCES `buttons` (`button_id`),
    CONSTRAINT `card_id` FOREIGN KEY (`card_id`) REFERENCES `cards` (`card_id`),
    CONSTRAINT `header_id` FOREIGN KEY (`header_id`) REFERENCES `headers` (`header_id`),
    CONSTRAINT `picture_id` FOREIGN KEY (`picture_id`) REFERENCES `pictures` (`picture_id`),
    CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES user (`user_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `question`
(
    `q_id`    int         NOT NULL,
    `user_id` varchar(45) NOT NULL,
    `q1`      bool        NOT NULL,
    `q2`      bool NOT NULL,
    `q3`      bool NOT NULL,
    `q4`      bool NOT NULL,
    `q5`      bool NOT NULL,
    `q6`      bool NOT NULL,
    `q7`      bool NOT NULL,
    `q8`      bool NOT NULL,
    `q9`      bool NOT NULL,
    `q10`      bool NOT NULL,
    `q11`      bool NOT NULL,
    `q12`      bool NOT NULL,
    `visual_score` int NOT NULL,
    `auditory_score` int NOT NULL,
    PRIMARY KEY (`q_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

CREATE TABLE `settings`
(
    `main_id`    int NOT NULL,
    `user_id`    int NOT NULL,
    `isActive` int NOT NULL,
    KEY `user_id` (`user_id`),
    CONSTRAINT `setting_user_id__user_user_id` FOREIGN KEY (`user_id`) REFERENCES user (`user_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;