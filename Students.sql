USE TechBlast;

CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    mobile_no VARCHAR(15) NOT NULL,
    email_id VARCHAR(100) UNIQUE NOT NULL,
    college_name VARCHAR(150) NOT NULL,
    degree VARCHAR(50) NOT NULL,
    department VARCHAR(100) NOT NULL,
    year INT NOT NULL
);
