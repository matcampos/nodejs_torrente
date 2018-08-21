
var connection = function () {
    var mysql = require('mysql');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'labfiap$2018',
        database: 'sistema_produtos'
    });

}
module.exports = () => {
    console.log('Consign fez o autoload do módulo de conexão');
    return connection;
}