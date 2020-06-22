CREATE TABLE data (
	country_code VARCHAR(10) REFERENCES countries(country_code),
	year SMALLINT,
	population BIGINT,
	emission DECIMAL,
	PRIMARY KEY(country_code, year)
);