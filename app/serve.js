module.exports = (app) => {
    require('./routes/home')(app),
        require('./routes/cadastrar')(app),
        require('./routes/produtos')(app);
    require('./routes/cliente')(app);
    return app;
}