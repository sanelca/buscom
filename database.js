//SHOW COLUMNS FROM table
//SHOW TABLES
//ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY
//CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "buscom"
  });

  con.connect(function(err) {
    if (err) throw err;
    var sql = "SHOW FULL TABLES";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });

  });  
