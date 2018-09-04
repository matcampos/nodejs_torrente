//var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {
    app.get('/clientes', function (req, res) {
        var connection = app.config.dbConnection();
        var clientesModel = new app.app.models.clientesDAO(connection);

        clientesModel.getClientes(function (error, result) {
            res.render('clientes/clientes', { clientes: result });
        });

    });

    app.post('/clientes', function (req, res) {
        var connection = app.config.dbConnection();
        var clientesModel = new app.app.models.clientesDAO(connection);

        clientesModel.salvarClientes(req.body, function (error, result) {
            res.redirect('/clientes');
        });
    })

    app.get('/clientes/cadastrar', function (req, res) {
        res.render('clientes/cadastrar-clientes')
    });
}