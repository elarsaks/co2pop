create table countries (
	country_code varchar(10) not null primary key,
	country_name varchar(124),
	region varchar(124),
	income_group varchar(124),
	created_at timestamp default null,
	updated_at timestamp default null
);
