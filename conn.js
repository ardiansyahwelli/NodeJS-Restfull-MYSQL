var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "nodejs_restfull"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;