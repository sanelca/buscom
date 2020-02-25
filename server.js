const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;

const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "buscom"
  });

  connection.connect(function(err){
      (err)? console.log(err): console.log(connection)
  })

require('./routes/html-routes')(app);
