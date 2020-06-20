CREATE ROLE admin WITH LOGIN PASSWORD 'admin_password';
CREATE DATABASE co2pop WITH OWNER admin;
\c co2pop admin
