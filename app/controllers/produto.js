module.exports = function (app) {
	var controller = {};
	
	controller.lista = function (req,res) {
		var connection = app.infra.connectionFactory();
		var produtoDao = new app.infra.ProdutoDao(connection);
		produtoDao.lista(function (erro,produtos){
			res.format({
				html: function () {
					res.render("produtos/lista",{lista: produtos});		 
				},
				json: function () {
					res.json(produtos);	
				}
			});
		});
		connection.end();
		  
	};

	controller.salva = function (req,res) {
		var produto = req.body;
		req.assert("titulo","Deve ser preenchido").notEmpty();
		req.assert("preco","Deve ser um número").isFloat();
		var erros = req.validationErrors();
		if(erros){
			res.format({
				html: function () {
					res.render("produtos/form", {validationErros: erros, produto: produto});
				},
				json: function () {
					res.json(erros);
				}
			});
			return;	
		}

		var connection = app.infra.connectionFactory();
		var produtoDao = new app.infra.ProdutoDao(connection);
		produtoDao.salva(produto,function () {	
			res.redirect("/produtos");
		});
		  
	};
	
	controller.obterFormulario = function (req,res) {
		res.render("produtos/form",{produto: {}});
	};

	return controller;
}