module.exports = function (app) {

    app.get('/produtos', function (req, res) {
        app.app.controllers.cadastrar_produto.lista_produtos(app, req, res);
    });


    app.post('/produtos/salvar', function (req, res) {
        app.app.controllers.cadastrar_produto.salvar_produto(app, req, res);
    });

} 
