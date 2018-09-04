var app = require('./config/server');
// Com o listen, subimos o servidor através de 2 parametros
app.listen(3000, function(){
    console.log('Servidor esta ativo!');
});