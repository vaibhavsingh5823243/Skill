const res = require('express/lib/response');
const mysql = require('mysql');
const config = {
    host:'localhost',//in future domain name
    user:'root',
    password:'password',
    database:'SKILLARKPVTLMT',
    connectionLimit:10
}
const pool = mysql.createPool(config);

class Transaction{
    constructor(){
        this.table = 'TRANSACTIONS';
    };

    insert(jsonData){
        var columns="";
        var values=[];
        for(var key in jsonData){
            columns += key + ",";
            values.push(jsonData[key]);
        }
        columns = columns.slice(0,columns.length-1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query,[[values]],(err,field)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Data inserted successfully.");
            }
        })
    };

    fetch(){
        var query = `SELECT * FROM ${this.table};`;
        pool.query(query,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(data);
            }
        })
    }
}

class CourseDatabase{
    constructor() {
        this.table="LiveTrainingMaster";
    };

    insert(jsonData,res){
        var columns="";
        var values=[];
        for(var key in jsonData){
            columns += key + ",";
            if(typeof(jsonData[key]) === 'object'){
                values.push(`${JSON.stringify(jsonData[key])}`);
            }
            else{
                values.push(jsonData[key]);
            }
            
        }
        columns = columns.slice(0,columns.length-1);
        var query = `INSERT INTO ${this.table} (${columns}) VALUES ?`;
        pool.query(query,[[values]],(err,field)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send("Data inserted successfully.");
            }
        })
    };

    fetch(res){
        var query = `SELECT * FROM ${this.table};`;
        pool.query(query,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                //data = JSON.parse(data);
                console.log(data);
                res.send(data);
            }
        })
    };

    fetchMeta(res){
        var query = `SELECT ${this.table+'.TRAINING_META_DATA'},${'INSTRUCTORDETAILS.NAME'} FROM ${this.table} INNER JOIN ${'INSTRUCTORDETAILS'} ON ${'INSTRUCTORDETAILS.INS_ID'}=${'TRAINERID'};`;
        pool.query(query,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                for(var i=0;i<data.length;i++){
                    data[i]['TRAINING_META_DATA'] = JSON.parse(data[i]['TRAINING_META_DATA']);
                }
                res.send(data);
            }
        })
    }

}

module.exports.course = new CourseDatabase();
module.exports.transaction = new Transaction();