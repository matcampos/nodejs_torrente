var mysql = require('mysql');

var conecMySQL = function(){
    console.log('Conexão foi estabelecida');
    return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'labfiap$2018',
            database: 'sistema_produtos'
        }
    );
}

module.exports = function(){
   console.log('O Consign fez o Autoload do módulo de conexão');
   return conecMySQL;
}