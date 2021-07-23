+ Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server;
	+ 无法使用mysql8默认的caching_sha2_password认证插件
	+ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
	+ flush privileges;
	+ CREATE USER 'ben'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
	+ grant all on *.* to 'ben'@'%';
	+ rename user 'ben'@'%' to 'liben'@'%';
+ there can be only one auto column and it must be defined as a key
	+ set `primary key`
+ ER_TRUNCATED_WRONG_VALUE: Incorrect datetime value
	+ TIMESTAMP 一种时间类型
+ 

## 基础的查询单表
show databases;
show tables;
create database runoob;
CREATE SCHEMA sakila;
source D:\xx\xxx.sql;
	+ source D:\topsec\blog\blog\node\mysql.sql;
desc table; 查看表的结构
drop table table_name;
insert into table_name values();

	如果插入的数据与field无法对应，Column count doesn't match value count

SHOW DATABASES LIKE '%test%';   like从句
	SELECT * from runoob_tbl WHERE BINARY runoob_author='runoob.com';    where子句
	UPDATE table_name SET field1=new-value1, field2=new-value2
	DELETE FROM table_name [WHERE Clause]
limit 偏移量,条数  可以用来分页

+ `select * from json \G` 在命令行中竖排输出表
+ mysql -u root -p

```sql
create table history1 (
	temp_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	primary key (temp_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO history1 VALUES (1,'2006-02-15 04:34:33');

INSERT INTO Persons (FirstName,LastName)
VALUES ('Bill','Gates');


CREATE TABLE json (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  info JSON
);

```

{"title":"标题","mode":"dialog","formType":"form","percent":4,"width":"800px","bindings":[],"buttons":[{"title":"确认","closeAfterApiCalled":true,"visibility":{}}],"environmentArgs":[],"CLASS_NAME":"FormElement","GROUPS":[],"JSON_FILE":"demo"}






