create database seinfeld_db;
use seinfeld_db;
 create table actors (
 character_name varchar(100) not null,
 coolness_points integer(10) not null,
 attidude varchar(100),
 id integer(10) not null auto_increment,
 primary key(ID)
 );