var express    = require("express");
var mysql      = require('mysql');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cenoura',
  database : 'bd_findup'
});
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
    connection.query('SELECT * FROM tb_usuarios', function(err, rows, fields) {
    if (!err)
        console.log('Data: ', rows);
    else
        console.log('Error while performing Query.');
    });
    res.render('index',{title: "Wildcard Server"});
});

app.get("/shutdown", function(req,res){
    connection.end();
    console.log("Connection terminated.");
})

app.listen(3000);