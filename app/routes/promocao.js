module.exports = function(app){
	var controller = app.controllers.promocao;

	app.get("/promocoes/form", controller.obterForm);
	app.post("/promocoes", controller.salva);
}