module.exports = function (app) {
	var controller = app.controllers.time;
	
	app.get("/times", controller.times);

}
