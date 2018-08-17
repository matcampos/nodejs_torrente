module.exports = () => {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'labfiap$2018',
        database: 'sistema_produtos'
    });

    return connection;
}