const mysql = require('mysql');
const { database } = require('./keys')
const { promisify } =require('util')
const { connect } = require('./src/routes/auth')

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code=='PROTOCOL_CONNECTION_LOST'){
            console.log('connection lost')
        } 
        if(err.code == 'ER_CON_COUNT_ERROR'){
            console.log('too many connections')
        }
    } else if(connection) {
        connection.release();
        console.log('DB is connected');
        return;
    }

});
//para poder usar async await 
pool.query = promisify(pool.query);

module.exports = pool;