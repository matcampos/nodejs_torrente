function ClientesDAO(connection) {
    this._connection = connection;
}

ClientesDAO.prototype.getClientes = function (callback) {
    this._connection.query('select * from cliente', callback);
}

ClientesDAO.prototype.salvarClientes = function (cliente, callback) {
    this._connection.query('INSERT INTO cliente SET ? ', cliente, callback);
}

module.exports = function () {
    return ClientesDAO;
}