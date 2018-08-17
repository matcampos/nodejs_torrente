module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        app.config.dbconnection.query("select * from produto", (err, result) => {
            res.render('produtos/produtos', { produtos: result });
        });

    })
}