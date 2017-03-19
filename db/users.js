var crypto = require('crypto');
var mysql = require('mysql');
var db = require('../db/connection');

module.exports = {
    getAllUsers: getAllUsers,
    //getSingleUser: getSingleUser,
    //createUser: createUser,
    // updateUser: updateUser,
    //removeUser: removeUser
}

function getAllUsers() {
    var connection = db.getConnection();
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ... nn");    
            return connection;
        } else {
            return -1;
            console.log("Error connecting database ... nn");    
        }
    });
    
    if (connection === -1) {
        console.log("Conexion failed.");
        return {error: "Conexion failed."}
    };

    connection.query('SELECT * FROM tb_usuarios', function(err, rows, fields) {
        connection.end();
        if (!err) {
            console.log('Data: ', rows);
            return rows;
        } else {
            console.log('Error while performing Query.');
            return {error: "Query failed."};
        }
    });

}