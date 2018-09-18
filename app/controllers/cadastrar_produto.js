module.exports.salvar_produto = (app, req, res) => {
    var produto = req.body;
    //res.send(produto);
    // res.send('Chegou na página');
    req.assert('nome', 'Nome é obigatório').notEmpty();
    req.assert('descricao', 'Descrição é obigatória').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_prod', { validacao: erros, produto: produto })
    }
    // Conexão
    var connection = app.config.dbConnection();
    // Model
    var produtosModel = new app.app.models.produtosDAO(connection);
    // Função

    produtosModel.salvarProdutos(produto, function (error, result) {
        //   res.render('produtos/produtos', {produtos : result});
        res.redirect('/produtos');
    });
}

module.exports.lista_produtos = (app, req, res) => {
    var connection = app.config.dbConnection();
    var produtosModel = new app.app.models.produtosDAO(connection);
    produtosModel.getProdutos(function (error, result) {
        res.render('produtos/produtos', { produtos: result });
    });
}

module.exports.form_produtos = (req, res) => {
    res.render('admin/form_add_prod', { validacao: undefined, produto: { nome: "", descricao: "" } });
}