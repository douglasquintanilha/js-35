module.exports = function () {		
	var bodyParser = require("body-parser");
	var load = require("consign");
	var express = require("express");
	var validator = require("express-validator");
    var methodOverride = require("method-override");
	var app = express();
	
	app.set("view engine","ejs");
	app.set("views","./app/views");
	
	app.use(express.static("./public"));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
    app.use(methodOverride(function (req,res) {
        if(req.body && req.body._method){
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));
	app.use(validator());
	
	load({cwd:"app"}).include("infra")
					 .then("controllers")
					 .then("routes")
					 .into(app);
				

	return app;
}