DATABASE
### To create database 
```
create database skillark;
```
### To use create database
```
use skillark;
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
create table CourseMaster(courseID int primary key auto_increment,courseCode varchar(30),courseTitle varchar(30),courseDescription varchar(400),courseThumbNail varchar(200),coursePrice int,courseType varchar(50),courseCategory varchar(50),courseDuration int,courseProjects,courseSchedule json,courseSyllabus json,courseTargetedSkills JSON,coursePrerequisites json,courseFeatures json,courseInstructor varchar(40),courseStatus varchar(50),courseRejectedComment varchar(100),courseUpdatedOn date)
```

### To create instructorMaster 
```
create table instructorMaster(instructorId int primary key auto_increment,instructorCode varchar(40),instructorName varchar(50),instructorDesignation varchar(100),instructorImage varchar(200),instructorAbout varchar(200),instructorEmail varchar(100),instructorMobile varchar(20),instructorAddress varchar(400));
```

###
```
UPDATE tableName SET column name=CONCAT('CRSE-', UNIX_TIMESTAMP(created_on)) WHERE xyz'
```