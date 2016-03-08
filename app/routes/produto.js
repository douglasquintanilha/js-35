var mysql = require("mysql");
module.exports = function (app) {
	app.get("/produtos",function (req,res) {
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo'
		});
		connection.query("SELECT * FROM livros", function (erro,produtos) {
			res.render("produtos/lista",{lista: produtos});
		});
		connection.end();
		
	});
}
