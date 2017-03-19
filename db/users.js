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
    db.executeQuery(req,res,'SELECT * FROM tb_usuarios');
}