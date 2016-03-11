module.exports = function (app) {
	var controller = app.controllers.produto;
	
	app.get("/produtos", controller.lista);
	app.post("/produtos", controller.salva);
	app.put("/produtos", controller.atualiza);
    
	app.get("/produtos/form", controller.obterFormulario);
    app.get("/produtos/form/:id", controller.obterPorId);      
}
