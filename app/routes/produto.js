module.exports = function (app) {
	var controller = app.controllers.produto;
	
	app.get("/produtos", controller.lista);
	app.post("/produtos", controller.salva);
	
	app.get("/produtos/form", controller.obterFormulario);
}
