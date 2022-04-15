DATABASE
### To create database 
```
create database skillark;
```
### To use create database
```
use skillark;
```

### To create UserPool table
```
create table UserPool(email varchar(1000) not null primary key,firstName varchar(100),lastName varchar(100),uniqueCode varchar(100),phone varchar(100),password varchar(200),image varchar(100),linkedIn varchar(100),address varchar(500),createdOn date,updatedOn date,createdBy date);
```
### To create  transactions table
```
create table transactions(email varchar(100),name varchar(100),coursecode varchar(100),transaction_hist JSON,status bool);
```
### To Create contactus Table
```
create table contactus(userid int not null primary key auto_increment,email varchar(50),firstname varchar(100),lastname varchar(100),reason varchar(200),phone varchar(20),message varchar(300));
```
### To create CourseMaster Table
```
create table CourseMaster(id int primary key auto_increment,uniqueCode varchar(100),title varchar(100),description varchar(100),thumbnail varchar(200),price int,list json,accordion json,vedio varchar(400))
```

### To create instructorMaster 
```
create table InstructorMaster(id int primary key auto_increment,uniqueCode varchar(100),designation varchar(100),description varchar(500),image varchar(100),about varchar(100),email varchar(100),address varchar(500),course json,phone varchar(50),name varchar(100));
```

### To create user_assesment_mapping
```
create table UserAssesmentMapping(userAssesmentId int auto_increment primary key,userAssesmentCode varchar(100),userCode varchar(100),assesmentCode varchar(100),assesmentGainedMarks int,assesmentTotalMarks int,assesmentPerformancePercentage int,createdOn varchar(100),updatedOn varchar(100),timeTaken int)
```

### To create quizjson
```
create table QuizJson(testCode varchar(100),testTitle varchar(100),startDate date,endDate date,maxMarks int,duration int,testType varchar(100),questions json)
```
###
```
UPDATE tableName SET column name=CONCAT('CRSE-', UNIX_TIMESTAMP(created_on)) WHERE xyz
```