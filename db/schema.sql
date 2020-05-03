create database burgers_db;
use burgers_db;

create table burgers_tbl
(
    id int not null auto_increment,
    burger_name varchar(30) NOT NULL,
    devoured boolean,
    primary key (id)    
);