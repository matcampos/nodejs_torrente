module.exports = function (app) {
    app.get('/cadastrar', function (req, res) {
        app.app.controllers.cadastrar_produto.form_produtos(req, res)
    });
}