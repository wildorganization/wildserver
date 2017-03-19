var crypto = require('crypto');
var mysql = require('mysql');
var db = require('../db/connection.js');

module.exports = {
    getAllUsers: getAllUsers,
    //getSingleUser: getSingleUser,
    //createUser: createUser,
    // updateUser: updateUser,
    //removeUser: removeUser
}
var connection;
function getAllUsers() {
     connection = db.getConnection();
    
    // tentando conectar com o banco
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... nn");    
            return connection;
        } else {
            return -1;
            console.log("Error connecting database ... nn");    
        }
    });

    connection.query('SELECT * FROM tb_usuarios', function(err, rows, fields) {
        if (!err) {
            console.log('Data: ', rows);
            return rows;
        } else {
            console.log('Error while performing Query.');
            return {error: "Query failed."};
        }
    });

    connection.end();
}