USE TechBlast;

CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_name VARCHAR(100) NOT NULL,
    logo VARCHAR(255), -- store image path or URL
    event_date DATE NOT NULL,
    event_type ENUM('Solo') NOT NULL,
    event_time TIME NOT NULL,
    venue VARCHAR(150) NOT NULL,
    description TEXT,
    rules_and_regulations TEXT
);
