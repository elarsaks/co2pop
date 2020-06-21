create table countries (
	country_code varchar(10) not null primary key,
	country_name varchar(21),
	region varchar(21),
	income_group varchar(21),
	created_at timestamp default null,
	updated_at timestamp default null
);
