module.exports = function () {		
	var bodyParser = require("body-parser");
	var load = require("consign");
	var express = require("express");
	var app = express();
	
	app.set("view engine","ejs");
	app.set("views","./app/views");
	
	app.use(express.static("./public"));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	
	load({cwd:"app"}).include("infra")
					 .then("routes")
					 .into(app);
	return app;
}