const res = require('express/lib/response');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cf = require('./config');
const { redirect } = require('express/lib/response');
const { UserRefreshClient } = require('google-auth-library');
const dbConfig = cf;

const config = {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: dbConfig.connectionLimit
}
const pool = mysql.createPool(config);

class Transaction {
    constructor() {
        this.table = dbConfig.transaction;
    };

    insert(jsonData, callback) {
        var columns = "";
        var values = [];
        for (var key in jsonData) {
            columns += key + ",";
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        columns = columns.slice(0, columns.length - 1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err, field) => {
            if (err) {
                console.log(err);
                return callback(err);
            }
            else {
                console.log(true)
                return callback(true);
            }
        })
    }

    async fetch() {
        var query = `SELECT * FROM ${this.table};`;
        await pool.query(query, (err, data) => {
            if (err) {
                return err;
            }
            else {
                return data;
            }
        });
        console.log(data);
    }
}

class CourseDatabase {
    constructor() {
        this.table = dbConfig.course;
    };

    insert(jsonData, callback) {

        var columns = "";
        var values = [];
        for (var key in jsonData) {
            columns += key + ",";
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        columns = columns.slice(0, columns.length - 1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err, field) => {
            if (err) {
                return callback(err)
            }
            else {
                return callback(true);
            }
        })
    };

    fetch(callback) {
        var query = `SELECT * FROM ${this.table};`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(err);
            }
            else {
                return callback(data);
            }
        })
    };

    fetchMeta(callback) {
        var query = `SELECT ${this.table + '.TRAINING_META_DATA'},${'INSTRUCTORDETAILS.NAME'} FROM ${this.table} INNER JOIN ${'INSTRUCTORDETAILS'} ON ${'INSTRUCTORDETAILS.INS_ID'}=${'TRAINERID'};`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(err);
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    data[i]['TRAINING_META_DATA'] = JSON.parse(data[i]['TRAINING_META_DATA']);
                }
                return callback(data);
            }
        })
    }

}

class Users {
    constructor() {
        this.table = dbConfig.userDb;
        this.salt = bcrypt.genSaltSync(10);
    }

    insert(jsonData, callback) {
        var columns = "";
        var values = [];
        jsonData['password'] = bcrypt.hashSync(jsonData['password'], this.salt)
        for (var key in jsonData) {
            columns += key + ",";
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        columns = columns.slice(0, columns.length - 1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err, field) => {
            if (err) {
                return callback(false);
            }
            else {
                return callback(true);
            }
        })
    };

    isExist(email, callback) {
        var query = `SELECT * FROM ${this.table} where email='${email}';`;
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

    validate(userInfo, callback) {
        var query = `SELECT PASSWORD FROM ${this.table} WHERE email='${userInfo.email}';`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(err)
            }
            else if (data.length === 0) {
                return callback(false);
            }
            else {
                var Passwd = userInfo['password'];
                var currentPasswd = data[0]['PASSWORD'];
                var isValid = bcrypt.compareSync(Passwd, currentPasswd);
                if (isValid) {
                    return callback(true);
                }
                else {
                    return callback(false);
                }
            }
        })

    }

    update(userInfo, callback) {
        if (userInfo['password']) {
            userInfo['password'] = bcrypt.hashSync(userInfo['password'], this.salt);
        }
        var subQuery = "";
        for (let key in userInfo) {
            subQuery += `${key}='${userInfo[key]}',`;
        }
        subQuery = subQuery.slice(0, subQuery.length - 1);
        let query = `UPDATE ${this.table} SET ${subQuery} WHERE email='${userInfo['email']}';`;
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

class Instructor {
    constructor() {
        this.table = dbConfig.instructorDb;
    }

    insert(jsonData, callback) {
        var columns = "";
        var values = [];
        for (var key in jsonData) {
            columns += key + ",";
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        columns = columns.slice(0, columns.length - 1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err, field) => {
            if (err) {
                return callback(err);
            }
            else {
                return callback(true);
            }
        })
    };

    fetch(callback) {
        var query = `SELECT * FROM ${this.table};`;
        pool.query(query, (err, data) => {
            if (err) {
                return callback(err);
            }
            else {
                return callback(data);
            }
        })
    };


}

class ContactUs {
    constructor() {
        this.table = dbConfig.contactDb;
    }
    insert(jsonData, callback) {
        var columns = "";
        var values = [];
        for (var key in jsonData) {
            columns += key + ",";
            if (typeof (jsonData[key]) === 'object') {
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else {
                values.push(jsonData[key]);
            }

        }
        columns = columns.slice(0, columns.length - 1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query, [[values]], (err, field) => {
            if (err) {
                return callback(err);
            }
            else {
                return callback(true);
            }
        })
    }


}


// module.exports.course = new CourseDatabase();
// module.exports.transaction = new Transaction();
// module.exports.user = new Users();
// module.exports.instructor = new Instructor();
// module.exports.contact = new ContactUs();
var obj = new Transaction();
