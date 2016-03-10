function PromocaoDao (connection) {
	this._connection = connection; 
}

PromocaoDao.prototype.salva = function(promocao,callback){
	this._connection.query("INSERT INTO promocoes SET ?", promocao, callback);
};

module.exports = function(){return PromocaoDao}