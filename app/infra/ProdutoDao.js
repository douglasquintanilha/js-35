function ProdutoDao (connection) {
	this._connection = connection; 
}

ProdutoDao.prototype.lista = function(callback){
	this._connection.query("SELECT * FROM livros", callback);
}

ProdutoDao.prototype.salva = function(produto,callback){
	this._connection.query("INSERT INTO livros SET ?", produto, callback);
};

module.exports = function(){return ProdutoDao}