USE TechBlast;

CREATE TABLE Judges (
    judge_id INT PRIMARY KEY AUTO_INCREMENT,
    event_id INT NOT NULL,
    judge_name VARCHAR(100) NOT NULL,
    qualification VARCHAR(150),
    FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE
);
