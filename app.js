const mysql = require('mysql');
const { database } = require('./keys')
const connection = mysql.createConnection(database);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});