CREATE DATABASE restaurante;

CREATE TABLE restaurante.restaurantes (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    direccion VARCHAR(255),
    telefono VARCHAR(200),
	idExterno VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
