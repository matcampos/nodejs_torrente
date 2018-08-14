let app = require('./config/server'),
    serve = require('./app/serve')(app);
// Com o listen, subimos o servidor através de 2 parametros
app.listen(3000, function () {
    console.log(`Servidor esta ativo com Express! Porta:${3000}`);
});