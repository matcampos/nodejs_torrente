module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        let connection = app.config.dbconnection();
        let produtosModel = app.app.models.produtosModel;
        produtosModel.getProdutos(connection, (err, result) => {
            res.render('produtos/produtos', {
                produtos: result
            });
        });

        app.post('/produtos/salvar', (req, res) => {
            res.send('Chegou na página');
        })

    })

}