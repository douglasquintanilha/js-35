var app = require("./config/express")();
require("./app/routes/produto")(app);
app.listen(3000,function () {
	 console.log("Servidor rodando"); 
});
