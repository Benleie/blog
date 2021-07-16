## 基础的查询单表
show databases;
show tables;
create database runoob;
CREATE SCHEMA sakila;
source D:\xx\xxx.sql;
drop table table_name;
insert into table_name values();
	如果插入的数据与field无法对应，Column count doesn't match value count

SHOW DATABASES LIKE '%test%';   like从句
	SELECT * from runoob_tbl WHERE BINARY runoob_author='runoob.com';    where子句
	UPDATE table_name SET field1=new-value1, field2=new-value2
	DELETE FROM table_name [WHERE Clause]


