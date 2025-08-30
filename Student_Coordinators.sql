USE TechBlast;

CREATE TABLE Student_Coordinators (
    coordinator_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    class VARCHAR(50),
    phone_number VARCHAR(15),
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE
);
