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
        
        if(validaFormulario(produto,req,res)){		
            var connection = app.infra.connectionFactory();
            var produtoDao = new app.infra.ProdutoDao(connection);
            produtoDao.salva(produto,function () {	
                res.redirect("/produtos");
            });
		}  
	};
	
	controller.obterFormulario = function (req,res) {
		res.render("produtos/form",{produto: {}});
	};
    
    controller.obterPorId = function (req,res) {
        var id = req.params.id;
        var connection = app.infra.connectionFactory();
        var produtoDao = new app.infra.ProdutoDao(connection);
        produtoDao.obterPorId(id,function (err,produto) {
            res.render("produtos/form",{produto:produto});
        });
    }
    
    controller.atualiza = function (req,res) {
        console.log("chamei put");
        var produto = req.body;
        if(validaFormulario(produto,req,res)){
            var connection = app.infra.connectionFactory();
            var produtoDao = new app.infra.ProdutoDao(connection);
            produtoDao.atualiza(produto,function (erro) {
                res.redirect("produtos");
            });
        }
    }
    
    function validaFormulario(produto,req,res) {
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
			return false;	
		}
        return true;
    }

	return controller;
}