use burgers_db;

create table burgers_tbl(
    id int primary key ayto_increment,
    burger_name varchar(30) NOT NULL
    devoured boolean,
);