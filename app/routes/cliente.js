//var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {
    app.get('/clientes', function (req, res) {
        app.app.controllers.cadastrar_cliente.lista_clientes(app, req, res);
    });

    app.post('/clientes', function (req, res) {
        app.app.controllers.cadastrar_cliente.salvar_cliente(app, req, res);
    })

    app.get('/clientes/cadastrar', function (req, res) {
        app.app.controllers.cadastrar_cliente.form_clientes(req, res);
    });
}