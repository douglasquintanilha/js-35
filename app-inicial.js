var http = require("http");
var ip = 3000;
var server = http.createServer(function (req,res) {
	console.log("me chamou");
	res.writeHead(200,{ContentType:'text/html'});
	res.end("<html><body>Olá</body></html>");
}).listen(ip,function () {
	 console.log("Servidor iniciado"); 
});
