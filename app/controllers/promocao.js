module.exports = function (app) {
	var controller = {};

	controller.obterForm = function (req,res) {
		res.render("promocao/form");
	}

	controller.salva = function (req,res) {
		var promocao = req.body;
        app.get("io").emit("novaPromocao",promocao);

		var connection = app.infra.connectionFactory();
		var promocaoDao = new app.infra.PromocaoDao(connection);

		promocaoDao.salva(promocao,function (erro) {
			if(erro) return console.log(erro);
			res.render("produtos/salva");
		});
	}

	return controller;
};
