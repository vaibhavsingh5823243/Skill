const sql = require('mysql');
const encoder = require('bcrypt');

class Database{
    constructor(){
        this.config = {
            user: 'root',
            password: 'password',
            host: 'localhost',
            database: 'skillark',
            connectionLimit: 10,
          };

        this.pool = sql.createPool(this.config);
        this.table = "Registration";
        this.salt = encoder.genSaltSync(10);

    };

    insert (data){
        var values = [];
        var columns = "";
        for (var key in data) {
          if (key !== 'submit') {
            columns += key + ",";
          }

        var value = data[key];
        if (key === 'password') {
            value = encoder.hashSync(value, this.salt);
          }
        values.push(value);
        }

        columns += 'VERIFIED';
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        values = values.slice(0, values.length - 1);
        values.push('FALSE');
        this.pool.query(query, [[values]], (err, field) => console.log(err))
    };

    validate(data, res){
        var valData = [];

        for (var key in data) {
          valData.push(data[key]);
        }

        valData = valData.slice(0, valData.length);
        var query = `SELECT EMAIL,PASSWORD FROM ${this.table} WHERE EMAIL='${valData[0]}';`; 
        this.pool.query(query,(err,info,field)=>{
          if (err) {
              res.send(err);
            }
          else if (info.length === 0) {
              res.send('Email does not exist');
            } 
          else {
              var userEmail = info[0].EMAIL;
              var passwd = info[0].PASSWORD;
              if (encoder.compareSync(valData[1], passwd)) {
                res.send('Authenticated User');
              } 
              else {
                res.send('Incorrect password.Enter correct password');
              }
          }
        });   
    }
}

const database = new Database();

module.exports.database = database;
