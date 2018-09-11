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
        var cliente = req.body
        req.assert('nome', 'Nome é obigatório').notEmpty();
        req.assert('sobrenome', 'Sobrenome é obigatório').notEmpty();
        req.assert('cep', 'Cep é obigatório').notEmpty();

        req.assert('endereco', 'Endereço deve conter no minimo 10 caracteres e no máximo 200').isLength({min: 10, max: 200});
        req.assert('cpf', 'Cpf deve conter 11 caracteres').isLength({min: 11, max: 11});

        var erros = req.validationErrors();

        if (erros) {
            res.render('admin/form_add_prod', { validacao: erros, cliente: cliente })
        }
        var clientesModel = new app.app.models.clientesDAO(connection);

        clientesModel.salvarClientes(req.body, function (error, result) {
            res.redirect('/clientes');
        });
    })

    app.get('/clientes/cadastrar', function (req, res) {
        res.render('clientes/cadastrar-clientes', { cliente: {} })
    });
}