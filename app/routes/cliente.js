module.exports = (app) => {

    app.get('/cliente', (req, res) => {
        console.log(app.config);
        let connection = app.config.dbconnection();
        connection.query("select * from cliente", (err, result) => {
            res.render('cliente/clientes', { clientes: result });
        });
    });
    
}