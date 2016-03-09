var mysql = require("mysql");
function createConnection(){
	return  mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'casadocodigo'
	}); 
}	

module.exports = function () {
	return createConnection; 
}