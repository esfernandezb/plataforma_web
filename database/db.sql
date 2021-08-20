CREATE DATABASE tienda;

\l

\c tienda;

CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    lastname VARCHAR(40),
);

INSERT INTO cliente (name, lastname)
    VALUES ('elena', 'fernandez'),
    ('mike', 'bohorquez');

select * from cliente;
