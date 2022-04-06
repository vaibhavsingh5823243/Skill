require('dotenv').config();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const config = require('./config');
const statusCode =  { notExist:"NE", exist:"AE", notMatch:"NM", match:"M", inserted:"I", notInserted:"NI", error:"E", success:true, failed:true }
//process.env.statusCode;
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    connectionLimit: 10
});


class Database {
    constructor() {
        this.salt = bcrypt.genSaltSync(10);
    }

    insert(jsonData, tableName, callback) {
        if (jsonData.hasOwnProperty('password')) {
            jsonData['password'] = bcrypt.hashSync(jsonData['password'], this.salt)
        }
        if (jsonData.hasOwnProperty('courseCode')) {
            jsonData['courseCode'] = bcrypt.hashSync(jsonData['courseCode'], this.salt);
        }

        var columns = Object.keys(jsonData).join(",");
        // var values = Object.values(jsonData);
        var values = [];
        for (var key in jsonData) {
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        var query = `INSERT INTO ${tableName} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err) => {
            if (err) {
                console.log(err);
                return callback(statusCode['notInserted']);
            }
            else {
                console.log(statusCode['inserted']);
                return callback(statusCode['inserted']);
            }
        })
    }

    fetch(tableName, callback, columns = ['*']) {
        columns = columns.join(",");
        var query = `SELECT ${columns} FROM ${tableName};`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(err);
            }
            else {
                return callback(data);
            }
        })
    }

    filter(tableName, jsonData, callback,columns=['*']) {
        columns = columns.join(",");
        var query = `SELECT ${columns} FROM ${tableName} WHERE ${Object.keys(jsonData)}='${Object.values(jsonData)}';`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(statusCode['error']);
            }
            else {
                return callback(data);
            }
        })
    }

    getSomeData(tableName, columns, callback) {

    }

    isExist(email, tableName, callback) {
        var query = `SELECT * FROM ${tableName} where email='${email}';`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(statusCode['error']);
            }
            else if (data.length) {
                return callback(true);
            }
            else {
                return callback(false);
            }
        })

    }

    validate(userInfo, tableName, callback) {
        var query = `SELECT PASSWORD FROM ${tableName} WHERE email='${userInfo.email}';`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(statusCode['error'])
            }
            else if (data.length === 0) {
                return callback(statusCode['notExist']);
            }
            else {

                var currPass = userInfo['password'];
                var storePass = data[0]['PASSWORD'];
                var isValid = bcrypt.compareSync(currPass, storePass);
                if (isValid) {
                    return callback(true);
                }
                else {
                    return callback(statusCode['notMatch']);
                }
            }
        })
    }

    update(userInfo, tableName, callback) {
        if (userInfo.hasOwnProperty('password')) {
            userInfo['password'] = bcrypt.hashSync(userInfo['password'], this.salt);
        }
        var subQuery = "";
        for (let key in userInfo) {
            subQuery += `${key}='${userInfo[key]}',`;
        }
        subQuery = subQuery.slice(0, subQuery.length - 1);
        let query = `UPDATE ${tableName} SET ${subQuery} WHERE email='${userInfo['email']}';`;
        pool.query(query, (err, field) => {
            if (err) {
                return callback(statusCode['error']);
            }
            else {
                return callback(statusCode['success']);
            }
        })
    }
}



module.exports = new Database();

// var obj = new Database();
// obj.fetch('InstructorMaster',(cbData)=>{
//     console.log(cbData);
// })


