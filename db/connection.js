var mysql = require('mysql');

module.exports = {
    getConnection: getConnection
}

function getConnection() {
	// Instanciando conexao
	return mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'cenoura',
	  database : 'bd_findup'
	});

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
}