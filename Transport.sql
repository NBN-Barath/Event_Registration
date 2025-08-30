USE TechBlast;

CREATE TABLE Transport (
    bus_id INT PRIMARY KEY AUTO_INCREMENT,
    bus_number VARCHAR(20) NOT NULL,
    driver_name VARCHAR(100) NOT NULL,
    driver_phone VARCHAR(15) NOT NULL,
    bus_route VARCHAR(255) NOT NULL
);
