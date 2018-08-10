module.exports = (app) => {

    app.get('/produtos', (req, res) => {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'labfiap$2018',
            database: 'sistema_produtos'
        });

        connection.query("select * from produto", (err, result) => {
            res.send(result);
        });
        // res.render('produtos/produtos')
    })
}