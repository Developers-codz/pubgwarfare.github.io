const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'arjun',
  password: 'Arjun@13102000',
  database: 'pubg'
});
connection.connect((error) =>{
  if(error) throw error;
  console.log(" database connected");
});
module.exports = connection;