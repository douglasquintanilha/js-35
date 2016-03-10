module.exports = function (app) {
	var controller = {};
	controller.times = function (req,res) {
		times = [
					{"douglas" : "fluminense"},
					{"flavio" : "america"}
				];	
		res.json(times); 
	}
	return controller;
}	