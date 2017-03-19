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

var connection;

function getAllUsers(req, res, next) {
    connection = db.getConnection();
    
    if (connection === -1) {
        console.log("Conexion failed.");
        return {error: "Conexion failed."}
    };

    connection.query('SELECT * FROM tb_usuarios', function(err, rows, fields) {
        connection.end();
        if (!err) {
            console.log('Data: ', rows);
            res.status(200).json({
                status: 'success',
                data: rows,
                message: 'Retrieved ALL users'
            });
        } else {
            console.log('Error while performing Query.');
            res.status(500).json({
                status: 'error',
                data: err,
                message: 'Error while performing Query.'
            });
        }
    });

}