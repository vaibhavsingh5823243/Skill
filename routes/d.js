const mysql=require('msnodesqlv8');
const cf = require('./config');
const { redirect } = require('express/lib/response');
const { UserRefreshClient } = require('google-auth-library');
const dbConfig = cf.db;
const config = {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: dbConfig.connectionLimit
}
const pool = new mysql.Pool(config);
// const pool =new  mysql.Pool(config);

pool.query("SELECT * FROM TRANSACTIONS;",(err,data)=>{
    console.log(err);
    console.log(data);
})
