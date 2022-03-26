require('dotenv').config({path:"../.env"});
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const config = require('./config');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    connectionLimit: 10
});
function response(success = "", message = "", data = "") {
    var response = {
        sucess: success,
        message: message,
        data: data
    }
    return response;
}

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
                return callback(false);
            }
            else {
                return callback(true);
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

    filter(tableName, jsonData, callback) {
        var query = `SELECT * FROM ${tableName} WHERE ${Object.keys(jsonData)}='${Object.values(jsonData)}';`;
        pool.query(query, (err, data) => {
            if (err) {

                return callback(err);
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
                return callback(err);
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
                return callback(err)
            }
            else if (data.length === 0) {
                return callback(false);
            }
            else {
                var currPass = userInfo['password'];
                var storePass = data[0]['PASSWORD'];
                var isValid = bcrypt.compareSync(storePass, currPass);
                if (isValid) {
                    return callback(true);
                }
                else {
                    return callback(false);
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
                return callback(err);
            }
            else {
                return callback(true);
            }
        })
    }
}



module.exports = new Database();





