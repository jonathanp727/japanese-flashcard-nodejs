const mysql = require('mysql');

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpass',
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE flashcards', function (err, result) {
    if (err) throw err;
    console.log('Database created');
  });
});
