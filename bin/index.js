var express = require('express');
var router = express.Router();
var db_users = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wildcard Server' });
});

router.get('/users', db_users.getAllUsers);
//router.get('/users/:id', db_users.getSingleUser);
//router.post('/users', db_users.createUser);
//router.put('/users/:id', db_users.updateUser);
//router.delete('/users/:id', db_users.removeUser);

module.exports = router;