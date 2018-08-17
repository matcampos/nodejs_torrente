module.exports = (app) => {
  
    app.get('/cliente', (req, res) => {
        app.config.dbconnection.query("select * from cliente", (err, result) => {
            res.render('cliente/clientes', { clientes: result });
        });

    })
}