var mysql = require('mysql');

module.exports = {
    executeQuery: executeQuery
}

// Instanciando conexao
var pool = mysql.createPool({
	connectionLimit: 100,
	host     : 'localhost',
	user     : 'root',
	password : 'cenoura',
	database : 'bd_findup',
	debug	: false
});

function executeQuery(req,res,query) {
	pool.getConnection(function(err,connection){
        if (err) {
			res.status(100).json({
				status: 'error', 
				data: err,
				message: "Error in connection database"
			});
			return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query(query,function(err,rows){
            connection.release();    
            if(!err) {
                res.status(200).json({
                	status: 'success',
                	data: rows,
                	message: 'Query performed successfuly'
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

        connection.on('error', function(err) {      
            res.status(100).json({
            	status: 'error', 
            	data: err,
            	message: "Error in connection database"
            });
            return;     
        });
	});
}