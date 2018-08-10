let app = require('./config/server'),
    rotaHome = require('./app/routes/home')(app),
    rotaCadastro = require('./app/routes/cadastrar')(app),
    rotaProduto = require('./app/routes/produtos')(app);

// Com o listen, subimos o servidor através de 2 parametros
app.listen(3000, function () {
    console.log(`Servidor esta ativo com Express! Porta:${3000}`);
});