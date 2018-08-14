module.exports = (app) => {

    app.get('/cliente', (req, res) => {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'labfiap$2018',
            database: 'sistema_produtos'
        });

        connection.query("select * from cliente", (err, result) => {
            res.render('cliente/clientes', { clientes: result });
        });

    })
}