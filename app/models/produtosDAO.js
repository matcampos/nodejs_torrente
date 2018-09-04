
function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.getProdutos = function (callback) {
    this._connection.query('select * from produto', callback);
}

ProdutosDAO.prototype.salvarProdutos = function (produto, callback) {
    this._connection.query('INSERT INTO produto SET ? ', produto, callback);
}

module.exports = function () {
    return ProdutosDAO;
}