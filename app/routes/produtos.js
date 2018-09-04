//var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    app.get('/produtos', function (req, res) {

        var connection = app.config.dbConnection();
        var produtosModel = new app.app.models.produtosDAO(connection);

        produtosModel.getProdutos(function (error, result) {
            res.render('produtos/produtos', { produtos: result });
        });
    });


    app.post('/produtos/salvar', function (req, res) {
        var produto = req.body;
        //res.send(produto);
        // res.send('Chegou na página');

        // Conexão
        var connection = app.config.dbConnection();
        // Model
        var produtosModel = new app.app.models.produtosDAO(connection);
        // Função
        produtosModel.salvarProdutos(produto, function (error, result) {
            //   res.render('produtos/produtos', {produtos : result});
            res.redirect('/produtos');
        });

    });

}
