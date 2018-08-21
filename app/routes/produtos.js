module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        let connection = app.config.dbconnection();
        connection.query("select * from produto", (err, result) => {
            res.render('produtos/produtos', { produtos: result });
        });
    })

}