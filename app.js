const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'paola123xD',
  database: 'validationapp'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});