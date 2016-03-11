function ProdutoDao (connection) {
	this._connection = connection; 
}

ProdutoDao.prototype.lista = function(callback){
	this._connection.query("SELECT * FROM livros", callback);
}

ProdutoDao.prototype.salva = function(produto,callback){
	this._connection.query("INSERT INTO livros SET ?", produto, callback);
};

ProdutoDao.prototype.obterPorId = function(id,callback){
	this._connection.query("SELECT * FROM livros WHERE  id=?", [id], function(erro, retorno){
		callback(erro,retorno[0]);
	});
};

ProdutoDao.prototype.atualiza = function(produto,callback){
    this._connection.query("UPDATE livros SET ? WHERE id=?",[produto,produto.id],function(erro){
        callback(erro);
    });    
};


module.exports = function(){return ProdutoDao}